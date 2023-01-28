import styles from './ProductCard.module.css';
import { ProductCardPropsType } from './ProductCard.types';
import locationIcon from '../../assets/shape.svg';

const ProductCard: React.FC<ProductCardPropsType> = ({
  textContent,
  title,
  price,
  location,
  tags,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper} />
      <div className={styles.textContainer}>
        <p>{textContent}</p>
        <div className={styles.priceContainer}>
          <div>
            <p>
              <b>{title}</b>
            </p>
          </div>
          <span>{price}</span>
        </div>
        <div className={styles.tagsContainer}>
          {/*AS IT IS NOT DYNAMIC LIST WE CAN USE INDEX AS KEY*/}
          {tags.map((tag, index) => {
            return (
              <div key={index} className={styles.tag}>
                {index > 0 && <div className={styles.round}></div>}
                <span>{tag}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.location}>
          <img src={locationIcon} alt="location_icon" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
