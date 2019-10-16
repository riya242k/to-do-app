
// // var form=document.forms['f1'];
// // form.addEventListener('submit',function(e)
// // {
// //     e.preventDefault();
// //     
// //     var li = document.createElement("LI");   
// //     var movie=document.createElement('span');
// //     var del=document.createElement('span');
// //     list.appendChild(movie);
// //     list.appendChild(del);
// //     list.appendChild(li); 
// //     movie.textContent=val;
// //     del.textContent='delete';
// //     movie.classList.add('name');
// //     del.classList.add('delete');
// // });
// function add()
// {

//     var val =form.querySelector('input[type="text"]').value;
//     var movie=document.createElement('span');
    
//     movie.textContent=val;
//          del.textContent='delete';
        
//     list.appendChild(movie);
//          list.appendChild(del);
//          list.appendChild(li); 
   
//     // var a= document.getElementById("moviea").value;

//     // var textnode = document.createElement(a);        
//     // node.appendChild;      

//     // document.getElementById("myList").appendChild(node);

// }

// function addItem(){
//     var ul = document.getElementById("list");
//   var candidate = document.getElementById("candidate");
//   var li = document.createElement("li");
//   li.setAttribute('id',candidate.value);
//   li.appendChild(document.createTextNode(candidate.value));
//   ul.appendChild(li);
// }

//DELETE ELEMENT
var listt = document.querySelector('#b ul');

listt.addEventListener('click', function(e){
    if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
      //console.log(e.target);
      var li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
      //console.log(li);
      //li.parentNode.removeChild(li);
      list.removeChild(li);
 
    }
  })

//SHOW HIDE LIST
function showhide()
 { 
     var checkbox=document.getElementById("check");
     var list=document.getElementById("myList");
     if(checkbox.checked == true)
     {
         list.style.display= "none";

     }
     else
     {
         list.style.display= "block";
     }
    } 



 
