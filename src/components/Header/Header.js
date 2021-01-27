import styles from './Header.module.css';

export default function Header({ title, descr }) {
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
      </div>
    </header>
  );
}
