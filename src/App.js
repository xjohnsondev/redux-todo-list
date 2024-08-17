import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const todo = useSelector((state) => state.todo);

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: { id: uuidv4(), text: todo } });
  }

  const handleInputChange = (e) => {
    dispatch({ type: 'SET_TODO', payload: e.target.value });
  }

  function removeTodo(id) {
    dispatch({ type: 'DELETE_TODO', payload: id });
  }

  const toggleCompleted = (e) => {
    e.target.classList.toggle('completed');
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <input placeholder='Add Todo'
          value={todo || ''}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Submit</button>
      </form>
      <ul>
        {list.map(({ id, text }) => (
          <li key={uuidv4()}>
            <p id='todo-text' onClick={(text) => toggleCompleted(text)}>{text}</p>
            <button onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
