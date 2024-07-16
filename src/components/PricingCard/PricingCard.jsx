import styles from './PricingCard.module.css';


const PricingCard = ({label, price, duration="", image, imageAlt}) => {
  return (
    <div className={styles.card}>
        <div className={`${styles.card__wrapper} center-vertical`}>
            <span className={styles.card__label}> { label } </span>
            <div className={styles.card__img}>
                <img src={image} alt={imageAlt}  />
            </div>
            <div className={styles.card__priceLabel}>
                <span className={styles.card__price__figure}>{price}</span>
                <span className={styles.card__price__duration}>{duration}</span>
            </div>
            <span className={styles.card__benefitsLabel}>Everything in Free, Plus</span>
            <ul className={styles.card__benefits}>
                <li className={`${styles.card__benefit} center-horizontal`}> <img src="/icons/check.png" alt="" className={styles.card__benefit__icon} />
                Up to 10 Users 
                    
                </li>
                <li className={`${styles.card__benefit} center-horizontal`}><img src="/icons/check.png" alt="" className={styles.card__benefit__icon} />
                Email Support, Call Support</li>
                <li className={`${styles.card__benefit} center-horizontal`}> <img src="/icons/check.png" alt="" className={styles.card__benefit__icon} />
                1 Year Access</li>
            </ul>
            <button className={styles.card__button}>Choose</button>
        </div>
    </div>
  )
}

export default PricingCard