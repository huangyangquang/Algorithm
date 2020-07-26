// 用js实现一个用户行收集器，功能如下：
// 1，收集用户在页面中的所有click行为，并使用log方法发送日志，包含触发事件的节点xpath信息

// 2，xpath需包含tagName、id、class、同级同名节点索引(从1开始)，如

// <body>
	// <div id=“container”>
		// <p>something</p>
		// <a id=“link1” class=“link-class”></a>
		// <a id=“link2” class=“link-class current”>target link</a>
	// </div> 
// </body>

// 点击target link时，xpath为 
// body[1]/
// div[1][@id=“container”]/
// a[2][@id=“link2”][contains(@class, “link-class")][contains(@class, “current")]

// 3，不侵入、不影响其他业务代码的执行

var obody = document.getElementsByTagName('body')[0];
obody.addEventListener('click', function(e) {
	console.log(getXPath(e.target));

}, false);

// 获取它的   上级节点至根节点body
// 每一个节点都得获取：
// 获取它的ID
// 获取它的class
// 获取它在同级同名节点中排老几

function getXPath(target) {
	if(target.localName == 'body') return 'body[1]';
	var index = 1;
	var tempTarget = target;
	var str = '';
	var localName = target.localName;
	var id = target.id;
	var classList = target.classList;
	while(tempTarget.previousElementSibling != null && tempTarget.previousElementSibling.localName == localName) {
		index ++;
		tempTarget = tempTarget.previousElementSibling;
	}
	str = '/' + localName + '[' + index + '][@id="' + id + '"]';
	classList.forEach(function(ele, index, self) {
		str += '[contains(@class,"' + ele + '")]';
	})
	return getXPath(target.parentNode) + str;
}

