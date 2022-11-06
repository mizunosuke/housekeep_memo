


export const Incomeitems = ({incomeItem,selectedMonth,thisMonth,incomeText,incomeAmount,deleteIncomeItem}) => {

    const handleDelete = () => {
        deleteIncomeItem(incomeItem.docId);
    }

    const currentLists = () => {
        return (
            <li>
                <div>{incomeText}</div>
                <div>{Number(incomeAmount).toLocaleString()}円</div>
                <div>
                    <button onClick={handleDelete}>削除</button>
                </div>
            </li>
          )
    }

    const pastLists = () => {
        return (
            <li>
                <div>{incomeText}</div>
                <div>{Number(incomeAmount).toLocaleString()}円</div>
            </li>
        )
    }

   return (
       <>
         {thisMonth===selectedMonth ? currentLists() : pastLists()}
       </>
   )
}