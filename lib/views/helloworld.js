/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-18 23:08:46
 */

'use strict';

import { res } from '../resource';

const HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor() {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        const { winSize, LabelTTF, Sprite } = cc;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        const helloLabel = new LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = winSize.width / 2;
        helloLabel.y = winSize.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: winSize.width / 2,
            y: winSize.height / 2
        });
        this.addChild(this.sprite, 0);

        return true;
    }
});

const HelloWorldScene = cc.Scene.extend({
    onEnter() {
        this._super();

        const layer = new HelloWorldLayer();

        this.addChild(layer);
    }
});

export default HelloWorldScene;
