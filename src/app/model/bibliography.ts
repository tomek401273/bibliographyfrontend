import {PublicationReturn} from './publication-return';
import {BibliographyReturn} from './bibliography-return';

export class Bibliography {
  private _bibliographyReturn: BibliographyReturn;
  private _calculationTime: number;
  private _publicationReturn: PublicationReturn;


  constructor(bibliographyReturn: BibliographyReturn, calculationTime: number, publicationReturn: PublicationReturn) {
    this._bibliographyReturn = bibliographyReturn;
    this._calculationTime = calculationTime;
    this._publicationReturn = publicationReturn;
  }

  get bibliographyReturn(): BibliographyReturn {
    return null;
  }

  set bibliographyReturn(value: BibliographyReturn) {
    this._bibliographyReturn = value;
  }

  get calculationTime(): number {
    return this._calculationTime;
  }

  set calculationTime(value: number) {
    this._calculationTime = value;
  }

  get publicationReturn(): PublicationReturn {
    return this._publicationReturn;
  }

  set publicationReturn(value: PublicationReturn) {
    this._publicationReturn = value;
  }
}
