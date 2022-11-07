
import styles from "../../css/IncomeItems.module.css";

export const Incomeitems = ({incomeItem,selectedMonth,thisMonth,incomeText,incomeAmount,deleteIncomeItem}) => {

    const handleDelete = () => {
        deleteIncomeItem(incomeItem.docId);
    }

    const currentLists = () => {
        return (
            <li className={styles.list}>
                <div className={styles.incometext}>{incomeText}</div>
                <div className={styles.incomeamount}>{Number(incomeAmount).toLocaleString()}円</div>
                <div className={styles.deletelist}>
                    <button onClick={handleDelete}><a href="#" className={styles.btn02}>削除</a></button>
                </div>
            </li>
          )
    }

    const pastLists = () => {
        return (
            <li className={styles.list}>
                <div className={styles.incometext}>{incomeText}</div>
                <div className={styles.incomeamount}>{Number(incomeAmount).toLocaleString()}円</div>
            </li>
        )
    }

   return (
       <>
         {thisMonth===selectedMonth ? currentLists() : pastLists()}
       </>
   )
}