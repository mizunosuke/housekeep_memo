import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";



const AuthContext = React.createContext();
//認証情報
export const AuthProvider = ({children}) => {

    const [ currentUser, setCurrentUser ] = useState(null);

    //サインアップ処理
    const signup = async(email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await onAuthStateChanged(auth, (user)=>{
                setCurrentUser(user);
            });
        } catch(error) {
            alert("登録失敗");
            console.log(error);
        }
    };
 


    //ログイン処理
    const login = async(email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            await onAuthStateChanged(auth, (user)=>{
                setCurrentUser(user);
            });
        } catch(error) {
            alert("ログイン失敗");
            console.log(error);
        }
  }

  useEffect(() => {
      auth.onAuthStateChanged((currentUser) => {
          setCurrentUser(currentUser)
      });
  }, [])

    return(
        <div>
            <AuthContext.Provider value={{signup, login, currentUser}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export { AuthContext };