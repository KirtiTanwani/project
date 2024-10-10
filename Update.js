import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function Update() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tasks")
        .then(res => res.json())
        .then(data => setTasks(data));
    }, []);

    const updateTask = (id, updatedTask) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
        .then(res => res.json())
        .then(data => {
            setTasks(tasks.map(task => (task._id === id ? data : task)));
        });
    };

    const handleUpdateClick = async (task) => {
        const { value: newTask } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Update Task',
            inputPlaceholder: 'Enter your updated task here...',
            inputAttributes: {
                'aria-label': 'Enter your updated task here...'
            },
            showCancelButton: true
        });
        if (newTask) {
            updateTask(task._id, { ...task, task: newTask });
            Swal.fire('Updated!', 'Your task has been updated.', 'success');
        }
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        {task.task} 
                        <button onClick={() => handleUpdateClick(task)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Update;
