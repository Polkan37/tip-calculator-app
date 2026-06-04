import logo from "../assets/logo.svg";
import { TipCalculator } from "../features";

function App() {
  return (
    <>
      <header>
        <h1>
          <img src={logo} alt="Tip Calculator" />
        </h1>
      </header>

      <main className="main">
        <TipCalculator />
      </main>
    </>
  );
}

export default App;
