class MyMap {
	constructor () {
		this.size = 0;
		this.item = {};
	}

	*[Symbol.iterator] () {

		for(let i in this.item){
			if(this.item.hasOwnProperty(i)){
				yield [i,this.item[i]];
			}
		}

	}

	has (key) {
		return this.item.hasOwnProperty(key);
	}

	set (key,val) {
		if(!this.has(key)){
			this.size++;
		}
		this.item[key] = val;

	}

	get (key) {
		if(this.has(key)){
			return this.item[key];
		}
		return undefined;
	}

	delete (key) {
		if(this.has(key)){
			delete this.item[key];
			this.size--;
			return true;
		}

		return false;
	}

	clear () {
		this.item = {};
		this.size = 0;
	}

	keys () {
		return Object.keys(this.item);
	}

	values () {
		return Object.values(this.item);
	}

	// //并集
	// union (other) {
	// 	for(let i of this.keys()){
	// 		newSet.set(i,this.get(i));
	// 	}
	// 	let newMap = new MyMap();
	// 	for(let i of other.keys()){
	// 		newSet.set(i,other.get(i));
	// 	}
		

	// 	return newSet;
	// }

	// //交集
	// intersect (other) {
	// 	let newMap = new MyMap();
	// 	let otherKeys = other.keys();
	// 	for(let i of otherKeys){
	// 		if(this.has(i)){
	// 			newSet.set(i,other.get(i));
	// 		}
			
	// 	}

	// 	return newSet;
	// }

	// //差集
	// difference (other) {
	// 	let newSet = new MySet(this.values());

	// 	for(let i of other.values()){
	// 		if(newSet.has(i)){
	// 			newSet.delete(i);
	// 		}
			
	// 	}

	// 	return newSet;
	// }

	forEach (fn,context) {
		for(let i=0;i<this.size;i++){
			let val = this.values()[i];
			let key = this.keys()[i];
			fn.call(context,val,key,this);
		}
		

	}




}

module.exports = MyMap;