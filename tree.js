function Tree()
{
		this.head = undefined;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min+1)) + min;
}
function Node(value, left, right)
{   
    this.value = value;
    this.Left = left;
    this.Right = right;
}

Tree.prototype.Search = function(value)
{
   var observableNode= Node();
   observableNode=this.head;
   var flag = true;
   while(flag){
        if(observableNode.value===value)
            {
                flag=false;
                alert("Yes");
            }
            else{
                if(observableNode.value<=value)
                    {
                        if(observableNode.Left===undefined){
                            flag =false;
                            alert("No");
                            }
                        else{
                            observableNode = observableNode.Left;
                        }
                    }
                    else{
                           if(observableNode.Right===undefined){
                            flag =false;
                            alert("No");
                            }
                        else{
                            observableNode = observableNode.Right;
                        }
                        }
            }
            }
}

Tree.prototype.AddNode = function(value)
{
    var n = new Node(value);
 
	if(this.head === undefined){
		this.head = n;
	}
	else{
            var flag = true;
            var observableNode = this.head;
            while(flag){
             if(observableNode.value<=value){
                 if(observableNode.Left===undefined){
                        observableNode.Left = n;
                        flag = false;
                    }
                    else{
                        observableNode = observableNode.Left;
                    }
             }
                else{
                    if(observableNode.Right===undefined){
                        observableNode.Right = n;
                        flag = false;
                    }
                    else{
                        observableNode= observableNode.Right;
                    }
                }
               
            }
            
		}
}

var tree = new Tree();
var k = 10;
for(var i =0; i<k; i++)
    {
        var n = getRandomInt(1,20);
        tree.AddNode(n);
    }
var i =0;
tree.Search(5);

