function boton(){
	var enviarDa = document.getElementById("1").value;
	var enviarDat = document.getElementById("11").value;
	var enviarDato = document.getElementById("111").value;

	var enviarD = document.getElementById("2").value;
	var enviarDt = document.getElementById("22").value;
	var enviarDto = document.getElementById("222").value;


	function Pokemon(nombre, color, poderDeAtaque){
		this.nombre = nombre;
		this.color = color;
		this.nivelDeAmistad = 0;
		this.vida = 100;
		this.poderDeAtaque = poderDeAtaque;
		this.mostrarPokemon = function(){
			return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
		}
		this.aumentarAmistad = function(valor){
			this.nivelDeAmistad = this.nivelDeAmistad + valor;
		}
		this.atacar = function(pokemon){
			var res = pokemon.vida - this.poderDeAtaque;
			return res;
		}
	}

	var po1 = new Pokemon(enviarDa, enviarDat, enviarDato);
	var po2 = new Pokemon(enviarD, enviarDt, enviarDto);
	var po12 = po1.atacar(po2);

	var mostrarPO1 = document.getElementById("mosPO1");
	var mostrarPO2 = document.getElementById("mosPO2");
	var respuesta = document.getElementById("res");
	
	mosPO1.innerHTML = "<br>Pokemón 1: " + enviarDa + "<br>Color: " + enviarDat + "<br>Poder Ataque: " + enviarDato;
	
	mosPO2.innerHTML = "<br>Pokemón 2: " + enviarD + "<br>Color: " + enviarDt + "<br>Poder Ataque: " + enviarDto;
	
	respuesta.innerHTML = "!Super pelea!<br> Pokemon " + enviarDa + " destruye le resta la vida " + enviarD + " en <br>" + po12;

}

