$(function(){
    //document ready
    alert("document ready");
    
    $('#searchform').submit(function(){
        //get current value and add to items list
        var searchterms = $("#searchterms").val();
        //call our search youtube function
        getResultsFromFoodAPI(searchterms);
        return false;
    });
});

function getResultsFromFoodAPI(searchterms) {
    //call youtube API using AJAX
    //build url for the request
    var url = "https://api.spoonacular.com/food/products/search?query=" + searchterms + "t&apiKey=432cc93f82914c57a34f8784ea377127&s="
    //use jquery json shortcut
    $.getJSON(url, function(jsondata){ 
        //handle the results
        prettyPrintJSON(jsondata);
    });
}

function prettyPrintJSON(jsondata){
    //print the prettyJSON to the screen
    var pretty = JSON.stringify(jsondata, null, 4);
    $('#resultsbox').append("<pre>" + pretty + "</pre>");
}