import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "li": {
        "float": "left"
    },
    "li a": {
        "display": "inline-block",
        "color": "white",
        "textAlign": "center",
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "textDecoration": "none"
    },
    "dropbtn": {
        "display": "inline-block",
        "color": "white",
        "textAlign": "center",
        "paddingTop": 14,
        "paddingRight": 16,
        "paddingBottom": 14,
        "paddingLeft": 16,
        "textDecoration": "none"
    },
    "li a:hover": {
        "backgroundColor": "red"
    },
    "dropdown:hover dropbtn": {
        "backgroundColor": "red"
    },
    "lidropdown": {
        "display": "inline-block"
    },
    "dropdown-content": {
        "display": "none",
        "position": "absolute",
        "backgroundColor": "#f9f9f9",
        "minWidth": 160,
        "boxShadow": "0px 8px 16px 0px rgba(0,0,0,0.2)",
        "zIndex": 9
    },
    "dropdown-content a": {
        "color": "black",
        "paddingTop": 12,
        "paddingRight": 16,
        "paddingBottom": 12,
        "paddingLeft": 16,
        "textDecoration": "none",
        "display": "block",
        "textAlign": "left"
    },
    "dropdown-content a:hover": {
        "backgroundColor": "#f1f1f1"
    },
    "dropdown:hover dropdown-content": {
        "display": "block"
    }
});