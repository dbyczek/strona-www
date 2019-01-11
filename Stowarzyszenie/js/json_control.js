//NOTE: 
//stowarzyszenie_system_type = 0 -> all
//stowarzyszenie_system_type = 1 -> prezes
//stowarzyszenie_system_type = 2 -> członek
var stowarzyszenie_system_type = 0;
var stowarzyszenie_system_imie = "";
var stowarzyszenie_system_stanowisko = "";

var json_doc_path = "resources/stowarzyszenie.JSON";

function getDataFromFile(file_path)
{
	//START getJSON
	$.ajax({
		cache: false,
		type: "GET",
		dataType: "json",
		url: file_path
	})
	.done(function(json) {
		var list_rows = [];
		$.each(json.stowarzyszenie, function(key, val) {
			if(stowarzyszenie_system_type == 0 && 
			   val.stanowisko.includes(stowarzyszenie_system_stanowisko) &&
			   val.imie.includes(stowarzyszenie_system_imie))
			{
				var row = "";
				row += "<DIV class='div_table_column_1'>" + val.imie + "</DIV>";
				row += "<DIV class='div_table_column_2'>" + val.nazwisko + "</DIV>";
				row += "<DIV class='div_table_column_3'>" + val.stanowisko + "</DIV>";
				row += "<DIV class='div_table_column_4'>" + val.telefon + "</DIV>";
				row += "<DIV class='div_table_column_4'>" + val.e-mail + "</DIV>";
				list_rows.push(row);
			}
			
			if(stowarzyszenie_system_type == 1 && 
			   val.type == "Prezes" && 
			   val.vendor.includes(stowarzyszenie_system_stanowisko) &&
			   val.name.includes(stowarzyszenie_system_imie))
			{
				var row = "";
				row += "<DIV class='div_table_column_1'>" + val.imie + "</DIV>";
				row += "<DIV class='div_table_column_2'>" + val.nazwisko + "</DIV>";
				row += "<DIV class='div_table_column_3'>" + val.stanowisko + "</DIV>";
				row += "<DIV class='div_table_column_4'>" + val.telefon + "</DIV>";
				row += "<DIV class='div_table_column_4'>" + val.e-mail + "</DIV>";
				list_rows.push(row);
			}
			
			if(stowarzyszenie_system_type == 2 && 
			   val.type == "Członek" && 
			   val.vendor.includes(stowarzyszenie_system_stanowisko) &&
			   val.name.includes(stowarzyszenie_system_imie))
			{
				var row = "";
				row += "<DIV class='div_table_column_1'>" + val.imie + "</DIV>";
				row += "<DIV class='div_table_column_2'>" + val.nazwisko + "</DIV>";
				row += "<DIV class='div_table_column_3'>" + val.stanowisko + "</DIV>";
				row += "<DIV class='div_table_column_4'>" + val.telefon + "</DIV>";
				row += "<DIV class='div_table_column_4'>" + val.e-mail + "</DIV>";
				list_rows.push(row);
			}
		});
        
		$("#table_body").html(list_rows.join(""));
	})
	.fail(function( jqxhr, textStatus, error ) {
			console.log(jqxhr);
			console.log(textStatus);
			console.log(error);
	});
	//END getJSON	
}

function setTypeToLoad(val)
{
	stowarzyszenie_system_type=val;
}

function setNameToLoad(val)
{
	stowarzyszenie_system_imie=val;
}

function setVendorToLoad(val)
{
	stowarzyszenie_system_stanowisko=val;
}

function setAllTypeToLoad()
{
	setTypeToLoad(0);
}

function setOnlyPrezesiTypeToLoad()
{
	setTypeToLoad(1);
}

function setOnlyCzlonkowieTypeToLoad()
{
	setTypeToLoad(2);
}