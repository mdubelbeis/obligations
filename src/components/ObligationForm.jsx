import { useState } from 'react';

import InputForm from './InputForm';
import Button from './ui/Button';

const ObligationForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section>
      {showForm && <InputForm handleShowForm={handleShowForm} />}
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
