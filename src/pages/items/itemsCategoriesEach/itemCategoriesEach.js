import { useParams } from 'react-router';
import styles from './itemCategoriesEach.module.scss';

export default function ItemCategoriesEach() {
  const { link } = useParams();
  console.log(link);
  return (
    <p>hello {link}</p>
  );
}
