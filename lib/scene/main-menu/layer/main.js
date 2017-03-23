/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-23 21:54:19
 */

'use strict';

import { res } from '../../../resource';
import { IS_UP_UNLOCK_KEY } from '../../../config';

const { Layer, Sprite, Menu, MenuItemSprite } = cc;

export default Layer.extend({
    /** 时间参考[怪物、萝卜、云朵等] */
    actionDuration: 1,
    ctor() {
        this._super();
        this.loadConfig();
        this.loadMenu();
        this.loadSetting();
        this.loadHelp();
    },
    loadConfig() {
        const storage = cc.sys.localStorage.getItem(IS_UP_UNLOCK_KEY);
        this.isUpUnlock = storage ? JSON.parse(storage) : false;
    },
    loadMenu() {
        const { width, height } = cc.winSize;

        // 开始冒险
        const startNormal = new Sprite(res.mm_front_btn_start_normal_png);
        const startPress = new Sprite(res.mm_front_btn_start_pressed_png);
        const startDisabled = new Sprite(res.mm_front_btn_start_normal_png);
        const start = new MenuItemSprite(startNormal, startPress, startDisabled, () => {
            cc.log('点击开始冒险按钮');
        });
        start.setPosition((width / 2) - 8, (height / 2) + 75);

        // 天天向上
        const floorNormal = new Sprite(res.mm_front_btn_floor_normal_png);
        const floorPress = new Sprite(res.mm_front_btn_floor_pressed_png);
        const floorDisabled = new Sprite(res.mm_front_btn_floor_normal_png);
        const floor = new MenuItemSprite(floorNormal, floorPress, floorDisabled, () => {
            cc.log('点击天天向上按钮');
        });
        floor.setPosition((width / 2) - 8, (height / 2) - 45);

        if (this.isUpUnlock === false) {
            const upLock = new Sprite(res.mm_front_btn_floor_locked_png);
            floor.addChild(upLock);
            this.upLock = upLock;
            upLock.setPosition(floor.width + 5, (floor.height / 2) + 25);
        }

        // 菜单
        const menu = new Menu(start, floor);
        this.addChild(menu);
        menu.setPosition(0, 0);
    },
    loadSetting() {
        const { width } = cc.winSize;
        const settingBg = new Sprite(res.mm_front_monster_4_png);
        this.addChild(settingBg);
        settingBg.setPosition((width / 2) - 350, 490);

        // 上下移动
        const moveDown = cc.moveBy(this.actionDuration, cc.p(0, -10));
        const moveUp = cc.moveBy(this.actionDuration, cc.p(0, 10));
        const action = cc.sequence(moveDown, moveUp).repeatForever();
        settingBg.runAction(action);

        const setting = new Sprite(res.mm_front_btn_setting_normal_png);
        settingBg.addChild(setting);
        setting.setPosition(157, 80);
    },
    loadHelp() {
        const { width } = cc.winSize;
        const helpBg = new Sprite(res.mm_front_monster_6_hand_png);
        this.addChild(helpBg);
        helpBg.setPosition((width / 2) + 270, 270);

        const rotateLeft = cc.rotateBy(this.actionDuration * 0.8, -5);
        const rotateRight = cc.rotateBy(this.actionDuration * 0.8, 5);
        const action = cc.sequence(rotateLeft, rotateRight).repeatForever();
        helpBg.runAction(action);

        const help = new Sprite(res.mm_front_btn_help_normal_png);
        helpBg.addChild(help);
        help.setPosition(155, 365);

        const helpBody = new Sprite(res.mm_front_monster_6_png);
        this.addChild(helpBody);
        helpBody.setPosition((width / 2) + 400, 280);

        const moveUp = cc.moveBy(this.actionDuration * 2, cc.p(0, 5));
        const moveDown = cc.moveBy(this.actionDuration * 2, cc.p(0, -5));
        const helpBodyAction = cc.sequence(moveUp, moveDown).repeatForever();
        helpBody.runAction(helpBodyAction);
    },
});
