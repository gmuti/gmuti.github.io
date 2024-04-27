import Block from "../components/Block"
import Projets from "../components/Projets"
import HeaderSocials from "../components/HeaderSocials"
import Experiences from "../components/Experiences"
import Moi from "../assets/img/photo-gedeon.png"
import Contact from "../components/Contact"
import Icong2 from "../assets/img/mainIconsdark.svg"
import Maquettes from "../components/Maquettes"

const Home = () => {
  return (
    <div className="hh">
      <section className="homee  containerr" id="homee">
          <div className="debut">
            <img
              src={Icong2}
              alt="Main Icons"
              width={700}
              height={700}
              className="homee_icons"
            />
            <div className="text-droite">
              <div className="photo-nom">
                <p className="phrase">Offrir <span>l'excellence</span> dans la réalisation des projets</p>
              </div>
              <div className="description-m">
                <p className="homee__subtitle">Passionné par le développement web, je crée des interfaces utilisateur intuitives et performantes et les meilleures pratiques de codage </p>
              </div>
              <div className="moi">
                <div className="moi-gauche">
                  <h2>Gedeon Mutikanga</h2>
                  <p>Alternant Développeur Web</p>
                </div>
                <img 
                  src={Moi}
                  width={200}
                  height={200} 
                  alt="" 
                  className="homee__img"
                />
              </div>
            </div>
          </div>
          <HeaderSocials />
      </section>
        <Block />
        <Experiences />
        <Projets />
        <Maquettes />
        <Contact />
    </div>
  )
}

export default Home
