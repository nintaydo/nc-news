import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticlesById } from "../api"



const SingleArticle = () => {

    const { article_id } = useParams()

    const [singleArticle, setSingleArticle] = useState([])

    useEffect(() => {
        fetchArticlesById(article_id).then((singleArticle) => {
        
            setSingleArticle(singleArticle)
        })
    }, [article_id])

    return (
        <div className="singleArticlePage">
            <h2>Your selected Article</h2>
            <div className="singleArticleCard">
            <li className="article_id">
                Article ID number: {singleArticle.article_id}
              </li>
      
              <li className="article_title">
                <h5>{singleArticle.title}</h5>
              </li>
            
              <li className="article_topic">{singleArticle.topic}</li>
              <li className="article_author">{singleArticle.author}</li>
              <li className="article_body">{singleArticle.body}</li>
              <li className="article_comment_count">
                Article Comment Count: {singleArticle.comment_count}
              </li>
              <li className="article_votes">
              <button className="updoot-button">up-Doot</button>
              <br></br>
                Doots: {singleArticle.votes}
                <br></br>
              <button className="dndoot-button">dn-doot</button>
              </li>
            </div>
        </div>
    )
}

export default SingleArticle;