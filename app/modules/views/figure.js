define(function(require, exports, module) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var Svg = require("svg");
    var app = require("app");
    var Constants = require("modules/constants");
    var fihure = require("modules/models/figure");

    var FigureView = Backbone.View.extend({
        initialize: function(options) {
            this.shape = this.model.getElement(options.board);
            this.shape.attr("title", this.model.get("title"));
            this.el = this.shape.node;
            this.$el= $(this.shape.node);
            this.render();

            this.model.on("change:path", this.changePath, this);
            this.model.on("change:highlight", this.changeShadow, this);
            this.model.on("change:color", this.changeStroke, this);

            this.enableDrag();
            this.board = options.board;
            this.options = options;
            this.model = options.model;
        },

        events: {
            //"click": "setShadow"
            "click": "setStroke"
        },

        renderShape: function() {
            this.shape.attr(this.model.getShape());
        },

        renderAttrs: function() {
             if(this.model.get("highlight")){
                 this.shape.attr(this.model.getAttrs());
                 this.shape.attr("filter", this.options.shadow);
             }else {
                 this.shape.attr(this.model.getAttrs());
                 this.shape.attr("filter", this.options.no_shadow);
             }
        },

        //render: function() {
            //this.renderShape();
            //this.renderAttrs();
        //},

        // shadow Function
        setShadow: function(){
            this.model.toggleHighlight();
        },

        // Drag-n-Drop Function
        enableDrag : function() {
            this.shape.data("self",this);
            this.shape.drag(this.dragmove,this.dragstart,this.dragup);
        },

        dragstart: function(){
            this.dx = this.dy = 0;
            var self = this.data("self");
            self.model.startDrag();
        },
        
        dragmove: function(dx,dy){
            var self = this.data("self");
            self.model.moveShape(dx - (this.dx || 0) ,dy - (this.dy || 0));
            this.dx = dx;
            this.dy = dy;
        },
        
        dragup: function(){
            this.dx = this.dy = 0;
        },

        // for render
        renderCommon: function() {
            this.shape.attr(this.model.getAttrs());
            this.shape.attr(this.model.getShape());
        },
        
        //renderShape: function() {
            //this.shape.attr(this.model.getShape());
        //},
        
        renderStroke: function() {
            this.shape.attr(this.model.getStroke());
        },

        renderShadow: function() {
             if(this.model.get("highlight")){
                 this.shape.attr("filter", this.options.shadow);
             }else {
                 this.shape.attr("filter", this.options.no_shadow);
             }
        },

        renderCallback: 'renderCommon',
        
        render: function() {
            this[this.renderCallback]();
            return this;
        },

        // callback render
        changeShape: function() {
            this.renderCallback = 'renderShape';
            this.render();
        },

        changeStroke: function() {
            this.renderCallback = 'renderStroke';
            this.render();
        },
        
        changeShadow: function() {
            this.renderCallback = 'renderShadow';
            this.render();
        },

        // change stroke function
        setStroke: function() {
            this.model.toggleStroke();
        }
        
    });
    
    module.exports = FigureView;
});
