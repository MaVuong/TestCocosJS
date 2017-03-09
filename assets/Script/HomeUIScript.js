var BridgeVideoPlayer = require('BridgeVideoPlayer');
cc.Class({
    extends: cc.Component,

    properties: {
       bgDisplay:{
           type:cc.Node,
           default: null
       }
    },

    configDisplay:function(){
        var sizesc=cc.director.getVisibleSize();
        if(sizesc.height>800){
            this.bgDisplay.scaleY=sizesc.height/800;
            cc.log("---------size: %s %s %s",JSON.stringify(sizesc),sizesc.width,sizesc.height);
        }
    },
    // use this for initialization
    onLoad: function () {
        this.configDisplay();
    },


    actionShare:function(){
        
    },
    actionRate:function(){},
    actionAddMore:function(){
        BridgeVideoPlayer.playVideo("duck.mp4");
    },
    actionSettings:function(){
        BridgeVideoPlayer.playVideo("phonic.mp4");
    },
    actionBuyAll:function(){
        BridgeVideoPlayer.unlockData();
    },

    videoCompleteCallback: function () {
        cc.log("============= Play video complete =============");
    },
    closeVideoButton: function () {
        cc.log("============= Close video button =============");
    }




});
