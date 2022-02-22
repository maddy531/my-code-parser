import exp from "constants";
import { setVariable, stringIfStatement } from "../helpers/student-code-snippets"
import { traverseAstNodes } from "../helpers/methods"

let acorn = require("acorn");

test('Code HAS specified functionality', () => {

    const testParseSetVariable = acorn.parse(setVariable, { ecmaVersion: 2020 });
    const resultOfTraversing = traverseAstNodes(testParseSetVariable, "VariableDeclaration");
    expect(resultOfTraversing).toBe(true)
    

    const resultOfTraversing1 = traverseAstNodes(testParseSetVariable, "BlockStatement");
    expect(resultOfTraversing1).toBe(false)

    const testStringIfStatement = acorn.parse(stringIfStatement, { ecmaVersion: 2020 });

    const resultStringIfStatement = traverseAstNodes(testStringIfStatement, "IfStatement");
    expect(resultStringIfStatement).toBe(true)

});


// test('Code MUST HAVE specified functionality', () => {

//     const testParseSetVariable = acorn.parse(setVariable, { ecmaVersion: 2020 });
//     const resultOfTraversing = traverseAstNodes(testParseSetVariable, "VariableDeclaration");
//     expect(resultOfTraversing).toBe("This program MUST use a 'for loop' and a 'variable declaration'.")
// });

// test('Code DOES NOT HAVE specified functionality', () => {

//     const testParseSetVariable = acorn.parse(setVariable, { ecmaVersion: 2020 });
//     const resultOfTraversing = traverseAstNodes(testParseSetVariable, "VariableDeclaration");
//     expect(resultOfTraversing).toBe("This program MUST NOT use a VariableDeclaration.")
// });
