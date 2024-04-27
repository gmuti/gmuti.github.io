
import projet1 from '../assets/img/image3.png'
import projet2 from '../assets/img/projet02.png'
import projet3 from '../assets/img/image2.png'


const Projets = () => {
  return (
    <div className="projet-section">
      <h2>Sites Web réalisés</h2>
        <div className="projet">
            <h3>chalet de l`Epigny</h3>
            <div className="role">
                <p>Le site vitrine pour un chalet présente les caractéristiques et les services offerts par le chalet, mettant en valeur ses atouts et incitant les visiteurs à réserver leur séjour.</p>
                <ul>
                    <li><a href="https://chaletepigny.com/">Voir le site</a></li>
                </ul>
            </div>
            
            <div className="photo">
                <img src={projet1} alt="" />
            </div>
        </div>
        <div className="projet">
            <h3>Ets. Mutikanga</h3>
            <div className="role">
                <p>Le site vitrine pour une entreprise familiale de location met en avant les biens disponibles, les services personnalisés offerts, tout en soulignant les valeurs familiales et l expérience de l entreprise pour encourager les clients à effectuer une réservation.</p>
                <ul>
                    <li>Voir plus</li>
                </ul>
            </div>
            <div className="photo">
                <img src={projet2} alt="" />
            </div>
        </div>
        <div className="projet">
            <h3>Fruit du Val Qui Rit</h3>
            <div className="role">
                <p>Le site vitrine pour une entreprise de production de fruits, de cidre et de confiture met en lumière la qualité de leurs produits, le processus de production artisanal, et offre la possibilité d acheter en ligne ou de visiter leur lieu de production.</p>
                <ul>
                    <li><a href="https://gmuti.github.io/Site-Producteur-Fruits/index.html"> Voir plus</a></li>
                </ul>
            </div>
            <div className="photo">
                <img src={projet3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Projets
