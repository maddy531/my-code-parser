let acorn = require("acorn");

export const traverseAstNodes = (ast, astType) => {
    if (ast.type === astType) {
        return true;
    } else {
        const keys = Object.keys(ast);
        for (let i = 0; i < keys.length; i++) {
            const childKey = keys[i];
            const child = ast[childKey];
            if (Array.isArray(child)) {
                for (let j = 0; j < child.length; j++) {
                    return traverseAstNodes(child[j], astType);
                }
            } else if (isNode(child) && (childKey === "init" || childKey === "body")) {

                if (child.body && typeof child.body === 'object') {

                    return traverseAstNodes(child.body, astType);
                }
                return traverseAstNodes(child, astType);
            }
        }

        return false
    }
}

export const isNode = (node) => {
    return typeof node === 'object';
}
// Next step would be to pass in an array of expected function types
// const sampleAllowArray = ['IfStatement', 'BlockStatement'];

export const allowList = (userInput) => {
    const astType = "IfStatement";

    let hasParserError;
    let parsedUserInput;

    try {
        parsedUserInput = acorn.parse(userInput, { ecmaVersion: 2020 });
        hasParserError = false;
    } catch (error) {
        console.log(error);
        hasParserError = true;
    }

    if (hasParserError) {
        return { message: `This program MUST use a ${astType}.`, hasError: true }
    }

    const hasAstType = traverseAstNodes(parsedUserInput, astType);

    if (!hasAstType) {
        return { message: `This program MUST use a ${astType}.`, hasError: true }
    } else {
        return { message: `Great! You are using ${astType}.`, hasError: false }
    }
}
