//题目：求字符串的字节长度

function getLen(str) {
	var len = str.length;
	var count = 0;
	for(var i = 0; i < len; i ++) {
		if(str.charCodeAt(i) > 255) {
			count ++;
		}
		count ++;
	}
	return count;
}

// console.log( getLen('huang') );

function getLen1(str) {
	var len = str.length;
	var count = len;
	for(var i = 0; i < len; i ++) {
		if(str.charCodeAt(i) > 255) {
			count ++;
		}
	}
	return count;
}

// console.log( getLen1('huang') );


// 原型（prototype）是函数的一个属性，是这个函数构造出来的对象的共有祖先
// 对像通过__proto__找到原型,__proto__链接到我的原型
// constructor是在原型上的

// 原型表示：
// 构造函数上： Fn.prototy
// 构造函数构造出来的对象上： obj.__proto__
// 

function Dad() {
	this.name = 'huangfengquan';
}
var dad = new Dad();

Person.prototype = dad;
Person.prototype.age = 18;

function Person() {

}

var per = new Person();

// console.log(per);
// console.log(per.name, per.age);
// console.log(Person.prototype);
// console.log(per.__proto__);
// console.log(per.constructor);

// 1.原型链
// 2.借用他人的构造函数
// 3.共有原型
function inherit(Target, Origin) {
	// 构造函数Target的原型就是构造函数Origin的原型
	// 两个构造函数共享同一个原型
	// 因为原型是一个对象，是引用值
	Target.prototype = Origin.prototype;
}
// 4.圣杯模式
function inherit1(Target, Origin) {
	function F() {}
	F.prototype = Origin.prototype;
	Target.prototype = new F();
	Target.prototype.constructor = Target;
	Target.prototype.uber = Origin.prototype;
}

function Son() {

}

function Father() {

}

// inherit(Son, Father);
inherit1(Son, Father);

var son = new Son();
var father = new Father();


// call 、 apply 、 bind的区别？
// 都是改变this指向
// 1.call传递的参数是散列的
// 2.apply传递的参数是一个数组
// 3.bind是由call或者apply来实现的,
//   是函数的一个属性
//   但是不会修改函数本的this,是直接返回一个this被修改后的函数。
//   bind传递的参数是按传递的顺序一位一个拼接的，
//   new 操作时，不会改变this, 构造出来的对象的构造函数是原来的函数


// bind的实现：
Function.prototype.newBind = function(target) {
	var self = this;
	var _args = [].slice.call(arguments, 1);
	var temp = function () {};
	var f = function() {
		var args = [].slice.call(arguments, 0);
		return self.apply(this instanceof temp ? this : (target || window), _args.concat(args));
	}
	temp.prototype = self.prototype;
	f.prototype = new temp();
	return f;
}


function Parent(name) {
	this.name = name;
}
Parent.prototype.getName = function() {
	return this.name;
}

Children.prototype = new Parent();
function Children(name) {
	Parent.call(this, name)
}

var chil = new Children('kkk');
console.log(chil.getName())

// function show(a, b, c) {
// 	console.log(this, a, b, c);
// }
// var obj = {
// 	name: 'huangfengquan'
// }
// var nShow = show.mBind(obj, 'a');

// show(1, 2, 3); 
// nShow(2, 3);
// var obj1 = new nShow();



// 封装一个ajax:



// <input type="text" id="demo">
// <div id="show"></div>
// 简单的数据劫持
const oInp = document.getElementById('demo');
const oDiv = document.getElementById('show');

let data = {
	obj: {
		value: 'ffff',
		age: 19,
	},
	sex: 1
}

oInp.oninput = function() {
	console.log(this);
	data.obj.value = this.value;
}

function update() {
	oDiv.innerText = data.obj.value;
}

function Observer(data) {
	if(!data || typeof data != 'object') return;

	Object.keys(data).forEach(function(key) {
		defineR(data, key, data[key]);
	})
}

function defineR(data, key, val) {
	Observer(val);
	Object.defineProperty(data, key, {
		get() {
			return val;
		},
		set(newVal) {
			if(newVal == val) return;
			val = newVal;
			update();
		}
	})
}

update();
Observer(data);

// 对数组做数据劫持，重写数组的方法
let arr = [];
let push = Array.prototype.push;

function updateArr() {
	console.log('更新了');
}
 
 Object.defineProperty(Array.prototype, 'push', {
 	value: (function() {
 		return function() {
 			push.apply(arr, arguments);
 			updateArr();
 		}
 	})()
 })

// proxy(代理) and reflect(映射) 
// 可以实现对对象和数组更好的监控；
// 针对对象新增的属性也可以监控到

