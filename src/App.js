import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './Components/Homepage'; // Corrected import path and file name
import QuestionAnswerPage from './Components/QApage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Ask" element={<QuestionAnswerPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
