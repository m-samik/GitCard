function html2canvas(){
    html2canvas(document.getElementById("text")).then(function(canvas) {
        document.body.appendChild(canvas);
    });
}
function getdetails(){
    var uname= document.getElementById("unname").value;
    var name= document.getElementById("name");
    var image= document.getElementById("image");
    var following=document.getElementById("following");
    var prepo=document.getElementById("prepo");
    var lupdated = document.getElementById("lupdated");
    var data = new XMLHttpRequest();
    data.open("GET","https://api.github.com/users/"+uname,true);
    data.send();
    data.onload=function(){
        var response=data.responseText;
        var ot= JSON.parse(response)
        name.innerHTML=ot.name;
        following.innerHTML=ot.following;
        image.src=ot.avatar_url;
        prepo.innerHTML=ot.public_repos;
        console.log(ot)
        lupdated.innerHTML=ot.updated_at;
    }
    
}

