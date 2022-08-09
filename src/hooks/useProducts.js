import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const { data: dataProducts, loading: loadingProducts } =
    useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (dataProducts && dataProducts.products)
      setProducts(dataProducts.products.items);
  }, [dataProducts]);

  return { products, loadingProducts };
};
