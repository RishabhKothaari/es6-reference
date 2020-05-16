/**
 * Class - A class represents a blueprint for a real world object
 * class is a Object Oriented Programming concept it is a template or blueprint which encloses data and methods that act on that data
 */

 /**
  * TreeNode represents a Node in a binary tree
  * 
  */
 class TreeNode{
     constructor(val){
         this.val = val
         this.next = undefined
         this.left = null
         this.right = null
     }
 }
let nodes = []
 function traverse(root){
     if(root == undefined){
         return 
     }
     nodes.push(root.val)
     traverse(root.left)
     traverse(root.right)
 }

 const root = new TreeNode(1)
 root.left = new TreeNode(2)
 root.right = new TreeNode(3)

 console.log(root)
 traverse(root)
 console.log(nodes)