/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-18 22:57:41
 */

'use strict';

import MainMenuSence from './scene/main-menu/';
import { globalResources } from './resource';

cc.game.gameStart = () => {
    if (!cc.sys.isNative) {
        const $cocosLoading = document.getElementById('cocosLoading');
        $cocosLoading && document.body.removeChild($cocosLoading);
    }

    // 在浏览器上暂时关闭自动全屏，方便Debug。
    cc.view.enableAutoFullScreen(false);
    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS);
    // Adjust viewport meta
    cc.view.adjustViewPort(true);
    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(1136, 640, cc.ResolutionPolicy.FIXED_HEIGHT);
    // Instead of set design resolution, you can also set the real pixel resolution size
    // Uncomment the following line and delete the previous line.
    // cc.view.setRealPixelResolution(960, 640, cc.ResolutionPolicy.SHOW_ALL);
    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);

    // load resources
    cc.LoaderScene.preload(globalResources, () => cc.director.runScene(new MainMenuSence()), this);
};
