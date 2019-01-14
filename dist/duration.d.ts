declare type Amount = number;
export declare enum TemporalUnit {
    MILLISECONDS = "MILLISECONDS",
    SECONDS = "SECONDS",
    MINUTES = "MINUTES",
    HOURS = "HOURS"
}
export declare class Duration {
    private readonly amount;
    private readonly unit;
    constructor(amount: Amount, unit: TemporalUnit);
    get(unit: TemporalUnit): Amount;
    private convert;
}
export {};
