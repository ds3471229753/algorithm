/**
 * 题目要求
 * 数组中如果一个长的字符串是以一个短的开头，则去除掉长的
 * 方法1：循环两层数组，复杂度n*n
 * 方法2：先排序，再运算，快排，复杂度n*log(n)
 */
let arr = [
	'folder1/folder2/folder3/folder4',
	'folder1/folder2/folder3',
	'folder1/folder2/folder3/folder4/folder5',
	'folder2/folder1/',
	'folder1/folder2/',
	'folder1/'
];

function unique(arr) {
	let longer = '',
		shorter = '',
		index = 0;
	for(let i = 0;i < arr.length;i++){
		for(let j = i + 1;j < arr.length;j++){
			if(arr[i].length >= arr[j].length){
				longer = arr[i];
				shorter = arr[j];
				index = i;
			}else {
				longer = arr[j];
				shorter = arr[i];
				index = j;
			}
			if(longer.startsWith(shorter)){
				arr.splice(index, 1);
				j--;
			}
		}
	}
	return arr;
}

console.log(unique(arr));
