import { useContext, useEffect, useState } from "react"
import { Header } from "./Header";
import { ShowIncExp } from "../components/ShowIncExp";
import { InputItems } from "./InputItems";
import { deleteDoc, endAt, orderBy, startAt, Timestamp } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { AuthContext } from "../auth/AuthProvider";
import { collection } from "firebase/firestore";
import { where, query } from "firebase/firestore";
import { ItemLists } from "./showlists/ItemLists";
import { onSnapshot } from "firebase/firestore";



export const Home = () => {

    // console.log(incomeItems);
    // console.log(expenseItems);

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser.uid);
    console.log("mojiretu");

    //入力内容を保存
    const [ inputText, setInputText ] = useState("");
    //入力金額を保存
    const [ inputAmount, setInputAmount ] = useState();
    //typeがincの内容を配列に保存
    const [ incomeItems, setIncomeItems ] = useState([]);
    //typeがexpの内容を配列に保存
    const [ expenseItems, setExpenseItems ] = useState([]);
    //収支を判別する
    const [ type, setType ] = useState("inc");
    //入力したタイミングを取得して保存(初期値は現在の時間)
    const [ date, setDate ] = useState(new Date());
    //収入の金額を取得
    const [ incomeAmount, setIncomeAmount ] = useState([]);
    //支出の金額を取得
    const [ expenseAmount,setExpenseAmount ] = useState([]);

    const prevMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth() - 1;
        const day = date.getDate();
        console.log(new Date(year, month, day));
        console.log(year, month, day);
        setDate(new Date(year, month, day));
    }

    const nextMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        console.log(new Date(year, month, day));
        setDate(new Date(year, month, day));
    }

    //選択した月と今の月を照らし合わせるための定数を定義
    const selectedMonth =date.getMonth() + 1;
    const today = new Date();
    const thisMonth =today.getMonth() + 1;


    //firebaseにデータを追加(incomeitem)
    const addIncome = async(text, amount) => {
        try {
            //ドキュメントごとにIDを作成
          const docId = Math.random().toString(32).substring(4);
          //作成したタイミングの日付を取得
          const date = Timestamp.now();

          //IncomeItemsコレクションにtext,amount,uid,dateフィールドを追加
          await setDoc(doc(db, "IncomeItems", docId), {
                text: text,
                amount: amount,
                uid: currentUser.uid,
                date: date
          });
          //React側のIncomeItems配列をfirestoreに追加したデータの内容で更新
          await setIncomeItems([
              ...incomeItems, {text:inputText, amount: inputAmount, docId: docId, date: date}
          ]);
          console.log(incomeItems);
        } catch(error) {
            alert(error);
        }
    }

    //firebaseにデータを追加(expenseitem)
    const addExpense = async(text, amount) => {
        try {
          const docId = Math.random().toString(32).substring(4);
          const date = Timestamp.now();

          await setDoc(doc(db, "ExpenseItems",docId), {
                text: text,
                amount: amount,
                uid: currentUser.uid,
                date: date
          });
           await setExpenseItems([
              ...expenseItems, {text:inputText, amount: inputAmount, docId: docId, date: date}
          ]);
        } catch(error) {
            alert(error);
        }
    }
    
    const startOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1);
      }
    
      //get last date of this month
      const endOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
      }

    //firestoreからデータを取得
    const getIncomeData = async() => {
        const q = query(collection(db, 'IncomeItems'), where('uid', '==', currentUser.uid), orderBy('date'), startAt(startOfMonth(date)), endAt(endOfMonth(date)));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const incomeitems = [];
            console.log(querySnapshot.docs);
            querySnapshot.forEach((doc) => {
                incomeitems.push({...doc.data(), docId: doc.id});
            });
            console.log(incomeitems);
            setIncomeItems(incomeitems);
          });
    }

    const getExpenseData = async() => {
        const q = query(collection(db, "ExpenseItems"), where("uid", "==", currentUser.uid), orderBy("date"), startAt(startOfMonth(date)), endAt(endOfMonth(date)));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const expenseitems = [];
            querySnapshot.forEach((doc) => {
                expenseitems.push({...doc.data(), docId: doc.id});
            });
            setExpenseItems(expenseitems);
          });
       console.log(expenseItems);
    }

    //firestoreのドキュメントを削除(IncomeItems)
    const deleteIncomeItem = async(docId) => {
        await deleteDoc(doc(db, "IncomeItems",docId));
        console.log(incomeItems);
    }
    //firestoreのドキュメントを削除(ExpenseItems)
    const deleteExpenseItem = async(docId) => {
        await deleteDoc(doc(db, "ExpenseItems",docId));
        console.log(expenseItems);
    }


    //コレクションから各ドキュメントのamountのみ取得
    //incomeAmount編
    const getIncomeAmount = () => {
        const q = query(collection(db, "IncomeItems"), where("uid", "==", currentUser.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const amountData= [];
        querySnapshot.forEach((doc) => {
        amountData.push(doc.data().amount);
        });
        setIncomeAmount(amountData);
        });
    }

    //expenseAmount編
    const getExpenseAmount = () => {
        const q = query(collection(db, "ExpenseItems"), where("uid", "==", currentUser.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const amountData= [];
        querySnapshot.forEach((doc) => {
        amountData.push(doc.data().amount);
        });
        setExpenseAmount(amountData);
        });
    }



    //dateステート変更時（月の変更時）に新たにデータを取得
    useEffect(()=>{
        getIncomeData();
        getExpenseData();
        getIncomeAmount();
        getExpenseAmount();
    },[date]);

    //初回マウント時にコレクションからデータを取得
    useEffect(()=>{
        getIncomeData();
        getExpenseData();
        getIncomeAmount();
        getExpenseAmount();
    },[]);



    return (
        <div>
            <Header
            date={date}
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            />

            <ShowIncExp
            incomeAmount={incomeAmount}
            expenseAmount={expenseAmount}
            />

            <InputItems
            inputText={inputText}
            setInputText={setInputText}
            inputAmount={inputAmount}
            setInputAmount={setInputAmount}
            type={type}
            setType={setType}
            addIncome={addIncome}
            addExpense={addExpense}
            selectedMonth={selectedMonth}
            thisMonth={thisMonth}
            />
            
            <ItemLists
            incomeItems={incomeItems}
            expenseItems={expenseItems}
            selectedMonth={selectedMonth}
            thisMonth={thisMonth}
            deleteIncomeItem={deleteIncomeItem}
            deleteExpenseItem={deleteExpenseItem}
            />
        </div>
    )
}


