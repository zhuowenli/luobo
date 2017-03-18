/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-18 22:57:41
 */

'use strict';

import HelloWorldScene from './views/helloworld';
import { g_resources } from './resource';

cc.game.gameStart = () => {
    if(!cc.sys.isNative) {
        const $cocosLoading = document.getElementById("cocosLoading");
        $cocosLoading && document.body.removeChild($cocosLoading);
    }

    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);

    // Adjust viewport meta
    cc.view.adjustViewPort(true);

    // Uncomment the following line to set a fixed orientation for your game
    // cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);

    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.SHOW_ALL);

    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);

    //load resources
    cc.LoaderScene.preload(g_resources, () => cc.director.runScene(new HelloWorldScene()), this);
};
