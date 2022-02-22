export const nodeVisit = (ast, astType) => {
    let node;

    if (ast.type === astType) {
        return "Great, you used a VariableDeclaration in your code!";
    } else {
        const keys = Object.keys(ast);
        for (let i = 0; i < keys.length; i++) {
            const childKey = keys[i];
            const child = ast[childKey];

            if (Array.isArray(child)) {
                for (let j = 0; j < child.length; j++) {
                    return nodeVisit(child[j], astType);
                }
            } else if (isNode(child)) {
                return nodeVisit(child, astType);
            }
        }

        return node
    }
}

export const isNode = (node) => {
    return typeof node === 'object';
}
