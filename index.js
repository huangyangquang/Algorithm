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

// function show(a, b, c) {
// 	console.log(this, a, b, c);
// }
// var obj = {
// 	name: 'huangfengquan'
// }
// var nShow = show.mBind(obj, 'a');

// show(1, 2, 3); 
nShow(2, 3);
var obj1 = new nShow();


// 封装一个ajax:


