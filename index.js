//function for operators
var match=false;
function numbers(i){
var x=i;
    if(x==='+'||x==='-'||x==='*'||x==='/'){
       if(match===false){
        document.getElementById('input').value+=i;
            match=true;
            point=true;
       }}
}

//function for numbers
function number(num){
    var pick_number=document.getElementById('input'); 
    pick_number.value +=num;
    match=false;
}

//function for decimal
var point=true;
function decimal(k){
    var y=k;
    if(y==='.'){
        if(point===true){
            document.getElementById('input').value+=k;
        point=false;
    }
   }
  }

// function for clear screen
function clearScreen(){
document.getElementById('input').value=" ";
point=true;
}

//function for delete button
function deleteBtn(){
    var pick_number=document.getElementById('input');
    var dB=pick_number.value;
    if(dB.length>0){
        dB= dB.slice(0,dB.length-1);
        pick_number.value= dB;
    }
}

//function for brackets
var i=false
function brackets(){
    var pick_number =document.getElementById('input');
    if(i==0){
        pick_number.value += '(';
        i=true;
    }else if(i==1){
        pick_number.value += ')';
        i=false;
    }
    point=true;
}

//function for result
function result(){
    var pick_number =document.getElementById('input');
    ans =+eval(pick_number.value);
    document.getElementById('input').value = ans;
}

