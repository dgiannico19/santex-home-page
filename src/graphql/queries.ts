// Here we put queries. Remove next line

import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query getProduct {
    activeOrder {
      subTotal
    }
    products {
      items {
        id
        name
        assets {
          source
          preview
        }
        description
        variants {
          price
          currencyCode
          languageCode
          stockLevel
        }
      }
    }
  }
`;

export { GET_PRODUCTS };
