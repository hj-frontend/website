
.. meta::
   :keywords: sphinx


Sphinx简介
=================================================

.. image:: http://sphinx.pocoo.org/_static/sphinx.png

**Sphinx安装**
	* Sphinx是基于Python的，所以如没有安装Python 2.x的，需要到这里下载安装：http://www.python.org/getit/
	* Python快速安装工具setuptools：http://pypi.python.org/pypi/setuptools
	* 安装Sphinx，在bash或cmd下运行：easy_install -U Sphinx

**Sphinx文档**
	* 简单安装说明 http://code.google.com/p/pymotwcn/wiki/SphinxprojectHowto
	* 官方文档 http://sphinx-doc.org/contents.html
	* reStructuredText Markup Specification http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html
	* 代码插入说明 http://sphinx-doc.org/markup/code.html

**编译发布**
	* 首先checkout我们的网站项目：https://github.com/hj-frontend/website，切换到gh-pages分支。
	* 在src目录下创建和编写文档，注意文档扩展名为 ``.rst``。
	* 在bash或cmd下进入项目website目录，运行 ``make html`` 或 ``make.bat html`` ，在某些情况下需要重新编译所有文档的话，可以运行扩展命令 ``make htmlall`` 或 ``make.bat htmlall`` 。
	* 提交更新到github完成发布。
	* 本文档网站：http://hj-frontend.github.com/website/docs/index.html

**reStructuredText语法演示**

*itatic* **bold** ``inline code``

.. note:: 这是一个提示.

   - The note contains all indented body elementsfollowing.
   - It includes this bullet list.

.. container:: myContent

   这是一个普通容器.

`这是一个链接 <http://www.hujiang.com>`_

.. raw:: html
   
   <script type="text/javascript" src="http://dict.hjenglish.com/app/js/dict_ajax.js"></script>

**HTML代码片段:**

.. sidebar:: sidebar

   Sidebars are like miniature, parallel documents that occur inside other documents, providing related or reference material. A sidebar is typically offset by a border and "floats" to the side of the page; the document's main text may flow around it. Sidebars can also be likened to super-footnotes; their content is outside of the flow of the document's main text.

.. code-block:: html

	<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
	  ...
	  <li class="dropdown-submenu">
	    <a tabindex="-1" href="#">More options</a>
	    <ul class="dropdown-menu">
	      ...
	    </ul>
	  </li>
	</ul>
