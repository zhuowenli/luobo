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
    ctor() {
        this._super();
        this.loadConfig();
        this.loadMenu();
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
});
