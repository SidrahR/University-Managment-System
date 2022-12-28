import { instructor1 } from "./person.js";
import { student1, student2 } from "./person.js";
class Courses {
    id;
    name;
    student = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.student.push(student);
        student.registerCourse(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
const course1 = new Courses("Course1", "Metaverse");
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
console.log("course1.student", course1.student);
console.log("student1.course", student1.courses);
export { Courses, course1 };
