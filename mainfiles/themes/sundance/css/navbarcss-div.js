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
        "backgroundColor": "#247BBD"
    },
    "lisocialbar-content": {
        "float": "left",
        "verticalAlign": "top"
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
    "lisocialbar-content:last-child": {
        "borderRight": "none"
    },
    "lisocialbar-content a:hover:not(active)": {
        "backgroundColor": "#247BBD"
    },
    "lisocialbar-content-active": {
        "backgroundColor": "#fff"
    },
    "lisocialbar-login": {
        "float": "right",
        "verticalAlign": "top",
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "lisocialbar-login a": {
        "display": "block",
        "color": "white",
        "textAlign": "center",
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "textDecoration": "none"
    },
    "lisocialbar-login:last-child": {
        "borderRight": "none"
    },
    "lisocialbar-login a:hover:not(active)": {
        "backgroundColor": "#111"
    },
    "lisocialbar-login-active": {
        "backgroundColor": "#fff"
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
        "borderRight": "1px solid #bbb"
    },
    "linavbar-content:last-child": {
        "borderRight": "none"
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
        "backgroundColor": "#333"
    },
    "linavbar-content a:hover:not(active)": {
        "backgroundColor": "#212121",
        "textDecoration": "none",
        "textDecorationColor": "#fff",
        "color": "#fff"
    },
    "linav-active": {
        "backgroundColor": "#212121",
        "color": "#fff"
    },
    "linav-active a": {
        "backgroundColor": "#212121",
        "color": "#fff"
    },
    "lidonate-tab-text-color a": {
        "color": "#000"
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
    "li:last-child": {
        "borderRight": "none"
    },
    "lisocialbar-b-content a": {
        "display": "block",
        "color": "white",
        "textAlign": "center",
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "textDecoration": "none"
    },
    "lisocialbar-b-content a:hover:not(active)": {
        "backgroundColor": "#111"
    },
    "socialbar-b-content-active": {
        "backgroundColor": "#fff"
    },
    "lisocialbar-b-right": {
        "float": "right",
        "verticalAlign": "top"
    },
    "lisocialbar-b-right a": {
        "display": "block",
        "color": "white",
        "textAlign": "center",
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "textDecoration": "none"
    },
    "lisocialbar-b-right a:hover:not(active)": {
        "backgroundColor": "#111"
    },
    "socialbar-b-right-active": {
        "backgroundColor": "#fff"
    }
});