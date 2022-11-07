import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import { Signup } from "./auth/Signup";
import { Login } from "./auth/Login";
import { PrivateRoute } from "./auth/PrivateRoute";
import { Welcome } from "./components/Welcome";



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/home" element={<PrivateRoute/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter> 
    </div>
  );
}

export default App;
