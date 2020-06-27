// myVueScript

var app = new Vue({
  el: '#menuPrice',
  data: {
		message: 'Hello Vue!',
		isVisible:{
			cut: false,
			color: false,
			designColor: false,
			waveCurl: false,
			superStraight: false,
			headSpa: false,
			treatment: false,
			styling: false,
		},
		// isVisibleCut: false,
		// isVisibleColor: false,
		// isVisibleDesigncolor: false,
		
		parent: {
			c1 : "childOne",
			c2 : "childTwo", 
		},
		// options: [
		// 	{ text: 'One', value: 'A' },
		// 	{ text: 'Two', value: 'B' },
		// 	{ text: 'Three', value: 'C' }
		//   ],
		checkedNames: []

	},
	methods: {
		greet: function (event) {
		  // メソッド内の `this` は、 Vue インスタンスを参照します
		  alert('Hello ' + this.parent.c1 + '!')

		  // `event` は、ネイティブ DOM イベントです
		  if (event) {
			alert(event.target.tagName)
		  }
		},
		setVisibleTrue: function (event) {
			// this.isVisible.forEach(element => {
			// 	element = false
			// });
			// Object.keys(this.isVisible).forEach(function(key) {
			// 	console.log(this.isVisible[key])
			//   });
			console.log("hey...");
			const obj = this.isVisible
			const targetName = event.target.classList[1]
			Object.keys(obj).forEach(function(key) {
				if( key != targetName ){	
					var val = this[key]; // this は obj
					Vue.set(obj, key, false) //全件にfalseをせっとする
				} 
				// console.log(key, val);
			}, obj);
			this.isVisible[targetName] = !this.isVisible[targetName]
		}
		
	}

})

