import { Injectable } from '@angular/core';

export interface WindValue {
  arg: string;
  val1: number;
  val2: number;
  val3: number;
  val4: number;
  val5: number;
  val6: number;
  val7: number;
  val8: number;
}

export interface WindRose {
  period: string;
  values: WindValue[];
}

export class WindDescription {
  valueField: string;

  name: string;
}

const windSources: WindDescription[] = [
  { valueField: 'val1', name: '1.3-4 m/s' },
  { valueField: 'val2', name: '4-8 m/s' },
  { valueField: 'val3', name: '8-13 m/s' },
  { valueField: 'val4', name: '13-19 m/s' },
  { valueField: 'val5', name: '19-25 m/s' },
  { valueField: 'val6', name: '25-32 m/s' },
  { valueField: 'val7', name: '32-39 m/s' },
  { valueField: 'val8', name: '39-47 m/s' },
];

const windRoseData: WindRose[] = [{
  period: 'Sep. 1, 2012 -  Oct. 1, 2012',
  values: [{
    arg: 'N',
    val1: 0.7,
    val2: 1.7,
    val3: 2,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NNE',
    val1: 0.1,
    val2: 0.6,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NE',
    val1: 0.3,
    val2: 0.8,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'ENE',
    val1: 0.3,
    val2: 0.7,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'E',
    val1: 0.7,
    val2: 3.2,
    val3: 3,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'ESE',
    val1: 0.8,
    val2: 1.5,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SE',
    val1: 0.3,
    val2: 1.3,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SSE',
    val1: 0.1,
    val2: 2.4,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'S',
    val1: 1.1,
    val2: 4.2,
    val3: 2,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SSW',
    val1: 0.6,
    val2: 3.6,
    val3: 3,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SW',
    val1: 0.8,
    val2: 2.5,
    val3: 5,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'WSW',
    val1: 0.3,
    val2: 2.6,
    val3: 3,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'W',
    val1: 0.6,
    val2: 1.7,
    val3: 3,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'WNW',
    val1: 0.7,
    val2: 2.5,
    val3: 3,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NW',
    val1: 1,
    val2: 3.2,
    val3: 3,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NNW',
    val1: 0.6,
    val2: 3.8,
    val3: 4,
    val4: 2,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }],
}, {
  period: 'Oct. 1, 2012 -  Nov. 1, 2012',
  values: [{
    arg: 'N',
    val1: 0.6,
    val2: 1.8,
    val3: 2,
    val4: 1,
    val5: 0,
    val6: 1,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NNE',
    val1: 0.3,
    val2: 1.2,
    val3: 1,
    val4: 0,
    val5: 1,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NE',
    val1: 0.3,
    val2: 2.4,
    val3: 2,
    val4: 1,
    val5: 1,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'ENE',
    val1: 1,
    val2: 2.2,
    val3: 1,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'E',
    val1: 0.6,
    val2: 4.9,
    val3: 2,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'ESE',
    val1: 0.1,
    val2: 0.6,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SE',
    val1: 0.1,
    val2: 0.3,
    val3: 1,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SSE',
    val1: 0.4,
    val2: 0.7,
    val3: 1,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'S',
    val1: 0,
    val2: 3.1,
    val3: 3,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SSW',
    val1: 0.6,
    val2: 1.8,
    val3: 4,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SW',
    val1: 0.7,
    val2: 1.8,
    val3: 2,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'WSW',
    val1: 0.3,
    val2: 2.5,
    val3: 5,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'W',
    val1: 0,
    val2: 2.8,
    val3: 6,
    val4: 2,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'WNW',
    val1: 0.3,
    val2: 1.5,
    val3: 4,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NW',
    val1: 0.1,
    val2: 2.7,
    val3: 2,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NNW',
    val1: 0.3,
    val2: 1.5,
    val3: 1,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }],
}, {
  period: 'Nov. 1, 2012 -  Dec. 1, 2012',
  values: [{
    arg: 'N',
    val1: 0.7,
    val2: 3,
    val3: 8,
    val4: 2,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NNE',
    val1: 0.4,
    val2: 1.6,
    val3: 2,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NE',
    val1: 0.5,
    val2: 3.4,
    val3: 8,
    val4: 2,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'ENE',
    val1: 0.3,
    val2: 4.1,
    val3: 2,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'E',
    val1: 1.2,
    val2: 1.8,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'ESE',
    val1: 0.7,
    val2: 0.3,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SE',
    val1: 0.1,
    val2: 0.3,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SSE',
    val1: 0.3,
    val2: 0.4,
    val3: 1,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'S',
    val1: 0.4,
    val2: 0.8,
    val3: 1,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SSW',
    val1: 0.4,
    val2: 1.5,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'SW',
    val1: 0.8,
    val2: 0.1,
    val3: 1,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'WSW',
    val1: 0,
    val2: 1.5,
    val3: 2,
    val4: 1,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'W',
    val1: 0.3,
    val2: 1,
    val3: 6,
    val4: 3,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'WNW',
    val1: 0.3,
    val2: 1.2,
    val3: 3,
    val4: 1,
    val5: 1,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NW',
    val1: 0.3,
    val2: 0.7,
    val3: 5,
    val4: 2,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
  }, {
    arg: 'NNW',
    val1: 0.1,
    val2: 2.5,
    val3: 2,
    val4: 2,
    val5: 1,
    val6: 0,
    val7: 0,
    val8: 0,
  }],
}];

@Injectable()
export class Service {
  getWindRoseData() {
    return windRoseData;
  }

  getWindSources() {
    return windSources;
  }
}
