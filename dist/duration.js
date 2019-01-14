"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemporalUnit;
(function (TemporalUnit) {
    TemporalUnit["MILLISECONDS"] = "MILLISECONDS";
    TemporalUnit["SECONDS"] = "SECONDS";
    TemporalUnit["MINUTES"] = "MINUTES";
    TemporalUnit["HOURS"] = "HOURS";
})(TemporalUnit = exports.TemporalUnit || (exports.TemporalUnit = {}));
var Duration = /** @class */ (function () {
    function Duration(amount, unit) {
        this.amount = amount;
        this.unit = unit;
    }
    Duration.prototype.get = function (unit) {
        return this.convert(unit);
    };
    Duration.prototype.convert = function (to) {
        return stateMachine(this.amount)[this.unit][to];
    };
    return Duration;
}());
exports.Duration = Duration;
var stateMachine = function (amount) {
    var _a, _b, _c, _d, _e;
    return (_a = {},
        _a[TemporalUnit.MILLISECONDS] = (_b = {},
            _b[TemporalUnit.MILLISECONDS] = amount,
            _b[TemporalUnit.SECONDS] = amount / 1000,
            _b[TemporalUnit.MINUTES] = amount / 60000,
            _b[TemporalUnit.HOURS] = amount / 3.6e6,
            _b),
        _a[TemporalUnit.SECONDS] = (_c = {},
            _c[TemporalUnit.MILLISECONDS] = amount * 1000,
            _c[TemporalUnit.SECONDS] = amount,
            _c[TemporalUnit.MINUTES] = amount / 60,
            _c[TemporalUnit.HOURS] = amount / 3600,
            _c),
        _a[TemporalUnit.MINUTES] = (_d = {},
            _d[TemporalUnit.MILLISECONDS] = amount * 60000,
            _d[TemporalUnit.SECONDS] = amount * 60,
            _d[TemporalUnit.MINUTES] = amount,
            _d[TemporalUnit.HOURS] = amount / 60,
            _d),
        _a[TemporalUnit.HOURS] = (_e = {},
            _e[TemporalUnit.MILLISECONDS] = amount * 3.6e6,
            _e[TemporalUnit.SECONDS] = amount * 3600,
            _e[TemporalUnit.MINUTES] = amount * 60,
            _e[TemporalUnit.HOURS] = amount,
            _e),
        _a);
};
