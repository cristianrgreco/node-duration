type Amount = number;

export enum TemporalUnit {
    MILLISECONDS,
    SECONDS
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
        [TemporalUnit.SECONDS]: amount / 1000
    },
    [TemporalUnit.SECONDS]: {
        [TemporalUnit.MILLISECONDS]: amount * 1000,
        [TemporalUnit.SECONDS]: amount
    }
});
