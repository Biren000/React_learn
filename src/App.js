import Todo from "./components/todo/Todo";
import "./App.css";
import Crud from "./components/crud/Crud";
import Cruud from "./components/crud2/Cruud";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/searching/Search";
import Sort from "./components/sorting/Sort";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Cruud />} />
          <Route path="/crud" element={<Crud />} />
          {/* <Route path="/todo" element={<Todo />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="/sort" element={<Sort />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
