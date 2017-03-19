/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-18 22:57:46
 */

'use strict';

export const res = {
    xyq_bg: 'res/xyq/bg.png',
    shadow_png: 'res/xyq/shadow.png',
    boy_plist: 'res/xyq/boy.plist',
    boy_png: 'res/xyq/boy.png',
    meinv_plist: 'res/xyq/meinv.plist',
    meinv_png: 'res/xyq/meinv.png',
    attack_effct: 'res/xyq/attack.mp3',
    attack_music: 'res/xyq/fight9.mp3',
};

export const g_resources = [];

for (let i in res) {
    g_resources.push(res[i]);
}
