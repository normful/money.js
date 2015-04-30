/*!
 * money.js / fx() v0.2
 * Copyright 2014 Open Exchange Rates
 *
 * JavaScript library for realtime currency conversion and exchange rate calculation.
 *
 * Freely distributable under the MIT license.
 * Portions of money.js are inspired by or borrowed from underscore.js
 *
 * For details, examples and documentation:
 * http://openexchangerates.github.io/money.js/
 */
function convert(val, from) {

  var rates = {
    AED: 3.67265,
    AFN: 57.3701,
    ALL: 123.1,
    AMD: 479.217998,
    ANG: 1.78952,
    AOA: 105.000126,
    ARS: 8.678108,
    AUD: 1.287225,
    AWG: 1.79,
    AZN: 0.783317,
    BAM: 1.716635,
    BBD: 2,
    BDT: 77.91521,
    BGN: 1.71537,
    BHD: 0.377017,
    BIF: 1566.675,
    BMD: 1,
    BND: 1.35644,
    BOB: 6.9049,
    BRL: 2.83382,
    BSD: 1,
    BTC: 0.0043097411,
    BTN: 62.147563,
    BWP: 9.666088,
    BYR: 15331.333333,
    BZD: 1.99886,
    CAD: 1.245236,
    CDF: 926.65,
    CHF: 0.932015,
    CLF: 0.02478,
    CLP: 618.495001,
    CNY: 6.220052,
    COP: 2383.2,
    CRC: 538.843004,
    CUP: 1.000625,
    CVE: 96.696699,
    CZK: 24.24025,
    DJF: 177.611121,
    DKK: 6.53082,
    DOP: 44.833,
    DZD: 94.1272,
    EEK: 13.731525,
    EGP: 7.617672,
    ERN: 15.146125,
    ETB: 20.32114,
    EUR: 0.877424,
    FJD: 2.049666,
    FKP: 0.648948,
    GBP: 0.648948,
    GEL: 1.7655,
    GGP: 0.648948,
    GHS: 3.41808,
    GIP: 0.648948,
    GMD: 42.968,
    GNF: 7235,
    GTQ: 7.65724,
    GYD: 206.732502,
    HKD: 7.755441,
    HNL: 21.17392,
    HRK: 6.75999,
    HTG: 46.59608,
    HUF: 268.829798,
    IDR: 12764.89987,
    ILS: 3.882973,
    IMP: 0.648948,
    INR: 62.09653,
    IQD: 1191.683333,
    IRR: 27568,
    ISK: 131.375999,
    JEP: 0.648948,
    JMD: 115.542999,
    JOD: 0.709864,
    JPY: 118.6557,
    KES: 91.56116,
    KGS: 60.669375,
    KHR: 4056.527417,
    KMF: 431.744465,
    KPW: 900,
    KRW: 1097.791649,
    KWD: 0.295279,
    KYD: 0.824323,
    KZT: 185.477999,
    LAK: 8114.483398,
    LBP: 1507.833333,
    LKR: 132.969999,
    LRD: 84.815525,
    LSL: 11.67826,
    LTL: 2.972284,
    LVL: 0.616801,
    LYD: 1.35611,
    MAD: 9.512464,
    MDL: 18.7904,
    MGA: 2841.316667,
    MKD: 53.91144,
    MMK: 1031.066667,
    MNT: 1958.833333,
    MOP: 7.95896,
    MRO: 291.52875,
    MTL: 0.683602,
    MUR: 33.3473,
    MVR: 15.23292,
    MWK: 449.246999,
    MXN: 14.89534,
    MYR: 3.58206,
    MZN: 33.670975,
    NAD: 11.67822,
    NGN: 204.274001,
    NIO: 26.68846,
    NOK: 7.582327,
    NPR: 99.20836,
    NZD: 1.337953,
    OMR: 0.384948,
    PAB: 1,
    PEN: 3.07756,
    PGK: 2.632733,
    PHP: 44.28281,
    PKR: 101.370761,
    PLN: 3.669533,
    PYG: 4762.869987,
    QAR: 3.641189,
    RON: 3.89903,
    RSD: 106.255,
    RUB: 63.33746,
    RWF: 690.014,
    SAR: 3.750887,
    SBD: 7.698378,
    SCR: 14.00301,
    SDG: 5.9723,
    SEK: 8.413743,
    SGD: 1.354582,
    SHP: 0.648948,
    SLL: 4358.333333,
    SOS: 697.906022,
    SRD: 3.2825,
    STD: 21543.144533,
    SVC: 8.71784,
    SYP: 188.896999,
    SZL: 11.6788,
    THB: 32.58811,
    TJS: 5.39785,
    TMT: 2.849715,
    TND: 1.92094,
    TOP: 2.010219,
    TRY: 2.457057,
    TTD: 6.35913,
    TWD: 31.42154,
    TZS: 1804.550016,
    UAH: 25.904,
    UGX: 2872.65,
    USD: 1,
    UYU: 24.7117,
    UZS: 2452.969971,
    VEF: 6.311763,
    VND: 21332.166667,
    VUV: 106.107501,
    WST: 2.495748,
    XAF: 575.218129,
    XAG: 0.05775279,
    XAU: 0.00081416,
    XCD: 2.70142,
    XDR: 0.706658,
    XOF: 575.234129,
    XPF: 104.870429,
    YER: 215.08,
    ZAR: 11.65586,
    ZMK: 5252.024745,
    ZMW: 6.696675,
    ZWL: 322.355006
  };

	var base = 'USD';

	var getRate = function(to, from) {

		rates[base] = 1;

		if (!rates[to] || !rates[from]) {
      throw 'fx error';
    }

		if (from === base) {
			return rates[to];
		}

		if (to === base) {
			return 1 / rates[from];
		}

		return rates[to] * (1 / rates[from]);
	};

  return val * getRate(base, from);
}
