import {useEffect, useState} from 'react'


const Articles = () => {

    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        fetch(`https://project-the-first.herokuapp.com/api/articles`)
        .then((response) => response.json())
        .then(({articles}) => {
          console.log(articles, "In the Article useEffect")
            setArticles(articles)
            console.log(articles, "Tag")
        })
    },[])

    
    
    return (
        <div className='articlesList'>
            <h2>All the Articles</h2>
            {articles.map((article) => {
                return (
                  <ul className="articlePage">
                  <li className="article_id">Article ID number: {article.article_id}</li>
                  <li className="article_title"><h5>{article.title}</h5></li>
                  <li className="article_topic">{article.topic}</li>
                  <li className="article_author">{article.author}</li>
                  <li className="article_body">{article.body}</li>
                  <li className="article_comment_count">Article Comment Count: {article.comment_count}</li>
                  <li className="article_votes">Number of Votes: {article.votes}</li>
                </ul>
                )
            })}
        </div>
    )
}

export default Articles