

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
        <div>
            <div>
                <p>残高: {balance}</p>
            </div>
            <div>
                <p>収入合計{incomeTotalAmount}円</p>
                <p>支出合計{expenseTotalAmount}円</p>
            </div>
        </div>
    )
}