enum TemporalUnit {
    MILLISECONDS = "MILLISECONDS",
    SECONDS = "SECONDS",
    MINUTES = "MINUTES",
    HOURS = "HOURS"
}

export class Duration {
    private constructor(private readonly value: number, private readonly unit: TemporalUnit) {}

    public static ofMillis(value: number): Duration {
        return new Duration(value, TemporalUnit.MILLISECONDS);
    }

    public static ofSeconds(value: number): Duration {
        return new Duration(value, TemporalUnit.SECONDS);
    }

    public static ofMinutes(value: number): Duration {
        return new Duration(value, TemporalUnit.MINUTES);
    }

    public static ofHours(value: number): Duration {
        return new Duration(value, TemporalUnit.HOURS);
    }

    public toMillis(): number {
        return this.convert(TemporalUnit.MILLISECONDS);
    }

    public toSeconds(): number {
        return this.convert(TemporalUnit.SECONDS);
    }

    public toMinutes(): number {
        return this.convert(TemporalUnit.MINUTES);
    }

    public toHours(): number {
        return this.convert(TemporalUnit.HOURS);
    }

    private convert(to: TemporalUnit): number {
        return stateMachine(this.value)[this.unit][to];
    }
}

type StateMachine = { [from in TemporalUnit]: { [to in TemporalUnit]: number } };

const stateMachine = (value: number): StateMachine => ({
    [TemporalUnit.MILLISECONDS]: {
        [TemporalUnit.MILLISECONDS]: value,
        [TemporalUnit.SECONDS]: value / 1000,
        [TemporalUnit.MINUTES]: value / 60000,
        [TemporalUnit.HOURS]: value / 3.6e6
    },
    [TemporalUnit.SECONDS]: {
        [TemporalUnit.MILLISECONDS]: value * 1000,
        [TemporalUnit.SECONDS]: value,
        [TemporalUnit.MINUTES]: value / 60,
        [TemporalUnit.HOURS]: value / 3600
    },
    [TemporalUnit.MINUTES]: {
        [TemporalUnit.MILLISECONDS]: value * 60000,
        [TemporalUnit.SECONDS]: value * 60,
        [TemporalUnit.MINUTES]: value,
        [TemporalUnit.HOURS]: value / 60
    },
    [TemporalUnit.HOURS]: {
        [TemporalUnit.MILLISECONDS]: value * 3.6e6,
        [TemporalUnit.SECONDS]: value * 3600,
        [TemporalUnit.MINUTES]: value * 60,
        [TemporalUnit.HOURS]: value
    }
});
