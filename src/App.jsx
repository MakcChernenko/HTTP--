import { useEffect, useState } from 'react'
import './App.css'
import SearchForm from './SearchForm'
import fetchArticlesWithTopic from './articles-api'
import Loading from "./Loading.jsx"
import ArticleList from './ArticleList.jsx'
import Error from "./Error.jsx"

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const handleSearch = async (topic) =>{
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    }finally{
      setLoading(false)
    }
  }


  return (
    <>
    <h1>Latest articles</h1>
    <SearchForm onSearch={handleSearch} />
    {loading && <Loading/>}
    {error && <Error/>}
    {articles.length > 0 && <ArticleList data={articles} />}
        
    </>
  )
}

export default App
