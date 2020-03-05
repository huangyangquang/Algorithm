// 994. 腐烂的橘子
// 在给定的网格中，每个单元格可以有以下三个值之一：

// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。
// 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。

 
// 示例 1：
// 输入：[[2,1,1],[1,1,0],[0,1,1]]
// 输出：4

// 示例 2：
// 输入：[[2,1,1],[0,1,1],[1,0,1]]
// 输出：-1
// 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。

// 示例 3：
// 输入：[[0,2]]
// 输出：0
// 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
 

// 提示：
// 1 <= grid.length <= 10
// 1 <= grid[0].length <= 10
// grid[i][j] 仅为 0、1 或 2

// 高阶版
function orangesRotting(grid) {
	if(grid == null || grid.length == 0 || grid[0].length == 0) return -1;
	const a = [0, 1, 0, -1];
	const b = [1, 0, -1, 0];

	let minute = 0;
	let fresh = 0;
	const R = grid.length;
	const C = grid[0].length;
	let queue = [];
	

	for(let r = 0; r < R; r ++) {
		for(let c = 0; c < C; c ++) {
			if(grid[r][c] == 2) {
				queue.push([r, c]);
			} else if(grid[r][c] == 1){
				fresh ++;
			}
		}
	}

	while(queue.length != 0 && fresh) {
		let nextQueue = [];
		while(queue.length != 0) {
			let badOrange = queue.shift();
			for(let k = 0; k < 4; k ++) {
				let i = badOrange[0] + a[k];
				let j = badOrange[1] + b[k];
				if(i >= 0 && i < R && j >= 0 && j < C && grid[i][j] == 1) {
					grid[i][j] = 2;
					nextQueue.push([i, j]);
					fresh --;
				}
			}
		}
		minute ++;
		queue = nextQueue;
	}
	return fresh == 0 ? minute : -1; 
}


// 进阶版
function orangesRotting2(grid) {
	if(grid == null || grid.length == 0) return -1;
	// 用来扩大橘子的腐烂范围（上下左右）
	// eg: [2, 3]是腐烂的橘子
	// 那么就可以可能使[2, 4],[2, 1],[1, 3],[3, 3]这四个位置上的新鲜橘子腐烂
	var a = [-1, 0, 1, 0];
	var b = [0, -1, 0, 1]; 

	var ans = 0;
	var r = grid.length;
	var c = grid[0].length;
	var map = new Map();
	var queue = new Array();

	for(var i = 0; i < r; i ++) {
		for(var j = 0; j < c; j ++) {
			if(grid[i][j] == 2) {
				var code = i * c + j;
				// 把腐烂橘子排到队列的最后面
				queue.push(code);
				map.set(code, 0);
			}
		}
	}
	

	while(queue.length != 0) {
		// 把队列的第一个给拿出来
		var code = queue.shift();
		// 计算出这个橘子的位置
		i = Math.floor(code / c);
		j = code % c;

		for(var k = 0; k < 4; k ++) {
			// 寻找橘子上下左右的位置
			var nI = i + a[k];
			var nJ = j + b[k];

			if(nI < r && nI >= 0 && nJ >= 0 && nJ < c && grid[nI][nJ] == 1) {
				// 使新鲜橘子腐烂
				grid[nI][nJ] = 2;
				var ncode = nI * c + nJ;
				// 把腐烂橘子排到队列最后面
				queue.push(ncode);
				map.set(ncode, map.get(code) + 1);
				ans = map.get(ncode) > ans ? map.get(ncode) : ans;
			}
		}
		
	}

	// 判断是否还有新鲜的橘子
	for(var i = 0; i < r; i ++) {
		for(var j = 0; j < c; j ++) {
			if(grid[i][j] == 1) {
				return -1
			}
		}
	}
	return ans;

}


// 简单版
function orangesRotting1(grid) {
	if(grid == 0 || grid.length == 0) return 0;
	var minute = 1;
	var flag = true;
	var r = grid.length;
	var c = grid[0].length;
	var note = new Array(r);

	for(var i = 0; i < r; i ++) {
		note[i] = new Array(c);
		for(var j = 0; j < c; j ++) {
			if(grid[i][j] == 2) {
				note[i][j] = minute;
			} else {
				note[i][j] = 0;
			}
		}
	}

	while(flag) {
		flag = false;
		for(var i = 0; i < r; i ++) {
			for(var j = 0; j < c; j ++) {
				if(grid[i][j] == 2 && note[i][j] == minute) {
					// console.log(i, j)
					if(i > 0 && grid[i - 1][j] == 1) {
						grid[i - 1][j] = 2;
						note[i - 1][j] = minute + 1;
						flag = true;
					}
					if(i < r - 1 && grid[i + 1][j] == 1) {
						grid[i + 1][j] = 2;
						note[i + 1][j] = minute + 1;
						flag = true;
					}

					if(j > 0 && grid[i][j - 1] == 1) {
						grid[i][j - 1] = 2;
						note[i][j - 1] = minute + 1;
						flag = true;
					}
					if(j < c - 1 && grid[i][j + 1] == 1) {
						grid[i][j + 1] = 2;
						note[i][j + 1] = minute + 1;
						flag = true;
					}
				}
			}
		}

		flag && minute ++;
		// console.log(note);
	}

	for(var i = 0; i < r; i ++) {
		for(var j = 0; j < c; j ++) {
			if(grid[i][j] == 1) {
				return -1;
			}
		}
	}
	return minute - 1;
}
// console.log( orangesRotting1([[2,1,1],[1,1,0],[0,1,1]]) );
// console.log( orangesRotting1([[2,1,1],[0,1,1],[1,0,1]]) );

