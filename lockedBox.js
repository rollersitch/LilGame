var box = {
	locked: true,
	unlock: function() { this.locked = false; },
	lock:   function() { this.locked  = true; },
	content: [],
	get content() {
		if(this.locked) throw new Error("Locked!");
		return this._content;
	},
	set content(array) {
		if(array instanceof Array) {
			if(this.locked)
				throw new Error("No change allowed!");
			this._content = array;
		}
		
	}
};

function withBoxUnlocked(fn, val) {
		//box.unlock();
		try {
			fn(val);
		}
		catch (e) {
			console.log("Error raised: " , e);
		}
		finally {
			box.lock();
		}
	
}

function calc(val) {
	
	console.log("Setting to " + val);
	try {
		box.content = val;
	} catch(e) {
		throw e;
	}

	
	try {
		console.log("box value: " + box.content);
	} catch (e) {
		throw e;
	}
	console.log("New value inserted: " + box.content);
}

withBoxUnlocked(calc, [1,2,3]);
