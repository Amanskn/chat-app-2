// import logo from "./logo.svg";
import "./App.css";
// import { Button } from "@chakra-ui/button";
import { Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ChatPage from "./pages/chatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
