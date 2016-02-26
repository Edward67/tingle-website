# tingle-box [![npm version](https://badge.fury.io/js/tingle-box.svg)](http://badge.fury.io/js/tingle-box)

该模块包含三个Component，分别是：

* HBox：水平方向的伸缩容器。本身也是一个可伸缩元素。
* VBox：垂直方向的伸缩容器。本身也是一个可伸缩元素。
* Box：可伸缩元素。

## Install

```
npm install tingle-box --save
```

## props

#### hAlign

`HBox`和`VBox`都支持该属性

描述：水平方向的对齐方式。  
类型：`String`  
可选：`start`、`center`、`end`、`''`(空)  
默认：`''`(空)，相当于`stretch`效果，即垂直方向伸缩容器内的可伸缩元素的宽度和容器宽度相同。  
必选：否

示例：

```js
<HBox hAlign="center">...</HBox>
<VBox hAlign="center">...</VBox>
```

#### vAlign

`HBox`和`VBox`都支持该属性

描述：垂直方向的对齐方式。  
类型：`String`  
可选：`start`、`center`、`end`、`''`(空)   
默认：`''`(空)，相当于`stretch`效果，即水平方向伸缩容器内的可伸缩元素的高度和容器高度相同。  
必选：否

示例：

```js
<HBox vAlign="center">...</HBox>
<VBox vAlign="center">...</VBox>
```

#### flex

`HBox`、`VBox`和`Box`都支持该属性

描述：可伸缩元素的伸缩值。  
类型：`Number`  
可选：`0`、`1`、`2`、`3` 
默认：`0`(空)  
必选：否

示例：

```js
<HBox hAlign="center">
  <Box flex={1}>占50%宽</Box>
  <Box flex={1}>占50%宽</Box>
</HBox>
```

## Links

- [Issues](http://github.com/tinglejs/tingle-box/issues)
