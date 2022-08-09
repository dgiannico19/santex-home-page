import styled from 'styled-components';

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 0 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440');
  background-size: cover;
  filter: contrast(70%);
  height: 350px;
  padding: 10px 20px;
  color: #fff;
  text-shadow: 0 2px 12px black;

  @media (max-width: 600px) {
    height: 250px;
    padding-top: 50px;
  }
`;

export const BannerParagraph = styled.p`
  font-size: 1.5rem;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.3rem;
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductLabel = styled(Title)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 7px;
  font-size: 15px;
  @media (max-width: 1300px) {
    background-color: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.2);
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      color: rgba(0, 0, 0);
    }
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 35vh;
  border-radius: 7px;
  filter: contrast(70%);
  font-weight: normal;
  margin-top: 5px;
  padding: 1em;
  color: #000;
  transition: box-shadow margin-top;
  transition-duration: 100ms;
  box-shadow: 0 0 2px 0 #8080807d;
  text-align: center;
  @media (max-width: 1000px) {
    height: max-content;
  }

  &:hover {
    filter: contrast(100%);
    box-shadow: 0 6px 15px 0 #8080807d;
    margin-top: inherit;
  }
`;

export const SmallParagraph = styled.small`
  font-size: 0.8rem;
  font-weight: normal;
  @media (max-width: 1550px) {
    font-size: 0.6rem;
  }
`;

export const BuyBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 40px;
  width: 40px;
  color: #fff;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgb(255, 0, 0) 0%,
    rgb(248, 105, 105) 100%
  );
  border: none;
  border-radius: 7px;
  opacity: 1;
  /* transition: all 50ms linear; */

  :hover {
    cursor: pointer;
  }

  :active {
    transform: scale(0.98);
  }
`;
