"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var instructions = react_native_1.Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
var CartScreen = /** @class */ (function (_super) {
    __extends(CartScreen, _super);
    function CartScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartScreen.prototype.render = function () {
        return (<react_native_1.View style={styles.container}>
                <react_native_1.Text style={styles.welcome}>
                    Welcome to React Native!
                </react_native_1.Text>
                <react_native_1.Text style={styles.instructions}>
                    To get started, edit App.js
                </react_native_1.Text>
                <react_native_1.Text style={styles.instructions}>
                    {instructions}
                </react_native_1.Text>
            </react_native_1.View>);
    };
    return CartScreen;
}(react_1.Component));
exports.default = CartScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
