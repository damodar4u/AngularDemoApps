function showCourses(){
    var courses=["HTML","CSS","JAVASCRIPT","AJAX","JQUERY","JSON"];

    var emailIds=["abc@gmail.com","abcef@gmail.com","abcdefgh@gmail.com","abcdefghij@gmail.com"]

    /*     alert("Available courses"+courses[0]);
    alert("Available courses"+courses[1]);
    alert("Available courses"+courses[2]); */

/*     for (var i = 1; i <= 10; i++) {
        alert("Available courses....."+i);
    } */

/*     for (var i = 0; i <= courses.length-1; i++) {
        alert("Available courses.....  " +courses[i]);
    } */

// push & pop operate at the last elemt of an array 

/*     courses.push("Angular");
    courses.pop(); */

// shift and unshift operates at the beginning of an array

/* courses.unshift("Angular")
 */
/*     courses.shift()  */

/* courses.sort();
 */

// try method splice to add one element angular at 3rd postion  
// courses.splice(3,0,"ANGULAR")

// splice to remove 2 elements from position 4
// courses.splice(4,2)

   var temp=""
   for (var i = 0; i < courses.length; i++) {
    temp += courses[i]+'<br>';
    }
    document.getElementById("showAvail").innerHTML = temp;


/* for (let index = 0; index < emailIds.length; index++) {
    alert(emailIds[index].indexOf("@"));
    } */

//charAt give position number it will pick the value at that position
/* for (let index = 0; index < emailIds.length; index++) {
    alert(emailIds[index].charAt("7"));
    }  */

}