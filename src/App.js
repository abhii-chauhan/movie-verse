import Cards from "./components/Cards";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";
import { createContext, useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";

const Appstate = createContext();

function App() {
  const[login, setLogin] = useState(false);
  const[userName, SetUserName] = useState("");
  return (
    <Appstate.Provider value={{login, userName, setLogin, SetUserName}}>
    <div className="App">
      <Header/>
      <Routes>
     <Route path="/" element={<Cards />}/>
     <Route path="/addmovie" element={<AddMovie />}/>
     <Route path="/detail/:id" element={<Detail />}/>
     <Route path="/login" element={<Login />}/>
     <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}
