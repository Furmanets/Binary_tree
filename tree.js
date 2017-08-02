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

Tree.prototype.Delete = function(value)
{
   var observableNode = new Node();
   observableNode = this.head;
   if(observableNode.value===value){
       if(observableNode.Left === undefined){
           if(observableNode.Right ===undefined){
               this.head=undefined;
           }
            else{
                this.head = observableNode.Right;
            }
       }
        else{
            if(observableNode.Right ===undefined){
            this.head = observableNode.Left;
            this.AddNode(observableNode.Right);
            }

        }

        }
    else{
 for(;;){
     if(observableNode.value===value){
            //Сюда вывод
            break;
     }
     else{
     if(observableNode.value<value){
         if(observableNode.Left===undefined){
            break;
         }
        else{
            //Cюда переход влево
        }
    }
        else{
            if(observableNode.Right===undefined){
            break;
         }
        else{
            //Cюда переход вправо
        }
        }

     }

 }
}
}

var Flag = false;
Tree.prototype.Search = function(value)
{
   var observableNode= new Node();
   observableNode=this.head;
   var flag = true;
   while(flag){
        if(observableNode.value===value)
            {
                flag=false;
                Flag = true;
            }
            else{
                if(observableNode.value<=value)
                    {
                        if(observableNode.Left===undefined){
                            flag =false;
                            
                            }
                        else{
                            observableNode = observableNode.Left;
                        }
                    }
                    else{
                           if(observableNode.Right===undefined){
                            flag =false;
                            
                            }
                        else{
                            observableNode = observableNode.Right;
                        }
                        }
            }
            }
}

Tree.prototype.AddNode = function(node)
{
    if(this.head === undefined){
		this.head = node;
	}
	else{
            var flag = true;
            var observableNode =  this.head;
            while(flag){
             if(observableNode.value<=node.value){
                 if(observableNode.Left===undefined){
                        observableNode.Left = node;
                        flag = false;
                    }
                    else{
                        observableNode = observableNode.Left;
                    }
             }
                else{
                    if(observableNode.Right===undefined){
                        observableNode.Right = node;
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
        var nod = new Node(n)
        tree.AddNode(nod);
    }
    var n = new Node();
    n.value=5;
    tree.AddNode(n);

//tree.Search(5);
//tree.Delete(5);
//tree.Search(5);

