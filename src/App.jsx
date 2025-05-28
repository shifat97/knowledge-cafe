import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="p-4">
      <Header />
      <div className="h-[1px] bg-black/30 my-3"></div>
      <Main />
    </div>
  );
}

export default App;
