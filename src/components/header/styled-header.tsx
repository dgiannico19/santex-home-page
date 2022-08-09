import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  background-color: red;
  width: 100%;
  z-index: 999;
  /* top: 0; */
`;

export const Logo = styled.img`
  max-width: 100px;
  margin: 16px 6px;
`;

export const AmountTotal = styled.div`
  display: flex;
  padding: 0 15px;
  align-self: flex-end;
  margin: 0 12px;
`;

export const TotalAmount = styled.p`
  font-size: 1rem;
  font-weight: 700;

  padding: 0.5rem;
  border-radius: 10%;
  background-color: rgba(245, 245, 245, 0.3);
  width: max-content;
`;
