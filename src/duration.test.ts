import { Duration } from "./duration";

describe("Duration", () => {
    describe("should convert", () => {
        it("from milliseconds", () => {
            const duration = Duration.ofMillis(6_000);
            expect(duration.toMillis()).toBe(6_000);
            expect(duration.toSeconds()).toBe(6);
            expect(duration.toMinutes()).toBe(0.1);
            expect(duration.toHours()).toBe(0.0016666666666666668);
        });

        it("from seconds", () => {
            const duration = Duration.ofSeconds(6_000);
            expect(duration.toMillis()).toBe(6_000_000);
            expect(duration.toSeconds()).toBe(6_000);
            expect(duration.toMinutes()).toBe(100);
            expect(duration.toHours()).toBe(1.6666666666666667);
        });

        it("from minutes", () => {
            const duration = Duration.ofMinutes(6_000);
            expect(duration.toMillis()).toBe(3.6e8);
            expect(duration.toSeconds()).toBe(360_000);
            expect(duration.toMinutes()).toBe(6_000);
            expect(duration.toHours()).toBe(100);
        });

        it("from hours", () => {
            const duration = Duration.ofHours(6_000);
            expect(duration.toMillis()).toBe(2.16e10);
            expect(duration.toSeconds()).toBe(2.16e7);
            expect(duration.toMinutes()).toBe(360_000);
            expect(duration.toHours()).toBe(6_000);
        });
    });
});
