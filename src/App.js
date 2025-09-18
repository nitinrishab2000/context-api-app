import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import MessageContext from "./context/MessageContext";

function App() {
  const message = "Hello world";
  const name = "Nitin";
  const age = 25;

  const messageDetail = {
    message,
    name,
    age,
  };
  return (
    <div className="App">
      <MessageContext.Provider value={messageDetail}>
        <ComponentA></ComponentA>
      </MessageContext.Provider>
    </div>
  );
}

function ComponentA() {
  return <ComponentB></ComponentB>;
}

function ComponentB() {
  const message = useContext(MessageContext);
  return (
    <div className="App">
      <h1>Message : {message.message}</h1>
      <h1>Name : {message.name}</h1>
      <h1>Age : {message.age}</h1>
    </div>
  );
}
export default App;
