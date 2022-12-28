import { Courses, course1 } from "./courses.js";

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  rollNumber: string;
  courses: Courses[] = [];

  constructor(name: string, age: number, rollNumber: string) {
    super(name, age);
    this.rollNumber = rollNumber;
  }

  registerCourse(courses: Courses) {
    this.courses.push(courses);
  }
}

class Instructor extends Person {
  salary: number;
  course: Courses[] = [];

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  assignCourse(course: Courses) {
    this.course.push(course);
  }
}

const student1 = new Student("Sidrah", 30, "001");
const student2 = new Student("Ali", 31, "002");

const instructor1 = new Instructor("Zia", 60, 5000);

// console.log("Student-1", student1);
// console.log("Student-2", student2);
// console.log("Instructor-1", instructor1);

export { Student, student1, student2 };
export { Instructor, instructor1 };
