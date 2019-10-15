export default class DAG {
        constructor(){
                this.adjList = {};
        }

        addVertex(vertex){
                this.adjList[vertex];
        }

        addEdge(vertex1, vertex2){
                this.adjList[vertex1].push(vertex2);
        }
}
