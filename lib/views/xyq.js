/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-18 23:08:46
 */

'use strict';

import { res } from '../resource';

const XYQLayer = cc.Layer.extend({
    ctor() {
        this._super();

        const { winSize: { width, height } } = cc;

        // ------- sprite --------

        // 加载plist
        cc.spriteFrameCache.addSpriteFrames(res.boy_plist);
        cc.spriteFrameCache.addSpriteFrames(res.meinv_plist);

        // 循环播放背景音乐
        cc.audioEngine.playMusic(res.attack_music, true);
        cc.audioEngine.setMusicVolume(0.2);
        cc.audioEngine.setEffectsVolume(0.2);

        const bg = new cc.Sprite(res.xyq_bg);
        this.addChild(bg);
        bg.setNormalizedPosition(0.5, 0.5);

        const boy = new cc.Sprite("#boy_0_1.png");
        this.addChild(boy, 1);
        boy.name = '剑侠客';
        boy.setPosition(width * 0.7, height * 0.4);

        const shadow = new cc.Sprite(res.shadow_png);
        boy.addChild(shadow);
        shadow.setAnchorPoint(0.2, 0.3);

        // ------- action --------
        const standFrames = [];
        const attackFrames = [];

        for (let i = 1; i <= 7; i++) {
            const str = `boy_0_${i}.png`;
            const frame = cc.spriteFrameCache.getSpriteFrame(str);
            standFrames.push(frame);
        }
        for (let i = 1; i <= 10; i++) {
            const str = `boy_1_${i}.png`;
            const frame = cc.spriteFrameCache.getSpriteFrame(str);
            attackFrames.push(frame);
        }

        const standAnimatin = new cc.Animation(standFrames, 0.1);
        const standAnimate = cc.animate(standAnimatin);
        const attackAnimatin = new cc.Animation(attackFrames, 0.1);
        const attackAnimate = cc.animate(attackAnimatin);
        const attackAnimateWithEffect = cc.spawn(
            attackAnimate,
            cc.sequence(
                cc.delayTime(0.1 * 7), // 延迟 0.7 秒，在第7帧播放音效
                cc.callFunc(() => cc.audioEngine.playEffect(res.attack_effct)),
            )
        );
        const moveAction = cc.moveTo(0.2, 400, 400);
        const moveBackAction = cc.moveTo(0.2, width * 0.7, height * 0.4);

        boy.runAction(standAnimate.repeatForever());

        // ------- touch --------

        const onTouchBegan = (touch, event) => {
            cc.log('touch start...');

            boy.stopAllActions();

            const clearAndStand = cc.callFunc(() => {
                boy.stopAllActions();
                boy.runAction(standAnimate);
            });

            const action = cc.sequence(moveAction, attackAnimateWithEffect, moveBackAction, clearAndStand);
            boy.runAction(action);

            return true;
        };

        cc.eventManager.addListener({
            onTouchBegan,
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
        }, this);

        const girl = new cc.Sprite("#meinv_0_1.png");
        this.addChild(girl);
        girl.name = '玄彩娥';
        girl.setPosition(width * 0.35, height * 0.7);

        const shadow1 = new cc.Sprite(res.shadow_png);
        girl.addChild(shadow1);
        shadow1.setAnchorPoint(0.33, 0.3);

        const girlStandFrames = [];

        for (let i = 1; i <= 10; i++) {
            const str = `meinv_0_${i}.png`;
            const frame = cc.spriteFrameCache.getSpriteFrame(str);
            girlStandFrames.push(frame);
        }

        const meinvAnimation = new cc.Animation(girlStandFrames, 0.1);
        const meinvAnimate = cc.animate(meinvAnimation);

        girl.runAction(meinvAnimate.repeatForever());

        return true;
    }
});

const XYQScene = cc.Scene.extend({
    onEnter() {
        this._super();
        const layer = new XYQLayer();
        this.addChild(layer);
    }
});

export default XYQScene;
