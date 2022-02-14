import styled from "styled-components";

export const ContainerStatic = styled.main`
  border-bottom: 1px solid #5a5757;
`;

export const ContentStatic = styled.section`
  display: flex;

  .statics {
    width: 280px;
    border-right: 1px solid #5a5757;

    ul {
      margin: 133px 0;

      li {
        font-size: 3.125rem;
        font-weight: 600;
        text-align: center;
        margin-top: 70px;

        p {
          font-size: 1.25rem;
          color: var(--subtitle-color);
        }
      }
    }
  }

  .rest-section {
    display: flex;
    margin-top: 40px;
    flex-wrap: wrap;
    flex: 1;

    .box {
      display: flex;
      align-items: center;
      margin: 0 auto;

      .box-text {
        max-width: 440px;
        margin: 0 100px;

        span {
          margin-top: 63px;
          display: block;
          color: var(text-color);
          text-decoration: underline;
        }

        p {
          font-size: 1.08rem;

          a {
            color: var(--color-logo);
          }
        }
      }
    }

    img {
      margin-top: auto;
      width: 100%;
      height: 300px;
    }
  }
`;
