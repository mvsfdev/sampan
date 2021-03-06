define(function(require, exports, module) {
    "use strict";
    
    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var app = require("app");
    
    var Constants = {

        hotpoint: {
            r : 3,
            start: {

                "stroke": "blue",
                "stroke-width": 2,
                "fill": "red"
            },
            end: {

                "stroke": "#FF6600",
                "stroke-width": 2,
                "fill": "#99CC33"
            }
        },

        shadow: {
            "dx": 0,
            "dy": 2,
            "color": "#CCCC00",
            "opacity": 9
        },

        no_shadow: {
            "dx": 0,
            "dy": 2,
            "color": "#FFFFFF",
            "opacity": 9
        },

        highlight: {
            "color": "#FFE303",
            "width": 50
        },

        figure: {
            x : 100,
            y : 100,
            scale_x : 0.8,
            scale_y : 0.8
        },

        point: {
            r : 5,
            normal: {
                
                "stroke": "yellow",
                "stroke-width": 5,
                "fill": "red"
            },
            previous_alarm : {
                "stroke": "red",
                "stroke-width": 5,
                "fill": "red" 
            }, 
            x : 20,
            y : 90,
            radius : 5
        },

        polyline: {
            x : 10,
            y : 20,
            normal : {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke": "green",
                "fill": "none",
                "stroke-width": 5
            },
            accessed : {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke": "yellow",
                "fill": "none",
                "stroke-width": 5
            },
            secured : {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke": "green",
                "fill": "none",
                "stroke-width": 5
            },
            failed : {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke": "red",
                "fill": "none",
                "stroke-width": 5
            },
            disabled : {
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke": "gray",
                "fill": "none",
                "stroke-width": 5
            }
        },
        
        polygon: {
            x : 120,
            y : 20,
            
            selected : {

            },
            normal : {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke": "blue",
                "fill": "blue",
                "fill-opacity": 0.6,
                "stroke-width": 5

            },
            accessed : {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke": "yellow",
                "fill": "yellow",
                "fill-opacity": 0.6,
                "stroke-width": 5

            },
            secured : {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke": "blue",
                "fill": "blue",
                "fill-opacity": 0.6,
                "stroke-width": 5

            },
            failed : {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke": "red",
                "fill": "red",
                "fill-opacity": 0.6,
                "stroke-width": 5

            },
            disabled : {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke": "gray",
                "fill": "gray",
                "fill-opacity": 0.6,
                "stroke-width": 5

            }
        },

        icon: {
            x : 100,
            y : 100,
            normal : {
                "fill": "green",
                "stroke": "black"
            },
            accessed : {
                "fill": "yellow",
                "stroke": "black"
            },
            secured : {
                "fill": "green",
                "stroke": "black"
            },
            failed : {
                "fill": "red",
                "stroke": "black"
            },
            disabled : {
                "fill": "gray",
                "stroke": "black"
            },
            
            BOX : "M2,0h28c1.104,0,2,0.896,2,2v12c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2l0,0V2C0,0.896,0.896,0,2,0z",

            PM : "M7.361,3.676h4.173c0.825,0,1.491,0.233,1.998,0.701s0.761,1.124,0.761,1.971c0,0.728-0.227,1.361-0.679,1.901c-0.453,0.539-1.146,0.81-2.078,0.81H8.624V13H7.361V3.676z M12.26,4.957c-0.277-0.131-0.658-0.196-1.141-0.196H8.624v3.231h2.496c0.563,0,1.02-0.121,1.371-0.362c0.351-0.241,0.526-0.667,0.526-1.276C13.017,5.668,12.765,5.203,12.26,4.957z" + "M15.879,3.676h1.81l2.681,7.883l2.663-7.883h1.797V13h-1.207V7.496c0-0.189,0.005-0.505,0.014-0.945c0.008-0.44,0.012-0.912,0.012-1.416L20.986,13h-1.252l-2.687-7.865v0.286c0,0.229,0.006,0.576,0.019,1.044s0.019,0.812,0.019,1.031V13h-1.206V3.676z",

            LU : "M8.681,3.676h1.263v8.213h4.678V13H8.681V3.676z" + "M17.276,3.676v5.764c0,0.677,0.128,1.239,0.384,1.688c0.38,0.678,1.02,1.016,1.919,1.016c1.079,0,1.813-0.365,2.201-1.098c0.209-0.397,0.313-0.934,0.313-1.605V3.676h1.275v5.236c0,1.146-0.154,2.029-0.465,2.646c-0.568,1.126-1.643,1.689-3.223,1.689c-1.58,0-2.652-0.563-3.217-1.689C16.155,10.941,16,10.059,16,8.912V3.676H17.276z",
            
            TU : "M15.46,3.676v1.11h-3.142V13h-1.276V4.786H7.9v-1.11H15.46z" + "M17.987,3.676v5.764c0,0.677,0.128,1.239,0.384,1.688c0.379,0.678,1.02,1.016,1.919,1.016c1.079,0,1.813-0.365,2.201-1.098c0.209-0.397,0.313-0.934,0.313-1.605V3.676h1.275v5.236c0,1.146-0.154,2.029-0.465,2.646c-0.568,1.126-1.643,1.689-3.223,1.689s-2.652-0.563-3.217-1.689c-0.31-0.617-0.465-1.5-0.465-2.646V3.676H17.987z",
            
            RM : "M7.393,3.676h4.239c0.698,0,1.273,0.104,1.727,0.311c0.86,0.397,1.29,1.132,1.29,2.203c0,0.559-0.115,1.016-0.346,1.371c-0.23,0.355-0.553,0.641-0.968,0.856c0.364,0.148,0.638,0.343,0.822,0.584c0.184,0.241,0.287,0.633,0.308,1.175l0.044,1.25c0.013,0.355,0.042,0.62,0.089,0.793c0.076,0.297,0.211,0.487,0.406,0.572V13h-1.549c-0.042-0.08-0.076-0.184-0.102-0.311s-0.046-0.373-0.063-0.736l-0.076-1.556c-0.029-0.609-0.249-1.018-0.66-1.226c-0.235-0.113-0.603-0.171-1.104-0.171H8.656V13H7.393V3.676z M11.495,7.947c0.576,0,1.032-0.118,1.368-0.355s0.503-0.664,0.503-1.282c0-0.664-0.234-1.117-0.704-1.358c-0.251-0.127-0.586-0.19-1.006-0.19h-3v3.187H11.495z" + "M16.597,3.676h1.81l2.682,7.883l2.662-7.883h1.797V13h-1.206V7.496c0-0.189,0.005-0.505,0.013-0.945s0.013-0.912,0.013-1.416L21.704,13h-1.252l-2.688-7.865v0.286c0,0.229,0.006,0.576,0.019,1.044s0.019,0.812,0.019,1.031V13h-1.206V3.676z"

        }
        
    };
    module.exports = Constants;
});
