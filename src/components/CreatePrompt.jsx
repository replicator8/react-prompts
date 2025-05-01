import axios from "axios";
import { useState } from "react";
import Button from "./Button/Button";

export default function CreatePrompt() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [hasErrorTitle, setHasErrorTitle] = useState(false);
  const [hasErrorText, setHasErrorText] = useState(false);
  const [first, setFirst] = useState(true);

  function handleTextChange(e) {
    setFirst(false);
    setText(e.target.value);
    setHasErrorText(e.target.value.trim().length === 0);
  }

  function handleTitleChange(e) {
    setFirst(false);
    setTitle(e.target.value);
    setHasErrorTitle(e.target.value.trim().length === 0);
  }

  function handleCreatePrompt() {
    axios
      .post("http://localhost:8080/prompts", {
        name: title,
        text: text,
      })
      .then(function (response) {
        console.log(response);
      });
  }

  return (
    <section className="create">
      <h1>Создать промпт</h1>
      <form>
        <label htmlFor="title" style={{ marginBottom: "1rem" }}>
          Введите название промпта
        </label>
        <input
          type="text"
          id="title"
          className="control"
          value={title}
          onChange={handleTitleChange}
          style={{
            border: hasErrorTitle ? "1px solid red" : null,
          }}
        />
        <label htmlFor="text">Введите текст промпта</label>
        <textarea
          type="text"
          id="text"
          className="control"
          value={text}
          style={{
            border: hasErrorText ? "1px solid red" : null,
            height: "100px",
          }}
          onChange={handleTextChange}
        />
        <Button
          disabled={
            title.trim().length === 0 || text.trim().length === 0 || first
          }
          isActive={
            title.trim().length !== 0 && text.trim().length !== 0 && !first
          }
          onClick={handleCreatePrompt}
        >
          Создать
        </Button>
      </form>
    </section>
  );
}
