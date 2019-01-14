declare type Amount = number;
export declare enum TemporalUnit {
    MILLISECONDS = 0,
    SECONDS = 1
}
export declare class Duration {
    private readonly amount;
    private readonly unit;
    constructor(amount: Amount, unit: TemporalUnit);
    get(unit: TemporalUnit): Amount;
    private convert;
}
export {};
