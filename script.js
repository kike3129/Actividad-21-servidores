let x = 0;
let y = 0;
let cuadradito = document.getElementById('cuadrado');

function movimiento(event){
	if(event.keyCode == '39'){//derecha
		x= x + 100;
		cuadradito.style.left = x + 'px';
	}

	if(event.keyCode == '37'){//Izquierda
		x= x - 100;
		cuadradito.style.left = x +'px';	
	}
	
	if(event.keyCode == '38'){//arriba
		y = y + 100;                               
		cuadradito.style.top = (-y) + 'px';
	}

	if(event.keyCode == '40'){//abajo
		y = y - 100;                            
		cuadradito.style.top = (-y) + 'px';
	}

}

window.onkeyup = movimiento;style.top = (-y) + 'px';
	
	if(event.keyCode == '40'){//abajo
		y = y - 100;                            
		move.style.top = (-y) + 'px';
	}

window.onkeyup = move;