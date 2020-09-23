
function priceCheck (price, objFilter) {
    if(price < 10 ) {
        if (objFilter[10]) {
            return true;
        }
    }
    if( price > 10 && price < 21) {
        if(objFilter['11-20']){
            return true;
        }
    }
    if (price > 20 && price < 51) {
        if(objFilter['21-50']) {
            return true;
        }
    }
    if (price > 50 && price < 101) {
        if(objFilter['51-100']) {
            return true;
        }
    }
    if (price > 100) {
        if(objFilter[101]) {
            return true;
        }
    }
    return false;
}


function Check(value, filter) {
    return filter[value];
}



function CheckFilter(allValue, filter) {
    // varible for catch result
    let p = true;
    for (const [key, value] of Object.entries(filter) ) {
        
    // checking previous values p
        if (p) {

            if (key != 'price'){
                    p = Check( allValue[key], filter[key] );
            } 
            else if (key == 'price') {
                    p = priceCheck( allValue[key], filter[key] );
                }
        }
    }
    return p;
}


export default CheckFilter;

