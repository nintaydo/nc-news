import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";

const Articles = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if(isLoading) return <h3>loading...</h3>

  return (
    <div className="articlesList">
      <h2>All the Articles</h2>
      <ul className="articlePage">
        {articles.map((article) => {
          return (
            <div className="articleCard" key={article.article_id}>
              <li className="article_id">
                Article ID number: {article.article_id}
              </li>
              <Link to={`/articles/article/${article.article_id}`} className="articleSelector">
      
              <li className="article_title">
                <h5>{article.title}</h5>
              </li>
              </Link>
              <li className="article_topic">{article.topic}</li>
              <li className="article_author">{article.author}</li>
              <li className="article_body">{article.body}</li>
              <li className="article_comment_count">
                Article Comment Count: {article.comment_count}
              </li>
              <li className="article_votes">
              <button className="updoot-button">up-Doot</button>
                Doots: {article.votes}
              <button className="dndoot-button">dn-doot</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
