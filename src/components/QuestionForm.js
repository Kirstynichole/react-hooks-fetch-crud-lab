import React, { useState } from "react";


function QuestionForm({handleSubmit, onPromptChange, onAnswer1Change, onAnswer2Change, onAnswer3Change, onAnswer4Change, onNewCorrectIndexChange, newPrompt, newAnswer1, newAnswer2, newAnswer3, newAnswer4, newCorrectIndex}) {
  // const [formData, setFormData] = useState({
  //   prompt: "",
  //   answer1: "",
  //   answer2: "",
  //   answer3: "",
  //   answer4: "",
  //   correctIndex: 0,
  // });

  // function handleChange(event) {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(formData);
  // }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={newPrompt}
            onChange={onPromptChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={newAnswer1}
            onChange={onAnswer1Change}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={newAnswer2}
            onChange={onAnswer2Change}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={newAnswer3}
            onChange={onAnswer3Change}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={newAnswer4}
            onChange={onAnswer4Change}
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={newCorrectIndex}
            onChange={onNewCorrectIndexChange}
          >
            <option value="0">{newAnswer1}</option>
            <option value="1">{newAnswer2}</option>
            <option value="2">{newAnswer3}</option>
            <option value="3">{newAnswer4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
