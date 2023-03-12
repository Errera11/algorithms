interface IGraph {
    a?: string[] | undefined,
    b?: string[] | undefined,
    c?: string[] | undefined,
    d?: string[] | undefined,
    f?: string[] | undefined,
    g?: string[] | undefined
}

const graph: IGraph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d'];
graph.d = ['f'];
graph.f = ['g'];
graph.g = [];

function breadthGraphSearch(graph: Object, start: string, end: string): boolean {

    let queue = [];
    queue.push(start);
    while(queue.length > 0) {
        const current = queue.shift();

        if(graph[current].includes(end)) return true;
        else queue.push(...graph[current]);;

    }
    return false;
}

console.log(breadthGraphSearch(graph, 'a', 'h'));
