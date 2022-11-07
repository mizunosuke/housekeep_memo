import styles from "../css/ShowIncExp.module.css";
import { FaMoneyCheckAlt } from "react-icons/fa";

export const ShowIncExp = ({incomeAmount,expenseAmount}) => {

    //収入合計
    const incomeTotalAmount = incomeAmount.reduce(function(sum, element){
        return sum + element;
      }, 0);
    // console.log(incomeTotalAmount);

    //支出合計
    const expenseTotalAmount = expenseAmount.reduce(function(sum, element){
        return sum + element;
      }, 0);
    // console.log(expenseTotalAmount);
    
    const balance = incomeTotalAmount - expenseTotalAmount;

    return (
        <div className={styles.container}>
            <div className={styles.balance}>
                <h2><span><FaMoneyCheckAlt/></span>今月の残高 : {balance}円</h2>
            </div>
            <div className={styles.incexp}>
                <p className={styles.incometext}>収入合計 : {incomeTotalAmount}円</p>
                <p className={styles.exptext}>支出合計 : {expenseTotalAmount}円</p>
            </div>
        </div>
    )
}