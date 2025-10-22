	function esBisiesto(year){
		if(year == undefined) throw new Error("Debe especificarse el año");
		if(year < 0) throw new Error ("El año debe ser positivo");
		if(year % 400 == 0) {
			return true;
		}
		if(year % 4 == 0 && year % 100 != 0) {
			return true;
		}
		return false;
	}