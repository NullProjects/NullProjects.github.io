import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#ffffff",
        "background": "linear-gradient(0deg, #FEFEFE 0, #247BBD 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1')",
        "backgroundRepeat": "none",
        "backgroundAttachment": "fixed",
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "fontSize": 12,
        "textAlign": "center"
    },
    "main-slm": {
        "paddingLeft": "auto",
        "paddingRight": "auto",
        "paddingTop": 0,
        "paddingBottom": 0
    },
    "main-wrap-slm": {
        "width": "60%",
        "border": 5,
        "borderStyle": "solid",
        "textAlign": "center"
    },
    "imgwrap": {
        "width": 450,
        "height": 450,
        "borderStyle": "inset"
    },
    "content-select-wrap": {
        "textAlign": "center"
    },
    "footerwrap": {
        "textAlign": "center"
    }
});