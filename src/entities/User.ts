export class User {
  public readonly uuid: string;
  public auth_token: string;

  constructor(props: Omit<User, "uuid">, uuid?: string) {
    if (!uuid) {
      this.uuid = "323-324-232-423";
    }
  }
}
