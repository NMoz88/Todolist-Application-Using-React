import React, { useState } from "react";


const List = () => {
	const [tareas, setNueva] = useState ([]);
	const [input, setInput] = useState ("");
	
	return (
		<div className="container">
			
			<h1>Todo List</h1>
			<form onSubmit={(event)=>{
				event.preventDefault();
				setNueva([...tareas,event.target[0].value])
				setInput("")
			}}>
				<li>
				<input 
					placeholder="ingrese su tarea" 
					value={input} onChange={(event)=>{setInput(event.target.value)}}
				/>
				</li>
			</form>
			
			
			{tareas.map((value,index,arr)=>{
				return <li key={index}>{value} 
					<i  class="far fa-trash-alt" 
						onClick={() => setNueva(tareas.filter((value, currentIndex) => index != currentIndex))}>
						
					</i></li>		
			})}
			<div>{tareas.length} task</div>
		</div>
		
	);
};

export default List;