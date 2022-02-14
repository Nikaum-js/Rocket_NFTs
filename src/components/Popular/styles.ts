import styled from "styled-components";

export const ContainerPopular = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContentPopular = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  margin: 90px 82px;

  h1 {
    font-size: 3.125rem;
    margin-bottom: 98px;

    span {
      color: var(--color-logo);
    }
  }
`;

export const BoxCards = styled.section`
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-template-columns: 500px 500px;

  .line {
    width: 1px;
    height: 890px;
    position: absolute;
    margin: auto;
    top: 4030px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--subtitle-color);
  }

  @media (max-width: 1405px) {
    .line {
      display: none;
    }
  }
`;

export const AstronautsCard = styled.section`
  display: flex;
  flex-direction: column;

  .header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 44px;
    margin-top: 50px;

    h2 {
      font-size: 1.875rem;
      font-weight: 500;
    }
  }

  .price-nft {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 26px;

    p {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--subtitle-color);
    }

    u {
      font-size: 1.25rem;
      font-weight: 400;
      text-decoration: none;
      color: var(--color-logo);
    }
  }
`;
