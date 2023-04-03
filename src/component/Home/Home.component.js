
import './Home.styles.css';
import Task from '../Task/Task.component';
import { useEffect, useState } from 'react';
const Home = ()=>
{
    const initialArr = localStorage.getItem("Tasks")?JSON.parse(localStorage.getItem("Tasks")):[];

    const [Tasks,setTasks] = useState(initialArr);
    const [Title , setTitle] =useState("");
    const [Discreption , setDiscreption] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        setTasks([
            ...Tasks,
            {
                Title:Title,
                Discreption:Discreption,
            },
        ]);
        
    }
    const deleteTask =(index)=>{
        const filteredArr = Tasks.filter((val,i)=>{
            return i!==index;
        });
        setTasks(filteredArr);
    };
    useEffect(()=>{
        localStorage.setItem("Tasks",JSON.stringify(Tasks));

    },[Tasks]);
    return(
        <div className='container'>
            <h1>Daily Routine</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='title' 
                    value={Title} onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea placeholder='Discreption'
                 value={Discreption} onChange={(e)=>setDiscreption(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
            {Tasks.map((item,index)=>(
                <Task key={index} 
                Title={item.Title}
                 Discription={item.Discreption}
                    deleteTask={deleteTask}
                    index={index}
                 />
            ))}
        </div>
    );

}
export default Home;