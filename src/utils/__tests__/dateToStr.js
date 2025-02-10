import { dateToString } from "../dateToStr";

describe('DateToString', () => {
    it('should return proper value when good input', () => {
        expect(dateToString(new Date(2025, 1, 2))).toBe('02/02/2025');
        expect(dateToString(new Date(2024, 10, 15))).toBe('11/15/2024');
        expect(dateToString(new Date(2019, 7, 3))).toBe('08/03/2019');
    });
    it('should return null when empty input', () => {
        expect(dateToString()).toBe(null);
    });
    it('should return null when input value is not object', () => {
        expect(dateToString('abc')).toBe(undefined);
        expect(dateToString(6060)).toBe(undefined);
        expect(dateToString('03/06/2024')).toBe(undefined);
    });
});