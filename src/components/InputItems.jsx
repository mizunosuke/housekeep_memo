import styles from "../css/InputItem.module.css";

export const InputItems = ({addIncome,addExpense,inputText,setInputText,inputAmount,setInputAmount,type,setType,selectedMonth,thisMonth}) => {

    const handleChangeText = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setInputText(value);
        console.log(value);
    }

    const handleChangeAmount = (e) => {
        e.preventDefault();
        setInputAmount(parseInt(e.target.value));
        console.log(e.target.value);
    }

    const handleType = (e) => {
        e.preventDefault();
        setType(e.target.value);
    }

    const reset = () => {
        setInputText("");
        setInputAmount(0);
    }

    //追加ボタンを押して内容を追加
    const handleSubmit = (e) => {
        e.preventDefault();
        if(type ==="inc") {
            addIncome(inputText,inputAmount);
            reset();
            console.log(inputText,inputAmount);
        } else if(type === "exp") {
            addExpense(inputText,inputAmount);
            reset();
        } else if(inputText===""|inputAmount===0){
            alert("正しい内容を入力してください");
        }
    }

    

    const thisMonthForm = () => {
        return (
            <div className={styles.container}>
                <form className={styles.formstyle}>
                    <div className={styles.option}>
                        <p>収支</p>
                        <select onChange={handleType}>
                            <option value="inc">収入</option>
                            <option value="exp">支出</option>
                        </select>
                    </div>
    
                    <div className={styles.text}>
                        <label>内容</label>
                            <input type="text" value={inputText} onChange={handleChangeText}/>
                    </div>
    
                    <div className={styles.amount}>
                        <label>金額</label>
                            <input type="number" value={inputAmount} onChange={handleChangeAmount}/>
                    </div>
                    <div className={styles.btn}>
                        <input type="submit" value="追加" onClick={handleSubmit}/>
                    </div>
                </form>
            </div>
        )
    }

    const otherMonthForm = () => {
        return (
            <div>
                <form action=""></form>
            </div>
        );
    }

    return (
        <>
          {selectedMonth===thisMonth ? thisMonthForm() : otherMonthForm()}
        </>
    )
}