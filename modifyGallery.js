function validate(){
console.log("hh");
    if(document.myform.url.value=="")
alert("please fill url");

if(document.myform.name.value=="")
alert("please fill name");

if(document.myform.op.value=="update"  && document.myform.url2.value=="")
alert("please fill url2");
if(document.myform.date.value=="")
alert("please fill date");
if(document.myform.info.value=="")
alert("please fill info");

}