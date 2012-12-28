.. _jbox-usage:

jQuery jBox扩展
=============================

jBox官方网站：http://www.kudystudio.com/jbox/jbox-demo.html

jBox是一款非常不错的简单易用的对话框插件。但是jBox的定位功能是依据窗口离顶部的距离，无法实现窗口在页面居中，因此开发了此jBox的扩展。

**扩展功能：**
	* 在全局设置$.jBox.defaults里增加 ``position`` 属性，可设置窗口出现在页面中的位置。格式为：{left:0.5, top:0.5}，当left/top值小于1时会当做百分比计算位置，大于1则是绝对像素定位。
	* 在全局设置$.jBox.defaults里增加 ``autoPosition`` 属性。如果autoPosition=true且窗口position定位值小于1即百分比定位时，当页面大小发生改变时窗口会自动调整位置。
	* 新增方法：``$.jBox.moveTo(left, top)`` ，可显式的控制jBox窗口位置。

**使用方法：**

.. code-block:: html
	
	<script type="text/javascript" src="jbox/jquery.jBox-2.3.extends.js"></script>
	
可以选择设置$.jBox.defaults.position或$.jBox.defaults.autoPosition。


`查看源码 <../../../raw/js/jbox/jquery.jBox-2.3.extension.js>`_


.. raw:: html
	
	<link type="text/css" rel="stylesheet" href="../../../raw/js/jbox/jbox.css" />
	<script type="text/javascript" src="../../../raw/js/jbox/jquery.jBox-2.3.min.js"></script>
	<script type="text/javascript" src="../../../raw/js/jbox/jquery.jBox-zh-CN.js"></script>
	<script type="text/javascript" src="../../../raw/js/jbox/jquery.jBox-2.3.extension.js"></script>

	<input id="jbox_btn" type="button" value="测试" />

	<script>
		$("#jbox_btn").bind("click", function(){
			$.jBox.info("Hello World!");
		})
	</script>