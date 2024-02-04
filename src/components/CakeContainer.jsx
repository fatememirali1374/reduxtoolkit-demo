import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../features/cake/cakeSlice";


function CakeContainer() {
  const [value, setValue]= useState(0)
const state= useSelector( (state)=>state.cake)
const dispatch= useDispatch()
  return (
    <div>
        <h2>Cack number: {state.numOfCakes}</h2>
        <input value={value} onChange={(e)=>setValue(e.target.value)} type="number" />
        <button style={{margin:".2rem"}} onClick={()=>dispatch(buyCake(value))}>Buy cake</button>
        </div>
  )
}

export default CakeContainer