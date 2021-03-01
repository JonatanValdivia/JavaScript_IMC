//Pegando o id das inputs que estão na HTML. São elementos que serão usados
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
//Criando a função imc, que não terá parâmetros
function imc(){
	//As variáveis criadas abaixo, não precisam ser priadas fora da
	//função, na verdade, não é um bom procedimento criá-las dessa forma. 
	//Elas não podem ser de escopo global, mas local. Deve-se evitar 
	//variáveis globais
	const nome = document.getElementById('nome').value;
	//Para acessar o valor desses elementos, não em si os elementos:
	//nome.value = 'Jonatan Valdivia';
	/*Edit: para pegar diretamente o valor das inputs nome, altura e peso, e não os elementos inputs, deve-se usar o value: */
	const altura = document.getElementById('altura').value;
	const peso = document.getElementById('peso').value;
	const resultado = document.getElementById('resultado');
	
	//Antes de cálcular, é necessário saber se os campos estão preenchidos, deve-se fazer uma validação:
	
	if(nome !== '' && altura.value !== '' && peso !== '' ){
		const valorImc = (peso/(altura*altura));
		
		let classificacao = '';
		if(valorImc <= 18.5){
			classificacao = 'abaixo do peso!';
		} else if(valorImc >= 18.6 && valorImc <= 24.9){
			classificacao = 'Peso ideal! Parabéns!';	  
		} else if(valorImc >= 25.0 && valorImc <= 29.9){
			classificacao = 'Levemente acima do peso!';
		} else if(valorImc >= 30.0 && valorImc <= 34.9){
			classificacao = 'com obesidade grau I';
		} else if(valorImc >= 35.0 && valorImc <= 39.9){
			classificacao = 'com obesidade grau II';
		} else if(valorImc >= 40){
			classificacao = 'com obesidade grau III. Cuidado!';
		}
		
		resultado.textContent = `${nome}, seu imc é: ${valorImc.toFixed(2).replace('.',',')} e você está ${classificacao} `;
	}else{
		//Adicionando um texto pada a div resultado
		resultado.textContent = 'Preencha todos os campos!';
	}
	
	
	
}
//para aparecer na div resultado: 
var slider = document.getElementById("altura");
var output = document.getElementById("resultado");
output.innerHTML = slider.value;

slider.oninput = function() {
  resultado.textContent = `${altura.value}m`
}

var slider = document.getElementById("peso");
var output = document.getElementById("resultado");
output.innerHTML = slider.value; 

slider.oninput = function() {
  resultado.textContent = `${peso.value}kg`
}

//É desejado que esse 'calcular' escute quando alguém clicar nele. Então ele receberá o método addEventListener()
calcular.addEventListener('click', imc);

//Quando for clicado, execultará uma função chamada imc,
