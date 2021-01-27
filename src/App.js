import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './SASS/Index.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from "./List";

const App= ()=> {

  let [item, setItem] = useState('');
  let [newItem, setNewItem] = useState([]);

  let captureItem = (e)=>{
    setItem(e.target.value);
  }

  let addData =()=>{
    if(item ==''){
      alert('Plesae add the item first.');
  }
  else{
    
    setNewItem((preVal)=>{
      return [...preVal,item];
    })
  }

    setItem('');
  }

  return (
    <div className="cold-10 mx-auto container">
        <div className=" main">
          <h1 className="text-center">ToDo List</h1>
          <br/>
          <div className="inputArea">
          <input type="text" placeholder="Add Item" value={item.substr(0,22)} onChange={captureItem}/>
          <Button size="large" className="btnEffect" onClick={addData}><AddIcon className="addIcon" /></Button>
          </div>
          <div className="list">
            <ol>
              {newItem.map((val,index)=>{
                return <li><List text={val} key={index}/></li>;
              })}
            </ol>
          </div>
       </div>
    </div>
  )
}

export default App;
