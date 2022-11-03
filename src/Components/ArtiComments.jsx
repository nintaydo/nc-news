import { useEffect, useState } from "react"
import { fetchArticlesById } from "../api"
import {useParams} from "react-router-dom"



const ArtiComments = () => {
    const {article_id} = useParams()

    const [articleById, setArticleById] = useState([])

    useEffect(() => {
        fetchArticlesById(article_id).then((articleById) => {
        
            setArticleById(articleById)
        })
    }, [article_id])

    return (
        <div>
            <h2>Your selected Article/s</h2>
        </div>
    )
}

export default ArtiComments