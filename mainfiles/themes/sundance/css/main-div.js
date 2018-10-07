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
    "mainwrap": {
        "paddingLeft": "auto",
        "paddingRight": "auto",
        "paddingTop": 0,
        "paddingBottom": 0
    },
    "mainwrap-c": {
        "width": 920,
        "border": 1,
        "borderStyle": "solid",
        "textAlign": "center"
    },
    "asocialicot:link": {},
    "asocialicot:visited": {},
    "asocialicot:hover": {},
    "asocialicot:active": {},
    "atnav:link": {
        "backgroundColor": "#ffffff",
        "color": "#000000",
        "textAlign": "center",
        "textDecoration": "none",
        "display": "inline-block",
        "width": "100%"
    },
    "atnav:visited": {
        "backgroundColor": "#ffffff",
        "color": "#000000",
        "textAlign": "center",
        "textDecoration": "none",
        "display": "inline-block",
        "width": "100%"
    },
    "atnav:hover": {
        "backgroundColor": "#247BBD",
        "color": "#ffffff"
    },
    "atnav:active": {
        "backgroundColor": "#247BBD",
        "color": "#ffffff"
    },
    "asnav:link": {
        "color": "#000000",
        "textDecoration": "none",
        "display": "inline-block",
        "width": "100%"
    },
    "asnav:visited": {
        "color": "#000000",
        "textDecoration": "none",
        "display": "inline-block",
        "width": "100%"
    },
    "asnav:hover": {
        "backgroundColor": "#247BBD",
        "color": "#ffffff",
        "width": "100%",
        "textDecoration": "none"
    },
    "asnav:active": {
        "backgroundColor": "#247BBD",
        "color": "#ffffff",
        "width": "100%",
        "textDecoration": "none"
    },
    "asocialicob:link": {},
    "asocialicob:visited": {},
    "asocialicob:hover": {},
    "asocialicob:active": {},
    "soocial-icons": {
        "maxWidth": 30,
        "maxHeight": 30
    },
    "soocial-icons-align": {
        "textAlign": "right"
    },
    "login-btn": {
        "backgroundColor": "#247BBD",
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
    "login-btn:hover": {
        "backgroundColor": "#ffffff"
    },
    "login-button-text": {
        "transform": "translate(2px,0)",
        "color": "#ffffff"
    },
    "alogin-button-text:hover": {
        "transform": "translate(2px,0)",
        "color": "#000000"
    },
    "header-wrap": {
        "backgroundColor": "#ffffff",
        "width": "100%",
        "height": 130
    },
    "header-text": {
        "textAlign": "center"
    },
    "logo-img-wrap": {
        "width": "100%",
        "height": 200,
        "maxWidth": "100%",
        "maxHeight": "100%"
    },
    "logo-img": {
        "width": "100%",
        "maxWidth": "100%",
        "maxHeight": "100%"
    },
    "newnav": {},
    "log-register-btn": {
        "height": "100%",
        "width": "99%"
    },
    "navbar": {
        "marginBottom": 0,
        "borderRadius": 0
    },
    "uc01": {
        "border": 0,
        "borderStyle": "solid",
        "width": "100%",
        "height": 30
    },
    "uc02": {
        "border": 1,
        "borderStyle": "dashed",
        "backgroundColor": "yellow",
        "textAlign": "center"
    },
    "pulsate": {
        "WebkitAnimation": "pulsate 3s ease-out",
        "WebkitAnimationIterationCount": "infinite",
        "opacity": 0.5
    },
    "main-content-wrap": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "borderTopStyle": "none",
        "backgroundColor": "#ffffff !important",
        "textAlign": "left"
    },
    "content-container-wrap": {
        "width": "98%",
        "textAlign": "center"
    },
    "tumblr-post-frame": {
        "border": 0
    },
    "content-wrap-div": {
        "backgroundColor": "#ffffff",
        "width": "90%"
    },
    "footer-wrap-main": {
        "width": "100%",
        "verticalAlign": "top",
        "backgroundColor": "#247BBD",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer-wrap": {
        "border": 0,
        "width": "100%",
        "backgroundColor": "#247BBD",
        "borderTopStyle": "none",
        "borderBottomStyle": "none",
        "borderRightStyle": "none",
        "borderLeftStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer-wrap-bg": {
        "backgroundColor": "#247BBD"
    },
    "footer-wrap-bg2": {
        "backgroundColor": "#247BBD",
        "width": "65%"
    },
    "footer-links-wrap": {
        "width": "95%",
        "backgroundColor": "#247BBD",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer-image-wrapbg": {
        "backgroundColor": "#247BBD",
        "width": "35%",
        "verticalAlign": "top",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer-social-wrap": {
        "backgroundColor": "#247BBD",
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "copyrightbg": {
        "backgroundColor": "#247BBD",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "center",
        "width": "100%"
    }
});