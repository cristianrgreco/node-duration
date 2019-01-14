import { Duration, TemporalUnit } from "./duration";

describe("Duration", () => {
    describe("should convert", () => {
        it("from milliseconds", () => {
            const duration = new Duration(6_000, TemporalUnit.MILLISECONDS);
            expect(duration.get(TemporalUnit.MILLISECONDS)).toBe(6_000);
            expect(duration.get(TemporalUnit.SECONDS)).toBe(6);
            expect(duration.get(TemporalUnit.MINUTES)).toBe(0.1);
            expect(duration.get(TemporalUnit.HOURS)).toBe(0.0016666666666666668);
        });

        it("from seconds", () => {
            const duration = new Duration(6_000, TemporalUnit.SECONDS);
            expect(duration.get(TemporalUnit.MILLISECONDS)).toBe(6_000_000);
            expect(duration.get(TemporalUnit.SECONDS)).toBe(6_000);
            expect(duration.get(TemporalUnit.MINUTES)).toBe(100);
            expect(duration.get(TemporalUnit.HOURS)).toBe(1.6666666666666667);
        });

        it("from minutes", () => {
            const duration = new Duration(6_000, TemporalUnit.MINUTES);
            expect(duration.get(TemporalUnit.MILLISECONDS)).toBe(3.6e8);
            expect(duration.get(TemporalUnit.SECONDS)).toBe(360_000);
            expect(duration.get(TemporalUnit.MINUTES)).toBe(6_000);
            expect(duration.get(TemporalUnit.HOURS)).toBe(100);
        });

        it("from hours", () => {
            const duration = new Duration(6_000, TemporalUnit.HOURS);
            expect(duration.get(TemporalUnit.MILLISECONDS)).toBe(2.16e10);
            expect(duration.get(TemporalUnit.SECONDS)).toBe(2.16e7);
            expect(duration.get(TemporalUnit.MINUTES)).toBe(360_000);
            expect(duration.get(TemporalUnit.HOURS)).toBe(6_000);
        });
    });
});
