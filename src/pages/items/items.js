import styles from './items.module.scss';

import JoinCommunity from '../../components/JoinCommunity/JoinCommunity';
import AdsAround from '../../components/AdsAround/AdsAround';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Items() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
