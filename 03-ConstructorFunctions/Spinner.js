function Spinner(){
	var counter = 0;
	
	//this -> new object

	this.up = function(){
		return ++counter;
    };

	this.down = function(){
		return --counter;
    };
	
	//this -> returned by default
}