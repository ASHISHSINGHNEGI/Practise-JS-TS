/*Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

function dateTime() {
const d= new Date();
    // console.log(d.toString());
    // console.log(d.toDateString());
    // console.log(d.toISOString());
    // console.log(d.toJSON());
    // console.log(d.toLocaleDateString());
    // console.log(d.toLocaleString());
    // console.log(dir d);
   
   
     console.log(`Today is : ${d.getDay()} . Current time is : ${(d.getHours())-12} : ${d.getMinutes()} : ${d.getSeconds()}`)
}


dateTime();