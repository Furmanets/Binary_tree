var list = [];
function Tree(value, left, right)
{   
    this.value = value;
    this.Left = left;
    this.Right = right;
}
Tree.prototype.AddHead = function(value)
{
    var t = new Tree;
    t.value = value;
    list.push(t);
  
}
Tree.prototype.search = function(value)
{
    var flag = false;
    for (var i = 0; i < list.length; i++) {
        if(list[i].value== value)
            {
                flag = true;
            }
        }
         if(flag){
             alert("Yes");
         }   
            else{
                alert("No");
            }
    
}
Tree.prototype.AddNode = function(value)
{
    var n = new Tree();
    n.value = value;
    for(var i =0; i<list.length;i++)
        {
            if(list[i].Left==undefined)
                {
                    list[i].Left = n.value;
                    list.push(n);
                    break;
                }
                else{
                    if(list[i].Right==undefined)
                        {
                    list[i].Right = n.value;
                    list.push(n);
                    break;}
                }
        }
}

var tree = new Tree();
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
tree.AddHead(1);
for(var i = 1; i< arr.length; i++)
    {
        tree.AddNode(arr[i]);
    }
tree.search(5);
