import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { buyMilk } from "../features/milk/milkSlice";


function MilkContainer() {
  const [value, setValue]= useState(0)
const state= useSelector( (state)=>state.milk)
const dispatch= useDispatch()
  return (
    <div>
        <h2>Milk number: {state.numOfMilks}</h2>
        <input value={value} onChange={(e)=>setValue(e.target.value)} type="number" />
        <button style={{margin:".2rem"}} onClick={()=>dispatch(buyMilk(value))}>Buy milk</button>
        </div>
  )
}

export default MilkContainer