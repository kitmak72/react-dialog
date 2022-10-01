import { useEffect, useRef } from 'react';

interface DialogProps {
  open: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  onClose?: () => void;
  onBackdropClicked?: () => void;
}

const Dialog: React.FC<DialogProps> = ({ open, onClick, onClose, onBackdropClicked, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    }
    return () => dialogRef.current?.close();
  }, [open]);

  const handleDialogClick: React.MouseEventHandler<HTMLDialogElement> = e => {
    const rect = (e.target as HTMLDialogElement).getBoundingClientRect();
    if (
      rect.left > e.clientX ||
      rect.right < e.clientX ||
      rect.top > e.clientY ||
      rect.bottom < e.clientY
    ) {
      onBackdropClicked?.();
      return;
    }
    onClick?.();
  };

  return open ? (
    <dialog
      ref={dialogRef}
      style={{
        height: '50vh',
        width: '50vw',
        display: 'grid',
        placeItems: 'center',
      }}
      onClick={handleDialogClick}
      onCancel={onClose}
    >
      <button
        style={{ position: 'absolute', top: 10, right: 20 }}
        type="reset"
        onClick={() => dialogRef.current?.close()}
      >
        &times;
      </button>
      {children}
    </dialog>
  ) : null;
};

export default Dialog;
