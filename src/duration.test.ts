import { Duration, TemporalUnit } from "./duration";

describe("Duration", () => {
    describe("should convert", () => {
        it("from milliseconds", () => {
            const duration = new Duration(1_000, TemporalUnit.MILLISECONDS);
            expect(duration.get(TemporalUnit.SECONDS)).toBe(1);
            expect(duration.get(TemporalUnit.MILLISECONDS)).toBe(1_000);
        });

        it("from seconds", () => {
            const duration = new Duration(1_000, TemporalUnit.SECONDS);
            expect(duration.get(TemporalUnit.SECONDS)).toBe(1_000);
            expect(duration.get(TemporalUnit.MILLISECONDS)).toBe(1_000_000);
        });
    });
});
