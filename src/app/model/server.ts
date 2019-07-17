export class Server {
  private static _address = 'http://192.168.42.11:8765/';

  constructor() {
  }

  static get address(): string {
    return this._address;
  }
}
