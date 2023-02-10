import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input
        type='text'
        className={styles.searchBar_input}
        placeholder='Search'
      />
      <i className='fa-solid fa-magnifying-glass fa-2xl'></i>
    </div>
  );
}
