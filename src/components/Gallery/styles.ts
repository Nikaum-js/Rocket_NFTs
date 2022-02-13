import styled from "styled-components";

export const ContainerGallery = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContentGallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin: 0 82px;

  img {
    margin: 10px 0;
    border: 1px solid white;
  }
`;
