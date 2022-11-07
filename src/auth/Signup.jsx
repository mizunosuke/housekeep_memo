import { useContext } from "react"
import { AuthContext } from "./AuthProvider";
import styles from "../css/Signup.module.css";
import image from  "../images/signup.png";


export const Signup = () => {

    const { signup }  = useContext(AuthContext);


    const handleSignup = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        signup(email.value, password.value);
        console.log(email.value, password.value);
    }

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        console.log(value);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSignup} className={styles.form}>
                <div className={styles.title}>
                    <h1>Sign Up</h1>
                </div>
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.input_email}>
                    <label htmlFor="">メールアドレス</label>
                    <input type="text" name="email" onChange={handleChange}/>
                </div>
                <div className={styles.input_password}>
                    <label htmlFor="">パスワード</label>
                    <input type="text" name="password" onChange={handleChange}/>
                </div>
                <div className={styles.submitbtn}>
                    <button type="submit"><a className={styles.btn02}>登録</a></button>
                </div>
                <div className={styles.gotologin}>
                    <a href="/login" className={styles.btn03}>ログイン画面へ</a>
                </div> 
            </form>           
        </div>
    )
}