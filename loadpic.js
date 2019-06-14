var data='{"imginfo":[{"img":"mayur.jpg","name":"mayur"}]}';
function myFunction(){

var x=window.location.search;
var pic=JSON.parse(data);
    if(localStorage.getItem("pic")!=null)
   {  pic=(localStorage.getItem("pic"));
     pic=JSON.parse(pic);
    console.log(typeof pic);
 } 
if(x!=""){
x=x.substring(1);
var arr=x.split("&");
//console.log(arr[0]);
var op=arr[0].split("=");
var url=arr[1].split("=");
console.log(op);
var name=arr[2].split("=");
var url2=arr[3].split("=");
if(op[1]=="add")
{
add(url,name);
}
else if(op[1]=="remove")
remove(url,name);
else update(url,name,url2);
}

else{
display(pic);
}
}
function add(url,name){

    var pic=JSON.parse(localStorage.getItem("pic"));
    if(url[1]!=""){
    pic.imginfo.push({"img":url[1],"name":name[1]});

console.log(data);
    console.log(pic.imginfo[1].img);
    }
    pic=JSON.stringify(pic);
    localStorage.setItem("pic",pic);
    display(JSON.parse(pic));
}
function remove(url,name){
    var pic=JSON.parse(localStorage.getItem("pic"));
  
    for(var i=0;i<pic.imginfo.length;i++)
    {
        if(pic.imginfo[i].img==url[1]){
            pic.imginfo[i].img="";
        }
    }
    pic=JSON.stringify(pic);
    localStorage.setItem("pic",pic);
    display(JSON.parse(pic));
    
}
function update(url,name,url2){
    var pic=JSON.parse(localStorage.getItem("pic"));
  
    for(var i=0;i<pic.imginfo.length;i++)
    {
        if(pic.imginfo[i].img==url[1]){
            pic.imginfo[i].img=url2[1];
            pic.imginfo[i].name=name[1];
            console.log(url2[1]);
        }
    }
    pic=JSON.stringify(pic);
    localStorage.setItem("pic",pic);
    display(JSON.parse(pic));
}
function display(pic){
    

    for(var i=0;i<pic.imginfo.length;i++){
        var img=new Image();
        if(pic.imginfo[i].img=="")
        continue;
        img.src=pic.imginfo[i].img;
       img.alt=pic.imginfo[i].name;
        img.style.height="300px";
        img.style.width="300px";
        document.getElementById("pic").appendChild(img);
        }
}
