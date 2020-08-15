export class Enumeration {
  public readonly uuid: string;
  public enumCode: string;
  public language: string;

  constructor(props: Omit<Enumeration, "uuid">, uuid?: string) {
    Object.assign(this, props);

    if (!uuid) {
      this.uuid = "0398450-734653-63526352-363538";
    }
  }
}
