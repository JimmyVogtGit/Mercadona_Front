import { HomepageContainer } from "./styles";
import hook from "./hook";

function Homepage() {
  return (
    <HomepageContainer>
      <h1>Bienvenue sur le site de Mercadona </h1>
      <div>
        <section>
          <p>
            À la recherche du meilleur endroit pour tous vos achats ? Ne
            cherchez plus ! Bienvenue sur Mercadona - votre destination ultime
            pour une expérience de shopping inégalée.
          </p>
        </section>
        <section>
          <p>
            Besoin de renouveler votre garde-robe ? Parcourez notre vaste
            collection de vêtements de qualité, des tendances les plus récentes
            aux classiques intemporels.
          </p>
        </section>
        <section>
          <p>
            Vous êtes un amateur de gadgets ? Nous avons tout ce dont vous avez
            besoin pour rester à la pointe de la technologie. Des smartphones
            aux ordinateurs, en passant par les derniers accessoires audio et
            vidéo, nous avons ce qu'il vous faut.
          </p>
        </section>
        <section>
          <p>
            Envie de créer un espace qui vous ressemble ? Parcourez notre
            sélection de meubles élégants, de décorations uniques et
            d'accessoires pour donner vie à votre intérieur.
          </p>
        </section>
      </div>
    </HomepageContainer>
  );
}

export default Homepage;
