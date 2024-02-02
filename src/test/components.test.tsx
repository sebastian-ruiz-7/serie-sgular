import App from "../App";
import { InputText } from "../Input.component";
import { SerieN } from "../serie-n";
import { render , screen } from "./test-utils";
import { userEvent } from "@testing-library/user-event";
import { describe , test , expect } from "vitest";

describe('test related with series(n) calculator', () => { 
    test('should validate result of serie(2)', async () => {
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '2');

        const serieN=new SerieN(2);

        expect(screen.getByText(`The result is: ${serieN.fibonacci - (2 * serieN.triangular) + serieN.prime}`)).toBeInTheDocument();
    })

    test('should validate result of serie(5)', async () => {
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '5');

        const serieN=new SerieN(5);

        expect(screen.getByText(`The result is: ${serieN.fibonacci - (2 * serieN.triangular) + serieN.prime}`)).toBeInTheDocument();
    })

    test('should validate result of serie(10)', async () => {
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '10');

        const serieN=new SerieN(10);

        expect(screen.getByText(`The result is: ${serieN.fibonacci - (2 * serieN.triangular) + serieN.prime}`)).toBeInTheDocument();
    })

    test('should validate result of serie(20)', async () => {
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '20');

        const serieN=new SerieN(20);

        expect(screen.getByText(`The result is: ${serieN.fibonacci - (2 * serieN.triangular) + serieN.prime}`)).toBeInTheDocument();
    })


    test('should validate result of serie(30)', async () => {
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '30');

        const serieN=new SerieN(30);

        expect(screen.getByText(`The result is: ${serieN.fibonacci - (2 * serieN.triangular) + serieN.prime}`)).toBeInTheDocument();
    })

    test('should validate result of serie(40)', async () => {
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '40');

        const serieN=new SerieN(40);

        expect(screen.getByText(`The result is: ${serieN.fibonacci - (2 * serieN.triangular) + serieN.prime}`)).toBeInTheDocument();
    })

    test('should validate result of serie(50)', async () => {
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '50');

        const serieN=new SerieN(50);

        expect(screen.getByText(`The result is: ${serieN.fibonacci - (2 * serieN.triangular) + serieN.prime}`)).toBeInTheDocument();
    })

    test('should validate result of serie(77)', async () => {
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '77');

        const serieN=new SerieN(77);

        expect(screen.getByText(`The result is: ${serieN.fibonacci - (2 * serieN.triangular) + serieN.prime}`)).toBeInTheDocument();
    })

    test('should validate result of serie(83)', async () => {
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '83');

        const serieN=new SerieN(83);

        expect(screen.getByText(`The result is: ${serieN.fibonacci - (2 * serieN.triangular) + serieN.prime}`)).toBeInTheDocument();
    })

    test('should validate result of serie(100)', async () => {
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '100');

        const serieN=new SerieN(100);

        expect(screen.getByText(`The result is: ${serieN.fibonacci - (2 * serieN.triangular) + serieN.prime}`)).toBeInTheDocument();
    })






    //Adicional tests
    test('validate layout', () => {
        render(<App/>);
        //elements in App.tsx
        expect(screen.getByText(/Sngular frontEnd tech test/i)).toBeInTheDocument();
        expect(screen.getByText(/This is a calculator of the serie:/i)).toBeInTheDocument();
        expect(screen.getByText("serie(n)= fibonacci(n) -2triangular(n) + primo(n)")).toBeInTheDocument();

        //elements in Input.component.tsx
        expect(screen.getByText(/Please, enter the nth natural number you would like to calculate/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Type a natural number/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Type a natural number/i)).toHaveValue("");
        expect(screen.queryByText(/Only naturals numbers are allowed/i)).not.toBeInTheDocument();

        //elements in ShowResult.component.tsx
        expect(screen.getByText(/The result is:/i)).toBeInTheDocument();
        expect(screen.queryByText(/This is a special case/i)).not.toBeInTheDocument();
    })

    test('validate input', async () => {
        render(<InputText/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        expect(screen.queryByText(/Only naturals numbers are allowed/i)).not.toBeInTheDocument();

        await userEvent.type(input, 'a');
        expect(screen.getByText(/Only naturals numbers are allowed/i)).toBeInTheDocument();

        await userEvent.clear(input);
        expect(screen.queryByText(/Only naturals numbers are allowed/i)).not.toBeInTheDocument();

        await userEvent.type(input, "-1");
        expect(screen.getByText(/Only naturals numbers are allowed/i)).toBeInTheDocument();

        await userEvent.clear(input);
        expect(screen.queryByText(/Only naturals numbers are allowed/i)).not.toBeInTheDocument();

        await userEvent.type(input, "1.43");
        expect(screen.getByText(/Only naturals numbers are allowed/i)).toBeInTheDocument();
    })

    test('should validate special case alert', async () => { 
        render(<App/>);
        const input=screen.getByPlaceholderText(/Type a natural number/i);
        await userEvent.type(input, '1');
        expect(screen.getByText(/This is a special case/i)).toBeInTheDocument();

        await userEvent.clear(input);
        await userEvent.type(input, '0');
        expect(screen.getByText(/This is a special case/i)).toBeInTheDocument();
    })
})