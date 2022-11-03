import { useEffect, useState } from "react";
import {fetchTopics} from "../api"
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetchTopics().then(( topics ) => {
        setTopics(topics);
        setIsLoading(false)
      });
  }, []);

  if(isLoading) return <h3>loading...</h3>

  return (
    <div className="topicsList">
      <h2>All the Topics</h2>
      {topics.map((topic) => {
        return (
          <div key={topic.slug}>
            <li className="topic_slug">{topic.slug}</li>
            <li className="topic_desc">{topic.description}</li>
            <Link to={`/articles/${topic.slug}`} className="topicSelector">
              See Articles for this Topic
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
