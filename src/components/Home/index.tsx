import Avatars from '../../assets/group-avarts.png';
import Badge from '../../assets/badge.svg';

import { ContainerHome, ContentHome } from "./styles";

export function Home(){
  return (
    <ContainerHome>
       <ContentHome>
          <section>
            <p>
                Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). 
                Compre, venda e descubra ativos digitais exclusivos para você.
            </p>

            <div className="final-section">
              <img src={Avatars} alt="usuários" />

              <div className="artists">
                <span>+10</span>
                <p>Artistas selecionados</p>
              </div>
            </div>
          </section>

          <h1>Descubra a verdadeira arte digital e colecione diversas <span>NFTs</span> </h1>

          <img src={Badge} alt="escudo" />
       </ContentHome>
    </ContainerHome>
  );
}