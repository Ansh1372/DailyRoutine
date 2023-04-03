import './task.styles.css';
const Task=({Title,Discription , deleteTask , index})=>{
    return(
        <div className='task'>
            <div>
                <p>{Title}</p>
                <span>{Discription}</span>
            </div>
            <button onClick={()=>deleteTask(index)}>-</button>
        </div>
    );
}
export default Task;