import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/home"
import Profile from "./routes/profile"


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}>
              
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
