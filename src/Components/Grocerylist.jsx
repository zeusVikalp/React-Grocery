import React from "react";

const Grocerylist = ({title,status,id,handeldelete}) => {
    return(
       <div>
           <h1>{title}</h1>
           <button onClick={() => handeldelete(id)}>Delete Grocery</button>
       </div>
    )
}
export {Grocerylist}