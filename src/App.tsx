import './App.css'
import { InputText } from './input.component'
import { ShowResult } from './showResult.component'

function App() {

  return (
    <main>
      <h1>Sngular frontEnd tech test</h1>

      <h3>This is a calculator of the serie: </h3>
      <p>serie(n)= fibonacci(n) -2triangular(n) + primo(n)</p>

      <InputText />

      <ShowResult />
    </main>
  )
}

export default App
