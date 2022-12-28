import { Courses, course1 } from "./courses.js";

class Department {
  name: string;
  courses: Courses[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addCourse(course: Courses) {
    this.courses.push(course);
  }
}

const department1 = new Department("Programming");
department1.addCourse(course1);

// console.log(department1);
export { Department };
