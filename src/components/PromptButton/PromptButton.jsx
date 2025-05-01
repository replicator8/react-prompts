import "./PromptButton.css";

export default function PromptButton({ children, ...props }) {
  return (
    <button {...props} className="prompt-btn">
      <p className="foo">{children}</p>
    </button>
  );
}
