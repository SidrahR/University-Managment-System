import { Instructor, instructor1 } from "./person.js";
import { Student, student1, student2 } from "./person.js";

class Courses {
  id: string;
  name: string;
  student: Student[] = [];
  instructor!: Instructor;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  addStudent(student: Student) {
    this.student.push(student);
    student.registerCourse(this);
  }

  setInstructor(instructor: Instructor) {
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
