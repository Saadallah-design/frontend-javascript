// write a Java Class in the same namespace.

import { Subject } from './Subjects';
import { TeacherInterface } from './Teacher';

// Using declaration merging, add a new optional attribute experienceTeachingJava (number) to the Teacher interface
export interface TeacherInterface {
    experienceTeachingJava?: number;
}

export class Java extends Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for Java';
    }   
    getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        } else {
            return 'No available teacher';
        }
    }
}