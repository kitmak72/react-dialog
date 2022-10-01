import { useState } from 'react';
import './App.css';
import Dialog from './components/Dialog';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <h1>
        React Dialog using the <code>dialog</code> HTML element
      </h1>
      <button onClick={() => setIsDialogOpen(true)}>open dialog</button>
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onBackdropClicked={() => setIsDialogOpen(false)}
      >
        <div>
          <p>hello dialog</p>
          <button onClick={() => setIsDialogOpen(false)}>OK</button>
        </div>
      </Dialog>
    </>
  );
}

export default App;
