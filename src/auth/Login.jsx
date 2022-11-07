import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import styles from "../css/Login.module.css";
import image from  "../images/login.png";

export const Login = () => {

    //ログイン関数をcontextで使用
    const { login } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        //入力内容をemail,passwordプロパティに追加
        const { email, password } = e.target.elements;
        //login関数に入力内容を渡す
        login(email.value, password.value);
        console.log(email.value, password.value);
    }

    //入力内容をコンソールに表示
    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        console.log(value);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleLogin} className={styles.form}>
                <div className={styles.title}>
                    <h1>Log In</h1>
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
                    <button type="submit"><a className={styles.btn02}>ログイン</a></button>
                </div>
                <div className={styles.gotologin}>
                    <a href="/signup" className={styles.btn03}>新規登録画面へ</a>
                </div> 
            </form>  
        </div>
    )
}