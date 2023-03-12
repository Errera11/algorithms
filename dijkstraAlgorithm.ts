//dijkstraAlgorithm is algorithm for
//finding path of the graph with lowest cost

interface IGraph {
    a?: any,
    b?: any,
    c?: any,
    d?: any,
    e?: any,
    f?: any,
    g?: any
}

const graph: IGraph = {};
graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.e = {f: 1};
graph.d = {f: 2};
graph.f = {g: 1};
graph.g = {};

function dijkstraAlgorithm(graph: Object, start: string, end: string): Object {
    let processed: string[] = [];
    let neighbors: any = {};
    let costs: any = {};

    Object.keys(graph).forEach(node => {
        if(node !== start) {
            costs[node] = graph[start][node] || 1000;
        }
    })

    let node: string = findLowestCost(costs, processed);

    while(node) {
        neighbors = graph[node];
        Object.keys(neighbors).forEach(neighbor => {
            let newVal = costs[node] + graph[node][neighbor];
            if(newVal < costs[neighbor]) {
                let cost: number = newVal;
                costs[neighbor] = cost;
            }
        })
        processed.push(node);
        node = findLowestCost(costs, processed);
    }

    return costs;

}

function findLowestCost(costs, processed) {

    let lowestCost: number = 1000;
    let lowestNode: string;

    Object.keys(costs).forEach(node => {
        if(!processed.includes(node) && costs[node] < lowestCost) {
            lowestCost = costs[node];
            lowestNode = node;
        }
    })
    return lowestNode;
}

console.log(dijkstraAlgorithm(graph, 'a', 'g'));