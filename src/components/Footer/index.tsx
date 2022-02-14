import { ContainerFooter, ContentFooter, HeaderFooter } from "./styles";
import ArrowBlack from '../../assets/arrow-black.svg';

export function Footer(){
  return (
    <ContainerFooter>
      <ContentFooter>
        <HeaderFooter>
          <h1>Rocket <span>NFTs</span> </h1>

          <button>
            <img src={ArrowBlack} alt="arrow" />
          </button>
        </HeaderFooter>
      </ContentFooter>
    </ContainerFooter>
  );
}