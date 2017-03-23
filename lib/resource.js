/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-03-18 22:57:46
 */

'use strict';

export const res = {
    // ////////////////////////////////////////
    // MainMenu
    // ////////////////////////////////////////
    mm_front_btn_floor_locked_png: 'res/MainMenu/front_btn_floor_locked.png',
    mm_front_btn_help_normal_png: 'res/MainMenu/front_btn_help_normal.png',
    mm_front_btn_help_pressed_png: 'res/MainMenu/front_btn_help_pressed.png',
    mm_front_btn_setting_normal_png: 'res/MainMenu/front_btn_setting_normal.png',
    mm_front_btn_setting_pressed_png: 'res/MainMenu/front_btn_setting_pressed.png',
    mm_front_carrot_png: 'res/MainMenu/front_carrot.png',
    mm_front_front_png: 'res/MainMenu/front_front.png',
    mm_front_monster_1_png: 'res/MainMenu/front_monster_1.png',
    mm_front_monster_2_png: 'res/MainMenu/front_monster_2.png',
    mm_front_monster_3_png: 'res/MainMenu/front_monster_3.png',
    mm_front_monster_4_png: 'res/MainMenu/front_monster_4.png',
    mm_front_monster_5_png: 'res/MainMenu/front_monster_5.png',
    mm_front_monster_6_hand_png: 'res/MainMenu/front_monster_6_hand.png',
    mm_front_monster_6_png: 'res/MainMenu/front_monster_6.png',
    mm_front_smoke_1_png: 'res/MainMenu/front_smoke_1.png',
    mm_front_smoke_2_png: 'res/MainMenu/front_smoke_2.png',
    mm_front_smoke_3_png: 'res/MainMenu/front_smoke_3.png',
    mm_front_bg_png: 'res/MainMenu/zh/front_bg.png',
    mm_front_btn_floor_normal_png: 'res/MainMenu/zh/front_btn_floor_normal.png',
    mm_front_btn_floor_pressed_png: 'res/MainMenu/zh/front_btn_floor_pressed.png',
    mm_front_btn_start_normal_png: 'res/MainMenu/zh/front_btn_start_normal.png',
    mm_front_btn_start_pressed_png: 'res/MainMenu/zh/front_btn_start_pressed.png',

    // ////////////////////////////////////////
    // Sound
    // ////////////////////////////////////////
    sd_mm_BGMusic_mp3: 'res/Sound/MainMenu/BGMusic.mp3',
    sd_mm_Select_mp3: 'res/Sound/MainMenu/Select.mp3',
    sd_mm_Unlock_mp3: 'res/Sound/MainMenu/Unlock.mp3',
    sd_BGMusic01_mp3: 'res/Sound/GamePlay/BGMusic01.mp3',
};

export const globalResources = [];

Object.keys(res).map(key => globalResources.push(res[key]));
