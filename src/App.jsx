import Header from './components/Header';
import ObligationForm from './components/ObligationForm';
import ObligationsList from './components/ObligationsList';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Do homework',
    priority: 'high',
    isActive: true,
  },
  {
    id: 'e2',
    title: 'Learn React',
    priority: 'medium',
    isActive: true,
  },
  {
    id: 'e3',
    title: 'Take garbage out',
    priority: 'low',
    isActive: true,
  },
  {
    id: 'e4',
    title: 'clean bathroom',
    priority: 'low',
    isActive: true,
  },
];

function App() {
  return (
    <>
      <Header />
      <ObligationForm />
      <ObligationsList obligations={DUMMY_DATA} />
    </>
  );
}

export default App;
