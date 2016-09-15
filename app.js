var randomWiki = "https://en.wikipedia.org/wiki/Special:Random";
var searchWiki = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Cextracts&indexpageids=1&pageids=&generator=search&inprop=url&exsentences=2&exlimit=10&exintro=1&exsectionformat=plain&excontinue=0&gsrnamespace=0&gsrsearch=";

var pageIds = []
    ,callBck = "&callback=?"
    ,search = ""
    ,mySearchQuery = "";
$(document).ready(function() {
//**randomWiki search link-----------------------------
$(".randQuote").attr("href", randomWiki);
// ----------------------------------------------------

//**pressing enter in search box triggers search button
 $("#myTextField").keypress(function(e) {
           if(e.which == 13) {
                $('#searchBtn').click();//Trigger search button click event
          }
 });
// ----------------------------------------------------

//**search button is triggered
$("#searchBtn").on("click",function(){
  
  //empties mySearchQuery if enter key or search button is pressed more than once
  mySearchQuery = '';
  
  //value from the search box is put into search variable
  search = document.getElementById("myTextField").value;
       
  $.getJSON( searchWiki + search + callBck , function(data){
          
    $.each(data.query.pages,function(k,v){
    
    //string concat of title and summary wrapped in a href link to the wiki page
		mySearchQuery += "<a href=" + v.fullurl +" target='_blank'><p id='headline'>" + v.title +"</p></br>"+ v.extract +"</a>" + "</br>";
		
    });
		
    //writing to id element 'title' after loop
    $('#title').html(mySearchQuery);  
    
  });
});
});
     
