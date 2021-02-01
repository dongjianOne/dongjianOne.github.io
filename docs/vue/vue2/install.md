# 组件安装

### 配置淘宝镜像
```
npm install -g cnpm --registry=http://registry.npm.taobao.org
```

查看镜像是否配置成功
````
npm get registry 
````

### 安装vue-cli

````
cnpm install -g vue-cli
````

### 打包vue项目
先安装vue/cli-init
````
cnpm i -g @vue/cli-init
````
打包项目
````
vue init webpack Project-name
````

安装sass-loader(sass-loader依赖于node-sass,所以要安装node-sass)
```
// 安装node-sass
npm install --save-dev node-sass
// 安装sass-loader
npm install --save-dev sass-loader
```





