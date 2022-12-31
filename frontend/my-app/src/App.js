import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/Auth/AuthPage"
import Home from "./pages/Home"
import Chat from "./pages/Chat"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chat"  element={<Chat />} />
    </Routes>
  )
}
export default App;