function doCapture() {
	window.scrollTo(0, 0);

	// Convert the div to image (canvas)
	html2canvas(document.getElementById("card")).then(function (canvas) {

		// Get the image data as JPEG and 0.9 quality (0.0 - 1.0)
		console.log(canvas.toDataURL("image/jpeg", 0.9));
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

