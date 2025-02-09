import { convertText } from "../convertText";

describe("ConvertText", () => {
    it('should retuen proper value when good input', () => {
        expect(convertText('moNika')).toBe('Monika');
        expect(convertText('adam')).toBe('Adam');
        expect(convertText('emilIa')).toBe('Emilia');
        expect(convertText('JOLA')).toBe('Jola');
    });
    it('should return undefined when empty input', () => {
        expect(convertText()).toBeNaN();
    });
    it('should return Error when input is not string', () => {
        expect(convertText(10)).toBe('Error');
        expect(convertText({})).toBe('Error');
        expect(convertText([])).toBe('Error');
        expect(convertText(function() {})).toBe('Error');
        expect(convertText(null)).toBe('Error');
    });
});