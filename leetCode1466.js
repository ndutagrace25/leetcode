/* 
There are n cities numbered from 0 to n - 1 roads 
such that there is only one way to travel between two different cities (this network from a tree).
Last year, The ministry of transport decided to orient the roads in one direction beacuse they are too narrow.

Roads are represented by connections where connections[i] = [a,b] represents a road from city a to b.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visist the city 0. Return the minumum number
of edges changed.

It's guaranteed that each city can reach the city 0 after reorder

Example 
Input: n=6, connections =[[0,1],[1,3],[2,3],[4,0],[4,5]]

output: 3
*/

// solution
// start at city 0
// recursively check its neighbors
// count outgoing edges
