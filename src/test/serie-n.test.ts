import { describe , test , expect } from "vitest";
import { SerieN } from "../serie-n";

describe('tests related with serie-n calculation', () => { 
    // fibonacci
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

    // triangular
    test('should triangular of 0 be 0', () => { 
        const serieN = new SerieN(0);
        expect(serieN.triangular).toBe(0);
    })

    test('should triangular of 1 be 1', () => { 
        const n=1
        const serieN = new SerieN(n);
        expect(serieN.triangular).toBe((n*(n+1)/2));
    })

    test('should triangular of 2 be 3', () => { 
        const n=2
        const serieN = new SerieN(n);
        expect(serieN.triangular).toBe((n*(n+1)/2));
    })

    test('should triangular of 3 be 4', () => { 
        const n=3
        const serieN = new SerieN(n);
        expect(serieN.triangular).toBe((n*(n+1)/2));
    })

    test('should triangular of 4 be 7', () => { 
        const n=4
        const serieN = new SerieN(n);
        expect(serieN.triangular).toBe((n*(n+1)/2));
    })

    test('should triangular of 10 be 143', () => { 
        const n=10
        const serieN = new SerieN(n);
        expect(serieN.triangular).toBe((n*(n+1)/2));
    })
})