import styled from "styled-components";

export const ContainerFooter = styled.main`
  width: 100%;
  margin: 0 auto;
  background-color: var(--card-color);

  height: 60vh;
`;

export const ContentFooter = styled.footer``;

export const HeaderFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 2.5rem;
    color: var(--color-logo);
  }

  button {
    background-color: var(--color-logo);
    width: 80px;
    height: 80px;
    text-align: center;
  }
`;
