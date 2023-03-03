function calcular() {
	let peso = (document.querySelector('#peso').value);
	let altura = (document.querySelector('#altura').value);
	let resultado = document.querySelector('#resultadoImc');
	let imc = (peso / (altura * altura)).toFixed(1);

	if (altura == "" && peso == "") {
		resultado.innerHTML = 'Preencha todos os campos.';
	} else {
		let classification = '';

	if (imc < 18.5) {
		classification = 'Abaixo do peso';
	}
	else if (imc >= 18.5 && imc <= 24.9) {
		classification = 'Peso normal';
	}
	else if (imc >= 25.0 && imc <= 29.9) {
		classification = 'Sobrepeso';
	}
	else if (imc >= 30.0 && imc <= 39.9) {
		classification = 'Obesidade';
	}
	else {
		classification = 'Obesidade grave';
	}
	resultado.innerHTML = `IMC: ${imc} (${classification})`;
} 
}