function mincost(arr)
{ 
	arr.sort((a, b) => a - b);
	let cost = 0;
	while (arr.length > 1) {
    // Connect the two shortest ropes
    let rope1 = arr.shift();
    let rope2 = arr.shift();
    let newRope = rope1 + rope2;

    // Add the cost of this connection to the total cost
    cost += newRope;

    // Insert the resulting rope back into the array
    let index = arr.findIndex((length) => length >= newRope);
    if (index === -1) {
        arr.push(newRope);
    } else {
        arr.splice(index, 0, newRope);
    }
}
	return cost;
}

module.exports=mincost;
