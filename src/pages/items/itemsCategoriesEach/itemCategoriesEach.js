import { useParams } from 'react-router';
import styles from './itemCategoriesEach.module.scss';
import { itemsCategories } from '../../../datas/itemsCategories';

export default function ItemCategoriesEach() {
  const { link } = useParams();
  return (
    <>
      {itemsCategories
        .find((user) => user.link === link)
        .each.map((each) => (
          <div className={styles.eachItem} key={each.id}>
            <img src={each.src} alt={each.title} />
            <div className={styles.eachItem_text}>
              <p className={styles.eachItem_text_title}>{each.title}</p>
              <p className={styles.eachItem_text_price}>
                {each.price === '1'
                  ? `${each.price} Merci`
                  : `${each.price} Mercis`}
              </p>
            </div>
          </div>
        ))}
    </>
  );
}
