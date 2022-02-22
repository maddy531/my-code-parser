import { useState } from 'react';
import './App.css';

function App() {
  const [submission, setSubmission] = useState<string>("");

  const getInputValue = (event: React.SyntheticEvent) => {
    const currentText = (event.target as HTMLInputElement).value
    setSubmission(currentText);
  }

  return (
    <div className="App">
      <header className="App-header">
        Student Code Explorer

      </header>
      <main>
        <div>
          Code Explorer:
        </div>
        <form onSubmit={getInputValue}>
          <textarea value={submission} placeholder="Try your code out here" onChange={getInputValue} />
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}

export default App;
