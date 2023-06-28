//rfce: shortcut to create components
// ctrl + x  to delete a line
// imp: shortcut to import something
// ctrl + space to show autocomplete
// createContext() useContext from react to share state between components.
// you need to create the context > export context name > import useContent > const {obje} = useContent(contextName)
import Tasklist from './components/Tasklist';
import TaskForm from './components/TaskForm';
function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Tasklist />
      </div>
    </main>
  );
}

export default App;
