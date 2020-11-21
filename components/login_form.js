var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import '../App.css';

var login_form = function (_Component) {
    _inherits(login_form, _Component);

    function login_form(props) {
        _classCallCheck(this, login_form);

        var _this = _possibleConstructorReturn(this, (login_form.__proto__ || Object.getPrototypeOf(login_form)).call(this, props));

        _this.handleOnSubmit = function (e) {
            // debugger
            e.preventDefault();
            _this.props.addNewTodo(_this.state);
            _this.setState({
                title: "",
                developer: "",
                info: ""
            });
        };

        _this.handleChange = function (e) {
            e.preventDefault();
            // debugger
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.state = {
            title: "",
            developer: "",
            info: ""
        };
        return _this;
    }

    _createClass(login_form, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.handleOnSubmit },
                React.createElement(
                    'h1',
                    null,
                    'Create a Game'
                ),
                React.createElement(
                    'label',
                    { className: 'in' },
                    'Title:'
                ),
                React.createElement('br', null),
                React.createElement('input', { type: 'text', name: 'title', value: this.state.title, onChange: this.handleChange }),
                ' ',
                React.createElement('br', null),
                React.createElement(
                    'label',
                    { className: 'in' },
                    'Developer:'
                ),
                React.createElement('br', null),
                React.createElement('textarea', { type: 'text', name: 'developer', value: this.state.developer, onChange: this.handleChange }),
                React.createElement('br', null),
                React.createElement(
                    'label',
                    { className: 'in' },
                    'Info:'
                ),
                React.createElement('br', null),
                React.createElement('textarea', { type: 'text', name: 'info', value: this.state.info, onChange: this.handleChange }),
                React.createElement('br', null),
                React.createElement(
                    'button',
                    { type: 'submit', value: 'Create', className: 'create' },
                    'Create'
                )
            );
        }
    }]);

    return login_form;
}(Component);

export default login_form;