import exp from "constants";
import { setVariable, stringIfStatement } from "../helpers/student-code-snippets"
import { traverseAstNodes } from "../helpers/methods"

let acorn = require("acorn");

describe('Code successfully parses when functional type if passed', () => {
    test('Most basic case, setting a variable successfully parses', () => {

        const testParseSetVariable = acorn.parse(setVariable, { ecmaVersion: 2020 });
        const resultOfTraversing = traverseAstNodes(testParseSetVariable, "VariableDeclaration");
        expect(resultOfTraversing).toBe(true)

        const resultOfTraversing1 = traverseAstNodes(testParseSetVariable, "BlockStatement");
        expect(resultOfTraversing1).toBe(false)

    });

    test('Nested functional type successfully parsed', () => {
        const parsedUserInput = acorn.parse(stringIfStatement, { ecmaVersion: 2020 });

        const resultVariableDeclaration = traverseAstNodes(parsedUserInput, "VariableDeclaration");
        expect(resultVariableDeclaration).toBe(true)

        const resultBlockStatement = traverseAstNodes(parsedUserInput, "BlockStatement");
        expect(resultBlockStatement).toBe(true)

        const resultStringIfStatement = traverseAstNodes(parsedUserInput, "IfStatement");
        expect(resultStringIfStatement).toBe(true)

        const resultWhileStatement = traverseAstNodes(parsedUserInput, "WhileStatement");
        expect(resultWhileStatement).toBe(false)
    });
})




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
