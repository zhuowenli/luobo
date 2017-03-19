/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-19 17:37:57
 */

'use strict';

const ghpages = require('gh-pages');
const path = require('path');

console.log('gh-pages build start...');

ghpages.publish(path.join(__dirname, '../publish/html5'), () => console.log('gh-pages build success!'));
