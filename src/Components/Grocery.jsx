import React from "react";
import { Groceryinput } from "./Groceryinput";
import { Grocerylist } from "./Grocerylist";
import {v4 as uuid} from "uuid"

const Grocery = () => {
    const[data,setData] = React.useState([])
    const handelAdd = (title) =>{
       const pay = {
           title,
           status:false,
           id : uuid()
       }
       setData([...data,pay])
    }
    const handeldelete = (id) =>{
        const updatedata = data.filter((item) => item.id !==id)
        setData(updatedata)
    }
    return(
        <div>

            <Groceryinput handelclick={handelAdd}/>
            {data.map((item) =>(
                <Grocerylist {...item} handeldelete={handeldelete}/>
            ) )}
        </div>

    )
}
export {Grocery}