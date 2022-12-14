type Props = {
  article: Article;
};

function Article({ article }: Props) {
  return (
    <article>
      {article.image && (
        <img
          alt={article.title}
          src={article.image}
          className="h-58 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
    </article>
  );
}

export default Article;
