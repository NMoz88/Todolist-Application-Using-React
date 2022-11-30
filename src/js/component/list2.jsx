import React, { useState }  from "react";

const List2 = () => {
    const [tareas, setNueva] = useState ("");
    const [todos, setTodos] = useState ([]);
    
        return (
		<div className="container">
           <h1>Todo List</h1>
		    <li>
				<input 
                    type="text"
					onChange={(event)=>{setNueva(event.target.value)}}
					value={tareas} 
					onKeyPress={(e)=> {
						if (e.key === "Enter") {
							setTodos(todos.concat([tareas]));
							setNueva("");
						}
					}}
					placeholder="ingrese su tarea">

				</input>
				
			</li>
            
			{todos.map((t)=>{
				<li>
					<i  class="far fa-trash-alt" ></i>
				</li>		
			})}
            <div>0 task </div>
		</div>
		
	);
}
export default List2;