import { useState, createContext, useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_ITEM } from '../graphql/mutations';
import useStateWithStorage from '../hooks/useStateWithStorage';

import { ProductType, Props } from '../utils/types';

export const Context = createContext({});

const CartContext = (props: Props) => {
  const [state, setState] = useStateWithStorage('subtotal', []);
  

  const [subtotal, setSubtotal] = useState<number>(0);
  const [addItem, { data: addData, loading: addLoading }] =
    useMutation(ADD_ITEM);

  useEffect(() => {
    if (addData && addData.addItemToOrder)
      setSubtotal(addData.addItemToOrder.subTotal);
  }, [addData]);

  const addToOrder = async (prod: ProductType): Promise<number> => {
    const itemAdded = await addItem({
      variables: {
        productVariantId: prod.id,
        quantity: 1,
      },
    });
    if (itemAdded) {
      setState(itemAdded.data.addItemToOrder.subTotal);
    }

    if (itemAdded) setSubtotal(itemAdded.data.addItemToOrder.subTotal);

    return subtotal;
  };

  return (
    <Context.Provider
      value={{
        subtotal,
        addToOrder,
        addLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default CartContext;
