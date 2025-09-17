import styles from './Post.module.css'
import logo from '../../assets/user_logo.svg'

const Post = ({ post }) => {
  return (
    <div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <h2>{post.title}</h2>
        <h3>{post.text}</h3>
      </div>
      <div>
        <p>id:{post.id}</p>
        <button>удалить</button>
      </div>
    </div>
  )
}

export default Post
