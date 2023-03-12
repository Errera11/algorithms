const binaryTree = [ {
    v: 10,
    c: [
        {v: 9, c: [
            {v: 8, c: []},
            {v: 10, c: []}
        ]},
        {v: 11, c: [
            {v:10, c: []},
            {v:12, c: []}
        ]}
    ] }
];

function traversal(tree) {
    let sum = 0;
    tree.forEach(node => {
        sum += node.v;
        if(node.c) sum += traversal(node.c);
    })
    return sum;
}

console.log(traversal(binaryTree));