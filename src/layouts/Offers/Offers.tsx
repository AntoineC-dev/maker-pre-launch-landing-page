import styles from './Offers.module.css';
import { OFFERS } from '../../data';

function Offers() {
  return (
    <div className={styles.wrapper}>
      <h2>Our pricing plans</h2>
      <p>
        We only make money when our creators make money. Our plans are always affordable, and it’s completely free to
        get started.
      </p>
      <div className={styles.offers}>
        {OFFERS.map((offer, index) => (
          <div key={index} className={styles.offer} data-variant={offer.variant}>
            <img src={offer.icon} alt="" aria-hidden="true" />
            <h3>{offer.title}</h3>
            <p>{offer.text}</p>
            {offer.price ? (
              <span>
                ${offer.price} <span>/month</span>
              </span>
            ) : (
              <span>Free</span>
            )}
            <div className={styles.items}>
              {offer.items.map((item, index) => (
                <div key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9">
                    <path
                      fill="currentColor"
                      d="m10.319.768 1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
