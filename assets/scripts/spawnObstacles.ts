// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html



var Obstacles = ["Cactus (1).png","Bush (2).png","Cactus (2).png","Cactus (3).png","Crate.png"];
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

 
    spawnObstacles(){
        //new node
        var number = Math.floor(Math.random()*5);
        var node = new cc.Node("New Sprite");
        //new sprite
        var sprite = node.addComponent(cc.Sprite);
        node.parent = this.node;

        //file to add
        var url = cc.url.raw(Obstacles[number]);
        
        sprite.spriteFrame = new cc.SpriteFrame(url);
        sprite.node.setPosition(0,0);
        sprite.node.addComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
        sprite.node.getComponent(cc.RigidBody).linearVelocity.x = -10000;
        sprite.node.getComponent(cc.RigidBody).enabledContactListener = true;
        sprite.node.getComponent(cc.RigidBody).gravityScale = 10;
        sprite.node.getComponent(cc.RigidBody).fixedRotation = true;
        sprite.node.addComponent(cc.PhysicsPolygonCollider).density = 10;
        sprite.node.getComponent(cc.PhysicsPolygonCollider).friction = 0.2;
    
    }
    onContactBegin(contact,self,other){
        console.log(other.name);
        console.log(self.name);
    }
     onLoad () {
        this.schedule(this.spawnObstacles,2,cc.macro.REPEAT_FOREVER,0); 
    }
    start(){
       
    }

  /*  update (dt) {

    }
    */
}
