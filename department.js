import { course1 } from "./courses.js";
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const department1 = new Department("Programming");
department1.addCourse(course1);
console.log(department1.courses);
export { Department };
