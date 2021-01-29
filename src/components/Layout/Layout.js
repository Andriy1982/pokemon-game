import styles from './Layout.module.css';

export default function Layout({ id, title, descr, urlBg, colorBg }) {
  return (
    <section
      className={styles.root}
      id={id}
      style={{
        backgroundImage: `url(${urlBg})`,
        backgroundColor: `${colorBg}`,
      }}
    >
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            <h3>{title}</h3>
            <span className={styles.separator}></span>
          </div>
          <div className={`${styles.desc} ${styles.full}`}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

Layout.defaultProps = {
  title: 'Hallow React',
  descr: 'About you',
  colorBg: null,
};
