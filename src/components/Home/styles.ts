import styled from "styled-components";

export const ContainerHome = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContentHome = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 90px 82px;

  h1 {
    font-size: 3.125rem;
    font-weight: bold;

    span {
      color: var(--color-logo);
    }
  }

  section {
    max-width: 400px;
    padding-top: 55px;

    p {
      font-size: 1.08rem;
      color: var(--white);
    }

    .final-section {
      display: flex;
      margin-top: 55px;

      .artists {
        margin-left: 6px;
        margin-top: auto;

        span {
          font-size: 1.08rem;
          font-weight: bold;
        }
      }
    }
  }
`;
