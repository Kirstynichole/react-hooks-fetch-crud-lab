import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleUpdate, handleDelete}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => <QuestionItem handleDelete={handleDelete} handleUpdate={handleUpdate} key={question.id} question={question}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
