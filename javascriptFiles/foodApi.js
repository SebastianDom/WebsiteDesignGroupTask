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
            console.log(jsondata);
            $('#results').empty();
            for (var i=0; i<jsondata.products.length; i++){
                var id = jsondata.products[i].title;
                $('#results').append("<li>"+id+"</li>");
            }
        });
}

function addResultsTitleDiv(jsondata){
    $('#results').empty();
    for(var i=0; i<10;i++){
        var title = jsondata.products[i].title;
        var image = jsondata.products[i].image;
    }
}

function addItemToList (item){
    $("#results").append("<li>"+item+"</li>");
}    
