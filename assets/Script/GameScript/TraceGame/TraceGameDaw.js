var Utils = require('Utils');
var vkidsScene = require("VkidsScene");
cc.Class({
    extends: vkidsScene,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.contentDraw=this.node.getComponent(cc.Graphics);

        this.paths=[];

        this.enableRedraw=false;

        this.isFirst=true;

    },
    onDisable: function onDisable() {
        this.paths=null;
        this.contentDraw=null;
    },

    loadNewPath:function(){
        this.isFirst=true;
    },
    deActivePath:function(path_index){
        var path=this.pathsMask[path_index];
        path=[];


        this.contentDraw.clear();
    },
    deActiveDot:function(path_index){
        if(this.isFirst){
            this.isFirst=false;
            return;
        }
        var path=this.pathsMask[path_index];
        path.shift();

        this.contentDraw.clear();
        var max_paths=this.pathsMask.length;
        if(max_paths<1){
            return;
        }
        for(var ip=0;ip<max_paths;ip++){
            var currentPath=this.pathsMask[ip];
            var len=currentPath.length;
            if(len<2){
                continue;
            }

            this.contentDraw.moveTo(currentPath[0].x,currentPath[0].y);
            for(var cx=1;cx<len;cx++){
                var pos=currentPath[cx];
                this.contentDraw.lineTo(pos.x,pos.y);

            }
        }
        this.contentDraw.stroke();
    },

    drawMask:function(paths_draw){
        if(this.contentDraw==null){
            this.contentDraw=this.node.getComponent(cc.Graphics);
        }
        this.contentDraw.clear();
        this.pathsMask=paths_draw;
        var max_paths=this.pathsMask.length;
        if(max_paths<1){
            return;
        }
        for(var ip=0;ip<max_paths;ip++){
            var currentPath=this.pathsMask[ip];
            var len=currentPath.length;
            if(len<2){
                cc.log("len: %s",len);
                continue;
            }

            this.contentDraw.moveTo(currentPath[0].x,currentPath[0].y);
            for(var cx=1;cx<len;cx++){
                var pos=currentPath[cx];
                this.contentDraw.lineTo(pos.x,pos.y);

            }
        }
        this.contentDraw.stroke();
    },


    /*


    sendonTouchBegan: function (touchLoc) {
        //var tmp_path = [touchLoc];
        //this.paths.push(tmp_path);
        this.enableRedraw=true;
    },

    sendonTouchMoved: function (touchLoc) {
        this.enableRedraw=true;
        //var count_path=this.paths.length;
        //var tmp_path=this.paths[count_path-1];
        //tmp_path.push(touchLoc);

    },

    sendonTouchEnded: function () {
        this.enableRedraw=false;
    },

    redraw:function(){
        if(!this.enableRedraw||true){
            return;
        }
        this.contentDraw.clear();

    },




    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.redraw();
    },

*/


});
