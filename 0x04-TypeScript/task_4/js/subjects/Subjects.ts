// writing a Subject class in the same namespace of Subjects
// the class has one attribute teacher that implements the Teacher interface
import { TeacherInterface } from './Teacher';

export class Subject {
    teacher: TeacherInterface | null = null;

    setTeacher(teacher: TeacherInterface): void {
        this.teacher = teacher;
    }

    getTeacher(): string {
        return this.teacher ? `This subject is taught by ${this.teacher.firstName} ${this.teacher.lastName}` : 'No teacher assigned';
    }
}