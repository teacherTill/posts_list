import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="#" className={styles.logoLink}>
        <img className={styles.logo} src={logo} alt="logo" />
      </a>
      <nav className={styles.nav}>
        <a className={styles.navLink} href="#">
          Главная
        </a>
        <a className={styles.navLink} href="#">
          Музыка
        </a>
        <a className={styles.navLink} href="#">
          Сообщества
        </a>
        <a style={{ border: ' none' }} className={styles.navLink} href="#">
          Друзья
        </a>
      </nav>
    </div>
  )
}

export default Header
