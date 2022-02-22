import { useEffect, useState } from 'react';
import './App.css';
import { allowList } from './helpers/methods';

function App() {
  const [hasFeedbackError, setHasFeedbackError] = useState<boolean>(false);
  const [expectedTypeFeedback, setExpectedTypeFeedback] = useState<string>("");


  const getInputValue = (event: React.SyntheticEvent) => {
    const currentText = (event.target as HTMLInputElement).value
    const { message, hasError } = allowList(currentText)
    setExpectedTypeFeedback(message);
    setHasFeedbackError(hasError);
  }

  return (
    <div className="App">
      <header className="App-header">
        Student Code Explorer
      </header>
      <main>
        <div> In this example we expect an if statement to be part of your code</div>
        <div className={`testFeedback ${hasFeedbackError && 'feedbackError'}`}>
          {expectedTypeFeedback}
        </div>
        <div>
          Code Explorer:
        </div>
        <form>
          <textarea placeholder="Try your code out here" onChange={event => {
            getInputValue(event);
          }} />
        </form>
      </main>
    </div>
  );
}

export default App;
