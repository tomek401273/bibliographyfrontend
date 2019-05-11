export class Publication {
  private _authorName: string;
  private _publicationYear: number;

  constructor(authorName: string, publicationYear: number) {
    this._authorName = authorName;
    this._publicationYear = publicationYear;
  }


  get authorName(): string {
    return this._authorName;
  }

  get publicationYear(): number {
    return this._publicationYear;
  }
}
