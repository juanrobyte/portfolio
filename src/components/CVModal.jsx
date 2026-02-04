export default function CVModal({ open, onClose, pdfUrl }) {
  if (!open) return null;

  return (
    <div className="cv-modal-backdrop" onClick={onClose}>
      <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <span>Currículum</span>
          <button className="cv-close" onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>

        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0`}
          title="CV"
          className="cv-iframe"
        />
      </div>
    </div>
  );
}
