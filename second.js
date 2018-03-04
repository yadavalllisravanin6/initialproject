function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", file,true);
  xhr.onreadystatechange= function(){
    if(xhr.readyState === 4 && xhr.status== "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

getfile("second.json",function(text){
   let data=JSON.parse(text);
   console.log(data);
   //basicdata(data.basics);
   //eduinfo(data.education);
   skills(data.skills);
 });
//var main=document.querySelector('.flex-parent');
var main=document.getElementById("sravs");
//function basicdata(basic){
//  var Profile=document.getElementById("basics");
  var right=document.createElement("div");
  right.classList.add("content-child");
  main.appendChild(right);
//   var name=document.createElement("h2");
//   name.innerHTML=basic.name;
//   profile.appendChild(name);
//   var phone=document.createElement("h3");
//   phone.innerHTML=basic.phone;
//   profile.appendChild(phone);
//   var email=document.createElement("h4");
//   email.innerHTML=basic.email;
//   profile.appendChild(email);
//
// }

// //append
// main.appendChild(right);
// function eduinfo(education){
// right.classList.add("content-child");
// //education div
// var e1=document.createElement("div");
// e1.classList.add("edu");
// right.appendChild(e1);
// var h1=document.createElement("h1");
// h1.setAttribute("id","heading");
// h1.textContent="EducationDetails";
// h1.appendChild(document.createElement("HR"));
// //appendChild
// e1.appendChild(h1);
//   for(i in education){
//     //for all courses
//    var h2=documet.createElement("h2");
//    h2.classList.add("edu1");
//    h2.textContent=education[i].course;
//    //appendChild
//    h1.appendChild(h2);
//    //college creation
//    var h3=documet.createElement("h3");
//    h3.classList.add("edu1");
//    h3.textContent=education[i].college;
//    //appendChild
//    h2.appendChild(h3);
//    console.log(main);
//    //for getting data
//    var ul=document.createElement("ul");
//    ul.classList.add("edu3");
//    for(j in education.data){
//      var li=document.createElement("li");
//      li.textContent=education[i].data[j];
//      ul.appendChild(li);
//   }
  function skills(food){
    var table=document.createElement("table");
    var row="";
    for(var k=0; k<food.length; k++){
      row+="<tr><td>"+food[k].name+"</td><td>"+food[k].info+"</td></tr>";
    }
    table.innerHTML=row;
    right.appendChild(table);
  }
//}
