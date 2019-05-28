function teste() {
	

	var pai=document.getElementById("dados");
	
	var chekprod = document.createElement('input');
	 
	var pula = document.createElement('br');
	
	var produto = document.getElementById("prodc");
	var unidade = document.getElementById("unid");
	var quantidade = document.getElementById("qtd");
	var valor = document.getElementById("vlr");
	
	var label = document.createElement('label');
	label.className ="invisivel";
	label.id="id";
	
	//atributos
	chekprod.type="checkbox";
	chekprod.name="item";
	chekprod.value= "Produtos";
	chekprod.id = "id"; 
	
	
	label.htmlFor ="id";
	label.appendChild(document.createTextNode(produto.value+"   -    "+unidade.value+"   -    "+quantidade.value+"   -    "+"R$"+valor.value));
	
	pai.appendChild(chekprod);
	pai.appendChild(label);
	
 
	pai.appendChild(pula);


	
}


function total() { 
	var valor = document.getElementsByClassName("invisivel");
	
	var total = 0;
	
	for(var i = 0; i < valor.length; i++)
{
	
    var item = valor[i].innerText;
	var numero = item.substring(item.indexOf("$") + 1);
	var numeroInt=parseInt(numero);
	total = total + numeroInt;
   console.log(total);
}

alert("O total do seu pedido é: $"+total);


}


