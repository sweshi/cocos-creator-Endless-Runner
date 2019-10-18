// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
/*
    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

*/
    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }

    start () {

    }

    update (dt) {

       this.node.setPosition((this.node.position.x-(500*dt)),this.node.position.y);
       if(this.node.position.x<-(this.node.parent.width/2+this.node.width)){
            this.node.setPosition(this.node.parent.width+this.node.width,this.node.position.y)
       }
    }
}
