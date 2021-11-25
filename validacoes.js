/*################
Inicio: Função de verificação do formulario
*/
function verificar(){
   var nome = document.getElementById('nome').value;
   var email = document.getElementById('email').value; 
   var cpf = document.getElementById('cpf').value; 
   var sobrenome = document.getElementById('sobrenome').value; 
   var dataNascimento = document.getElementById('dataNascimento').value; 
   var genero = document.getElementById('genero').value; 
   var nacionalidade = document.getElementById('nacionalidade').value; 
   var senha = document.getElementById('senha').value; 
   var idade = document.getElementById('idade').value; 

   if(!nome || !email || !cpf || !sobrenome || !dataNascimento || !gênero || !nacionalidade || !senha || !idade ){
       alert("Campos não preenchidos, favor preenchê-los")
   } else{
       alert("Campos preenchidos com sucesso");

   }
 }
 /*#############
 Final: Função de verificação do formulario
 */ 
 function maskFone() {
	var numeroAtual = document.getElementById('fone').value;
	const isCelular = numeroAtual.length === 11;
	const isFone = numeroAtual.length === 10;
	let numeroAjustado;
	if (isCelular) {
		const part1 = numeroAtual.slice(0,2);
		const part2 = numeroAtual.slice(2,7);
		const part3 = numeroAtual.slice(7,11);
		numeroAjustado = `(${part1}) ${part2}-${part3}`
	} else if (isFone) {
		const part1 = numeroAtual.slice(0,2);
		const part2 = numeroAtual.slice(2,6);
		const part3 = numeroAtual.slice(6,10);
		numeroAjustado = `(${part1}) ${part2}-${part3}`
	} else {
		numeroAtual.value = ' ';
		alert("Número informado é incorreto, favor verificar!")
	}
	fone.value = numeroAjustado;
}