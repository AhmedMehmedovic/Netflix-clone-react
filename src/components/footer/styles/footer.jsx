import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 15px;
  justify-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 25px;
  text-align: inherit;
  text-decoration: auto;
`;

export const Title = styled.p`
  font-size: 20px;
  color: #757575;
  text-align: center;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  text-align: center;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Describe = styled.p`
  font-size: 13px;
  color: #757575;
  text-align: center;
  margin-bottom: 40px;
  text-decoration: auto;
`;
