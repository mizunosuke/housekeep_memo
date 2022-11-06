import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { auth } from "../firebase/Firebase";
import styles from "../css/Header.module.css";
import { signOut } from "firebase/auth";

export const Header = (props) => {

    const { currentUser } = useContext(AuthContext);

    const { date, prevMonth, nextMonth } = props;

    const today = date;
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    //console.log(currentUser);

    const signout = () => {
        signOut(auth);
    }

    return (
        <div className={styles.container}>
                <div className={styles.signoutbtn}>{/* <SignOutButton/> */}</div>
                <div className={styles.prevbtn}><button onClick={prevMonth}>前の月へ</button></div>
                <div className={styles.time}><h1>{year}年 {month}月の収支</h1></div>
                <div className={styles.nextbtn}><button onClick={nextMonth}>次月へ</button></div>
                <div className={styles.userad}>
                    <p>ようこそ！{currentUser.email}さん</p>
                    <button onClick={signout}>Sign Out</button>
                </div>
        </div>
    )
}