import { describe , test , expect } from "vitest";
import { SerieN } from "../serie-n";

describe('tests related with serie-n calculation', () => { 
    test('should fibonacci of 0 be 0', () => { 
        const serieN = new SerieN(0);
        expect(serieN.fibonacci).toBe(0);
    })

    test('should fibonacci of 1 be 1', () => { 
        const serieN = new SerieN(1);
        expect(serieN.fibonacci).toBe(1);
    })

    test('should fibonacci of 2 be 2', () => { 
        const serieN = new SerieN(2);
        expect(serieN.fibonacci).toBe(2);
    })

    test('should fibonacci of 3 be 4', () => { 
        const serieN = new SerieN(3);
        expect(serieN.fibonacci).toBe(4);
    })

    test('should fibonacci of 4 be 7', () => { 
        const serieN = new SerieN(4);
        expect(serieN.fibonacci).toBe(7);
    })

    test('should fibonacci of 10 be 143', () => { 
        const serieN = new SerieN(10);
        expect(serieN.fibonacci).toBe(143);
    })


})