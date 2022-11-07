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
                <div className={styles.prevbtn}><button onClick={prevMonth}><a href="#" className={styles.btn02}>前の月へ</a></button></div>
                <div className={styles.time}><h1>{year}年 {month}月の収支</h1></div>
                <div className={styles.nextbtn}><button onClick={nextMonth}><a href="#" className={styles.btn02}>次の月へ</a></button></div>
                <div className={styles.userad}>
                    <p>ようこそ！{currentUser.email}さん</p>
                    <button onClick={signout}><a href="#" className={styles.btn03}>Sign Out</a></button>
                </div>
        </div>
    )
}