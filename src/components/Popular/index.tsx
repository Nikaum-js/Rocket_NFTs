import Astronauta1 from '../../assets/astronauta-1.png';
import Astronauta2 from '../../assets/astronauta-2.png';
import Astronauta3 from '../../assets/astronauta-3.png';
import Astronauta4 from '../../assets/astronauta-4.png';
import ArrowWhite from '../../assets/arrow-white.svg';

import { AstronautsCard, BoxCards, ContainerPopular, ContentPopular } from "./styles";

export function Popular(){
  return (
    <ContainerPopular>
      <ContentPopular>
        <h1><span>Populares</span> da semana</h1>

        <BoxCards>
          <AstronautsCard>
            <div className="header-card">
              <h2>Astronauta 1</h2>
              <img src={ArrowWhite} alt="seta" />
            </div>
            <div className="price-nft">
              <p>Mayk Brito</p>
              <u>1.50 RKT</u>
            </div>
            <img src={Astronauta1} alt="astronauta" />
          </AstronautsCard>

          <AstronautsCard>
            <div className="header-card">
              <h2>Astronauta 2</h2>
              <img src={ArrowWhite} alt="seta" />
            </div>
            <div className="price-nft">
              <p>Jakeliny Gracielly</p>
              <u>2.0 RKT</u>
            </div>
            <img src={Astronauta2} alt="astronauta" />
          </AstronautsCard>

          <div className="line">
            
          </div>

          <AstronautsCard>
            <div className="header-card">
              <h2>Astronauta 3</h2>
              <img src={ArrowWhite} alt="seta" />
            </div>
            <div className="price-nft">
              <p>João Inácio (Biro)</p>
              <u>3.75 RKT</u>
            </div>
            <img src={Astronauta3} alt="astronauta" />
          </AstronautsCard>

          <AstronautsCard>
            <div className="header-card">
              <h2>Astronauta 4</h2>
              <img src={ArrowWhite} alt="seta" />
            </div>
            <div className="price-nft">
              <p>Tamires Santos</p>
              <u>4.30 RKT</u>
            </div>
            <img src={Astronauta4} alt="astronauta" />
          </AstronautsCard>
        </BoxCards>
      </ContentPopular>
    </ContainerPopular>
  );
}