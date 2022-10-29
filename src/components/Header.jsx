import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

export const Header = (props) => {

    const { currentUser } = useContext(AuthContext);

    const { date, prevMonth, nextMonth } = props;

    const today = date;
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    return (
        <div className="header">
            <div>
                
            </div>
            <div>
                {/* <SignOutButton/> */}
                <button onClick={prevMonth}>前の月へ</button>
                <h1>{year}年 {month}月の収支</h1>
                <button onClick={nextMonth}></button>
                <p>ようこそ！{currentUser.email}さん</p>
            </div>
        </div>
    )
}