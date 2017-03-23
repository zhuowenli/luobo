/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-23 22:09:57
 */

'use strict';

import { res } from '../../resource';
import BackgroundLayer from './layer/background';
import MainLayer from './layer/main';

const { Scene } = cc;

export default Scene.extend({
    ctor() {
        this._super();
        cc.audioEngine.playMusic(res.sd_mm_BGMusic_mp3);
    },
    onEnter() {
        this._super();
        this.loadBackgroundLayer();
        this.loadMainLayer();
    },
    loadBackgroundLayer() {
        this.backgroundLayer = new BackgroundLayer();
        this.addChild(this.backgroundLayer);
    },
    loadMainLayer() {
        this.mainLayer = new MainLayer();
        this.addChild(this.mainLayer);
    },
});
