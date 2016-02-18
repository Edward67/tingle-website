# tingle-grid [![npm version](https://badge.fury.io/js/tingle-grid.svg)](http://badge.fury.io/js/tingle-grid)

一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述

<img src="https://img.alicdn.com/tps/TB10cIXJpXXXXbaXXXXXXXXXXXX-750-1254.png" width="375"/>

## Install

```js
npm install tingle-grid --save
```

## Simple Usage

```html
<Button type="primary" onClick={this.handleClick}>主 按 钮</Button>
<Button type="secondary" onClick={this.handleClick}>次 按 钮</Button>
<Button type="danger" onClick={this.handleClick}>警告按钮</Button>
<Button type="primary" size="m" onClick={this.handleClick}>中按钮</Button>
<Button type="primary" size="s" onClick={this.handleClick}>小按钮</Button>
<Button disabled={true}>不可点击</Button>
<Button disabled={true} size="m">不可点击</Button>
<Button disabled={true} size="s">不可点击</Button>
```

## Props

#### className

描述：自定义样式的`class`名称。  
类型：`String`  
默认：`''`  
必选：否

示例：

```
<Grid className="customClass"></Grid>
```

#### col

描述：自定义列数，如果子元素不足整列，将以空元素补位。  
类型：`Number`  
默认：`4`  
必选：否

示例1：下面的代码将显示成一行三列，即使子元素不足三个。

```
<Grid col={3}>
	<div></div>
</Grid>
```

示例2：下面的代码将显示两行三列，即使子元素不足两行。

```
<Grid col={3}>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</Grid>
```

## Event

#### onChange(newValue, e)


描述：输入时触发。
类型：`Number`  
默认：`4`  
必选：

示例1：下面的代码将显示成一行三列，即使子元素不足三个。

```javascript
// 新值和事件对象
handleChange(newValue,e) {

}

```

#### onFocus(e)

#### onBlur(e)

## Links

- [Issues](http://github.com/tinglejs/tingle-grid/issues)