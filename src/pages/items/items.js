import styles from './items.module.scss';

import JoinCommunity from '../../components/JoinCommunity/JoinCommunity';
import AdsAround from '../../components/AdsAround/AdsAround';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Outlet } from 'react-router-dom';

export default function Items() {
  return (
    <>
      <AdsAround />
      <SearchBar />
      <div className={styles.allItems}>
        <Outlet />
      </div>
      <JoinCommunity />
    </>
  );
}
