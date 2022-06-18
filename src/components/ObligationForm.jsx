import Button from './ui/Button';

const ObligationForm = () => {
  return (
    <section className="w-11/12 max-w-xl bg-gray mx-auto p-6 space-y-6 mt-10 rounded-xl">
      <header className="text-2xl text-blue-gray text-center">
        <h1>Add Obligation</h1>
      </header>
      <form className="w-full">
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
            <select className="rounded-lg py-1 px-2" name="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="flex justify-center space-x-4">
            <Button type="submit" text="Add" />
            <Button type="button" text="Cancel" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ObligationForm;
