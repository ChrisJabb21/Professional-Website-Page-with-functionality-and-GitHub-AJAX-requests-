/*let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("getgit").innerHTML = gitObject.name;
  }
};
gitHubRequest.open("GET","https://api.github.com/users/ChrisJabb21/repos",true);
gitHubRequest.send();
*/

function loadRepo(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           results = JSON.parse(this.responseText);
           for(var i = 0; i < results.length; i++){
               console.log(results[i].name);
                var ul = document.getElementById("repositories");
                var li = document.createElement("LI");
                var a = document.createElement("a");

                li.appendChild(document.createTextNode(results[i].name))
                
                a.appendChild(li);
                a.setAttribute("href", results[i].html_url);
                ul.appendChild(a);


            }
        }
    }
    xhttp.open("GET", "https://api.github.com/users/ChrisJabb21/repos", true )
    xhttp.send();
}

$("document").ready(function(){
   $("a").hover(function(){ 
    $(this).css("font-size", "24px");
   }, function(){
    $(this).css("font-size", "14px");
   });
});



