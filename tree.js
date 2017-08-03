function Tree() {
    var head = undefined;

    this.AddNode = function (value) {
        var node = new Node(value);

        if (head === undefined) {
            head = node;
        }
        else {
            var flag = true;
            var observableNode = head;
            while (flag) {
                if (observableNode.value <= node.value) {
                    if (observableNode.Left === undefined) {
                        observableNode.Left = node;
                        flag = false;
                    }
                    else {
                        observableNode = observableNode.Left;
                    }
                }
                else {
                    if (observableNode.Right === undefined) {
                        observableNode.Right = node;
                        flag = false;
                    }
                    else {
                        observableNode = observableNode.Right;
                    }
                }

            }

        }
    }

    function Node(value, left, right) {
        this.value = value;
        this.Left = left;
        this.Right = right;
    }

    Tree.prototype.Delete = function (value) {
        var observableNode = new Node();
        observableNode = head;
        if (observableNode.value === value) {
            if (observableNode.Left === undefined) {
                if (observableNode.Right === undefined) {
                    head = undefined;
                }
                else {
                    head = observableNode.Right;
                }
            }
            else {
                if (observableNode.Right === undefined) {
                    head = observableNode.Left;
                    this.AddNode(observableNode.Right);
                }

            }

        }
        else {
            for (; ;) {
                if (observableNode.value === value) {
                    //Сюда вывод
                    break;
                }
                else {
                    if (observableNode.value < value) {
                        if (observableNode.Left === undefined) {
                            break;
                        }
                        else {
                            //Cюда переход влево
                        }
                    }
                    else {
                        if (observableNode.Right === undefined) {
                            break;
                        }
                        else {
                            //Cюда переход вправо
                        }
                    }

                }

            }
        }
    }

    var Flag = false;
    Tree.prototype.Search = function (value) {
        var observableNode = new Node();
        observableNode = head;
        var flag = true;
        while (flag) {
            if (observableNode.value === value) {
                flag = false;
                Flag = true;
            }
            else {
                if (observableNode.value <= value) {
                    if (observableNode.Left === undefined) {
                        flag = false;

                    }
                    else {
                        observableNode = observableNode.Left;
                    }
                }
                else {
                    if (observableNode.Right === undefined) {
                        flag = false;

                    }
                    else {
                        observableNode = observableNode.Right;
                    }
                }
            }
        }
    }
}