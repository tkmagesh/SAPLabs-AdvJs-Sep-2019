var products = [
    {id : 7, name : 'Pen', cost : 40, units : 20, category : 'stationary'},
    {id : 2, name : 'Ten', cost : 80, units : 10, category : 'grocery'},
    {id : 9, name : 'Den', cost : 20, units : 40, category : 'stationary'},
    {id : 4, name : 'Len', cost : 60, units : 50, category : 'stationary'},
    {id : 5, name : 'Zen', cost : 50, units : 30, category : 'grocery'}
]

//sort, filter, groupBy

function log(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

log('Default List', function(){
    console.table(products);
});

log('Sort', function(){
    log('Default Sort [ products by id] ', function(){
        function sortProductsById(){
            for(var i=0; i < products.length -1 ; i++)
                for(var j = i+1; j < products.length; j++)
                    if (products[i].id > products[j].id){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp;
                    }
        }
        sortProductsById();
        console.table(products);
    });

    log('Any list by any attribute', function(){
        function sort(list, attrName){
            for(var i=0; i < list.length -1 ; i++)
                for(var j = i+1; j < list.length; j++)
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        log('Products by cost', function(){
            sort(products, 'cost')
            console.table(products);
        });

        log('Products by category', function(){
            sort(products, 'units')
            console.table(products);
        });
    });

    log('Any list by any comparer', function(){
        function sort(){
            //fill in the blanks
        }
        log('Products by value [ cost * units ]', function(){
            sort();
            console.table(products);
        })
    })

});

log('Filter', function(){
    log('Default Filter [ stationary products ]', function(){
        //filterStationaryProducts();
        console.table(products);
    });
});
