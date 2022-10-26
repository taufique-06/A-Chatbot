import Register from "./pages/Register";
import Login from "./pages/Login";
import "./style.scss";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
  <div className="home">
    <div className="container">
      <Sidebar/>
      <Chat/>
    </div>
  </div>
  )
}

export default App;
