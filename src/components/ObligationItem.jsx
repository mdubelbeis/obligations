const ObligationItem = ({ title, priority, isActive }) => {
  let priorityBorderColor;

  if (priority === 'high') {
    priorityBorderColor = 'border-red-500';
  } else if (priority === 'medium') {
    priorityBorderColor = 'border-orange-500';
  } else {
    priorityBorderColor = 'border-yellow-500';
  }
  return (
    <li
      className={`drow-shadow-md border-4 ${priorityBorderColor} flex justify-between mt-10 bg-gray py-4 px-6 w-10/12 max-w-xl mx-auto rounded-lg text-2xl hover:cursor-pointer`}
    >
      <h3>{title}</h3>
      <div className="text-center">
        <small>{priority}</small>
      </div>
    </li>
  );
};

export default ObligationItem;
