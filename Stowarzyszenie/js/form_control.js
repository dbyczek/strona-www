function initFormSubmitFunctional()
{
	$("form").submit(function(event) {
		event.preventDefault();

		setVendorToLoad($("#vendor_textbox").val()); 
		
		setNameToLoad($("#search_textbox").val());

		setTypeToLoad($("input[type=radio][name=typ]:checked").val());


		getDataFromFile(json_doc_path);
	});
}

