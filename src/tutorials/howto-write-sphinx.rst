如何编写Sphinx文档
=================================================

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

**reStructuredText语法**
	* http://sphinx-doc.org/rest.html