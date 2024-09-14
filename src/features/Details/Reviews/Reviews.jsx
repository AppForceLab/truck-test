import { createIconStarsArr } from '../../../utils/createIconStarsArr';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.list_reviews}>
      {reviews.map(({ comment, reviewer_name, reviewer_rating }, idx) => (
        <li key={idx}>
          <div className={styles.wrap_user}>
            <p className={styles.avatar}>{reviewer_name.slice(0, 1)}</p>
            <div>
              <p className={styles.name}>{reviewer_name}</p>
              <ul className={styles.wrap_star}>
                {createIconStarsArr(
                  reviewer_rating,
                  styles.not_active_star,
                  styles.active_star
                ).map((icon, idx) => (
                  <li key={idx}>{icon}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className={styles.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;