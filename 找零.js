function MinCoinChange(coins) {
	var coins = coins; //{1}  --零钱面额
	var cache = {};    //{2}
	this.makeChange = function (amount) {
		/**
		 * amount 要找的钱
		 * @type {MinCoinChange}
		 */
		var me = this;
		if (!amount) { //{3}
			return [];
			// 不需要找零，则返回空
		}
		console.log('cache[amount] = ', cache[amount]);
		if (cache[amount]) { //{4}
			return cache[amount];
			// 如果找零的钱在现有零钱面额中，则直接找零
		}
		/**
		 * 重头戏来了
		 * min[]，最少的找零组合
		 * newMin： 新的最小
		 * newAmount： 新的找零
		 * @type {Array}
		 */
		console.log('hh');
		var min = [], newMin, newAmount;
		// 在零钱面额中循环
		for (var i = 0; i < coins.length; i++) { //{5}
			var coin = coins[i];
			console.log('dddd', coin);
			console.log('amoun is', amount);
			newAmount = amount - coin; //{6}
			if (newAmount >= 0) {
				console.log('*****');
				newMin = me.makeChange(newAmount); //{7}
				// console.log('newMin---',newMin.length)
			}
			console.log('ww00');
			if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
				min = [coin].concat(newMin); //{11}
				console.log('coin----', coin)
				console.log('newMin----', newMin)
				// console.log('new Min ' + min + ' for ' + amount);
				// console.log('[coin].concat(newMin) ' +[coin].concat(newMin));
			}
		}
		return (cache[amount] = min); //{12}
	};
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25])
console.log(minCoinChange.makeChange(36))