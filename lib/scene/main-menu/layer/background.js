/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-23 21:23:05
 */

import { res } from '../../../resource';

const { Layer, Sprite } = cc;
const MMBackgroundLayer = Layer.extend({
    ctor() {
        this._super();
        this.loadBackground();

        return true;
    },
    loadBackground() {
        const node = new Sprite(res.mm_front_bg_png);
        const { width, height } = cc.winSize;
        this.addChild(node);
        node.setPosition(width / 2, height / 2);

        console.log(node);
    },
});

export default MMBackgroundLayer;
