export class SerieN {
    result: number = 0;
    protected _fibonacci: number = 0;
    protected _triangular: number = 0;
    protected _prime: number = 0;

    constructor(public n: number) {
        this.n = n;
        this.calculateSerieN();
    }

    private calculateSerieN() {
        this.calculateFibonacci();
        this.calculateTriangular();
        this.prime = this.calculatePrime();
        this.result = this.fibonacci - (2 * this.triangular) + this.prime;
    }

    private calculateFibonacci(): void {
        if (this.n===0 || this.n===1) {
            this.fibonacci = this.n;
        }else{
            const series=[1,1]
            this.fibonacci = 2;
            for (let i=3; i<=this.n ; i++) {
                const sum=series[i-2]+series[i-3]
                series.push(sum)
                this.fibonacci = this._fibonacci + sum;
            }
        }
    }

    private calculateTriangular(): void {
        let i=1
        if (this.n===0) {
            return
        }
        while (i<=this.n) {
            this.triangular = this._triangular + i
            i++
        }
    }

    private calculatePrime(): number {
        return 1
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