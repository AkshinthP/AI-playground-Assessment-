import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
};

export default meta;

export const Playground = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-4">
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal title="Example modal" open={open} onClose={() => setOpen(false)}>
        This is a sample modal body.
      </Modal>
    </div>
  );
};
