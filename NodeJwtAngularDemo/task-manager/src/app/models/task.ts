export class Task {
  _id: number;
  title: string;
  description: string;
  completed: boolean;
  date: Date;

  constructor(id: number, title: string, description = '', completed = false, date = new Date()) {
    this._id = id
    this.title = title
    this.description = description
    this.completed = completed
    this.date = date
  }
}
