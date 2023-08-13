document.addEventListener('DOMContentLoaded' , function() {

	function emptyTasksDelete() {
		let toRemove = document.getElementById('emptyTasks');
		if(toRemove != null) {
			toRemove.remove();
		}
	}

	function addNewTask() {
		// Lo primero que hago es guardarme el valor del input en una variable 
		let input = document.getElementById('userInput');
		let taskText = input.value;
		input.value = "";
		if(taskText != "") {
			emptyTasksDelete();
			// Ahora creo el elemento p que va a tener el texto
			let pElement = document.createElement('p')
			pElement.textContent = taskText;
			// Ahora creo el div que va a contener al p y guardo el p adentro
			let textDiv = document.createElement('div');
			textDiv.className = 'textDiv';
			textDiv.appendChild(pElement);
			// Ahora creo el div de los botones
			let buttonDiv = document.createElement('div');
			buttonDiv.className = 'buttonDiv';
			// Ahora creo los botones y se los agrego
			let editButton = document.createElement('button');
			editButton.className = 'buttons';
			editButton.textContent = 'Editar';
			let deleteButton = document.createElement('button');
			deleteButton.className = 'buttons';
			deleteButton.textContent = 'Eliminar';
	 		let completeButton = document.createElement('button');
			completeButton.className = 'buttons';
			completeButton.textContent = 'Completado';
			buttonDiv.appendChild(editButton);
			buttonDiv.appendChild(deleteButton);
			buttonDiv.appendChild(completeButton);
			// Ahora el div que va a contener el div de los botones y el div del texto p
			let taskDiv = document.createElement('div');
			taskDiv.className = 'tasksDiv';
			taskDiv.appendChild(textDiv);
			taskDiv.appendChild(buttonDiv);
			// Ahora le agrego esto al div de clase tasks
			let tasks = document.getElementById('tasks');
			tasks.appendChild(taskDiv);
		}
	} 
/*
	function deleteTask(button) {
		let toDelete = (button.parentNode).parentNode;
		toDelete.remove();
		let tasks = document.getElementById('tasks');
		if(tasks.children.length == 0) {
			let elem = document.createElement('h2');
			elem.textContent = "No tienes ninguna tarea pendiente, andá a mirar Los Simpsons";
			tasks.appendChild(elem);
		}
	}
*/
	function deleteTask(button) {
    let toDelete = button.closest('.tasksDiv'); // Corrección aquí
    toDelete.remove();
    let tasks = document.getElementById('tasks');
    if (tasks.children.length == 0) {
        let elem = document.createElement('h2');
        elem.textContent = "No tienes ninguna tarea pendiente, andá a mirar Los Simpsons";
        elem.id = 'emptyTasks';
        tasks.appendChild(elem);
    }
    let completeTasks = document.getElementById('completeTasks');
    if (completeTasks.children.length == 0) {
        let elem = document.createElement('h2');
        elem.textContent = "No tienes ninguna tarea completada aún, ¡Ponete las pilas hijo de puta!";
        elem.id = 'emptyTasks2';
        completeTasks.appendChild(elem);
    }
}

/*
	const buttons = document.getElementsByClassName('buttons');


	for (let i = 0; i < buttons.length; i++) {
	    buttons[i].addEventListener('click', function(event) {
	        const target = event.target;

	        if (target.textContent === 'Agregar') {
	        	addNewTask();
	        } 
	    });
	}

})
*/

	function addCompleteTask(button) {
		let completeTask = button.closest('.tasksDiv');
		let completeTasksDiv = document.getElementById('completeTasks');
		console.log(completeTasksDiv.children);
		if(completeTasksDiv.children.length == 1) {
			let toDelete = document.getElementById('emptyTasks2');
			if(toDelete != null) {
				toDelete.remove();
			}
			completeTasksDiv.appendChild(completeTask);
		} else {
			completeTasksDiv.appendChild(completeTask);
		}
		
	}

	document.addEventListener('click', function(event) {
		let button = event.target;
		if(button.textContent === 'Agregar') {
			addNewTask();
		} else if (button.textContent === 'Eliminar') {
			console.log('hola');
			deleteTask(button);
		} else if (button.textContent === 'Completado') {
			addCompleteTask(button);
		}
	});

});