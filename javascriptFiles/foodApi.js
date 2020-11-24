$(function(){
    $('#searchform').submit(function(){
        //get current value and add to items list
        var searchterms = $("#searchterms").val();
        //call the search results function
        getResultsFromFoodAPI(searchterms);
        return false;
    });
});

function getResultsFromFoodAPI(searchterms) {
    //build url for the request
        var url = "https://api.spoonacular.com/food/products/search?query=" + searchterms + "t&apiKey=432cc93f82914c57a34f8784ea377127&s="
        //use jquery JSON shortcut
        $.getJSON(url, function(jsondata){
            //handles the results 
            addResultsTitleDiv(jsondata);
            });
}

function addCuisine(jsondata) {
    $('#results').empty();
    for (var i=0; i<10; i++){
        var query = jsondata.Search[i].Query;
        $('#results').append("<li>"+query+"</li>");
    }
}

function addResultsTitleDiv(jsondata){
    $('#results').empty();
    for(var i=0; i<10;i++){
        var query = jsondata.Search[i].Query;

        var food = "<div>"+
                        "<h1>"+query+"</h1>"+
                    "</div>"
        $('#results').append(food);
    }
}

function addItemToList (item){
    // adds the item to the list
    $("#results").append("<li>"+item+"</li>");
}
    
