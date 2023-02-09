import JoinCommunity from '../../components/JoinCommunity/JoinCommunity';
import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <JoinCommunity />
    </>
  );
}
