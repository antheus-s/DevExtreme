import { Injectable } from '@angular/core';

export class StockPrice {
  Date: string;

  Open: number;

  High: number;

  Low: number;

  Close: number;

  Volume: number;

  Name: string;
}

const stockPrices: StockPrice[] = [{
  Date: '04/23/2013',
  Open: 808.11,
  High: 818.00,
  Low: 808.00,
  Close: 813.45,
  Volume: 1829151,
  Name: 'Google',
}, {
  Date: '04/22/2013',
  Open: 801.00,
  High: 815.50,
  Low: 800.36,
  Close: 807.90,
  Volume: 2299900,
  Name: 'Google',
}, {
  Date: '04/21/2013',
  Open: 800.60,
  High: 803.96,
  Low: 775.00,
  Close: 800.11,
  Volume: 2883407,
  Name: 'Google',
}, {
  Date: '04/18/2013',
  Open: 769.16,
  High: 803.44,
  Low: 766.26,
  Close: 799.87,
  Volume: 5804316,
  Name: 'Google',
}, {
  Date: '04/17/2013',
  Open: 785.35,
  High: 785.80,
  Low: 761.26,
  Close: 765.91,
  Volume: 3328777,
  Name: 'Google',
}, {
  Date: '04/16/2013',
  Open: 786.75,
  High: 790.84,
  Low: 778.10,
  Close: 782.56,
  Volume: 2037355,
  Name: 'Google',
}, {
  Date: '04/15/2013',
  Open: 786.59,
  High: 796.00,
  Low: 783.92,
  Close: 793.37,
  Volume: 1742374,
  Name: 'Google',
}, {
  Date: '04/14/2013',
  Open: 785.95,
  High: 797.00,
  Low: 777.02,
  Close: 781.93,
  Volume: 2454767,
  Name: 'Google',
}, {
  Date: '04/11/2013',
  Open: 791.99,
  High: 792.10,
  Low: 782.93,
  Close: 790.05,
  Volume: 1636829,
  Name: 'Google',
}, {
  Date: '04/10/2013',
  Open: 792.88,
  High: 793.10,
  Low: 784.06,
  Close: 790.39,
  Volume: 2028766,
  Name: 'Google',
}, {
  Date: '04/09/2013',
  Open: 782.92,
  High: 792.35,
  Low: 776.00,
  Close: 790.18,
  Volume: 1978862,
  Name: 'Google',
}, {
  Date: '04/08/2013',
  Open: 775.50,
  High: 783.75,
  Low: 773.11,
  Close: 777.65,
  Volume: 2157928,
  Name: 'Google',
}, {
  Date: '04/07/2013',
  Open: 778.75,
  High: 779.55,
  Low: 768.40,
  Close: 774.85,
  Volume: 2832718,
  Name: 'Google',
}, {
  Date: '04/04/2013',
  Open: 786.06,
  High: 786.99,
  Low: 776.40,
  Close: 783.05,
  Volume: 3433994,
  Name: 'Google',
}, {
  Date: '04/03/2013',
  Open: 804.25,
  High: 805.75,
  Low: 791.30,
  Close: 795.07,
  Volume: 2448102,
  Name: 'Google',
}, {
  Date: '04/02/2013',
  Open: 813.46,
  High: 814.20,
  Low: 800.67,
  Close: 806.20,
  Volume: 1738753,
  Name: 'Google',
}, {
  Date: '04/01/2013',
  Open: 804.54,
  High: 814.83,
  Low: 804.00,
  Close: 813.04,
  Volume: 2041713,
  Name: 'Google',
}, {
  Date: '03/31/2013',
  Open: 795.01,
  High: 802.25,
  Low: 793.25,
  Close: 801.19,
  Volume: 1807580,
  Name: 'Google',
}, {
  Date: '03/27/2013',
  Open: 803.99,
  High: 805.37,
  Low: 793.30,
  Close: 794.19,
  Volume: 2287712,
  Name: 'Google',
}, {
  Date: '03/26/2013',
  Open: 806.68,
  High: 807.00,
  Low: 801.33,
  Close: 802.66,
  Volume: 2163295,
  Name: 'Google',
}, {
  Date: '03/25/2013',
  Open: 813.50,
  High: 814.00,
  Low: 807.79,
  Close: 812.42,
  Volume: 1191912,
  Name: 'Google',
}, {
  Date: '03/24/2013',
  Open: 812.41,
  High: 819.23,
  Low: 806.82,
  Close: 809.64,
  Volume: 1712684,
  Name: 'Google',
}, {
  Date: '03/21/2013',
  Open: 814.74,
  High: 815.24,
  Low: 809.64,
  Close: 810.31,
  Volume: 1491678,
  Name: 'Google',
}, {
  Date: '03/20/2013',
  Open: 811.29,
  High: 816.92,
  Low: 809.85,
  Close: 811.26,
  Volume: 1477590,
  Name: 'Google',
}, {
  Date: '03/19/2013',
  Open: 816.83,
  High: 817.51,
  Low: 811.44,
  Close: 814.71,
  Volume: 1464122,
  Name: 'Google',
}, {
  Date: '03/18/2013',
  Open: 811.24,
  High: 819.25,
  Low: 806.45,
  Close: 811.32,
  Volume: 2098176,
  Name: 'Google',
}, {
  Date: '03/17/2013',
  Open: 805.00,
  High: 812.76,
  Low: 801.47,
  Close: 807.79,
  Volume: 1838552,
  Name: 'Google',
}, {
  Date: '03/14/2013',
  Open: 818.50,
  High: 820.30,
  Low: 813.34,
  Close: 814.30,
  Volume: 3099791,
  Name: 'Google',
}, {
  Date: '03/13/2013',
  Open: 826.99,
  High: 826.99,
  Low: 817.39,
  Close: 821.54,
  Volume: 1651111,
  Name: 'Google',
}, {
  Date: '03/12/2013',
  Open: 827.90,
  High: 830.69,
  Low: 822.31,
  Close: 825.31,
  Volume: 1641413,
  Name: 'Google',
}, {
  Date: '03/11/2013',
  Open: 830.71,
  High: 831.89,
  Low: 823.67,
  Close: 827.61,
  Volume: 2008979,
  Name: 'Google',
}, {
  Date: '03/10/2013',
  Open: 831.69,
  High: 839.70,
  Low: 831.50,
  Close: 834.82,
  Volume: 1595678,
  Name: 'Google',
}, {
  Date: '03/07/2013',
  Open: 834.50,
  High: 834.92,
  Low: 825.05,
  Close: 831.52,
  Volume: 2912283,
  Name: 'Google',
}, {
  Date: '03/06/2013',
  Open: 834.06,
  High: 836.62,
  Low: 829.58,
  Close: 832.60,
  Volume: 2054238,
  Name: 'Google',
}, {
  Date: '03/05/2013',
  Open: 841.02,
  High: 844.00,
  Low: 828.81,
  Close: 831.38,
  Volume: 2873998,
  Name: 'Google',
}, {
  Date: '03/04/2013',
  Open: 828.93,
  High: 840.15,
  Low: 828.90,
  Close: 838.60,
  Volume: 4045034,
  Name: 'Google',
}, {
  Date: '03/03/2013',
  Open: 805.30,
  High: 822.84,
  Low: 805.00,
  Close: 821.50,
  Volume: 2776185,
  Name: 'Google',
}, {
  Date: '02/28/2013',
  Open: 797.80,
  High: 807.14,
  Low: 796.15,
  Close: 806.19,
  Volume: 2175425,
  Name: 'Google',
}, {
  Date: '02/27/2013',
  Open: 801.10,
  High: 806.99,
  Low: 801.03,
  Close: 801.20,
  Volume: 2265874,
  Name: 'Google',
}, {
  Date: '02/26/2013',
  Open: 794.80,
  High: 804.75,
  Low: 791.11,
  Close: 799.78,
  Volume: 2028515,
  Name: 'Google',
}, {
  Date: '02/25/2013',
  Open: 795.00,
  High: 795.95,
  Low: 784.40,
  Close: 790.13,
  Volume: 2205059,
  Name: 'Google',
}, {
  Date: '02/24/2013',
  Open: 802.30,
  High: 808.41,
  Low: 790.49,
  Close: 790.77,
  Volume: 2307008,
  Name: 'Google',
}, {
  Date: '02/21/2013',
  Open: 799.26,
  High: 801.25,
  Low: 793.80,
  Close: 799.71,
  Volume: 2054050,
  Name: 'Google',
}, {
  Date: '02/20/2013',
  Open: 798.00,
  High: 805.45,
  Low: 791.22,
  Close: 795.53,
  Volume: 3511036,
  Name: 'Google',
}, {
  Date: '02/19/2013',
  Open: 805.30,
  High: 808.97,
  Low: 791.79,
  Close: 792.46,
  Volume: 2765029,
  Name: 'Google',
}, {
  Date: '02/18/2013',
  Open: 795.99,
  High: 807.00,
  Low: 795.28,
  Close: 806.85,
  Volume: 2932924,
  Name: 'Google',
}, {
  Date: '02/14/2013',
  Open: 787.40,
  High: 793.26,
  Low: 787.07,
  Close: 792.89,
  Volume: 2729917,
  Name: 'Google',
}, {
  Date: '02/13/2013',
  Open: 779.73,
  High: 788.74,
  Low: 777.77,
  Close: 787.82,
  Volume: 1735219,
  Name: 'Google',
}, {
  Date: '02/12/2013',
  Open: 780.13,
  High: 785.35,
  Low: 779.97,
  Close: 782.86,
  Volume: 1198170,
  Name: 'Google',
}, {
  Date: '02/11/2013',
  Open: 781.75,
  High: 787.90,
  Low: 779.37,
  Close: 780.70,
  Volume: 1858945,
  Name: 'Google',
}, {
  Date: '02/10/2013',
  Open: 778.40,
  High: 783.00,
  Low: 773.75,
  Close: 782.42,
  Volume: 2167656,
  Name: 'Google',
}, {
  Date: '02/07/2013',
  Open: 780.13,
  High: 786.67,
  Low: 779.56,
  Close: 785.37,
  Volume: 3024853,
  Name: 'Google',
}, {
  Date: '02/06/2013',
  Open: 769.70,
  High: 778.81,
  Low: 765.50,
  Close: 773.95,
  Volume: 2840506,
  Name: 'Google',
}, {
  Date: '02/05/2013',
  Open: 759.07,
  High: 772.96,
  Low: 758.50,
  Close: 770.17,
  Volume: 2079687,
  Name: 'Google',
}, {
  Date: '02/04/2013',
  Open: 761.13,
  High: 771.11,
  Low: 759.46,
  Close: 765.74,
  Volume: 1870716,
  Name: 'Google',
}, {
  Date: '02/03/2013',
  Open: 767.69,
  High: 770.47,
  Low: 758.27,
  Close: 759.02,
  Volume: 3041242,
  Name: 'Google',
}, {
  Date: '01/31/2013',
  Open: 758.20,
  High: 776.60,
  Low: 758.10,
  Close: 775.60,
  Volume: 3746165,
  Name: 'Google',
}, {
  Date: '01/30/2013',
  Open: 750.51,
  High: 757.62,
  Low: 750.25,
  Close: 755.69,
  Volume: 1634556,
  Name: 'Google',
}, {
  Date: '01/29/2013',
  Open: 753.74,
  High: 760.95,
  Low: 752.91,
  Close: 753.83,
  Volume: 1732972,
  Name: 'Google',
}, {
  Date: '01/28/2013',
  Open: 746.75,
  High: 756.95,
  Low: 746.54,
  Close: 753.68,
  Volume: 1747734,
  Name: 'Google',
}, {
  Date: '01/27/2013',
  Open: 751.76,
  High: 755.60,
  Low: 747.89,
  Close: 750.73,
  Volume: 1627833,
  Name: 'Google',
}, {
  Date: '01/24/2013',
  Open: 750.77,
  High: 758.48,
  Low: 750.25,
  Close: 753.67,
  Volume: 2225811,
  Name: 'Google',
}, {
  Date: '01/23/2013',
  Open: 741.24,
  High: 756.83,
  Low: 740.51,
  Close: 753.83,
  Volume: 3383596,
  Name: 'Google',
}, {
  Date: '01/22/2013',
  Open: 735.99,
  High: 749.00,
  Low: 735.79,
  Close: 741.50,
  Volume: 5911865,
  Name: 'Google',
}, {
  Date: '01/21/2013',
  Open: 704.66,
  High: 705.34,
  Low: 695.52,
  Close: 702.87,
  Volume: 3792336,
  Name: 'Google',
}, {
  Date: '01/17/2013',
  Open: 710.36,
  High: 712.77,
  Low: 701.33,
  Close: 704.51,
  Volume: 3226898,
  Name: 'Google',
}, {
  Date: '01/16/2013',
  Open: 717.71,
  High: 719.64,
  Low: 711.02,
  Close: 711.32,
  Volume: 2212357,
  Name: 'Google',
}, {
  Date: '01/15/2013',
  Open: 722.40,
  High: 724.34,
  Low: 713.67,
  Close: 715.19,
  Volume: 2024991,
  Name: 'Google',
}, {
  Date: '01/14/2013',
  Open: 719.33,
  High: 735.00,
  Low: 712.10,
  Close: 724.93,
  Volume: 3927990,
  Name: 'Google',
}, {
  Date: '01/13/2013',
  Open: 737.00,
  High: 742.20,
  Low: 722.35,
  Close: 723.25,
  Volume: 2864106,
  Name: 'Google',
}, {
  Date: '01/10/2013',
  Open: 742.00,
  High: 742.43,
  Low: 736.30,
  Close: 739.99,
  Volume: 1285125,
  Name: 'Google',
}, {
  Date: '01/09/2013',
  Open: 742.83,
  High: 745.00,
  Low: 733.50,
  Close: 741.48,
  Volume: 1835780,
  Name: 'Google',
}, {
  Date: '01/08/2013',
  Open: 732.27,
  High: 738.35,
  Low: 728.60,
  Close: 738.12,
  Volume: 2025751,
  Name: 'Google',
}, {
  Date: '01/07/2013',
  Open: 735.54,
  High: 736.30,
  Low: 724.43,
  Close: 733.30,
  Volume: 1676740,
  Name: 'Google',
}, {
  Date: '01/06/2013',
  Open: 735.45,
  High: 739.38,
  Low: 730.58,
  Close: 734.75,
  Volume: 1655967,
  Name: 'Google',
}, {
  Date: '01/03/2013',
  Open: 729.34,
  High: 741.47,
  Low: 727.68,
  Close: 737.97,
  Volume: 2763552,
  Name: 'Google',
}, {
  Date: '01/02/2013',
  Open: 724.93,
  High: 731.93,
  Low: 720.72,
  Close: 723.67,
  Volume: 2318140,
  Name: 'Google',
}, {
  Date: '01/01/2013',
  Open: 719.42,
  High: 727.00,
  Low: 716.55,
  Close: 723.25,
  Volume: 2542268,
  Name: 'Google',
}, {
  Date: '12/30/2012',
  Open: 700.00,
  High: 710.57,
  Low: 696.00,
  Close: 707.38,
  Volume: 1997733,
  Name: 'Google',
}, {
  Date: '12/27/2012',
  Open: 701.69,
  High: 706.91,
  Low: 700.01,
  Close: 700.01,
  Volume: 1403926,
  Name: 'Google',
}, {
  Date: '12/26/2012',
  Open: 707.14,
  High: 708.84,
  Low: 698.61,
  Close: 706.29,
  Volume: 1647392,
  Name: 'Google',
}, {
  Date: '12/25/2012',
  Open: 708.07,
  High: 712.88,
  Low: 702.41,
  Close: 708.87,
  Volume: 1182572,
  Name: 'Google',
}, {
  Date: '12/23/2012',
  Open: 714.51,
  High: 715.18,
  Low: 707.47,
  Close: 709.50,
  Volume: 841931,
  Name: 'Google',
}, {
  Date: '12/20/2012',
  Open: 713.97,
  High: 718.82,
  Low: 710.52,
  Close: 715.63,
  Volume: 3527849,
  Name: 'Google',
}, {
  Date: '12/19/2012',
  Open: 723.26,
  High: 724.65,
  Low: 716.97,
  Close: 722.36,
  Volume: 1657153,
  Name: 'Google',
}, {
  Date: '12/18/2012',
  Open: 720.71,
  High: 723.00,
  Low: 716.68,
  Close: 720.11,
  Volume: 1919799,
  Name: 'Google',
}, {
  Date: '12/17/2012',
  Open: 716.60,
  High: 729.10,
  Low: 715.05,
  Close: 721.07,
  Volume: 3005138,
  Name: 'Google',
}, {
  Date: '12/16/2012',
  Open: 705.50,
  High: 738.28,
  Low: 704.02,
  Close: 720.78,
  Volume: 3036763,
  Name: 'Google',
}, {
  Date: '12/13/2012',
  Open: 699.17,
  High: 707.82,
  Low: 698.43,
  Close: 701.96,
  Volume: 2130595,
  Name: 'Google',
}, {
  Date: '12/12/2012',
  Open: 715.92,
  High: 716.48,
  Low: 699.55,
  Close: 702.70,
  Volume: 3446306,
  Name: 'Google',
}, {
  Date: '12/11/2012',
  Open: 699.23,
  High: 703.51,
  Low: 693.48,
  Close: 697.56,
  Volume: 2426299,
  Name: 'Google',
}, {
  Date: '12/10/2012',
  Open: 690.00,
  High: 701.92,
  Low: 687.72,
  Close: 696.88,
  Volume: 2687956,
  Name: 'Google',
}, {
  Date: '12/09/2012',
  Open: 685.39,
  High: 691.65,
  Low: 683.79,
  Close: 685.42,
  Volume: 1366866,
  Name: 'Google',
}, {
  Date: '12/06/2012',
  Open: 695.00,
  High: 696.88,
  Low: 682.42,
  Close: 684.21,
  Volume: 1919476,
  Name: 'Google',
}, {
  Date: '12/05/2012',
  Open: 687.59,
  High: 695.61,
  Low: 684.51,
  Close: 691.13,
  Volume: 1462216,
  Name: 'Google',
}, {
  Date: '12/04/2012',
  Open: 692.15,
  High: 694.50,
  Low: 682.33,
  Close: 687.82,
  Volume: 1862735,
  Name: 'Google',
}, {
  Date: '12/03/2012',
  Open: 695.00,
  High: 695.51,
  Low: 685.70,
  Close: 691.03,
  Volume: 1991605,
  Name: 'Google',
}, {
  Date: '12/02/2012',
  Open: 702.24,
  High: 705.89,
  Low: 694.11,
  Close: 695.25,
  Volume: 2193948,
  Name: 'Google',
}, {
  Date: '11/29/2012',
  Open: 691.31,
  High: 699.22,
  Low: 685.69,
  Close: 698.37,
  Volume: 3164441,
  Name: 'Google',
}, {
  Date: '11/28/2012',
  Open: 687.78,
  High: 693.90,
  Low: 682.00,
  Close: 691.89,
  Volume: 2780544,
  Name: 'Google',
}, {
  Date: '11/27/2012',
  Open: 668.01,
  High: 684.91,
  Low: 663.89,
  Close: 683.67,
  Volume: 3041940,
  Name: 'Google',
}, {
  Date: '11/26/2012',
  Open: 660.17,
  High: 675.00,
  Low: 658.00,
  Close: 670.71,
  Volume: 2509598,
  Name: 'Google',
}, {
  Date: '11/25/2012',
  Open: 666.44,
  High: 667.00,
  Low: 659.02,
  Close: 661.15,
  Volume: 2205527,
  Name: 'Google',
}, {
  Date: '11/22/2012',
  Open: 669.97,
  High: 670.00,
  Low: 666.10,
  Close: 667.97,
  Volume: 922477,
  Name: 'Google',
}, {
  Date: '11/20/2012',
  Open: 668.99,
  High: 669.80,
  Low: 660.40,
  Close: 665.87,
  Volume: 2113011,
  Name: 'Google',
}, {
  Date: '11/19/2012',
  Open: 669.51,
  High: 678.00,
  Low: 664.57,
  Close: 669.97,
  Volume: 2089086,
  Name: 'Google',
}, {
  Date: '11/18/2012',
  Open: 655.70,
  High: 668.92,
  Low: 655.53,
  Close: 668.21,
  Volume: 2369716,
  Name: 'Google',
}, {
  Date: '11/15/2012',
  Open: 645.99,
  High: 653.02,
  Low: 636.00,
  Close: 647.18,
  Volume: 3438500,
  Name: 'Google',
}, {
  Date: '11/14/2012',
  Open: 650.00,
  High: 660.00,
  Low: 643.90,
  Close: 647.26,
  Volume: 1848939,
  Name: 'Google',
}, {
  Date: '11/13/2012',
  Open: 660.66,
  High: 662.18,
  Low: 650.50,
  Close: 652.55,
  Volume: 1668322,
  Name: 'Google',
}, {
  Date: '11/12/2012',
  Open: 663.00,
  High: 667.60,
  Low: 658.23,
  Close: 659.05,
  Volume: 1594639,
  Name: 'Google',
}, {
  Date: '11/11/2012',
  Open: 663.75,
  High: 669.80,
  Low: 660.87,
  Close: 665.90,
  Volume: 1405870,
  Name: 'Google',
}, {
  Date: '11/08/2012',
  Open: 654.65,
  High: 668.34,
  Low: 650.30,
  Close: 663.03,
  Volume: 3114084,
  Name: 'Google',
}, {
  Date: '11/07/2012',
  Open: 670.20,
  High: 671.49,
  Low: 651.23,
  Close: 652.29,
  Volume: 2598676,
  Name: 'Google',
}, {
  Date: '11/06/2012',
  Open: 675.00,
  High: 678.23,
  Low: 666.49,
  Close: 667.12,
  Volume: 2232438,
  Name: 'Google',
}, {
  Date: '11/05/2012',
  Open: 685.48,
  High: 686.50,
  Low: 677.55,
  Close: 681.72,
  Volume: 1582936,
  Name: 'Google',
}, {
  Date: '11/04/2012',
  Open: 684.50,
  High: 686.86,
  Low: 675.56,
  Close: 682.96,
  Volume: 1635894,
  Name: 'Google',
}, {
  Date: '11/01/2012',
  Open: 694.79,
  High: 695.55,
  Low: 687.37,
  Close: 687.92,
  Volume: 2324569,
  Name: 'Google',
}, {
  Date: '10/31/2012',
  Open: 679.50,
  High: 690.90,
  Low: 678.72,
  Close: 687.59,
  Volume: 2050471,
  Name: 'Google',
}, {
  Date: '10/30/2012',
  Open: 679.86,
  High: 681.00,
  Low: 675.00,
  Close: 680.30,
  Volume: 1537001,
  Name: 'Google',
}, {
  Date: '10/25/2012',
  Open: 676.50,
  High: 683.03,
  Low: 671.20,
  Close: 675.15,
  Volume: 1950865,
  Name: 'Google',
}, {
  Date: '10/24/2012',
  Open: 680.00,
  High: 682.00,
  Low: 673.51,
  Close: 677.76,
  Volume: 2403696,
  Name: 'Google',
}, {
  Date: '10/23/2012',
  Open: 686.80,
  High: 687.00,
  Low: 675.27,
  Close: 677.30,
  Volume: 2496411,
  Name: 'Google',
}, {
  Date: '10/22/2012',
  Open: 672.01,
  High: 687.33,
  Low: 672.00,
  Close: 680.35,
  Volume: 2916978,
  Name: 'Google',
}, {
  Date: '10/21/2012',
  Open: 681.01,
  High: 684.63,
  Low: 669.70,
  Close: 678.67,
  Volume: 4057872,
  Name: 'Google',
}, {
  Date: '10/18/2012',
  Open: 705.58,
  High: 706.70,
  Low: 672.00,
  Close: 681.79,
  Volume: 11483428,
  Name: 'Google',
}, {
  Date: '10/17/2012',
  Open: 755.54,
  High: 759.42,
  Low: 676.00,
  Close: 695.00,
  Volume: 12442346,
  Name: 'Google',
}, {
  Date: '10/16/2012',
  Open: 743.95,
  High: 756.34,
  Low: 740.26,
  Close: 755.49,
  Volume: 2292819,
  Name: 'Google',
}, {
  Date: '10/15/2012',
  Open: 740.13,
  High: 746.99,
  Low: 736.46,
  Close: 744.70,
  Volume: 2058468,
  Name: 'Google',
}, {
  Date: '10/14/2012',
  Open: 741.94,
  High: 743.83,
  Low: 730.70,
  Close: 740.98,
  Volume: 3020098,
  Name: 'Google',
}, {
  Date: '10/11/2012',
  Open: 751.85,
  High: 754.87,
  Low: 744.10,
  Close: 744.75,
  Volume: 2406787,
  Name: 'Google',
}, {
  Date: '10/10/2012',
  Open: 752.90,
  High: 758.50,
  Low: 750.29,
  Close: 751.48,
  Volume: 2383987,
  Name: 'Google',
}, {
  Date: '10/09/2012',
  Open: 741.86,
  High: 747.53,
  Low: 738.29,
  Close: 744.56,
  Volume: 2041203,
  Name: 'Google',
}, {
  Date: '10/08/2012',
  Open: 759.67,
  High: 761.32,
  Low: 742.53,
  Close: 744.09,
  Volume: 3003884,
  Name: 'Google',
}, {
  Date: '10/07/2012',
  Open: 761.00,
  High: 763.58,
  Low: 754.15,
  Close: 757.84,
  Volume: 1958625,
  Name: 'Google',
}, {
  Date: '10/04/2012',
  Open: 770.71,
  High: 774.38,
  Low: 765.00,
  Close: 767.65,
  Volume: 2737751,
  Name: 'Google',
}, {
  Date: '10/03/2012',
  Open: 762.75,
  High: 769.89,
  Low: 759.40,
  Close: 768.05,
  Volume: 2454496,
  Name: 'Google',
}, {
  Date: '10/02/2012',
  Open: 755.72,
  High: 763.92,
  Low: 752.20,
  Close: 762.50,
  Volume: 2208639,
  Name: 'Google',
}, {
  Date: '10/01/2012',
  Open: 765.20,
  High: 765.99,
  Low: 750.27,
  Close: 756.99,
  Volume: 2790375,
  Name: 'Google',
}, {
  Date: '09/30/2012',
  Open: 759.05,
  High: 765.00,
  Low: 756.21,
  Close: 761.78,
  Volume: 3168477,
  Name: 'Google',
}, {
  Date: '09/27/2012',
  Open: 754.15,
  High: 759.30,
  Low: 751.15,
  Close: 754.50,
  Volume: 2784091,
  Name: 'Google',
}, {
  Date: '09/26/2012',
  Open: 759.95,
  High: 762.84,
  Low: 751.65,
  Close: 756.50,
  Volume: 3932272,
  Name: 'Google',
}, {
  Date: '09/25/2012',
  Open: 749.85,
  High: 761.24,
  Low: 741.00,
  Close: 753.46,
  Volume: 5674334,
  Name: 'Google',
}, {
  Date: '09/24/2012',
  Open: 753.05,
  High: 764.89,
  Low: 747.66,
  Close: 749.16,
  Volume: 6061033,
  Name: 'Google',
}, {
  Date: '09/23/2012',
  Open: 731.00,
  High: 750.04,
  Low: 730.25,
  Close: 749.38,
  Volume: 3565837,
  Name: 'Google',
}, {
  Date: '09/20/2012',
  Open: 732.21,
  High: 734.92,
  Low: 730.12,
  Close: 733.99,
  Volume: 6360376,
  Name: 'Google',
}, {
  Date: '09/19/2012',
  Open: 724.47,
  High: 731.38,
  Low: 721.22,
  Close: 728.12,
  Volume: 2907854,
  Name: 'Google',
}, {
  Date: '09/18/2012',
  Open: 717.50,
  High: 728.56,
  Low: 716.41,
  Close: 727.50,
  Volume: 3098782,
  Name: 'Google',
}, {
  Date: '09/17/2012',
  Open: 707.78,
  High: 718.66,
  Low: 706.78,
  Close: 718.28,
  Volume: 2067249,
  Name: 'Google',
}, {
  Date: '09/16/2012',
  Open: 708.11,
  High: 712.88,
  Low: 705.00,
  Close: 709.98,
  Volume: 1508307,
  Name: 'Google',
}, {
  Date: '09/13/2012',
  Open: 709.60,
  High: 713.00,
  Low: 707.01,
  Close: 709.68,
  Volume: 2618874,
  Name: 'Google',
}, {
  Date: '09/12/2012',
  Open: 693.09,
  High: 709.00,
  Low: 690.54,
  Close: 706.04,
  Volume: 2659302,
  Name: 'Google',
}, {
  Date: '09/11/2012',
  Open: 689.41,
  High: 694.91,
  Low: 680.88,
  Close: 690.88,
  Volume: 2642260,
  Name: 'Google',
}, {
  Date: '09/10/2012',
  Open: 697.96,
  High: 700.65,
  Low: 691.00,
  Close: 692.19,
  Volume: 1874004,
  Name: 'Google',
}, {
  Date: '09/09/2012',
  Open: 709.76,
  High: 712.81,
  Low: 698.39,
  Close: 700.77,
  Volume: 2560067,
  Name: 'Google',
}, {
  Date: '09/06/2012',
  Open: 700.00,
  High: 712.25,
  Low: 697.67,
  Close: 706.15,
  Volume: 3236308,
  Name: 'Google',
}, {
  Date: '09/05/2012',
  Open: 685.96,
  High: 699.89,
  Low: 684.73,
  Close: 699.40,
  Volume: 3044450,
  Name: 'Google',
}, {
  Date: '09/04/2012',
  Open: 680.00,
  High: 686.50,
  Low: 679.14,
  Close: 680.72,
  Volume: 1708169,
  Name: 'Google',
}, {
  Date: '09/03/2012',
  Open: 684.55,
  High: 685.00,
  Low: 673.50,
  Close: 681.04,
  Volume: 1889613,
  Name: 'Google',
}, {
  Date: '08/30/2012',
  Open: 684.00,
  High: 688.58,
  Low: 680.04,
  Close: 685.09,
  Volume: 2127125,
  Name: 'Google',
}, {
  Date: '08/29/2012',
  Open: 684.24,
  High: 687.39,
  Low: 680.18,
  Close: 681.68,
  Volume: 1627704,
  Name: 'Google',
}, {
  Date: '08/28/2012',
  Open: 677.37,
  High: 688.99,
  Low: 676.15,
  Close: 688.01,
  Volume: 2991037,
  Name: 'Google',
}, {
  Date: '08/27/2012',
  Open: 665.00,
  High: 677.62,
  Low: 664.74,
  Close: 677.25,
  Volume: 2058938,
  Name: 'Google',
}, {
  Date: '08/26/2012',
  Open: 662.99,
  High: 672.00,
  Low: 659.24,
  Close: 669.22,
  Volume: 2614131,
  Name: 'Google',
}, {
  Date: '08/23/2012',
  Open: 675.60,
  High: 680.45,
  Low: 674.08,
  Close: 678.63,
  Volume: 1429267,
  Name: 'Google',
}, {
  Date: '08/22/2012',
  Open: 674.27,
  High: 680.48,
  Low: 671.00,
  Close: 676.80,
  Volume: 1784453,
  Name: 'Google',
}, {
  Date: '08/21/2012',
  Open: 667.38,
  High: 680.60,
  Low: 666.70,
  Close: 677.18,
  Volume: 1909262,
  Name: 'Google',
}, {
  Date: '08/20/2012',
  Open: 673.11,
  High: 678.00,
  Low: 662.17,
  Close: 669.51,
  Volume: 2222805,
  Name: 'Google',
}, {
  Date: '08/19/2012',
  Open: 675.50,
  High: 678.87,
  Low: 672.66,
  Close: 675.54,
  Volume: 1758421,
  Name: 'Google',
}, {
  Date: '08/16/2012',
  Open: 674.12,
  High: 677.25,
  Low: 671.70,
  Close: 677.14,
  Volume: 2177896,
  Name: 'Google',
}, {
  Date: '08/15/2012',
  Open: 667.51,
  High: 674.64,
  Low: 667.08,
  Close: 672.87,
  Volume: 1717691,
  Name: 'Google',
}, {
  Date: '08/14/2012',
  Open: 670.28,
  High: 674.25,
  Low: 664.10,
  Close: 667.54,
  Volume: 2411100,
  Name: 'Google',
}, {
  Date: '08/13/2012',
  Open: 659.25,
  High: 672.85,
  Low: 659.00,
  Close: 668.66,
  Volume: 3662178,
  Name: 'Google',
}, {
  Date: '08/12/2012',
  Open: 647.42,
  High: 660.15,
  Low: 646.68,
  Close: 660.01,
  Volume: 3268073,
  Name: 'Google',
}, {
  Date: '08/09/2012',
  Open: 638.59,
  High: 642.24,
  Low: 636.13,
  Close: 642.00,
  Volume: 1434408,
  Name: 'Google',
}, {
  Date: '08/08/2012',
  Open: 644.51,
  High: 646.37,
  Low: 641.52,
  Close: 642.35,
  Volume: 1070288,
  Name: 'Google',
}, {
  Date: '08/07/2012',
  Open: 639.05,
  High: 645.87,
  Low: 638.50,
  Close: 642.23,
  Volume: 1322386,
  Name: 'Google',
}, {
  Date: '08/06/2012',
  Open: 641.79,
  High: 644.26,
  Low: 636.47,
  Close: 640.54,
  Volume: 1982695,
  Name: 'Google',
}, {
  Date: '08/05/2012',
  Open: 639.61,
  High: 649.38,
  Low: 639.22,
  Close: 642.82,
  Volume: 1782494,
  Name: 'Google',
}, {
  Date: '08/02/2012',
  Open: 640.00,
  High: 643.72,
  Low: 636.14,
  Close: 641.33,
  Volume: 1897446,
  Name: 'Google',
}, {
  Date: '08/01/2012',
  Open: 625.51,
  High: 638.03,
  Low: 623.41,
  Close: 628.75,
  Volume: 1977690,
  Name: 'Google',
}, {
  Date: '07/31/2012',
  Open: 637.30,
  High: 639.51,
  Low: 631.38,
  Close: 632.68,
  Volume: 1844556,
  Name: 'Google',
}, {
  Date: '07/30/2012',
  Open: 628.26,
  High: 636.50,
  Low: 628.22,
  Close: 632.97,
  Volume: 1865890,
  Name: 'Google',
}, {
  Date: '07/29/2012',
  Open: 636.05,
  High: 642.60,
  Low: 629.50,
  Close: 632.30,
  Volume: 2186717,
  Name: 'Google',
}, {
  Date: '07/26/2012',
  Open: 618.89,
  High: 635.00,
  Low: 617.50,
  Close: 634.96,
  Volume: 3550174,
  Name: 'Google',
}, {
  Date: '07/25/2012',
  Open: 615.00,
  High: 616.87,
  Low: 610.03,
  Close: 613.36,
  Volume: 1687485,
  Name: 'Google',
}, {
  Date: '07/24/2012',
  Open: 608.32,
  High: 613.38,
  Low: 605.37,
  Close: 607.99,
  Volume: 1822973,
  Name: 'Google',
}, {
  Date: '07/23/2012',
  Open: 615.00,
  High: 617.93,
  Low: 604.34,
  Close: 607.57,
  Volume: 2012189,
  Name: 'Google',
}, {
  Date: '07/22/2012',
  Open: 600.48,
  High: 618.35,
  Low: 598.25,
  Close: 615.51,
  Volume: 3561818,
  Name: 'Google',
}, {
  Date: '07/19/2012',
  Open: 608.76,
  High: 612.94,
  Low: 598.18,
  Close: 610.82,
  Volume: 6463748,
  Name: 'Google',
}, {
  Date: '07/18/2012',
  Open: 586.14,
  High: 598.48,
  Low: 586.00,
  Close: 593.06,
  Volume: 4674637,
  Name: 'Google',
}, {
  Date: '07/17/2012',
  Open: 576.98,
  High: 583.69,
  Low: 576.13,
  Close: 580.76,
  Volume: 1550950,
  Name: 'Google',
}, {
  Date: '07/16/2012',
  Open: 578.43,
  High: 580.67,
  Low: 568.40,
  Close: 576.73,
  Volume: 1681568,
  Name: 'Google',
}, {
  Date: '07/15/2012',
  Open: 576.37,
  High: 579.19,
  Low: 571.78,
  Close: 574.92,
  Volume: 1462861,
  Name: 'Google',
}, {
  Date: '07/12/2012',
  Open: 572.15,
  High: 579.15,
  Low: 568.55,
  Close: 576.52,
  Volume: 1976558,
  Name: 'Google',
}, {
  Date: '07/11/2012',
  Open: 567.12,
  High: 571.93,
  Low: 562.09,
  Close: 570.48,
  Volume: 2310094,
  Name: 'Google',
}, {
  Date: '07/10/2012',
  Open: 576.30,
  High: 577.85,
  Low: 564.94,
  Close: 571.19,
  Volume: 3500946,
  Name: 'Google',
}, {
  Date: '07/09/2012',
  Open: 590.19,
  High: 592.43,
  Low: 578.74,
  Close: 581.70,
  Volume: 1923015,
  Name: 'Google',
}, {
  Date: '07/08/2012',
  Open: 584.95,
  High: 588.60,
  Low: 581.25,
  Close: 586.01,
  Volume: 1715020,
  Name: 'Google',
}, {
  Date: '07/05/2012',
  Open: 592.45,
  High: 593.52,
  Low: 582.82,
  Close: 585.98,
  Volume: 2162328,
  Name: 'Google',
}, {
  Date: '07/04/2012',
  Open: 588.76,
  High: 600.06,
  Low: 588.54,
  Close: 595.92,
  Volume: 2345901,
  Name: 'Google',
}, {
  Date: '07/02/2012',
  Open: 580.01,
  High: 588.41,
  Low: 578.00,
  Close: 587.83,
  Volume: 1190525,
  Name: 'Google',
}, {
  Date: '07/01/2012',
  Open: 581.82,
  High: 583.00,
  Low: 576.50,
  Close: 580.47,
  Volume: 1655563,
  Name: 'Google',
}, {
  Date: '06/28/2012',
  Open: 574.96,
  High: 580.13,
  Low: 572.20,
  Close: 580.07,
  Volume: 2522562,
  Name: 'Google',
}, {
  Date: '06/27/2012',
  Open: 565.90,
  High: 566.23,
  Low: 557.21,
  Close: 564.31,
  Volume: 1922064,
  Name: 'Google',
}, {
  Date: '06/26/2012',
  Open: 567.70,
  High: 573.99,
  Low: 566.02,
  Close: 569.30,
  Volume: 1692446,
  Name: 'Google',
}, {
  Date: '06/25/2012',
  Open: 562.76,
  High: 566.60,
  Low: 559.48,
  Close: 564.68,
  Volume: 1351151,
  Name: 'Google',
}, {
  Date: '06/24/2012',
  Open: 567.33,
  High: 568.09,
  Low: 557.35,
  Close: 560.70,
  Volume: 1582036,
  Name: 'Google',
}, {
  Date: '06/21/2012',
  Open: 568.00,
  High: 571.48,
  Low: 565.82,
  Close: 571.48,
  Volume: 2229125,
  Name: 'Google',
}, {
  Date: '06/20/2012',
  Open: 579.84,
  High: 579.84,
  Low: 563.73,
  Close: 565.21,
  Volume: 2011322,
  Name: 'Google',
}, {
  Date: '06/19/2012',
  Open: 579.81,
  High: 580.00,
  Low: 573.51,
  Close: 577.51,
  Volume: 2346698,
  Name: 'Google',
}, {
  Date: '06/18/2012',
  Open: 573.59,
  High: 584.28,
  Low: 573.12,
  Close: 581.53,
  Volume: 2076629,
  Name: 'Google',
}, {
  Date: '06/17/2012',
  Open: 562.62,
  High: 574.21,
  Low: 559.25,
  Close: 570.85,
  Volume: 2497864,
  Name: 'Google',
}, {
  Date: '06/14/2012',
  Open: 560.34,
  High: 564.52,
  Low: 557.09,
  Close: 564.51,
  Volume: 3002511,
  Name: 'Google',
}, {
  Date: '06/13/2012',
  Open: 561.30,
  High: 565.07,
  Low: 556.52,
  Close: 559.05,
  Volume: 2345107,
  Name: 'Google',
}, {
  Date: '06/12/2012',
  Open: 561.72,
  High: 567.00,
  Low: 558.68,
  Close: 561.09,
  Volume: 1954607,
  Name: 'Google',
}, {
  Date: '06/11/2012',
  Open: 569.77,
  High: 570.30,
  Low: 558.58,
  Close: 565.10,
  Volume: 3224142,
  Name: 'Google',
}, {
  Date: '06/10/2012',
  Open: 584.21,
  High: 585.32,
  Low: 566.69,
  Close: 568.50,
  Volume: 2662269,
  Name: 'Google',
}, {
  Date: '06/07/2012',
  Open: 575.85,
  High: 581.00,
  Low: 574.58,
  Close: 580.45,
  Volume: 1410366,
  Name: 'Google',
}, {
  Date: '06/06/2012',
  Open: 587.60,
  High: 587.89,
  Low: 577.25,
  Close: 578.23,
  Volume: 1759532,
  Name: 'Google',
}, {
  Date: '06/05/2012',
  Open: 576.48,
  High: 581.97,
  Low: 573.61,
  Close: 580.57,
  Volume: 2096173,
  Name: 'Google',
}, {
  Date: '06/04/2012',
  Open: 575.45,
  High: 578.13,
  Low: 566.47,
  Close: 570.41,
  Volume: 2340477,
  Name: 'Google',
}, {
  Date: '06/03/2012',
  Open: 570.22,
  High: 580.49,
  Low: 570.01,
  Close: 578.59,
  Volume: 2433786,
  Name: 'Google',
}, {
  Date: '05/31/2012',
  Open: 571.79,
  High: 572.65,
  Low: 568.35,
  Close: 570.98,
  Volume: 3058314,
  Name: 'Google',
}, {
  Date: '05/30/2012',
  Open: 588.72,
  High: 590.00,
  Low: 579.00,
  Close: 580.86,
  Volume: 2969455,
  Name: 'Google',
}, {
  Date: '05/29/2012',
  Open: 588.16,
  High: 591.90,
  Low: 583.53,
  Close: 588.23,
  Volume: 1906629,
  Name: 'Google',
}, {
  Date: '05/28/2012',
  Open: 595.81,
  High: 599.13,
  Low: 588.32,
  Close: 594.34,
  Volume: 2606651,
  Name: 'Google',
}, {
  Date: '05/24/2012',
  Open: 601.00,
  High: 601.73,
  Low: 588.28,
  Close: 591.53,
  Volume: 3582472,
  Name: 'Google',
}, {
  Date: '05/23/2012',
  Open: 609.16,
  High: 611.92,
  Low: 598.87,
  Close: 603.66,
  Volume: 1892185,
  Name: 'Google',
}, {
  Date: '05/22/2012',
  Open: 601.65,
  High: 609.60,
  Low: 597.12,
  Close: 609.46,
  Volume: 3178016,
  Name: 'Google',
}, {
  Date: '05/21/2012',
  Open: 613.44,
  High: 613.81,
  Low: 596.00,
  Close: 600.80,
  Volume: 3052748,
  Name: 'Google',
}, {
  Date: '05/20/2012',
  Open: 600.51,
  High: 615.69,
  Low: 600.00,
  Close: 614.11,
  Volume: 3075829,
  Name: 'Google',
}, {
  Date: '05/17/2012',
  Open: 625.10,
  High: 632.42,
  Low: 596.70,
  Close: 600.40,
  Volume: 5976129,
  Name: 'Google',
}, {
  Date: '05/16/2012',
  Open: 633.83,
  High: 637.85,
  Low: 621.23,
  Close: 623.05,
  Volume: 3354518,
  Name: 'Google',
}, {
  Date: '05/15/2012',
  Open: 617.96,
  High: 630.10,
  Low: 615.94,
  Close: 628.93,
  Volume: 4837424,
  Name: 'Google',
}, {
  Date: '05/14/2012',
  Open: 605.35,
  High: 615.00,
  Low: 603.75,
  Close: 611.11,
  Volume: 2102339,
  Name: 'Google',
}, {
  Date: '05/13/2012',
  Open: 600.78,
  High: 608.50,
  Low: 600.58,
  Close: 604.00,
  Volume: 1824733,
  Name: 'Google',
}, {
  Date: '05/10/2012',
  Open: 610.35,
  High: 614.55,
  Low: 604.77,
  Close: 605.23,
  Volume: 2099726,
  Name: 'Google',
}, {
  Date: '05/09/2012',
  Open: 612.96,
  High: 616.19,
  Low: 610.23,
  Close: 613.66,
  Volume: 1535877,
  Name: 'Google',
}, {
  Date: '05/08/2012',
  Open: 606.82,
  High: 616.38,
  Low: 601.81,
  Close: 609.15,
  Volume: 2329546,
  Name: 'Google',
}, {
  Date: '05/07/2012',
  Open: 605.53,
  High: 616.90,
  Low: 600.70,
  Close: 612.79,
  Volume: 2678485,
  Name: 'Google',
}, {
  Date: '05/06/2012',
  Open: 595.00,
  High: 610.57,
  Low: 595.00,
  Close: 607.55,
  Volume: 1994515,
  Name: 'Google',
}, {
  Date: '05/03/2012',
  Open: 605.92,
  High: 607.89,
  Low: 596.81,
  Close: 596.97,
  Volume: 2207360,
  Name: 'Google',
}, {
  Date: '05/02/2012',
  Open: 609.62,
  High: 614.83,
  Low: 608.95,
  Close: 611.02,
  Volume: 1868187,
  Name: 'Google',
}, {
  Date: '05/01/2012',
  Open: 601.20,
  High: 608.11,
  Low: 600.61,
  Close: 607.26,
  Volume: 1611434,
  Name: 'Google',
}, {
  Date: '04/30/2012',
  Open: 603.79,
  High: 611.60,
  Low: 600.19,
  Close: 604.43,
  Volume: 2002424,
  Name: 'Google',
}, {
  Date: '04/29/2012',
  Open: 612.99,
  High: 616.08,
  Low: 600.61,
  Close: 604.85,
  Volume: 2407213,
  Name: 'Google',
}, {
  Date: '04/26/2012',
  Open: 615.02,
  High: 616.74,
  Low: 610.60,
  Close: 614.98,
  Volume: 1636399,
  Name: 'Google',
}, {
  Date: '04/25/2012',
  Open: 610.91,
  High: 618.00,
  Low: 609.70,
  Close: 615.47,
  Volume: 2093733,
  Name: 'Google',
}];

@Injectable()
export class Service {
  getStockPrices(): StockPrice[] {
    return stockPrices;
  }
}