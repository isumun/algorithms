function inorderTraversal(root, result = []) {
    if (root) {
        inorderTraversal(root.left, result);
        result.push(root.val);
        inorderTraversal(root.right, result);
    }
    return result;
}

function increasingBST(root) {
    const values = inorderTraversal(root);
    
    const dummy = new TreeNode();
    let current = dummy;
    
    for (const value of values) {
        current.right = new TreeNode(value);
        current = current.right;
    }
    
    return dummy.right;
}


const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(9);

const newRoot = increasingBST(root);

function printRightSkewed(root) {
    let current = root;
    let result = "";
    while (current) {
        result += current.val + " -> ";
        current = current.right;
    }
    result += "None";
    console.log(result);
}

printRightSkewed(newRoot);