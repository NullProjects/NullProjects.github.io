import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "ulsocialbar": {
        "listStyleType": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "backgroundColor": "#333"
    },
    "lisocialbar-content": {
        "float": "left"
    },
    "lisocialbar-login": {
        "float": "right",
        "verticalAlign": "top",
        "height": "100%"
    },
    "li:last-child": {
        "borderRight": "none"
    },
    "lisocialbar-content a": {
        "display": "block",
        "color": "white",
        "textAlign": "center",
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "textDecoration": "none"
    },
    "li a:hover:not(active)": {
        "backgroundColor": "#111"
    },
    "active": {
        "backgroundColor": "#4CAF50"
    },
    "navbar-wrap": {
        "width": "100%"
    },
    "ulnavbar-ul": {
        "listStyleType": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "backgroundColor": "#333",
        "width": "100%"
    },
    "linavbar-content": {
        "float": "left",
        "textAlign": "center",
        "borderRight": "1px solid #bbb"
    },
    "linavbar-login": {
        "float": "right",
        "verticalAlign": "top"
    },
    "linavbar-content a": {
        "display": "block",
        "color": "white",
        "textAlign": "center",
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "textDecoration": "none",
        "backgroundColor": "#212121"
    },
    "linavbar-content a:hover:not(active)": {
        "backgroundColor": "#212121",
        "textDecoration": "none",
        "textDecorationColor": "#fff",
        "color": "#fff"
    },
    "active-nav-custom-sundance": {
        "backgroundColor": "#212121",
        "textDecoration": "none",
        "textDecorationColor": "#fff",
        "color": "#fff"
    },
    "ulsocialbar-b": {
        "listStyleType": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "backgroundColor": "#333"
    },
    "lisocialbar-b-content": {
        "float": "left",
        "borderRight": "1px solid #bbb",
        "textAlign": "left",
        "color": "#fff"
    },
    "lisocialbar-b-right": {
        "float": "right",
        "verticalAlign": "top"
    },
    "li a": {
        "display": "block",
        "color": "white",
        "textAlign": "center",
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "textDecoration": "none"
    }
});