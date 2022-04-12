/*
 * DFS Algorithm implementation in JavaScript
 * DFS Algorithm for traversing or searching graph data structures.
 */

function traverseDFS(root) {
  const stack = [root];
  const res = [];

  while (stack.length) {
    const curr = stack.pop();
    res.push(curr.key);

    if (curr.right) {
      stack.push(curr.right);
    }

    if (curr.left) {
      stack.push(curr.left);
    }
  }

  return res.reverse();
}

function searchDFS(tree, value) {
  const stack = [];

  stack.push(tree[0]);

  while (stack.length !== 0) {
    for (let i = 0; i < stack.length; i++) {
      const node = stack.pop();

      if (node.value === value) {
        return node;
      }
      if (node.right) {
        stack.push(tree[node.right]);
      }
      if (node.left) {
        stack.push(tree[node.left]);
      }
    }
  }
  return null;
}
