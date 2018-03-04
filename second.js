function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status== "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

getfile("second.json",function(text){
   let data=JSON.parse(text);
   console.log(data);
   //console.log("hello veena");
   basicdata(data.basics);
 });

function basicdata(basic){
  var Profile=document.getElementById("basics");
  var name=document.createElement("h2");
  name.innerHTML=basic.name;
  profile.appendChild(name);
  var phone=document.createElement("h3");
  phone.innerHTML=basic.phone;
  profile.appendChild(phone);
  var email=document.createElement("h4");
  email.innerHTML=basic.email;
  profile.appendChild(email);
  
}
