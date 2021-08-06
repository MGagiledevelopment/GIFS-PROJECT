import React, {useState} from "react"
import "../styles/main.css"
import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import Gifts from "./Gifts/Gifts"

function App() {

 const [buttonHeader, setButtonHeader] = useState(false)

  return (
    <div className={buttonHeader ? "AppDark" : "App" }>
      <Header button={buttonHeader} setButton={setButtonHeader}/>
      <Navbar/>
      <Gifts/>
    </div>
  );
}

export default App;
