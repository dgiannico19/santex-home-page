import { ReactElement } from 'react';

export type ProductType = {
  id: string;
  assets: string[];
  description: string;
  variants: string[];
  __typename: string;
};

export type Props = {
  children: ReactElement[];
};
