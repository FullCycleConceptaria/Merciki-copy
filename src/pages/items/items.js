import styles from './items.module.scss';

import JoinCommunity from '../../components/JoinCommunity/JoinCommunity';
import AdsAround from '../../components/AdsAround/AdsAround';
import SearchBar from '../../components/SearchBar/SearchBar';
import ItemsServicesGroups from '../../components/ItemsServicesGroups/ItemsServicesGroups';
import { itemsCategories } from '../../datas/itemsCategories';
import { useEffect } from 'react';

export default function Items() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AdsAround />
      <SearchBar />
      <div className={styles.allItems}>
        {itemsCategories.map((categorie) => (
          <ItemsServicesGroups
            src={categorie.src}
            title={categorie.title}
            text={categorie.text}
            key={crypto.randomUUID()}
          />
        ))}
      </div>
      <JoinCommunity />
    </>
  );
}
