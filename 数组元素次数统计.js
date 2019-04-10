/**
 * 题目要求：
 * 统计一个数组中每个元素出现的次数
 * 时间复杂度n*n
 * @type {number[]}
 */
var arr = [1,2,3,4,5,6,7,8,6,5,4,3,5,4,6,3,5,3,5,3,2,5,23,23,23,23];
var obj = {};
obj[arr[0]] = 1;
for(var i=1;i<arr.length;i++){
	var flag = 0;
	for(var key in obj){
		if(arr[i] != key){
			continue;
		}else{
			obj[key]++;
			flag = 1;
		}
	}
	if(!flag){
		obj[arr[i]] = 1;
	}
}
console.log(obj);