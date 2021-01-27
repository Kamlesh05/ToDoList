import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';


const List = (props)=>{
    const [del, setDel] = useState(false);

    const delItem = ()=>{
        setDel(true)
    }

    const restoreItem = ()=>{
        setDel(false);
    }

    return(
       
        <div className='listMenu'>
           <span style={{textDecoration: del==true ? 'line-through' : 'none'}}>{props.text}
           </span>
           <span>
           {/* <Button className="delBtn"><DeleteOutlineIcon className="delIcon" onClick={restoreItem}/></Button> 
           <Button className="delBtn"><DeleteOutlineIcon className="delIcon" onClick={delItem}/></Button>  */}

           <UndoOutlinedIcon className="restoreIcon" onClick={restoreItem}/>
           <DeleteOutlineIcon className="delIcon" onClick={delItem}/>
           </span>
        </div>
    )
}

export default List;