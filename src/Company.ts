export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(
    companyName: string,
    catchPhrase: string,
    lat: number,
    lng: number
  ) {
    this.companyName = companyName;
    this.catchPhrase = catchPhrase;
    this.location = {
      lat: lat,
      lng: lng,
    };
  }
}
