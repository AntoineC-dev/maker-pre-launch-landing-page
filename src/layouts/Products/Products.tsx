import styles from './Products.module.css';
import { PRODUCTS } from '../../data';

function Products() {
  return (
    <div id="products" className={styles.wrapper}>
      {PRODUCTS.map((product, index) => (
        <div key={index} className={styles.product}>
          <div className={styles.icon}>
            <img src={product.icon} alt="" aria-hidden="true" />
          </div>
          <div className={styles.content}>
            <h2>{product.title}</h2>
            <p>{product.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
