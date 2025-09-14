// writing a Teacher Interface in a namespace named Subjects
export interface TeacherInterface {
    firstName: string;
    lastName: string;

    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Implement the Director class
  export class Director implements TeacherInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to director tasks';
    }