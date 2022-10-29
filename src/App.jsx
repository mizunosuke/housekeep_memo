import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import { Signup } from "./auth/Signup";
import { Login } from "./auth/Login";
import { Home } from "./components/Home";


function App() {


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter> 
      </AuthProvider>
    </div>
  );
}

export default App;
