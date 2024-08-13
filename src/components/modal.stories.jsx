import React, { useState } from 'react';
import Modal from '../components/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};