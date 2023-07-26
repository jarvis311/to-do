import "./App.css";
import Header from "./components/Header";
import UserLoginForm from "./components/UserLoginForm";
import UserAddTodo from "./components/UserAddTodo";
import ShowTodo from "./components/ShowTodo";

function App() {
  const isUserAuth = localStorage.getItem("user");

  return (
    <div className="App">
      <Header />
      {!isUserAuth ? (
        <>
          <UserLoginForm />
        </>
      ) : (
        <>
          {" "}
          <UserAddTodo />
          <ShowTodo />
        </>
      )}
    </div>
  );
}

export default App;
