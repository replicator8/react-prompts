import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PromptButton from "./PromptButton/PromptButton";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";

export default function ActivePrompts() {
  const [loading, setLoading] = useState(false);
  const [prompts, setPrompts] = useState([]);
  const [modal, setModal] = useState(null);

  const fetchPrompts = useCallback(async () => {
    setLoading(true);

    axios.get("http://localhost:8080/prompts").then((resp) => {
      const prompts = resp.data;
      console.log(prompts);
      setPrompts(prompts);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchPrompts();
  }, [fetchPrompts]);

  function handleDeletePrompt(id) {
    axios.delete(`http://localhost:8080/prompts/${id}`).then((resp) => {
      console.log("Prompt deleted:", resp.data);
      setModal(null);
      window.location.reload();
    });
  }

  function handleOpenModal(prompt) {
    setModal(prompt);
  }

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Скопировано!");
      })
      .catch((err) => {
        console.error("Ошибка:", err);
      });
  }

  return (
    <>
      {modal !== null && (
        <Modal open={true}>
          <div className="modal-content">
            <h2>Промпт:</h2>

            <div className="input-group">
              <label>Название:</label>
              <div className="input-with-copy">
                <input type="text" value={modal.name} disabled />
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(modal.name)}
                  title="Скопировать название"
                >
                  <img src="src/assets/copy.svg" alt="Скопировать" />
                </button>
              </div>
            </div>

            <div className="input-group">
              <label>Текст:</label>
              <div className="input-with-copy">
                <textarea rows={8} value={modal.text} disabled />
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(modal.text)}
                  title="Скопировать текст"
                >
                  <img src="src/assets/copy.svg" alt="Скопировать" />
                </button>
              </div>
            </div>

            <div className="modal-actions">
              <Button onClick={() => setModal(null)}>Закрыть</Button>
              <Button
                onClick={() => handleDeletePrompt(modal.id)}
                style={{ backgroundColor: "#FF2E2C" }}
              >
                Удалить
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <section className="active">
        {<h1 style={{textAlign: "center", marginTop: "1rem"}}>Активные промпты</h1>}
        {!loading && (
          <ul>
            {prompts
              .filter((prompt) => prompt.isActive === true)
              .map((prompt) => (
                <li key={prompt.id}>
                  <PromptButton onClick={() => handleOpenModal(prompt)}>
                    {prompt.name}
                  </PromptButton>
                </li>
              ))}
          </ul>
        )}
      </section>
    </>
  );
}
