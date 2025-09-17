import '../../App.css'
import Header from '../Header/Header'
import PostForm from '../PostForm/PostForm'
import PostsList from '../PostsList/PostsList'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.posts}>
        <PostsList />
        <PostForm />
      </div>
    </div>
  )
}

export default App
