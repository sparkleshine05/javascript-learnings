//destructuring of objects

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor:"Mukti"
}

//course.courseInstructor

//const {courseInstructor} = course

const {courseInstructor : instructor} = course

const{price : coursePrice} = course

const{coursename: name} = course

console.log(instructor);
console.log(coursePrice);
console.log(name);



//APIs Call
