export default function CVModal({ open, onClose, pdfUrl, title = "CV" }) {
  if (!open) return null;

  return (
    <div className="cv-modal-backdrop" onClick={onClose}>
      <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <span>{title}</span>
          <button className="cv-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0`}
          title={title}
          className="cv-iframe"
        />
      </div>
    </div>
  );
}