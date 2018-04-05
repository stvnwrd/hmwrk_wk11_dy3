var arrayTasks = {

	concat: function (arr1, arr2) {
		newArray = [];
		for( var item of arr1) {
			newArray.push(item);
		}
		for ( var item of arr2){
			newArray.push(item);
		}
		return newArray;
	},



	insertAt: function (arr, itemToAdd, index) {
		newArray=[];
		for (let i=0; i<arr.length; i++) {
			if(i === index){
				newArray.push(itemToAdd);
				newArray.push(arr[i]);
			}else{
				newArray.push(arr[i]);
			}
		}
	return newArray;
	},



	square: function (arr) {
		const result = arr.map(num => num * num);
		return result;
	},



	sum: function (arr) {
		total = 0;
		for(var item of arr){
			total += item;
		}
		return total;
	},



	findDuplicates: function (arr) {

		const sortedArr = arr.slice().sort();
		let results = [];
		for (var i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] == sortedArr[i]) {
			if (!results.includes(sortedArr[i])){
				results.push(sortedArr[i]);
			}
    }
		}
				return results;

	},



	removeAndClone: function (arr, valueToRemove) {
		newArray=[];
		for (let i=0; i<arr.length; i++) {
			if(arr[i] !== valueToRemove){
				newArray.push(arr[i]);
			}
		}
	return newArray;
	},



	findIndexesOf: function (arr, itemToFind) {
		newArray=[];
		for (let i=0; i<arr.length; i++){
			if( arr[i] === itemToFind){
				newArray.push(i)
			}
		}
		return newArray;
	},



	sumOfAllEvenNumbersSquared: function (arr) {
		arrayToSum=[];
		for (element of arr){
			if(arr[element] % 2 === 0){
				let evenSquared = arr[element]*arr[element];
				arrayToSum.push(evenSquared);
			}
		};

		total = 0;
		for(var item of arrayToSum){
			total += item;
		}
		return total;
	}

}

module.exports = arrayTasks
