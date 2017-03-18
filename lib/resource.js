/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-18 22:57:46
 */

'use strict';

export const res = {
    HelloWorld_png : "res/HelloWorld.png",
};

export const g_resources = [];

for (let i in res) {
    g_resources.push(res[i]);
}
