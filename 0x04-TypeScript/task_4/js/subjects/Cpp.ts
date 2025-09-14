// Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
import { TeacherInterface } from './Teacher';

export interface TeacherInterface {
    experienceTeachingC?: number;
}
// Create a class Cpp extending from Subject
import { Subject } from './Subjects';

export class Cpp extends Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
    }   
    getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        } else {
            return 'No available teacher';
        }
    }
}