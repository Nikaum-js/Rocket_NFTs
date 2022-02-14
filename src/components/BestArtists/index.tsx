import Artist1 from '../../assets/artista-1.png';
import Artist2 from '../../assets/artista-2.png';
import Artist3 from '../../assets/artista-3.png';
import Artist4 from '../../assets/artista-4.png';
import Artist5 from '../../assets/artista-5.png';
import Artist6 from '../../assets/artista-6.png';
import ArrowOrange from '../../assets/arrow-orange.svg';


import { BoxCardsArtists, CardsArtists, ContainerArtists, ContentArtists } from "./styles";

export function BestArtists() {
  return (
    <ContainerArtists>
      <ContentArtists>
        <h1>Melhores <span>Artistas</span></h1>

        <BoxCardsArtists>
          <CardsArtists>
            <img src={Artist1} alt="artista" />

            <div className="card-description">
              <h2>Mayk Brito</h2>
              <strong>80 fotografias</strong>
            </div>
          </CardsArtists>

          <CardsArtists>
            <img src={Artist2} alt="artista" />

            <div className="card-description">
              <h2>Jakeliny G.</h2>
              <strong>99 fotografias</strong>
            </div>
          </CardsArtists>

          <CardsArtists>
            <img src={Artist3} alt="artista" />

            <div className="card-description">
              <h2>João I. (Biro)</h2>
              <strong>50 fotografias</strong>
            </div>
          </CardsArtists>

          <CardsArtists>
            <img src={Artist4} alt="artista" />

            <div className="card-description">
              <h2>Tamires Santos</h2>
              <strong>43 fotografias</strong>
            </div>
          </CardsArtists>

          <CardsArtists>
            <img src={Artist5} alt="artista" />

            <div className="card-description">
              <h2>Ana Silva</h2>
              <strong>28 fotografias</strong>
            </div>
          </CardsArtists>

          <CardsArtists>
            <img src={Artist6} alt="artista" />

            <div className="card-description">
              <h2>Diego F.</h2>
              <strong>20 fotografias</strong>
            </div>
          </CardsArtists>

          <div className="more-artists">
            <span>Veja mais artistas</span>
            <img src={ArrowOrange} alt="arrow" />
          </div>
        </BoxCardsArtists>
      </ContentArtists>
    </ContainerArtists>
  );
}