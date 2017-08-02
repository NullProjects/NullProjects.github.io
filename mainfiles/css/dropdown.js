import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "dropbtn": {
        "backgroundColor": "#ffffff",
        "color": "#000000",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 12,
        "border": "none",
        "cursor": "pointer",
        "width": 112
    },
    "buttondropbtn:hover": {
        "backgroundColor": "#247BBD"
    },
    "dropdown": {
        "position": "relative",
        "display": "inline-block"
    },
    "dropdown-content": {
        "display": "none",
        "position": "absolute",
        "backgroundColor": "#f9f9f9",
        "minWidth": 160,
        "boxShadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
    },
    "dropdown-content a": {
        "color": "black",
        "paddingTop": 12,
        "paddingRight": 16,
        "paddingBottom": 12,
        "paddingLeft": 16,
        "textDecoration": "none",
        "display": "block"
    },
    "dropdown-content a:hover": {
        "backgroundColor": "#247BBD"
    },
    "dropdown:hover dropdown-content": {
        "display": "block"
    },
    "dropdown:hover dropbtn": {
        "backgroundColor": "#247BBD"
    }
});