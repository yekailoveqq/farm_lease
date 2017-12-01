farm_lease开发手册简版

1、下载代码前 确保安装maven
2.使用eclipse导入maven项目
3.确保能够连接mysql数据库
4.启动服务运行FarmLeaseAppli;cation类中的main方法




目录结构说明：
平台采用单页，一个主页面 功能采用弹框
前端采用纯html结构 与后端交互使用ajax调用
基本包com.simple.farm
 com.simple.farm.dao 按业务逻辑划分dao层
 com.simple.farm。service 按业务逻辑定义接口
 com.simple.farm。service。impl
 com.simple.farm.web.controller 
 
 映射路径  /farm/逻辑模块/功能
 
 
 
 