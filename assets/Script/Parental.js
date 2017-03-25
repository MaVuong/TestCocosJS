var Utils = require('Utils');
cc.Class({
    extends: cc.Component,

    properties: {
        lblQuestion: cc.Label,
        lblAnswer: cc.Label,
    },

    onLoad: function () {
        var listNumberString = ["zero","one","two","three","four","five","six","seven","eight","nine"];

        this.lblAnswer.string = "";
        this.randomNumber = [];
        this.chooseNumber = [];
        //neu sai 3 lan thi tat bo luon
        this.fail = 0;
        var randomArray = [];
        for(var i = 0; i<3; i++) {
            var txt = Utils.randomElement(listNumberString);
            this.randomNumber.push(listNumberString.indexOf(txt));
            randomArray.push(txt);
        }

        this.lblQuestion.string = randomArray.join(", ");

    },

    clickNumber: function (event, number) {
        this.chooseNumber.push(parseInt(number));
        this.lblAnswer.string = this.chooseNumber.join("    ");
        if(this.chooseNumber.length == 3) {
            var callFunc=cc.callFunc(function(){
                this.checkParentalResult();
            },this);
            this.node.stopAllActions();
            this.node.runAction(cc.sequence(cc.delayTime(0.5),callFunc));
        }
    },

    checkParentalResult: function () {
        if(this.chooseNumber[0] == this.randomNumber[0] &&
            this.chooseNumber[1] == this.randomNumber[1] &&
            this.chooseNumber[2] == this.randomNumber[2]) {
            this.node.parent.getComponent("HomeUIScript").buyNowAction();
            this.closeBtn();
        } else {
            this.chooseNumber = [];
            this.lblAnswer.string = "";
            this.fail++;
            if(this.fail >= 3) {
                this.closeBtn();
            }
        }
    },

    touchBackground: function() {
        cc.log("Please wait...");
    },
    closeBtn: function () {
        this.node.removeFromParent(true);
    }
});
