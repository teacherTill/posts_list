import styles from './PostForm.module.css'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import logo from '../../assets/user_logo.svg'
import { useEffect } from 'react'

const PostForm = ({ getPosts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const handleCreatePost = async (post) => {
    try {
      await axios.post(
        'https://68ca6a32430c4476c3496059.mockapi.io/posts',
        post
      )
      getPosts()

      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.formWrapper}>
      <h1>Написать пост</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleCreatePost)}>
        <img src={logo} alt="user logo" className={styles.logo} />
        <div className={styles.inputWrapper}>
          <div className={styles.inputHolder}>
            <label className={styles.label} htmlFor="label">
              Заголовок
            </label>

            <input
              className={styles.input}
              id="label"
              type="text"
              placeholder="Введите заголовок"
              {...register('title', {
                required: 'Заполните поле с заголовком',
              })}
            />
            <p className={styles.error}>
              {errors.title && errors.title.message}
            </p>
          </div>
          <div className={styles.inputHolder}>
            <label className={styles.label} htmlFor="text">
              Текст
            </label>

            <input
              className={styles.input}
              id="text"
              type="text"
              placeholder="Введите текст..."
              {...register('text', { required: 'Заполните поле с текстом' })}
            />
            <p className={styles.error}>{errors.text && errors.text.message}</p>
          </div>
          <button className={styles.button} type="submit">
            Публикация
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostForm
