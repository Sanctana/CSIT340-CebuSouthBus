import "../../styles/modalclosebutton.css";

export default function ModalCloseButton({ onClick }) {
  return (
    <button
      type="button"
      className="modal-close-btn"
      onClick={onClick}
      aria-label="Close"
    >
      ×
    </button>
  );
}
