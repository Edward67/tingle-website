# tingle-on-off [![npm version](https://badge.fury.io/js/tingle-on-off.svg)](http://badge.fury.io/js/tingle-on-off)

> Radio Component, iPhone style.

<img src="https://img.alicdn.com/tps/TB1dJjWJpXXXXazXFXXXXXXXXXX-750-1254.png" width="375"/>

## Install

```bash
npm install tingle-on-off --save
```

## Usage

```js
class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            on1: true,
            on2: false,
            on3: false
        }
    }

    handleChange(form, on) {
        this.setState({
            [form]: on
        });
    }

    render() {
        return (
            <div>
                <OnOff on={this.state.on1} onChange={this.handleChange.bind(this, "on1")}/>
                <OnOff on={this.state.on2} onChange={this.handleChange.bind(this, "on2")}/>
                <OnOff on={this.state.on3} readOnly={true} onChange={this.handleChange.bind(this, "on3")}/>
            </div>
        );
    }
}
```

## Options


- `className`:(default ``) Defines className that you can add to the component.
- `on`:(default `true`) Defines whether the component should be on.
- `readOnly`:(default `false`) Defines whether the component is readOnly(can not be modified by user action).
- `onChange`:(default `function(on,e){}`) Defines callback whenever the component value changed.
  - `on` The on state after change.
  - `event` The `SyntheticEvent` object.


## Links

- [Fire a bug/Issues](https://github.com/tinglejs/tingle-on-off/issues)
