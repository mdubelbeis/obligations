import ObligationItem from './ObligationItem';

const ObligationsList = ({ obligations }) => {
  return (
    <ul>
      {obligations.map((task) => (
        <ObligationItem
          title={task.title}
          key={task.id}
          priority={task.priority}
          isActive={task.isActive}
        />
      ))}
    </ul>
  );
};

export default ObligationsList;
