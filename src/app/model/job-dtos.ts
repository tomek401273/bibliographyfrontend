export class JobDtos {
  // tslint:disable-next-line:variable-name
  private _dateList: string[];
  private _counts: number[];

  constructor(dateList: string[], counts: number[]) {
    this._dateList = dateList;
    this._counts = counts;
  }

  get dateList(): string[] {
    return this._dateList;
  }

  set dateList(value: string[]) {
    this._dateList = value;
  }

  get counts(): number[] {
    return this._counts;
  }

  set counts(value: number[]) {
    this._counts = value;
  }
}
