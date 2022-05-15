import styles from "./article.module.css";

function Article({ title, content }) {
  return (
    <article className={styles.article}>
      <h1 className={styles.article__title}>{title}</h1>
      <div
        className={styles["article__content"]}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}

export default Article;
