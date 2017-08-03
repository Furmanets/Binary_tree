(function () {
    var getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var tree = new Tree();
    var k = 10;
    for (var i = 0; i < k; i++) {
        var n = getRandomInt(1, 20);
        var nod = new Node(n)
        tree.AddNode(nod);
    }
    var n = new Node();
    n.value = 5;
    tree.AddNode(n);

    //tree.Search(5);
    //tree.Delete(5);
    //tree.Search(5);


})();