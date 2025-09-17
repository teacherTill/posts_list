import { useEffect, useState } from 'react'
import styles from './PostsList.module.css'
import axios from 'axios'
import Post from '../Post/Post'

const PostsList = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const postsData = await axios.get(
      'https://68ca6a32430c4476c3496059.mockapi.io/posts'
    )
    setPosts(postsData.data)
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div className={styles.postsList}>
      <h1 className={styles.postsTitle}>Список постов</h1>
      <div className={styles.posts}>
        {posts && posts.length > 0 ? (
          posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>Посты не найдены</p>
        )}
      </div>
    </div>
  )
}

export default PostsList
