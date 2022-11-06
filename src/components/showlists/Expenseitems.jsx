import React from 'react'

export const Expenseitems = ({expenseItem,selectedMonth,thisMonth,expenseText,expenseAmount,deleteExpenseItem}) => {


    //リスト削除
    const handleDelete = () => {
        deleteExpenseItem(expenseItem.docId);
    }

    //現在の月が表示されている時
    const currentLists = () => {
        return (
            <div>
                <li>
                <div>{expenseText}</div>
                <div>{Number(expenseAmount).toLocaleString()}円</div>
                <div>
                    <button onClick={handleDelete}>削除</button>
                </div>
            </li>
            </div>
          )
    }

    //過去の月が表示されている時
    const pastLists = () => {
        return (
            <div>
                <li>
                <div>{expenseText}</div>
                <div>{Number(expenseAmount).toLocaleString()}円</div>
            </li>
            </div>
        )
    }

   return (
       <>
         {thisMonth===selectedMonth ? currentLists() : pastLists()}
       </>
   )
}

