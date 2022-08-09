import { useContext, useEffect, useState } from 'react';
import useStateWithStorage from '../../hooks/useStateWithStorage';

import { Context } from '../../context/CartContext';
import { FormatMoney } from '../../utils/formatPrice';

import { HeaderStyled, Logo, AmountTotal, TotalAmount } from './styled-header';

export function Header() {
  const [state, setState] = useStateWithStorage('subtotal', []);

  const { subtotal, addLoading } = useContext<any>(Context);

  // console.log(addLoading);
  const [total, setTotal] = useState(state);

  useEffect(() => {
    setTotal(subtotal);
  }, [subtotal]);

  useEffect(() => {
    setTotal(state);
  }, []);

  return (
    <>
      <HeaderStyled>
        <Logo
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
        <AmountTotal>
          <TotalAmount>
            {addLoading ? 'Loading...' : `$ ${FormatMoney(total)}`}
          </TotalAmount>
        </AmountTotal>
      </HeaderStyled>
    </>
  );
}
