// Here we put mutations. Remove next line

import { gql } from '@apollo/client';

const ADD_ITEM = gql`
  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        id
        totalQuantity
        subTotal
        total
      }
    }
  }
`;

export { ADD_ITEM };
