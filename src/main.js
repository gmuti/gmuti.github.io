import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

(function(){
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;



/* ---------- copy buttons ---------- */
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-copy]'); if(!b) return;
  const txt=b.dataset.copy, old=b.textContent;
  const done=()=>{b.textContent=document.documentElement.lang==='en'?'Copied':'Copié';setTimeout(()=>b.textContent=old,1400)};
  if(navigator.clipboard) navigator.clipboard.writeText(txt).then(done).catch(()=>{const v=b.previousElementSibling;const r=document.createRange();r.selectNodeContents(v);const s=getSelection();s.removeAllRanges();s.addRange(r);});
});

/* ---------- nav border ---------- */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>8),{passive:true});


/* ---------- GSAP section transitions ---------- */
if(!reduce){
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-copy > *',{y:24,opacity:0,duration:.9,ease:'power3.out',stagger:.08});
  gsap.from('.id-card',{y:30,opacity:0,duration:1,delay:.5,ease:'power3.out'});
  // headings & cards rise in from a visible state
  gsap.utils.toArray('section.block h2, .sub, .job, .proj, .group, .term, .pipe, .school, .prior > div').forEach(el=>{
    gsap.fromTo(el,{y:36,opacity:.35},{y:0,opacity:1,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 92%',end:'top 60%',scrub:.6}});
  });
  // eyebrow rule draws across
  gsap.utils.toArray('.eyebrow').forEach(el=>{
    gsap.fromTo(el,{'--draw':0},{'--draw':1,ease:'none',scrollTrigger:{trigger:el,start:'top 90%',end:'top 55%',scrub:true}});
  });
  // timeline progress
  gsap.fromTo('#tlp',{'--p':0},{'--p':1,ease:'none',scrollTrigger:{trigger:'#tl',start:'top 70%',end:'bottom 60%',scrub:true}});
  // light parallax on bento columns
  gsap.utils.toArray('.shot img').forEach(img=>gsap.fromTo(img,{yPercent:-4},{yPercent:4,ease:'none',scrollTrigger:{trigger:img.closest('.shot'),start:'top bottom',end:'bottom top',scrub:true}}));
  gsap.from('.logos img',{y:14,stagger:.08,duration:.7,ease:'power2.out'});
  gsap.utils.toArray('.cat').forEach(c=>gsap.from(c.querySelectorAll('.tile'),{y:18,scale:.9,opacity:.25,duration:.5,stagger:.035,ease:'back.out(1.6)',scrollTrigger:{trigger:c,start:'top 85%'}}));
  ScrollTrigger.create({trigger:'#term',start:'top 85%',once:true,onEnter:()=>{document.querySelectorAll('#term .ln').forEach((l,i)=>l.style.animationDelay=(i*.45)+'s');document.getElementById('term').classList.add('on')}});
  gsap.from('.step',{y:16,opacity:.3,stagger:.1,duration:.6,ease:'power2.out',scrollTrigger:{trigger:'.pipe',start:'top 85%'}});
  // contact block scale-in
  gsap.fromTo('.contact',{scale:.94,borderRadius:'40px'},{scale:1,borderRadius:'22px',ease:'power2.out',scrollTrigger:{trigger:'.contact',start:'top 95%',end:'top 50%',scrub:true}});
}

if(reduce) document.getElementById('term').classList.add('on');

/* ---------- Three.js hero object (chargé à la demande) ---------- */
import('three').then(({ BoxGeometry, Clock, DirectionalLight, EdgesGeometry, Group, HemisphereLight, IcosahedronGeometry, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, MeshPhysicalMaterial, MeshStandardMaterial, PerspectiveCamera, Scene, TorusGeometry, WebGLRenderer })=>{
try{
  
  const canvas=document.getElementById('gl'), stage=document.getElementById('stage');
  const renderer=new WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  const scene=new Scene();
  const cam=new PerspectiveCamera(35,1,.1,100); cam.position.set(0,0,8.2);

  const group=new Group(); scene.add(group);
  const geo=new IcosahedronGeometry(1.55,1);
  const mat=new MeshPhysicalMaterial({color:0x2a57ff,metalness:.15,roughness:.18,clearcoat:1,clearcoatRoughness:.15,flatShading:true});
  const core=new Mesh(geo,mat); group.add(core);
  const edges=new LineSegments(new EdgesGeometry(new IcosahedronGeometry(1.565,1)),new LineBasicMaterial({color:0xffffff,transparent:true,opacity:.55}));
  group.add(edges);
  const cage=new LineSegments(new EdgesGeometry(new IcosahedronGeometry(2.25,0)),new LineBasicMaterial({color:0x1f4dff,transparent:true,opacity:.22}));
  group.add(cage);
  const ring=new Mesh(new TorusGeometry(2.7,.012,8,160),new MeshBasicMaterial({color:0x1f4dff,transparent:true,opacity:.35}));
  ring.rotation.x=Math.PI/2.4; scene.add(ring);
  // orbiting nodes = "services"
  const nodesG=new Group(); scene.add(nodesG);
  const nGeo=new BoxGeometry(.16,.16,.16), nMat=new MeshStandardMaterial({color:0x0a0f1f,roughness:.4});
  for(let i=0;i<7;i++){const m=new Mesh(nGeo,nMat);const a=i/7*Math.PI*2;m.position.set(Math.cos(a)*2.7,0,Math.sin(a)*2.7);nodesG.add(m)}
  nodesG.rotation.x=ring.rotation.x-Math.PI/2;

  scene.add(new HemisphereLight(0xffffff,0xc8d4ff,.9));
  const key=new DirectionalLight(0xffffff,1.1); key.position.set(3,4,5); scene.add(key);
  const rim=new DirectionalLight(0x9fb4ff,.9); rim.position.set(-4,-2,-3); scene.add(rim);

  function size(){const w=stage.clientWidth,h=stage.clientHeight;renderer.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();}
  size(); addEventListener('resize',size);
  document.getElementById('fallback').hidden=true;

  let mx=0,my=0,tx=0,ty=0,visible=true;
  addEventListener('pointermove',e=>{mx=(e.clientX/innerWidth-.5);my=(e.clientY/innerHeight-.5)},{passive:true});
  new IntersectionObserver(([en])=>visible=en.isIntersecting).observe(stage);
  const clock=new Clock();
  (function loop(){
    requestAnimationFrame(loop);
    if(!visible) return;
    const t=clock.getElapsedTime();
    tx+=(mx-tx)*.05; ty+=(my-ty)*.05;
    const s=scrollY*.0015;
    const spin=reduce?0:t*.18;
    group.rotation.y=spin+tx*1.2+s; group.rotation.x=ty*.8+s*.5;
    cage.rotation.y=-spin*.6; cage.rotation.z=spin*.3;
    nodesG.rotation.y=reduce?0:t*.25;
    group.position.y=reduce?0:Math.sin(t*1.1)*.06;
    renderer.render(scene,cam);
  })();
}catch(e){/* fallback blob stays visible */}
}).catch(()=>{/* fallback blob stays visible */});

/* ---------- mobile menu ---------- */
const burger=document.getElementById('burger');
burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
nav.querySelectorAll('ul a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');burger.setAttribute('aria-expanded','false')}));

})();
