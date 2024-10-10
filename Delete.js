import { useEffect, useState } from "react";

function Delete() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tasks",{method:"delete"})
        .then(res => res.json())
        .then(data => setTasks(data));
    }, []);

    const deleteTask = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
        .then(res => {
            if (res.ok) {
                setTasks(tasks.filter(task => task._id !== id));
            } else {
                console.error('Failed to delete the task');
            }
        });
    };

    return (
        <div>
            <button>display</button>
            <button>delete</button>
        </div>
    );
}

export default Delete;
