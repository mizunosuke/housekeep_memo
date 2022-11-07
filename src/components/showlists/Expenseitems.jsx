import React from 'react'
import styles from "../../css/ExpenseItems.module.css";

export const Expenseitems = ({expenseItem,selectedMonth,thisMonth,expenseText,expenseAmount,deleteExpenseItem}) => {


    //リスト削除
    const handleDelete = () => {
        deleteExpenseItem(expenseItem.docId);
    }

    //現在の月が表示されている時
    const currentLists = () => {
        return (
                <li className={styles.list}>
                    <div className={styles.expensetext}>{expenseText}</div>
                    <div className={styles.expenseamount}>{Number(expenseAmount).toLocaleString()}円</div>
                    <div className={styles.deletelist}>
                        <button onClick={handleDelete}><a href="#" className={styles.btn02}>削除</a></button>
                    </div>
                 </li>
          )
    }

    //過去の月が表示されている時
    const pastLists = () => {
        return (
                <li className={styles.list}>
                <div className={styles.expensetext}>{expenseText}</div>
                <div className={styles.expenseamount}>{Number(expenseAmount).toLocaleString()}円</div>
            </li>
        )
    }

   return (
       <>
         {thisMonth===selectedMonth ? currentLists() : pastLists()}
       </>
   )
}

