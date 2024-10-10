import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add_One_Task() {
    const [task, setTask] = useState('');
    const navigate = useNavigate();

    const handleClick = async () => {
        Swal.fire({
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
        title: "Empty",
        text: "Task is not been inserted!",
        });
        setTimeout(() => {
            navigate('/addone');
        }, 1500); 
    }
    return (
        <div className='container'>
            <div className='row'>
                <label>Task:</label>
                <input
                    type='text'
                    placeholder='Enter your task'
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className='row'>
                <button
                    onClick={() => {
                        if (task.trim() !== "") {
                            handleClick();
                        }
                        else{
                            error();
                        }
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default Add_One_Task;

