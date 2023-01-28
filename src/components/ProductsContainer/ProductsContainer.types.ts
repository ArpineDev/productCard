import { ProductCardPropsType } from '../ProductCard/ProductCard.types';

export type ProductType = ProductCardPropsType & {
  id: number;
};

export type ProductsContainerProspsType = {
  products: ProductType[];
};
