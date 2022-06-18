import { useState } from 'react';

import InputForm from './InputForm';
import Button from './ui/Button';

const ObligationForm = ({ handleFormSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = () => {
    handleFormSubmit({
      id: Math.random().toString(),
      title,
      priority,
      isActive: true,
    });
  };

  return (
    <section>
      {showForm && (
        <InputForm
          handleShowForm={handleShowForm}
          handleSubmit={handleSubmit}
          setTitle={setTitle}
          setPriority={setPriority}
          title={title}
          priority={priority}
        />
      )}
      {!showForm && (
        <div className="flex justify-center mt-10">
          <Button
            onClick={handleShowForm}
            type="button"
            text="Add New Obligation"
            bgColor="bg-gray"
            txtColor="text-black"
            hoverBg="hover:bg-light-sapphire"
          />
        </div>
      )}
    </section>
  );
};

export default ObligationForm;
