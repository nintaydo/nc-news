import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch(`https://project-the-first.herokuapp.com/api/topics`)
      .then((response) => response.json())
      .then(({ topics }) => {
        setTopics(topics);
      });
  }, []);

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
