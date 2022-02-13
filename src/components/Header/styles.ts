import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 57px 82px 0 82px;

  img {
    width: 265px;
    height: 40px;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      color: white;
      font-size: 1.09rem;

      margin: 0 60px;

      a {
        text-decoration: none;
        color: var(--white);
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    width: 240px;
    height: 50px;

    img {
      width: 30px;
      height: 30px;
    }

    font-size: 1rem;
    font-weight: bold;
  }
`;
