"use client"
import { useState } from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



function App() {

const [inputVal, setInputVal] = useState<string>('')
const [list, setList] = useState<string[]>([])
const [completedTask, setcompletedTask] = useState<string[]>([]);
const [isVisible, setIsVisible] = useState(false)

// copy list into variable
const CopyList:string[] = [...list]
const CopycompletedTask:string[] = [...completedTask]

// Default HeadeingS
const Heading = <h5>No Task</h5>

// Task Button Show Or HIde
const showTaskButton = <button className='showTaskButton'  onClick={()=> setIsVisible(!isVisible)}>{!isVisible?'Show Completed Task': 'Hide Completed Task'}</button>




const inputValue = (e:string) => {
  setInputVal(e) // String value Input
}

const addTask = () => {
  const inputElenment = document.getElementById('myInput')
  if(inputVal !== ""){
  setList([...list , inputVal])
  setInputVal("") 
  inputElenment?.focus()

  }
}

const completeTask= (index:number)=>{
  
  let removedTask:string[] = CopyList.splice(index,1)
  setList(CopyList)

  removedTask.map((e)=>{
  setcompletedTask([...completedTask , e])
  
})
}




const removedTaske = (index:number)=>{

  CopycompletedTask.splice(index,1)
  
setcompletedTask(CopycompletedTask)

}



return (


<div className="container">
<h1>Todo List App</h1>


<div className="inputButton">
<input
id='myInput'
type="text"
placeholder='Enter Your Taske Here'
value={inputVal}
onChange={(e)=>{inputValue(e.target.value)}
}/>

<button onClick={addTask}>Add Task</button>

</div>



<div className="list">
<ul>
{list.length == 0 ? Heading:""}

{list.map((item,index)=><div key={index} className='checkbtn'><li>{item}</li><button onClick={()=>completeTask(index)}><FontAwesomeIcon icon={faCheck}/></button></div>)}
</ul>
</div>

{/* Completed Task Section */}
{completedTask.length == 0 ? "":showTaskButton}

<div className={isVisible ? 'list' : 'hide-div'}>
<ul>
{completedTask.map((task,i)=><div className='checkbtn '><li>{task}</li>
<button id='deleteTaskbtn'onClick={()=>removedTaske(i)}><FontAwesomeIcon icon={faTrash}style={{color: "#ff0a0a",}} /></button></div>)}

</ul>
</div>


<h4>Todo List App Designed And Developed By Muhammad Shahroz</h4>
</div>

   
  )
}

export default App
