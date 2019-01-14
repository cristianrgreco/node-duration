"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemporalUnit;
(function (TemporalUnit) {
    TemporalUnit[TemporalUnit["MILLISECONDS"] = 0] = "MILLISECONDS";
    TemporalUnit[TemporalUnit["SECONDS"] = 1] = "SECONDS";
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
    var _a, _b, _c;
    return (_a = {},
        _a[TemporalUnit.MILLISECONDS] = (_b = {},
            _b[TemporalUnit.MILLISECONDS] = amount,
            _b[TemporalUnit.SECONDS] = amount / 1000,
            _b),
        _a[TemporalUnit.SECONDS] = (_c = {},
            _c[TemporalUnit.MILLISECONDS] = amount * 1000,
            _c[TemporalUnit.SECONDS] = amount,
            _c),
        _a);
};
