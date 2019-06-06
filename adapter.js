function Shipping() {
    this.request = function() {
       return "$12.000";
    }
}
 
function AdvancedShipping() {
    this.calculate = function() { 
		return "$9.050"; 
	}
}
 
function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();
 
    return {
        request: function() {
            return shipping.calculate();
        }
    };
}
 
 
function run() {
    var shipping = new Shipping();
    var adapter = new ShippingAdapter();
 
    //Original
    var cost = shipping.request();
	console.log("1) "+cost);
    
	//Adapter
    cost = adapter.request(); 
	console.log("2) "+cost);
	
}

run();
