$(document).ready(function(){
	
	setContent("about");
	
	$("#menu li a").click(function(event){
		event.preventDefault();
		
		setContent($(this).attr('href'));
    });
	
	setAllTypeToLoad();
	
	getDataFromFile(json_doc_path);
	
	setInterval("getDataFromFile('"+json_doc_path+"')", 5000);
});

function setContent(content_name)
{
	$.ajax({
		cache: false,
		type: "GET",
		dataType: "html",
		url: "html/" + content_name + ".html"
	})
	.done(function(resp){
		$("#main_section").html(resp);	
		getDataFromFile(json_doc_path);
	})

}