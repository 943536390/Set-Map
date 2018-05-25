class MySet {
	constructor (arr=[]) {
		this.size = 0;
		this.item = {};//对象不允许一个键指向两个不同的属性，保证了集合里的元素都是唯一的

		arr.forEach((item)=>{
			this.add(item);
		});
	}

	*[Symbol.iterator] () {

		for(let i in this.item){
			if(this.item.hasOwnProperty(i)){
				yield this.item[i];
			}
		}

	}

	has (val) {
		return this.item.hasOwnProperty(val);
	}

	add (val) {
		if(!this.has(val)){
			this.item[val] = val;
			this.size++;
			return true;
		}

		return false;
	}

	delete (val) {
		if(this.has(val)){
			delete this.item[val];
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

	//并集
	union (other) {
		let newSet = new MySet(this.values());
		for(let i of other.values()){
			newSet.add(i);
		}

		return newSet;
	}

	//交集
	intersect (other) {
		let newSet = new MySet();
		let otherVal = other.values();
		for(let i of otherVal){
			if(this.has(i)){
				newSet.add(i);
			}
			
		}

		return newSet;
	}

	//差集
	difference (other) {
		let newSet = new MySet(this.values());

		for(let i of other.values()){
			if(newSet.has(i)){
				newSet.delete(i);
			}
			
		}

		return newSet;
	}

	forEach (fn,context) {
		for(let i=0;i<this.size;i++){
			let val = this.values()[i];
			let key = this.keys()[i];
			fn.call(context,val,key,this);
		}
		

	}




}

module.exports = MySet;