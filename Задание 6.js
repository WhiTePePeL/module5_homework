let arr = ["Moskow","Moskow",1,1];

let isEqual = true;
const reference = arr[0];

for (let item of arr) {
	if (item !== reference) {
		isEqual = false;
	}
}
console.log(isEqual)