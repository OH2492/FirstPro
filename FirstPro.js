// console.log() = פקודת הדפסה
// let =  (ניתן לשינוי)משתנה
// const =  (אי אפשר לשנות) קבוע



/* Global Scope
let Time = "12:00";
Time = "16:00";
console.log(Time);
const MyName = "Omri";
console.log(MyName);
*/

//Object
/*let Student = {
  name:'Omri',
  age:31,
};
console.log(Student);
*/

//array
/*let Student = ["Omri", "Tal", "Adi"];
console.log(Student[0]);
*/

//Functions
function average(a, b) {
  //local scope
    let average = (a+b)/2
    return average
}
console.log(average (6, 6));
console.log(average (4, 2));

