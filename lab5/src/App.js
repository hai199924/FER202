import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Quiz from "./Components/Quizzes";
import News from "./Components/News";
import Contact from "./Components/Contact";
import Header5 from "./Components/Header5";
function App() {
  return (
    <div>
     
      <Router>
         <Header5 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quizzes" element={<Quiz />} />
          <Route path="/newspage" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;