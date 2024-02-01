export class SerieN {
    result: number = 0;
    protected _fibonacci: number = 0;
    protected _triangular: number = 0;
    protected _prime: number = 0;

    constructor(public n: number) {
        if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
            throw new Error("n should be a natural number.");
        }
        this.n = n;
        this.calculateSerieN();
    }

    private calculateSerieN() {
        this.calculateFibonacci();
        this.calculateTriangular();
        this.calculatePrime();
        this.result = this._fibonacci - (2 * this._triangular) + this._prime;
    }

    private calculateFibonacci(): void {
        if (this.n===0 || this.n===1) {
            this._fibonacci = this.n;
        }else{
            const series=[1,1]
            this._fibonacci = 2;
            for (let i=3; i<=this.n ; i++) {
                const sum=series[i-2]+series[i-3]
                series.push(sum)
                this._fibonacci = this._fibonacci + sum;
            }
        }
    }

    private calculateTriangular(): void {
        let i=1
        if (this.n===0) {
            return
        }
        while (i<=this.n) {
            this._triangular = this._triangular + i
            i++
        }
    }

    private calculatePrime(): void {
        if (this.n===0 || this.n===1) {
            this._prime = this.n;
        }else{
    
            for (let i = 2; i <= this.n; i++) {
                if (this.isPrime(i)) {
                    this._prime =this._prime + i;
                }
            }
        }
    }

    private isPrime(number: number): boolean {
        let condition:boolean = true;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                condition = false;
                break;
            }
        }
        return condition;
    }

    get fibonacci(): number {
        return this._fibonacci;
    }

    get triangular(): number {
        return this._triangular;
    }

    get prime(): number {
        return this._prime;
    }

    private set fibonacci(value: number) {
        this._fibonacci = value;
    }

    private set triangular(value: number) {
        this._triangular = value;
    }

    private set prime(value: number) {
        this._prime = value;
    }

}