var products = [
    {id : 7, name : 'Pen', cost : 40, units : 30, category : 'stationary'},
    {id : 2, name : 'Ten', cost : 70, units : 20, category : 'grocery'},
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

function logGroup(obj){
    for(var key in obj){
        log('Key - [' + key + ']', function(){
            console.table(obj[key]);
        });
    }
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
        function sort(list, comparerFn){
            for(var i=0; i < products.length -1 ; i++)
                for(var j = i+1; j < products.length; j++)
                    if ( comparerFn(products[i], products[j]) > 0 ){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp;
                    }
        }

        function getDescendingComparer(comparer){
            return function(){
                return comparer.apply(this, arguments) * -1;
            }
        }

        let productComparerByValue = function(p1, p2){
            var p1Value = p1.cost * p1.units,
                p2Value = p2.cost * p2.units;
            if (p1Value < p2Value) return -1;
            if (p1Value > p2Value) return 1;
            return 0;
        }

        log('Products by value [ cost * units ]', function(){
            
            sort(products, productComparerByValue);
            console.table(products);
        });

        log('Products by value in descending order', function(){
            var descComparer = getDescendingComparer(productComparerByValue);
            sort(products, descComparer);
            console.table(products);
        })
    })

});

log('Filter', function(){
    log('Default Filter [ stationary products ]', function(){
        function filterStationaryProducts(){
            var result = [];
            for (let index = 0; index < products.length; index++) {
                if (products[index].category === 'stationary')
                    result.push(products[index]);
            }
            return result;
        }
        var stationaryProducts = filterStationaryProducts();
        console.table(stationaryProducts);
    });

    log('Any list by any criteria', function(){
        function filter(list, predicate){
            var result = [];
            for (let index = 0; index < list.length; index++) {
                if (predicate(list[index]))
                    result.push(list[index]);
            }
            return result;
        }

        function negate(predicate){
            return function(){
                return !predicate.apply(this, arguments);
            }
        }

        log('Products by cost', function(){
            var costlyProductPredicate = function(product){
                return product.cost > 40;
            };

            log('costly products [ cost > 40 ]', function(){
                var costlyProducts = filter(products, costlyProductPredicate);
                console.table(costlyProducts);
            })

            log('affordable products [!costly product]', function(){
               /* var affordableProductPredicate = function(product){
                    return !costlyProductPredicate(product);
                };
                */
               var affordableProductPredicate = negate(costlyProductPredicate);
                var affordableProducts = filter(products, affordableProductPredicate);
                console.table(affordableProducts);
            })
        });

        log('Product by units', function(){
            var understockedProductPredicate = function(product){
                return product.units <= 30;
            };
            log('understocked products [ units <= 30 ]', function(){
                
                var understockedProducts = filter(products, understockedProductPredicate);
                console.table(understockedProducts);
            })
            log('overstocked products [!understocked]', function(){
                /*
                var overstockedProductPredicate = function(product){
                    return !understockedProductPredicate(product);
                };
                */
               var overstockedProductPredicate = negate(understockedProductPredicate);
                var overstockedProducts = filter(products, overstockedProductPredicate);
                console.table(overstockedProducts);
            });
        });
    })
});

log('GroupBy', function(){
    function groupBy(list, keySelector){
        var result = {};
        for (let index = 0; index < list.length; index++) {
            var key = keySelector(list[index]);
            /*
            if (typeof result[key] === 'undefined')
                result[key] = [];
            */
           result[key] = result[key] || [];
           result[key].push(list[index]);
        }
        return result;
    }
    log('Products by category', function(){
        var categoryKeySelector = function(product){
            return product.category;
        };
        var productsByCategory = groupBy(products, categoryKeySelector);
        logGroup(productsByCategory);
    });

    log('Products by cost', function(){
        var costKeySelector = function(product){
            return product.cost > 40 ? 'costly' : 'affordable';
        };
        var productsByCost = groupBy(products, costKeySelector);
        logGroup(productsByCost);
    });
});