import Button from './ui/Button';

const InputForm = ({ handleShowForm }) => {
  return (
    <form className="w-11/12 max-w-xl bg-gray mx-auto p-6 space-y-6 mt-10 rounded-xl">
      <header className="text-2xl text-blue-gray text-center">
        <h1>Add Obligation</h1>
      </header>
      <div className="w-full space-y-8">
        <div>
          <input
            className="w-full py-2 px-4 rounded-lg outline-sapphire"
            type="text"
            placeholder="Enter Obligation"
          />
        </div>

        <div className="flex justify-end items-center space-x-2">
          <label>Set Priority</label>
          <select
            className="rounded-lg py-1 px-2 outline-sapphire"
            name="priority"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="flex justify-center space-x-4">
          <Button
            onClick={handleShowForm}
            type="button"
            text="Cancel"
            bgColor="bg-dark-sapphire"
            txtColor="text-gray"
            hoverBg="hover:bg-sapphire"
          />
          <Button
            type="submit"
            text="Add"
            bgColor="bg-dark-sapphire"
            txtColor="text-gray"
            hoverBg="hover:bg-sapphire"
          />
        </div>
      </div>
    </form>
  );
};

export default InputForm;
