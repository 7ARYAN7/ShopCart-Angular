export class SignupResponse {
  userId:number;
  result:string;

  constructor(userId: number, result: string) {
    this.userId = userId;
    this.result = result;
  }
}
