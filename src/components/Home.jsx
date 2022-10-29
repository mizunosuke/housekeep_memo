import { useState } from "react"
import { Header } from "./Header";

export const Home = () => {

    // const [ inputText, setInputText ] = useState("");
    // const [ inputAmount, setInputAmount ] = useState();
    // const [ incomeItems, setIncomeItems ] = useState("");
    // const [ expenseItems, setExpenseItems ] = useState("");
    // const [ type, setType ] = useState("inc");
    const [ date, setDate ] = useState(new Date());

    const prevMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth() - 1;
        const day = date.getDay();
        setDate(new Date(year, month, day));
    }

    const nextMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDay();
        setDate(new Date(year, month, day));
    }

    return (
        <div>
            <Header
            date={date}
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            />

            {/* <IncAndExp/>
            <Inputform/>
            <div>
               <Expense/>
               <Income/> 
            </div> */}
        </div>
    )
}