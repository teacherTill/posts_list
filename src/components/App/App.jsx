import '../../App.css'
import Header from '../Header/Header'
import PostForm from '../PostForm/PostForm'
import PostsList from '../PostsList/PostsList'
import styles from './App.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setIsLoading] = useState(true)
  const getPosts = async () => {
    try {
      const postsData = await axios.get(
        'https://68ca6a32430c4476c3496059.mockapi.io/posts'
      )
      setPosts(postsData.data)
      setIsLoading(false)
      setError(false)
    } catch (error) {
      setError(true)
      console.error(error.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div>
      <Header />
      <div className={styles.posts}>
        <PostsList
          posts={posts}
          error={error}
          loading={loading}
          setPosts={setPosts}
        />
        <PostForm getPosts={getPosts} />
      </div>
    </div>
  )
}

export default App

// закончить верстку, сделать сообщение при создании поста
// *вынести в контекст логику для получения постов состояние с ошибкой и состояние загрузки
