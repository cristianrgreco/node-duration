type Amount = number;

export enum TemporalUnit {
    MILLISECONDS,
    SECONDS,
    MINUTES,
    HOURS
}

export class Duration {
    constructor(private readonly amount: Amount, private readonly unit: TemporalUnit) {}

    public get(unit: TemporalUnit): Amount {
        return this.convert(unit);
    }

    private convert(to: TemporalUnit): Amount {
        return stateMachine(this.amount)[this.unit][to];
    }
}

type StateMachine = { [from in TemporalUnit]: { [to in TemporalUnit]: Amount } };

const stateMachine = (amount: Amount): StateMachine => ({
    [TemporalUnit.MILLISECONDS]: {
        [TemporalUnit.MILLISECONDS]: amount,
        [TemporalUnit.SECONDS]: amount / 1000,
        [TemporalUnit.MINUTES]: amount / 60000,
        [TemporalUnit.HOURS]: amount / 3.6e6
    },
    [TemporalUnit.SECONDS]: {
        [TemporalUnit.MILLISECONDS]: amount * 1000,
        [TemporalUnit.SECONDS]: amount,
        [TemporalUnit.MINUTES]: amount / 60,
        [TemporalUnit.HOURS]: amount / 3600
    },
    [TemporalUnit.MINUTES]: {
        [TemporalUnit.MILLISECONDS]: amount * 60000,
        [TemporalUnit.SECONDS]: amount * 60,
        [TemporalUnit.MINUTES]: amount,
        [TemporalUnit.HOURS]: amount / 60
    },
    [TemporalUnit.HOURS]: {
        [TemporalUnit.MILLISECONDS]: amount * 3.6e6,
        [TemporalUnit.SECONDS]: amount * 3600,
        [TemporalUnit.MINUTES]: amount * 60,
        [TemporalUnit.HOURS]: amount
    }
});
