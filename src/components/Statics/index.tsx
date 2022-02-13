import Banner from '../../assets/banner.png';

import { ContainerStatic, ContentStatic } from './styles';

export function Statics(){
  return (
    <ContainerStatic>
      <ContentStatic>
        <div className="statics">
          <ul>
            <li>
              10K+
              <p>Artes</p>
            </li>
            <li>
              200+
              <p>Vendas</p>
            </li>
            <li>
              20
              <p>Artistas</p>
            </li>
          </ul>
        </div>

        <div className="rest-section">
          <div className="box">
            <div className="box-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus.
                Id <a href="">potenti diam</a> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
                semper.
              </p>

              <span>Lorem ipsum</span>
            </div>

            <div className="box-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus.
                Id <a href="">potenti diam</a> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
                semper.
              </p>

              <span>Lorem ipsum</span>
            </div>
          </div>

          <img src={Banner} alt="banner" />
        </div>
      </ContentStatic>
    </ContainerStatic>
  );
}