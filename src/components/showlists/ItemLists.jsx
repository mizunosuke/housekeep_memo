import { Incomeitems } from "./Incomeitems";
import { Expenseitems } from "./Expenseitems";


export const ItemLists = ({incomeItems,expenseItems,selectedMonth,thisMonth,deleteIncomeItem,deleteExpenseItem}) => {
    

    return (
        <div>
            <div>
                <div><h3>収入一覧</h3></div>
                <ul>
                    {incomeItems.map((incomeItem)=>(
                        <Incomeitems
                        incomeItem={incomeItem}
                        incomeText={incomeItem.text}
                        incomeAmount={incomeItem.amount}
                        selectedMonth={selectedMonth}
                        thisMonth={thisMonth}
                        deleteIncomeItem={deleteIncomeItem}
                        key={incomeItem.docId}
                        />
                    ))}
                </ul>
            </div>


            <div>
                <div><h3>支出一覧</h3></div>
                <ul>
                    {expenseItems.map((expenseItem)=>(
                        <Expenseitems
                        expenseItem={expenseItem}
                        expenseText={expenseItem.text}
                        expenseAmount={expenseItem.amount}
                        selectedMonth={selectedMonth}
                        thisMonth={thisMonth}
                        deleteExpenseItem={deleteExpenseItem}
                        key={expenseItem.docId}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}