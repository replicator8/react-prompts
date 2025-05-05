import "./Button.css";

export default function Button({ children, isActive, className, ...props }) {
  return (
    <button {...props} className={isActive ? `button button-active ${className}` : `button ${className}`}>
      {children}
    </button>
  );
}
