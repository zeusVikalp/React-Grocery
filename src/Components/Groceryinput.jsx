import React from "react";

const Groceryinput = ({handelclick}) => {
    const[title,setTitle] = React.useState("")
    return(
      <div>
        <input placeholder="Add Groceries" onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => handelclick(title)}>ADD</button>
      </div>
    )
}
export {Groceryinput}