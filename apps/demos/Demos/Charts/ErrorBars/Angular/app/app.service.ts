import { Injectable } from '@angular/core';

export class Weather {
  month: string;

  avgT: number;

  avgLowT: number;

  avgHighT: number;

  avgH: number;
}

const weatherData: Weather[] = [{
  month: 'January',
  avgT: 14.1,
  avgLowT: 9.1,
  avgHighT: 19.1,
  avgH: 70,
}, {
  month: 'February',
  avgT: 14.7,
  avgLowT: 9.8,
  avgHighT: 19.6,
  avgH: 74,
}, {
  month: 'March',
  avgT: 15.6,
  avgLowT: 10.6,
  avgHighT: 20.4,
  avgH: 79,
}, {
  month: 'April',
  avgT: 16.8,
  avgLowT: 11.9,
  avgHighT: 21.7,
  avgH: 80,
}, {
  month: 'May',
  avgT: 18.2,
  avgLowT: 13.6,
  avgHighT: 22.7,
  avgH: 83,
}, {
  month: 'June',
  avgT: 20.2,
  avgLowT: 15.4,
  avgHighT: 25,
  avgH: 85,
}, {
  month: 'July',
  avgT: 22.6,
  avgLowT: 17.3,
  avgHighT: 27.9,
  avgH: 86,
}, {
  month: 'August',
  avgT: 23,
  avgLowT: 17.7,
  avgHighT: 28.4,
  avgH: 86,
}, {
  month: 'September',
  avgT: 22.3,
  avgLowT: 17,
  avgHighT: 27.7,
  avgH: 83,
}, {
  month: 'October',
  avgT: 20.1,
  avgLowT: 14.8,
  avgHighT: 25.3,
  avgH: 79,
}, {
  month: 'November',
  avgT: 17.2,
  avgLowT: 11.8,
  avgHighT: 22.7,
  avgH: 72,
}, {
  month: 'December',
  avgT: 14.6,
  avgLowT: 9.5,
  avgHighT: 19.7,
  avgH: 68,
}];

@Injectable()
export class Service {
  getWeatherData(): Weather[] {
    return weatherData;
  }
}