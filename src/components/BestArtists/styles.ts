import styled from "styled-components";

export const ContainerArtists = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContentArtists = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3.125rem;
    font-weight: bold;
    margin-bottom: 70px;

    span {
      color: var(--color-logo);
    }
  }

  .more-artists {
    margin: 43px 0 110px 0;

    cursor: pointer;

    span {
      padding: 0 22px;
      font-size: 1.125rem;
    }
  }
`;

export const BoxCardsArtists = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
`;

export const CardsArtists = styled.section`
  display: flex;
  align-items: center;

  cursor: pointer;

  width: 350px;
  height: 150px;

  background-color: var(--card-color);
  margin: 50px;

  img {
    margin: 25px 33px;

    width: 95px;
    height: 100px;
  }

  .card-description {
    h2 {
      font-size: 1.25rem;
      font-weight: medium;
      padding: 10px 0;
    }

    strong {
      font-size: 1.25rem;
      color: var(--color-logo);
      font-weight: medium;
    }
  }
`;
