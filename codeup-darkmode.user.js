// ==UserScript==
// @name         DarkMode CodeUp
// @namespace    https://github.com/Deliay
// @version      2025-07-05
// @description  Convert the codeup website into dark mode
// @author       You
// @match        https://codeup.aliyun.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codeup.aliyun.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function set(selector, fn) {
        const iid = setInterval(() => {
            const result = document.querySelectorAll(selector)
            if (result.length > 0) {
                for (const item of result) {
                    fn(item);
                }
                clearInterval(iid);
            }
        }, 500);
    }

    function setAlways(selector, fn) {
        const exists = new Set();
        const iid = setInterval(() => {
            const result = document.querySelectorAll(selector)
            if (result) {
                result.forEach(e => {
                    if (exists.has(e)) return;
                    exists.add(e);
                    fn(e);
                });
            }
        }, 500);
    }

    const meta = document.createElement('style');
    meta.innerHTML= `
* {
  background-color: black !important;
  color: white !important;
}
.tb-common-sidebar,
tb-common-sidebar-main-scroll {
  background: none !important;
  background-color: black !important;
  color: white !important;
}

`;
    document.getElementsByTagName('head')[0].appendChild(meta);


    function setToBlack(e) {
        e.style = "background: none !important; background-color: black;";
    }

    function setColorToWhite(e) {
        e.style = "color: white !important;"
    }

    setAlways(".file-panel-src-header.file-box-header.use-gp", setToBlack);
    setAlways(".file-commit-container.commit-wrapper", setToBlack);
    set(".tb-common-sidebar-main-scroll", setToBlack);
    set(".commit-wrapper.use-for-card", setToBlack);
    setAlways(".branch-item-title", setColorToWhite);
    setAlways(".name.one-line-ellipsis ", setColorToWhite);
})();
