function deleteLastNum(total){
	var last_value=0;
	var new_value="";

	last_value=total.toString().split("");
	for (var i = 0; i < total.toString().split("").length-1; i++) {
		new_value+=last_value[i];
	};
	total=parseInt(new_value);
	new_value="";
	last_value=0;
	return total;
}

$(document).ready(function() {
	var total = "";
	
	var trigonometry=false;
	var ans=false;
	var aux_total=0;
	var suprimir=false;
	var value_trig=0;

	$(".button").click(function(){
		if ($(this).text() != "AC" && $(this).text() != "=")	{
			$("#textWindows").append($(this).text());
			var valor = $(this).attr("id");
			if(valor=="zero"){
				valor="0";
			}else if(valor=="Pi"){
				valor=Math.PI;
			}else if(valor=="ans"){
				ans=true;
			}else if(valor=="arrow"){
				total=deleteLastNum(total);
				$("#textWindows").text(total);		
			} 
			if(trigonometry){
				value_trig += valor;
			}else 
				total += valor;			
		}

		if ($(this).text() == "=") {
			if(trigonometry){
				total=trigonometria(value_trig);
				$("#textWindows").text(total);
				trigonometry=false;
				value_trig=0;
			}else{
				$("#textWindows").text(eval(total));
				total=eval(total);
			}
		}

		if($(this).text() == "AC") {
			$("#textWindows").text("");
			aux_total=total;
			total="";
			value_trig=0;
		}
		if($(this).text() == "Ans"){
			$("#textWindows").text(aux_total);
			total=aux_total;
		}
	});
});

