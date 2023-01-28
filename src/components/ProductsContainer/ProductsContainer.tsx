import ProductCard from '../ProductCard/ProductCard';
import { ProductsContainerProspsType } from './ProductsContainer.types';

const ProductsContainer: React.FC<ProductsContainerProspsType> = ({
  products,
}) => {
  
  return (
    <>
      {products.map(({ id, title, textContent, price, location, tags }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            textContent={textContent}
            price={price}
            location={location}
            tags={tags}
          />
        );
      })}
    </>
  );
};

export default ProductsContainer;
