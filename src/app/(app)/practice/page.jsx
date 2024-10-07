'use client'
import React , {useState,useRef,useEffect,useReducer} from 'react'


const Practice = () => {

    const [value,setValue] = useState()
    const initialState = 0 ;

    const reducer = (state,action) =>{
          switch(action){
            case "add":
                return state + 1
            case "subtract":
                return state - 1
            case "reset":
                return 0
            default:
                throw new Error("state is wrong")

          }
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    const ref = useRef(0)
    const inputRef = useRef(null)
    const textareaInput = useRef("")
    console.log(ref,"ref")

    useEffect(()=>{
        ref.current = ref.current+1
    })

    const focusElement =()=>{
        inputRef.current.focus()
    }
    useEffect(()=>{
        inputRef.current = value
    })
    const handleshowText =()=>{
        textareaInput.current.value = "Hello, EveryOne Prashant is here ";
        textareaInput.current.focus()
    }
  return (
    <div>
        <input value={value} type="text" onChange={(e)=>setValue(e.target.value)} ref={inputRef}/>
        <p>Render Count : {ref.current}</p>
        <p>Previous Value : {inputRef.current}</p>
        <textarea ref={textareaInput}/>
        <button onClick={focusElement}>Focus</button>
        <button onClick={handleshowText}>Show</button>
        <div>{state}</div>
        <div>
            <button onClick={()=>dispatch("add")}>Add</button>
            <button onClick={()=>dispatch("subtract")}>Subtract</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>
        </div>
    </div>
  )
}

export default Practice