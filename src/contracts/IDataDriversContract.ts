export interface IDataDriversContract {
  /**
   * This function will ensure that data drivers
   * have connect function
   */
  connect(config: Config<any>): void;
}

export interface Config<T> {
  config: T;
}
