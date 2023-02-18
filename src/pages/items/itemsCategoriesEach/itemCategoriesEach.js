import { useParams } from 'react-router';
import styles from './itemCategoriesEach.module.scss';
import { itemsCategories } from '../../../datas/itemsCategories';
import { useEffect } from 'react';

export default function ItemCategoriesEach() {
  const { link } = useParams();
  useEffect(() => {
    const obj = itemsCategories.find((user) => user.link === link);
  }, [link]);
  return (
    <p>hello {link}</p>
  );
}
