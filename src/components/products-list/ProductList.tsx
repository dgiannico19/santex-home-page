import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/CartContext';

import { useProducts } from '../../hooks/useProducts';
import { FormatMoney } from '../../utils/formatPrice';
import { ProductType } from '../../utils/types';
import { Spinner } from '../spinner/Spinner';

import {
  Banner,
  BannerParagraph,
  BuyBtn,
  DataContainer,
  Product,
  ProductGrid,
  ProductLabel,
  SmallParagraph,
  Title,
} from './styled-products';

export function ProductList() {
  const { products, loadingProducts } = useProducts();
  const { addToOrder, addLoading } = useContext<any>(Context);

  const [articles, setArticles] = useState<ProductType[]>([]);

  console.log(addLoading);
  useEffect(() => {
    if (products) setArticles(products);
  }, [products]);

  useEffect(() => {
    setArticles(products);
  }, [products]);

  return loadingProducts ? (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Spinner />
    </div>
  ) : (
    <>
      <Banner>
        <Title>Santex store</Title>
        <BannerParagraph>The best internet store</BannerParagraph>
      </Banner>
      <ProductGrid>
        {articles?.map((prod: any) => (
          <Product
            style={{
              backgroundImage: `url(${prod.assets[0].preview})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            key={prod.id}
          >
            <ProductLabel>
              <DataContainer>
                <div style={{ textAlign: 'start' }}>
                  <div>{prod.name}</div>
                  <div style={{ color: 'red', fontWeight: 'bolder' }}>
                    $ {FormatMoney(prod.variants[0].price)}
                  </div>
                </div>
                <BuyBtn
                  onClick={() => addToOrder(prod)}
                  disabled={
                    prod.variants[0].stockLevel !== 'IN_STOCK' || addLoading
                  }
                >
                  BUY
                </BuyBtn>
              </DataContainer>
              <SmallParagraph>{prod.description}</SmallParagraph>
            </ProductLabel>
          </Product>
        ))}
      </ProductGrid>
    </>
  );
}
