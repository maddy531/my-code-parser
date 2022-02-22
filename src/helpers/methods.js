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
