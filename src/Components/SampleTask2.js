import React, { useState } from "react";
import Dialog from "./DialogComponent";

const SampleTask2 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      <Dialog
        isOpen={modalOpen}
        header={<h2>Dialog header</h2>}
        body={<p>This is thedialog content.</p>}
        footer={<footer>footer</footer>}
      />

      <Dialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        isModal
        header={<h2>modal Header</h2>}
        body={<p>This is the modal content.</p>}
        footer={<footer>footer</footer>}
      />
    </div>
  );
};

export default SampleTask2;
