class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function inorderTraversal(root, nodes) {
  if (root === null) return;
  inorderTraversal(root.left, nodes);
  nodes.push(root);
  inorderTraversal(root.right, nodes);
}

function increasingBST(root) {
  let nodes = [];
  inorderTraversal(root, nodes);

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1];
  }
  nodes[nodes.length - 1].left = null;
  nodes[nodes.length - 1].right = null;

  return nodes[0];
}

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(7);
root.right.right.right = new TreeNode(9);

const newRoot = increasingBST(root);
console.log(newRoot);
