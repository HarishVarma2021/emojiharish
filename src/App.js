import React,{useEffect, useState} from 'react'
import EmojiData from './emoji.json';
import './App.css'

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div>
      <center>
        <h1 className="title"> Search Emojis here</h1>
        <input  className = "searchbox" size="50" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </center>
        <ul>
        {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copied")}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}
        </ul>
      
    </div>
  )
}

export default App
