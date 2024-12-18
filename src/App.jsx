import {BrowserRouter,  Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import DashBoard from "./components/DashBoard"
import Products from "./components/Products"
// import DashBoard from "./components/DashBoard"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Layout />}>
        <Route index element={<DashBoard/>}/>
        <Route path="products" element={<Products/>}/> 
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
