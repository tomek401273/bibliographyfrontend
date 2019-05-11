import {Publication} from './publication';

export class PublicationReturn {
  private _publications: Publication[];

  constructor(publications: Publication[]) {
    this._publications = publications;
  }

  get publications(): Publication[] {
    return this._publications;
  }

  set publications(value: Publication[]) {
    this._publications = value;
  }
}
