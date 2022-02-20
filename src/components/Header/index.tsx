import Logo from '../../assets/logo.svg'
import IconMetamask from '../../assets/logo_MetaMask.svg'

import { ContainerHeader, ContentHeader } from './styles'

export function Header(){
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={Logo} alt="logo" />
        
        <ul>
          <li><a href="">Comprar NFT</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">FAQ</a></li>
        </ul>

        <button>
          <img src={IconMetamask} alt="icone metatask" />
          Conectar carteira
        </button>
      </ContentHeader>
    </ContainerHeader>
  );
}