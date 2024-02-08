import Image from "next/image";
import localFonts from 'next/font/local'
import styles from './style.module.css'
import Nav from "../../ui/nav/nav";
import '../'


const Home: React.FC = () => {

  return (
    <main className={""}>
      <Nav></Nav>
      <div className={`${styles.login_page}`}>
        <div className={`${styles.form}`}>
          <form className={`${styles.register_form}`}>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className={`${styles.message}`}>Already registered? <a href="#">Sign In</a></p>
          </form>
          <form className={`${styles.login_form}`}>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className={`${styles.message}`}>Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
    </main>
  );
}


export default Home;