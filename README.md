# cocos2d-js-example

完全基于es6开发，可在开发阶段实现自动编译代码，并且集成了热刷新功能。

该仓库通过 [Cocos Console](https://github.com/cocos2d/cocos2d-console) 的 `cocos new [project] -l js` 创建，并且移除了 `frameworks` 。

开发时需要自己手动引入，可以通过 `cocos new [project] -l js` 创建一个新的工程，然后将该工程下的 `frameworks` 拷贝过来。

## 快速入门

```bash
# 安装依赖
yarn

# 开发模式
yarn dev
```

`yarn dev` 执行后，可以打开 [http://localhost:8080](http://localhost:8080) 预览页面。

## 编译命令

```bash
# 编译web版本
yarn build:web
```
