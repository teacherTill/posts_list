import styles from './PostsList.module.css'
import axios from 'axios'
import Post from '../Post/Post'

const PostsList = ({ posts, setPosts, loading, error }) => {
  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id)
    setPosts(updatedPosts)
    axios.delete(`https://68ca6a32430c4476c3496059.mockapi.io/posts/${id}`)
  }

  if (loading) {
    return <div className={styles.postsList}>Загрузка постов...</div>
  }
  if (error) {
    return (
      <div className={styles.postsList}>
        Произошла ошибка при загрузке постов
      </div>
    )
  }
  return (
    <div className={styles.postsList}>
      <h1 className={styles.postsTitle}>Список постов</h1>
      <div className={styles.posts}>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              handleDeletePost={handleDeletePost}
            />
          ))}
      </div>
    </div>
  )
}

export default PostsList
