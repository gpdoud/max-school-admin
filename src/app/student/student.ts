export class Student {
  Id: number;
  Firstname: string;
  Lastname: string;

  constructor(firstname: string, lastname: string) {
    this.Id = 0;
    this.Firstname = firstname;
    this.Lastname = lastname;
  }
}
