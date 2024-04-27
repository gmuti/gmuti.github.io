import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaBootstrap, FaReact, FaLaptopCode, FaCode, FaHtml5} from 'react-icons/fa';

const Experiences = () => {
  return (
    <div className='experience'>
      <h1>Experiences</h1>
        <VerticalTimeline lineColor='#fff'>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            contentStyle={{
              background: '#ffffff13',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.151)', // Bordure du contenu
              borderRadius: '5px' // Facultatif : ajout d'arrondi aux coins
            }}
            iconStyle={{
              background: '#008348', // Couleur de fond de l'icône
              color: '#fff', // Couleur de l'icône
            }}
            icon={<FaLaptopCode />}
            date='Octobre 2023 - A présent'>
            <h3 className='vertical-timeline-element-title'>Technicien informatique | Banque CIC et Crédit Mutuel</h3>
            <h4 className='vertical-timeline-element-subtitle'>CENTRE DE CONSEIL ET DE SERVICE -CCS ·</h4>
            <span className='type-contrat'> Contrat en alternance</span>
            <ul>
              <li>Prise d'appels utilisateurs, </li>
              <li>Application des procédures strictes, </li>
              <li>Amélioration continue du support technique. </li>
              <li>Proactif pour une expérience utilisateur optimale.</li>
              <li>Diagnostic et résolution des problèmes matériels et logiciels. </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            contentStyle={{
              background: '#ffffff13',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.151)', // Bordure du contenu
              borderRadius: '5px' // Facultatif : ajout d'arrondi aux coins
            }}
            iconStyle={{
              background: '#7d20ee', // Couleur de fond de l'icône
              color: '#fff', // Couleur de l'icône
              
            }}
            icon={<FaBootstrap />}
            date=' Janvier 2024 - A présent'>
            <h3 className='vertical-timeline-element-title'>Développeur front-end | Les Fruits Du Val Qui Rit</h3>
            <h4 className='vertical-timeline-element-subtitle'>PRODUCTEUR DES FRUITS</h4>
            <span className='type-contrat'> Freelance</span>
            <ul>
              <li>Analyse des besoins clients approfondie</li>
              <li>Conception de maquettes interactives</li>
              <li>Développement front-end innovant</li>
              <li>Tests rigoureux de qualité</li>
              <li>Mise en ligne du site web</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            contentStyle={{
              background: '#ffffff13',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.151)', // Bordure du contenu
              borderRadius: '5px' // Facultatif : ajout d'arrondi aux coins
            }}
            iconStyle={{
              background: '#00ddf9', // Couleur de fond de l'icône
              color: '#fff', // Couleur de l'icône
            }}
            icon={<FaReact />}
            date='Novembre 2023 - Janvier 2024'>
            <h3 className='vertical-timeline-element-title'>Développeur front-end | Chalet de l'Epigny</h3>
            <h4 className='vertical-timeline-element-subtitle'>INDEPENDANT</h4>
            <span className='type-contrat'> Freelance</span>
            <ul>
              <li>Analyse des besoins clients approfondie</li>
              <li>Conception de maquettes interactives</li>
              <li>Développement front-end innovant</li>
              <li>Tests rigoureux de qualité</li>
              <li>Mise en ligne du site web</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            contentStyle={{
              background: '#ffffff13',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.151)', // Bordure du contenu
              borderRadius: '5px' // Facultatif : ajout d'arrondi aux coins
            }}
            iconStyle={{
              background: '#007fc8', // Couleur de fond de l'icône
              color: '#fff', // Couleur de l'icône
            }}
            icon={<FaCode />}
            date='Mai 2021 - Juin 2022'>
            <h3 className='vertical-timeline-element-title'>Développement jeux Bataille Naval | Jeu du morpion</h3>
            <h4 className='vertical-timeline-element-subtitle'>UNIVERSITE D'ANGERS</h4>
            <span className='type-contrat'> Projet Universitaire</span>
            <ul>
              <li>Développement des jeux en C++.</li>
              <li>Création des jeux Bataille Navale et Morpion en console.</li>
              <li>Conception d'un site Web pour les jeux.</li>
              <li>Intégration des jeux sur le site pour jouer en ligne.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            contentStyle={{
              background: '#ffffff13',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.151)', // Bordure du contenu
              borderRadius: '5px' // Facultatif : ajout d'arrondi aux coins
            }}
            iconStyle={{
              background: '#eb4430', // Couleur de fond de l'icône
              color: '#fff', // Couleur de l'icône
              
            }}
            icon={<FaHtml5 />}
            date='Juillet 2020 - Septembre 2020'>
            <h3 className='vertical-timeline-element-title'>Stagiaire projet | Dévelopement Web</h3>
            <h4 className='vertical-timeline-element-subtitle'>LAVISTA</h4>
            <span className='type-contrat'>Stage</span>
            <ul>
              <li>Respect des attentes et des délais.</li>
              <li>Maintenance des matériels informatiques.</li>
              <li>Compétences : HTML, CSS, Maintenance, Microsoft Windows.</li>
              <li>Collecte et analyse des données pour concevoir des sites Web.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experiences
