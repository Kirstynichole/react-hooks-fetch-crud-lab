import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(questions => setQuestions(questions))
      .catch(error => setError(error.message))
  }, []);

  const [newPrompt, setNewPrompt] = useState("");
  function onPromptChange(event) { setNewPrompt(event.target.value);}
  const [newAnswer1, setNewAnswer1] = useState("");
  function onAnswer1Change(event) { setNewAnswer1(event.target.value);}
  const [newAnswer2, setNewAnswer2] = useState("");
  function onAnswer2Change(event) { setNewAnswer2(event.target.value);}
  const [newAnswer3, setNewAnswer3] = useState("");
  function onAnswer3Change(event) { setNewAnswer3(event.target.value);}
  const [newAnswer4, setNewAnswer4] = useState("");
  function onAnswer4Change(event) { setNewAnswer4(event.target.value);}
  const [newCorrectIndex, setNewCorrectIndex] = useState(0);
  function onNewCorrectIndexChange(event) { setNewCorrectIndex(event.target.value);}

  const handleSubmit = (event) => {
    event.preventDefault();
    const questionInfo = {
      "prompt": newPrompt,
      "answers": [newAnswer1, newAnswer2, newAnswer3, newAnswer4],
      "correctIndex": newCorrectIndex
    }
  
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(questionInfo)
    })
    .then(response => response.json())
    .then(newQuestion => setQuestions([...questions, newQuestion]));
      };

      const handleDelete = (id) => {
        fetch(`http://localhost:4000/questions/${id}`, {method: "DELETE"}) 
        .then(response => {
          if (response.ok) {
            const visibleQuestions = questions.filter(question => question.id !== id);
            setQuestions(visibleQuestions);
          }
        })
      }
     const handleUpdate = (event, id) => {
      event.preventDefault();

      fetch(`http://localhost:4000/questions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          "correctIndex": parseInt(event.target.value)
        })
      })
      .then(response => response.json())
      .then(updatedQuestion => {
        setNewCorrectIndex(updatedQuestion.correctIndex);
      })

    }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleSubmit={handleSubmit} onPromptChange={onPromptChange} newPrompt={newPrompt} onAnswer1Change={onAnswer1Change} newAnswer1={newAnswer1} onAnswer2Change={onAnswer2Change} newAnswer2={newAnswer2} onAnswer3Change={onAnswer3Change} newAnswer3={newAnswer3} onAnswer4Change={onAnswer4Change} newAnswer4={newAnswer4} onNewCorrectIndexChange={onNewCorrectIndexChange} newCorrectIndex={newCorrectIndex}/> : <QuestionList handleUpdate={handleUpdate} handleDelete={handleDelete} questions={questions}/>}
    </main>
  );
  }
export default App;
