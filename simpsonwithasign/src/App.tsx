import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"

const App:FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App