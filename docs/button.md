# Button 按钮 [![npm version](https://badge.fury.io/js/tingle-button.svg)](http://badge.fury.io/js/tingle-button)

效果图:

<img src="https://img.alicdn.com/tps/TB10cIXJpXXXXbaXXXXXXXXXXXX-750-1254.png" width="375"/>

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

## 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|disabled| optional |false|按钮失效|
|type| optional |primary|按钮的类型, 可选的参数primary、secondary、danger|
|size| optional |l|按钮的大小, 可选的参数 s 、m 、l|
|onClick|optional|-|按钮点击时的回调|


## Links 相关链接

- [Fire a bug/Issues 提Bug](https://github.com/tinglejs/tingle-button/issues)