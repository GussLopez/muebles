import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"


function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
