import { useContext } from "react"
import { AuthContext } from "./AuthProvider";


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
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="">メールアドレス</label>
                    <input type="text" name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">パスワード</label>
                    <input type="text" name="password" onChange={handleChange}/>
                </div>
                <button type="submit">登録</button>
            </form>            
        </div>
    )
}