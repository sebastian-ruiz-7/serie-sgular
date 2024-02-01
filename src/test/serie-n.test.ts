import { describe , test , expect } from "vitest";
import { SerieN } from "../serie-n";

describe('tests related with serie-n calculation', () => { 
    test('should throw an error if n is a string' , () => {
        //only natural numbers are allowed
        try {
            //@ts-ignore
            const serieN = new SerieN("a");
        } catch (error) {
            //@ts-ignore
            expect(error.message).toBe('n should be a natural number.')
        }
    })

    test('should throw an error if n is a string' , () => {
        //only natural numbers are allowed
        try {
            //@ts-ignore
            const serieN = new SerieN("2");
        } catch (error) {
            //@ts-ignore
            expect(error.message).toBe('n should be a natural number.')
        }
    })

    test('should throw an error if n is negative' , () => {
        //only natural numbers are allowed
        try {
            //@ts-ignore
            const serieN = new SerieN(-1);
        } catch (error) {
            //@ts-ignore
            expect(error.message).toBe('n should be a natural number.')
        }
    })

    test('should throw an error if n is float' , () => {
        //only natural numbers are allowed
        try {
            //@ts-ignore
            const serieN = new SerieN(1.4);
        } catch (error) {
            //@ts-ignore
            expect(error.message).toBe('n should be a natural number.')
        }
    })

    test('should validate results one by one', () => { 
        const serieN = new SerieN(0);
        expect(serieN.fibonacci).toBe(0);
        expect(serieN.triangular).toBe(0);
        expect(serieN.prime).toBe(0);
        expect(serieN.result).toBe(0);
    })

    test('should validate results one by one', () => { 
        const n=1
        const serieN = new SerieN(n);
        expect(serieN.fibonacci).toBe(1);
        expect(serieN.triangular).toBe((n*(n+1)/2));
        expect(serieN.prime).toBe(1);
        expect(serieN.result).toBe(serieN.fibonacci - (2 * serieN.triangular) + serieN.prime);
    })

    test('should validate results one by one', () => { 
        const n=2
        const serieN = new SerieN(n);
        expect(serieN.fibonacci).toBe(2);
        expect(serieN.triangular).toBe((n*(n+1)/2));
        expect(serieN.prime).toBe(2);
        expect(serieN.result).toBe(serieN.fibonacci - (2 * serieN.triangular) + serieN.prime);
    })

    test('should validate results one by one', () => { 
        const n=3
        const serieN = new SerieN(n);
        expect(serieN.fibonacci).toBe(4);
        expect(serieN.triangular).toBe((n*(n+1)/2));
        expect(serieN.prime).toBe(5);
        expect(serieN.result).toBe(serieN.fibonacci - (2 * serieN.triangular) + serieN.prime);
    })

    test('should validate results one by one', () => { 
        const n=4
        const serieN = new SerieN(n);
        expect(serieN.fibonacci).toBe(7);
        expect(serieN.triangular).toBe((n*(n+1)/2));
        expect(serieN.prime).toBe(5);
        expect(serieN.result).toBe(serieN.fibonacci - (2 * serieN.triangular) + serieN.prime);
    })

    test('should validate results one by one', () => { 
        const n=10
        const serieN = new SerieN(n);
        expect(serieN.fibonacci).toBe(143);
        expect(serieN.triangular).toBe((n*(n+1)/2));
        expect(serieN.prime).toBe(17);
        expect(serieN.result).toBe(serieN.fibonacci - (2 * serieN.triangular) + serieN.prime);
    })

    // prime

})