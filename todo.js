let myarray= [];
 let datearray=[];




function moye(i){
    console.log("Printing it");

    myarray.splice(i,1); datearray.splice(i,1);console.log(i);my();
    
}
function my(){
    let todoListHtml='';
 for( let i=0;i<myarray.length;i++){
     display=myarray[i];
    let datedisplay=datearray[i];
    let html = ` <p> ${display} ${`---------------`}      ${datedisplay}
     <button class="del_button" onclick =  "moye(${i})">  DELETE  </button> 
     </p>
      <br>` ;
     // Delete_button.onclick= function(){
     // const after=document.getElementById("Delete_button");
     // after= myarray.splice(${i},1) datearray.splice(${i},1);
     // } 
     todoListHtml += html;
     
    
    }
    
    console.log(todoListHtml);
    document.querySelector(`.line`)
    .innerHTML=todoListHtml; 
 } 

//="myarray.splice(${i},1) datearray.splice(${i},1);
start.onclick= function(){
    let todoListHtml='';
    //my();
    //function my(){
    //let todoListHtml='';
 const input= box1.value;
 const dateInput= datebox.value;
myarray.push(input);
datearray.push(dateInput);
console.log(myarray);

my();




// Delete_button.onclick = function() {
  //  myarray.splice(i,1);
    //datearray.splice(i,1);
     //my();
   // } 


}


