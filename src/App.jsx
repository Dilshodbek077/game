import c from "./App.module.css"
import Nav from "./components/Nav"
import Nav2 from "./components/Nav2"
import One from "./components/One"
import Two from "./components/Two"
import Three from "./components/Three"



function App() {

  return (
    <>
    <div className={c.all}>
    <div>
     <Nav/>
     <Nav2/>
     <One/>
     <Two/>
    </div>
    <div>
     <Three/>
    </div>
    </div>
    </>
  )
}

export default App
