// link de la paleta de colores: https://paletadecolores.com.ar/paleta/27191c/2d3839/114d4d/6e9987/e0e4ce/

const container = document.getElementsByClassName('container');
let numberOfTasks = -1;

function addNewTask() {
	// Lo primero que hago es guardarme el valor del input en una variable 
	let input = document.getElementById('userInput');
	let taskText = input.value;
	input.value = "";
	if(taskText != "") {
		// lo primero que hago es eliminar el h2 que dice que no hay tareas pendientes
		let emptyTasks = document.getElementById('emptyTasks');
		if(emptyTasks !== null) {
			emptyTasks.remove();
		}
		numberOfTasks++;
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
/*		deleteButton.onclick = function() {
			deleteTask();
		}
		*/
 		let completeButton = document.createElement('button');
		completeButton.className = 'buttons';
		completeButton.textContent = 'Completado';
	/*	completeButton.onclick = function() {
			addCompleteTask();
			deleteTask();
		}*/
		buttonDiv.appendChild(editButton);
		buttonDiv.appendChild(deleteButton);
		buttonDiv.appendChild(completeButton);
		// Ahora el div que va a contener el div de los botones y el div del texto p
		let taskDiv = document.createElement('div');
		taskDiv.className = 'tasksDiv';
		taskDiv.id = numberOfTasks;
		taskDiv.appendChild(textDiv);
		taskDiv.appendChild(buttonDiv);
		// Ahora le agrego esto al div de clase tasks
		let tasks = document.getElementById('tasks');
		tasks.appendChild(taskDiv);
	}
}

function deleteTask() {
	let button = event.target;
	let toDelete = (button.parentNode).parentNode;
	toDelete.remove();
	let tasks = document.getElementById('tasks');
	if(tasks.children.length == 0) {
		let elem = document.createElement('h2');
		elem.textContent = "No tienes ninguna tarea pendiente, andá a mirar Los Simpsons";
		tasks.appendChild(elem);
	}
}

/*
function addCompleteTask() {
	let button = event.target;
	let toAdd = (button.parentNode).parentNode;
	let completeTasks = document.getElementById('completeTasks');
	let toDelete = completeTasks.children[0];
	toDelete.remove();
	completeTasks.appendChild(toAdd);
}


function deleteTask(taskNumber) {
	let tasks = document.getElementById('tasks');
	for(let i = 0; i < tasks.children.length; i++) {
		if(i == taskNumber) {
			let toDelete = tasks.children[taskNumber];
			if(toDelete != null) {
				toDelete.remove();
			}
		}
	}
}
*/


function addCompleteTask(element) {
  const completeTasks = document.getElementById('completeTasks');
  if (completeTasks) {
    completeTasks.appendChild(element);

  }
}

document.addEventListener('click', function(event) {
  const target = event.target;

  if (target.className === 'buttons') {
    if (target.textContent === 'Eliminar') {
      deleteTask(target.parentNode.parentNode);
    } else if (target.textContent === 'Completado') {
      const taskDiv = target.parentNode.parentNode;
      addCompleteTask(taskDiv);
    }
  }
});


/* COSAS QUE FALTAN

1) hacer que al apretar el boton 

