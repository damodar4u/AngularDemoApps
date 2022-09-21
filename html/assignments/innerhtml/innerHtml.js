function karthik(){
    var family=["dam","sur","kar","vig"];
    var str1="KARTHIK"
    var temp=""
/*         for (let index = 0; index < family.length; index++) {
        temp += family[index]+'<br>';  
        document.getElementById("vik").innerHTML = temp;         
    }  */

   // To lowercase
   // document.getElementById("vik").innerHTML = str1.toLowerCase();
   // what character is at a given postion in a string str1
   // document.getElementById("vik").innerHTML = str1.charAt(3);
   // what is the position of character T in string str1.
   
    document.getElementById("vik").innerHTML = str1.indexOf('T');
}