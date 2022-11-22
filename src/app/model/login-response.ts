export class LoginResponse {
  userId:number;
  name:string;
  role:string
  constructor(userId: number, name: string,role:string) {
    this.userId = userId;
    this.name = name;
    this.role=role;
  }
}
