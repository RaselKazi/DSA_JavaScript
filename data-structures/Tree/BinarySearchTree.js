/* Binary Search Tree!!
 *
 * Nodes that will go on the Binary Tree.
 * They consist of the data in them, the node to the left, the node
 * to the right, and the parent from which they came from.
 */

class Node {
  constructor(item) {
    this.key = item;
    this.left = this.right = null;
  }
}

function search(root, key) {
  // Base Cases: root is null
  // or key is present at root
  if (root == null || root.key == key) return root;

  // Key is greater than root's key
  if (root.key < key) return search(root.right, key);

  // Key is smaller than root's key
  return search(root.left, key);
}

// Root of BST
var root = null;

// This method mainly calls insertRec()
function insert(key) {
  root = insertRec(root, key);
}

/*
 * A recursive function to insert a new key in BST
 */
function insertRec(root, key) {
  /*
   * If the tree is empty, return a new node
   */
  if (root == null) {
    root = new Node(key);
    return root;
  }

  /* Otherwise, recur down the tree */
  if (key < root.key) root.left = insertRec(root.left, key);
  else if (key > root.key) root.right = insertRec(root.right, key);

  /* return the (unchanged) node pointer */
  return root;
}

// This method mainly calls InorderRec()
function inorder() {
  inorderRec(root);
}

// A utility function to
// do inorder traversal of BST
function inorderRec(root) {
  if (root != null) {
    inorderRec(root.left);
    document.write(root.key + "<br/>");
    inorderRec(root.right);
  }
}

// Driver Code

/* Let us create following BST
              50
           /     \
          30      70
         /  \    /  \
       20   40  60   80 */
insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);

// print inorder traversal of the BST
inorder();
