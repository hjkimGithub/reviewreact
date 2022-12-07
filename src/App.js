import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(toDo);
    if(toDo === "") return;

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }

  return <div>
    <form onSubmit={onSubmit}>
      <h1>My ToDos ({toDos.length})</h1>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write ToDos" />
      <button>Add ToDo</button>
    </form>
  </div>
}

export default App;