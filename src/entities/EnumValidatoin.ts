export class EnumValidatoin {
  public enumCode: string;
  public language: string;
  public objectEnum?: any;

  constructor(props: EnumValidatoin) {
    Object.assign(this, props);
  }
}
