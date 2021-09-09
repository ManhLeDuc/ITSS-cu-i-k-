import './App.css';
import useStorage from './hooks/storage';
import { useState } from 'react';

function App() {
  const initData = ["Hung","Hoang","Ha","Hang"]
  const [data, deleteName] = useStorage({initData: initData});
  const [name, setName] = useState("");

  return (
    <div className="App">
      <div>学生一覧: [{initData.toString()}]</div>
      <div>検索する名前を入力してください。
        <br></br>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <button type="button" onClick={() => deleteName(name)}>確定</button>
      </div>
      <div>検索する名前: {name}</div>

      <div>新しい一覧: [{data.toString()}]</div>
    </div>
  );
}

export default App;
