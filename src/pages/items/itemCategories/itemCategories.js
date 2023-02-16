import styles from './itemCategories.module.scss';

import ItemsServicesGroups from '../../../components/ItemsServicesGroups/ItemsServicesGroups';
import { itemsCategories } from '../../../datas/itemsCategories';
import { Link } from 'react-router-dom';

export default function ItemCategories() {
  return (
    <>
      {itemsCategories.map((categorie) => (
        <Link className={styles.link} key={crypto.randomUUID()} to={`${categorie.link}`}>
          <ItemsServicesGroups
            src={categorie.src}
            title={categorie.title}
            text={categorie.text}
          />
        </Link>
      ))}
    </>
  );
}
