import styles from './PricingCard.module.css';
import Button from '../button/Button';


const PricingCard = ({label, price, duration="", image, imageAlt, benefits}) => {
    const themeClasses = {
        "Start-Up": styles.card__startup,
        "Pro": styles.card__pro,
        "Enterprise": styles.card__enterprise
    }
    const themeClass = themeClasses[label]
  return (
    <div className={`${styles.card} ${themeClass}`}>
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

            {benefits.map((benefit, index) => (
                <li key={index} className={`${styles.card__benefit} center-horizontal`}> <img src="/icons/check.png" alt="" className={styles.card__benefit__icon} />
                {benefit}
                </li>
            ))}
                
            </ul>
            <Button className={styles.card__button}>Choose</Button>
        </div>
    </div>
  )
}

export default PricingCard