// write a React Class in the same namespace.
// the class has one attribute teacher that implements the Teacher interface
import { Subject } from './Subjects';
import { TeacherInterface } from './Teacher';

export class React extends Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for React';
    }   
    getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        } else {
            return 'No available teacher';
        }
    }
}
