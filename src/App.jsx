import { useCallback, useState,useEffect } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordgenerate=useCallback(()=>{

    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str=str+"0123456789";
    if(charAllowed) str=str+"!@#$%^&*()_+";

    for (let index = 1; index <= length; index++) {
      let char=Math.floor(Math.random()*str.length+1)

      pass=pass+str.charAt(char)
      
    }

    setPassword(pass)



  },[length,numberAllowed,charAllowed]) // yha optimise ke liye use kr rhe hai

//passwordgenerator() sidh run ny ho payega
// so use useeffect

useEffect(()=>{

  passwordgenerate()

},[length,numberAllowed,charAllowed]) // agr isme se kuvh v change hua to change hoga

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
        />
        
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-centergap-x-1'>
      <input
      type='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <lebel>Length:{length}</lebel>
      </div>

      <div className='flex items-center gap-x-1'>
      <input
      type='checkbox'
      defaultChecked={numberAllowed}
      id="numberinput"
      onChange={()=>{
          setNumberAllowed((prev)=>!prev);
      }}
        
      />
      <label htmlFor='numberinput'>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input
      type='checkbox'
      defaultChecked={charAllowed}
      id="charinput"
      onChange={()=>{
          setCharAllowed((prev)=>!prev);
      }}
        
      />
      <label htmlFor='charinput'>Characters</label>
      </div>




      </div>
    </div>
  )
}

export default App
