import Header from "./components/Header"
import Main from "./components/Main"
import Starwars from "./components/Starwars"
import WindowTracker from "./components/WindowTracker"
import React from "react"

function App() {
  const [show, setShow] = React.useState(true)

  function toggle() {
    setShow(prevShow => !prevShow)
  }

  return (
    <>
      <main className="container">
        <button onClick={toggle}>
          Toggle WindowTracker
        </button>
        {show && <WindowTracker />}
      </main>
      <Header />
      <Main />
      {/* <Starwars /> */}
    </>
  )
}

export default App
