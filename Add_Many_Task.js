import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Add_Many_Task() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    const handleClick = async () => {
        if (!areTasksUnique(tasks)) {
            error();
            return;
        }
        
        await Swal.fire({
            position: "center",
            icon: "success",
            title: "Task added. You are being redirected.",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            navigate('/');
        }, 1500);
    };
    const error=async ()=>{
       
        Swal.fire({
        icon: "error",
        title: "Same",
        text: "two or more task are entered repeatedly",
        });
        setTimeout(() => {
            navigate('/addmany');
        }, 1500); 
    }
    function areTasksUnique(tasks) {
        const taskSet = new Set(tasks);
        return taskSet.size === tasks.length;
    }

    const handleChange = (index, event) => {
        const newTasks = [...tasks];
        newTasks[index] = event.target.value;
        setTasks(newTasks);
    };

    return (
        <div className="container">
            {[...Array(8)].map((_, index) => (
                <div className='row' key={index}>
                    <label>Task{index + 1}:</label>
                    <input
                        type='text'
                        placeholder='Enter your task'
                        onChange={(e) => handleChange(index, e)}
                    />
                </div>
            ))}
            <div className='row'>
                <button onClick={handleClick}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Add_Many_Task;
