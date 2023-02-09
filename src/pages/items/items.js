import JoinCommunity from '../../components/JoinCommunity/JoinCommunity';
import AdsAround from '../../components/AdsAround/AdsAround';
import SearchBar from '../../components/SearchBar/SearchBar';
import ItemsServicesGroups from '../../components/ItemsServicesGroups/ItemsServicesGroups';
import { useEffect } from 'react';

export default function Items() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AdsAround />
      <SearchBar />
      <ItemsServicesGroups
        src='https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        title='good deals'
        text='Treat yourself by spending a single Merci'
      />
      <JoinCommunity />
    </>
  );
}