// 代理模式:
let oData = {
	val: 'duyi'
}
//实现对oData的代理
let oProxyData = new Proxy(oData, {
	set (target, key, value, receiver) {
		console.log(target, key, value, receiver);
           // 一般是配套使用的： 更新值
		Reflect.set(target, key, value);
	},
	get (target, key, receiver) {
		console.log(target, key, receiver);
		// return oData.val;
		// 一般是配套使用的：返回值
		return Reflect.get(target, key);
	}
});
// 读 写的控制, 一定要在上面实现代理的时候添加参数{get.., set..}
console.log( oProxyData.val );
oProxyData.val = 'huang';


let oArr = ['a'];
// 实现对数组数据的监控
let oProxyData1 = new Proxy(oArr, {
	// 写：
	set (target, key, value, receiver) {
		Reflect.set(target, key, value);
		upData();
	},
	// 读：
	get (target, key, receiver) {
		return Reflect.get(target, key);
	}
});
console.log(oProxyData1[0]);
oProxyData1[1] = 'cccc';
function upData () {
	console.log('更新啦啦~~~');
}


// 发布订阅模式：
function Event() {
	this.cache = {};
}

Event.prototype.on = function(type, handle) {
	if(this.cache[type]) {
		this.cache[type].push(handle);
	} else {
		this.cache[type] = [handle];
	}
}

Event.prototype.emmit = function() {
	var type = arguments[0];
	var params = [].slice.call(arguments, 1);
	for(var i = 0; i < this.cache[type].length; i ++) {
		this.cache[type][i].apply(this, params);
	}
}

Event.prototype.empty = function(type) {
	this.cache[type] = [];
}

Event.prototype.remove = function(type, handle) {
	this.cache[type] = this.cache[type].filter(function(ele) {
		return !(ele == handle);
	})
}

Event.prototype.once = function() {
	
}


// promise化：
// 一个：
function promisify (func) {
	return function (...arg) {//...arg 收集作用
		return new Promise((res, rej) => {
			func(...arg, (err, data) => {//...arg 展开作用
				if(err) {
					rej(err);
				} else {
					res(data);
				}
			});
		});
	}
}

// 多个：
function promiseAll (obj) {
	for(let key in obj) {
		let fn = obj[key];
		if(typeof fn == 'function') {
			obj[key + 'Async'] = promisify(fn);
		}
	}
}

// async + await 的使用：
// 解决回调地狱：
async function read (url) {
	let val1 = await readFile(url);
	let val2 = await readFile(val1);
	let val3 = await readFile(val2);
	return val3;
}

// 解决try catch捕获不到异步的代码的错误:
async function read (url) {
	try {
		let val1 = await readFile(url);
		let val2 = await readFile(val1);
		let val3 = await readFile(val2);
		return val3;
	} catch (e) {
		console.log('在158行');
		return e;
	}	
}

// 解决同步并发的异步结果
let fs = require('fs');
function readFile (path) {
	return new Promise((res, rej) => {
		fs.readFile(path, 'utf-8', (err, data) => {
			if(err) {
				rej(err);
			} else {
				res(data);
			}
		})
	})
}

function dealReadFile(callBackSuccess, callBackFail, ...arg) {
	return async function () {
		let val = null;
		try {
			val = await readFile(...arg);
			callBackSuccess && callBackSuccess(val);
		} catch(e) {
			callBackFail && callBackFail(e);
		}
	}
}

function successDeal (val) {
	console.log(val);
}
function failDeal (reason) {
	console.log(reason);
}
let read1 = dealReadFile(successDeal, failDeal, './data/number.txt');
let read2 = dealReadFile(successDeal, failDeal, './data/num.txt');
let read3 = dealReadFile(successDeal, failDeal, './data/name.txt');

function readAll(...arg) {
	arg.forEach(ele => {
		ele();
	})
}
readAll(read1, read2, read3);

/**
	url: string
	params: obj
	cb: function
	cbN: string
**/
// jsonp函数
function jsonp(url, params, cb, cbN) {
	// 兼容处理
	let queryString = url.indexOf('?') === -1 ? '?' : '&';

	// 拼接参数
	for(let k in params) {
		if(params.hasOwnProperty(k)) {
			queryString += `${k}=${params[k]}&`;
		}
	}

	// 产生回调函数名子
	const cbName = 'jsonp' + Math.random().toString().replace('.', '');

	// 生成script标签
	const oScript = document.createElement('script');
	// 请求资源
	oScript.src = `${url}${queryString}${cbN}=${cbName}`;

	// 全局注册回调函数
	window[cbName] = function() {
		// 调用回调
		cb(...arguments);
		// 从body中删除
		document.body.removeChild(oScript)
	}

	// 插入到body里
	document.body.appendChild(oScript);

}


