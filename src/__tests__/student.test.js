import exp from "constants";
import { setVariable } from "../helpers/student-code-snippets"
import { nodeVisit } from "../helpers/methods"

let acorn = require("acorn");

test('Code HAS specified functionality', () => {

    const testParseSetVariable = acorn.parse(setVariable, { ecmaVersion: 2020 });
    const resultOfTraversing = nodeVisit(testParseSetVariable, "VariableDeclaration");
    expect(resultOfTraversing).toBe("Great, you used a VariableDeclaration in your code!")
});

test('Code MUST HAVE specified functionality', () => {

    const testParseSetVariable = acorn.parse(setVariable, { ecmaVersion: 2020 });
    const resultOfTraversing = nodeVisit(testParseSetVariable, "VariableDeclaration");
    expect(resultOfTraversing).toBe("This program MUST use a 'for loop' and a 'variable declaration'.")
});

test('Code DOES NOT HAVE specified functionality', () => {

    const testParseSetVariable = acorn.parse(setVariable, { ecmaVersion: 2020 });
    const resultOfTraversing = nodeVisit(testParseSetVariable, "VariableDeclaration");
    expect(resultOfTraversing).toBe("This program MUST NOT use a VariableDeclaration.")
});
