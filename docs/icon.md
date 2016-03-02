# tingle-icon

[![npm version](https://badge.fury.io/js/tingle-icon.svg)](http://badge.fury.io/js/tingle-icon)

Icon图标展示，适用于移动端图标展示

<img src="http://gtms01.alicdn.com/tps/i1/TB1LYlgIVXXXXcWXXXXHXIoYFXX-285-253.png" width="285"/>

## Install

```bash
npm install tingle-icon --save
```

## Simple Usage

__[注]__ 使用最新的tingle-icon组件需要最新的tingle-context支持，具体详情可查看History记录。

这是一个 tingle 组件，使用SVG来制作icon系统的解决方案。


```js
<Icon className="icon" id="baby"/>
<Icon className="icon customCls" id="headphones"/>
...
```


## Props

### id

描述：需要引用的SVG的ID标识
类型：'string'
必选：是

示例：

```
<Icon className="icon" id="baby"/>
```

### className

描述：自定义样式名，默认为 'tIcon'
类型：'string'
必选：否

示例：

```
<Icon className="icon" id="xxxx"/>
```

> 注1: id的值默认情况下是根据SVG资源名称相对应的


## Links 相关链接

- [Fire a bug/Issues 提Bug](http://github.com/tinglejs/tingle-icon/issues)