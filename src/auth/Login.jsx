import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


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
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="">メールアドレス</label>
                    <input type="text" name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">パスワード</label>
                    <input type="text" name="password" onChange={handleChange}/>
                </div>
                <button type="submit">ログイン</button>
            </form>  
        </div>
    )
}