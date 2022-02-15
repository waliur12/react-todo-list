import { useState } from 'react';
// import logo from './logo.svg';
import Header from  './components/Header';
import Tasks from  './components/Tasks';
import AddTask from  './components/AddTask';

// let name='Lima';
// let person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };
// let { firstName, lastName } = person;
function App() {

  const [tasks,setTasks]=useState(
    [
      {    
        'id':1,
        'text':'Doctors Appointment',
        'day':'Feb 5th at 2:30pm',
        'reminder':true,
    },
    {    
      'id':2,
      'text':'Meeting at School',
      'day':'Feb 6th at 1:30pm',
      'reminder':true,
    },
    {    
      'id':3,
      'text':'Food Shopping',
      'day':'Feb 5th at 2:30pm',
      'reminder':false,
    }
    ]
  )

  const deleteTask=(id)=>{
// console.log('delete',id);
setTasks(tasks.filter((task)=>task.id !==id))
  }

  const toggoleReminder=(id)=>{
// console.log(id);
setTasks(
  tasks.map((task)=>
  
  task.id ===id?{...task,reminder:!task.reminder}:task
))
  }
  return (
    // <div className="App">
    <div className="container">
      {/* <Header /> */}
      <Header title={'tests'}/>
      <AddTask/>
      {/* <h1>{firstName} {lastName}</h1> */}

    {tasks.length >0?<Tasks tasks={tasks} onDelete={deleteTask} onToggole={toggoleReminder}/>:'No task to show'}
    </div>
    // </div>
  );
}

export default App;
