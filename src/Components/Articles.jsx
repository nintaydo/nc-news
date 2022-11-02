import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";

const Articles = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <div className="articlesList">
      <h2>All the Articles</h2>
      <ul className="articlePage">
        {articles.map((article) => {
          return (
            <div key={article.article_id}>
              <li className="article_id">
                Article ID number: {article.article_id}
              </li>
              <li className="article_title">
                <h5>{article.title}</h5>
              </li>
              <li className="article_topic">{article.topic}</li>
              <li className="article_author">{article.author}</li>
              <li className="article_body">{article.body}</li>
              <li className="article_comment_count">
                Article Comment Count: {article.comment_count}
              </li>
              <li className="article_votes">
                Number of Votes: {article.votes}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
