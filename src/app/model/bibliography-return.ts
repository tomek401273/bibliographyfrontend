import {Publication} from './publication';

export class BibliographyReturn {
  private _duplicates: Publication[];
  private _countOfPublication;
  private _publicationsNotUsed: Publication[];


  constructor() {
  }

  get duplicates(): Publication[] {
    return this._duplicates;
  }

  set duplicates(value: Publication[]) {
    this._duplicates = value;
  }

  get countOfPublication() {
    return this._countOfPublication;
  }

  set countOfPublication(value) {
    this._countOfPublication = value;
  }

  get publicationsNotUsed(): Publication[] {
    return this._publicationsNotUsed;
  }

  set publicationsNotUsed(value: Publication[]) {
    this._publicationsNotUsed = value;
  }
}
