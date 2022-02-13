import Gallery1 from '../../assets/galeria-1.png';
import Gallery2 from '../../assets/galeria-2.png';
import Gallery3 from '../../assets/galeria-3.png';
import Gallery4 from '../../assets/galeria-4.png';
import Gallery5 from '../../assets/galeria-5.png';
import Gallery6 from '../../assets/galeria-6.png';
import Gallery7 from '../../assets/galeria-7.png';
import Gallery8 from '../../assets/galeria-8.png';

import { ContainerGallery, ContentGallery } from "./styles";

export function Gallery(){
  return (
    <ContainerGallery>
      <ContentGallery>
        <img src={Gallery1} alt="foto da galeria" />
        <img src={Gallery2} alt="foto da galeria" />
        <img src={Gallery3} alt="foto da galeria" />
        <img src={Gallery4} alt="foto da galeria" />
        <img src={Gallery5} alt="foto da galeria" />
        <img src={Gallery6} alt="foto da galeria" />
        <img src={Gallery7} alt="foto da galeria" />
        <img src={Gallery8} alt="foto da galeria" />
      </ContentGallery>
    </ContainerGallery>
  );
}