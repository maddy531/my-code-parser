import exp from "constants";
import {basicIfStatement} from "./../helpers/student-code-snippets"

test('student enters code with if statement', () => {
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    const stringSample = "hello world";
    const testBasicFunction = basicIfStatement(stringSample);
    expect(testBasicFunction).toBe("hello world")
});

test('student enters code without if statement', () => {
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});

test('student enters code with nested methods', () => {
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});