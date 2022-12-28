class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerCourse(courses) {
        this.courses.push(courses);
    }
}
class Instructor extends Person {
    salary;
    course = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.course.push(course);
    }
}
const student1 = new Student("Sidrah", 30, "001");
const student2 = new Student("Ali", 31, "002");
const instructor1 = new Instructor("Zia", 60, 5000);
console.log("Student-1", student1);
console.log("Student-2", student2);
console.log("Instructor-1", instructor1);
export { Student, student1, student2 };
export { Instructor, instructor1 };
