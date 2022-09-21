//onblur
//local variables and global variables
//reducing number of functions to a single function


var first_num = 0;
var second_num = 0;

function readFn(){

    first_num = parseInt(document.getElementById("num1").value);
}

function readSn(){
    second_num = parseInt(document.getElementById("num2").value);
}

/* function add(){

    var res = first_num + second_num    
    document.getElementById("result").value = res;
}

function substract(){

    var res = first_num - second_num    
    document.getElementById("result").value = res;
}

function multiply(){

    var res = first_num * second_num    
    document.getElementById("result").value = res;

}

function divide(){
    var res = first_num / second_num    
    document.getElementById("result").value = res;
} */

/* function resultVal(rstype){
    if(rstype == 'add'){
        var res = first_num + second_num  
    }
    if(rstype == 'sub'){
        var res = first_num - second_num  
    }
    if(rstype == 'mul'){
        var res = first_num * second_num  
    }
    if(rstype == 'div'){
        var res = first_num / second_num  
    }
    document.getElementById("result").value = res;
} */

function resultVal(rstype){
    if(rstype.target.value == 'add'){
        var res = first_num + second_num  
    }
    if(rstype.target.value == 'sub'){
        var res = first_num - second_num  
    }
    if(rstype.target.value == 'mul'){
        var res = first_num * second_num  
    }
    if(rstype.target.value == 'div'){
        var res = first_num / second_num  
    }
    document.getElementById("result").value = res;
}
