(self["webpackChunkvue_app_base"] = self["webpackChunkvue_app_base"] || []).push([[5],{

/***/ 4:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITERATE_KEY": function() { return /* binding */ ITERATE_KEY; },
/* harmony export */   "computed": function() { return /* binding */ computed; },
/* harmony export */   "customRef": function() { return /* binding */ customRef; },
/* harmony export */   "effect": function() { return /* binding */ effect; },
/* harmony export */   "enableTracking": function() { return /* binding */ enableTracking; },
/* harmony export */   "isProxy": function() { return /* binding */ isProxy; },
/* harmony export */   "isReactive": function() { return /* binding */ isReactive; },
/* harmony export */   "isReadonly": function() { return /* binding */ isReadonly; },
/* harmony export */   "isRef": function() { return /* binding */ isRef; },
/* harmony export */   "markRaw": function() { return /* binding */ markRaw; },
/* harmony export */   "pauseTracking": function() { return /* binding */ pauseTracking; },
/* harmony export */   "proxyRefs": function() { return /* binding */ proxyRefs; },
/* harmony export */   "reactive": function() { return /* binding */ reactive; },
/* harmony export */   "readonly": function() { return /* binding */ readonly; },
/* harmony export */   "ref": function() { return /* binding */ ref; },
/* harmony export */   "resetTracking": function() { return /* binding */ resetTracking; },
/* harmony export */   "shallowReactive": function() { return /* binding */ shallowReactive; },
/* harmony export */   "shallowReadonly": function() { return /* binding */ shallowReadonly; },
/* harmony export */   "shallowRef": function() { return /* binding */ shallowRef; },
/* harmony export */   "stop": function() { return /* binding */ stop; },
/* harmony export */   "toRaw": function() { return /* binding */ toRaw; },
/* harmony export */   "toRef": function() { return /* binding */ toRef; },
/* harmony export */   "toRefs": function() { return /* binding */ toRefs; },
/* harmony export */   "track": function() { return /* binding */ track; },
/* harmony export */   "trigger": function() { return /* binding */ trigger; },
/* harmony export */   "triggerRef": function() { return /* binding */ triggerRef; },
/* harmony export */   "unref": function() { return /* binding */ unref; }
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


const targetMap = new WeakMap();
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol(({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') ? 'iterate' : '');
const MAP_KEY_ITERATE_KEY = Symbol(({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') ? 'Map key iterate' : '');
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect(fn, options = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ) {
    if (isEffect(fn)) {
        fn = fn.raw;
    }
    const effect = createReactiveEffect(fn, options);
    if (!options.lazy) {
        effect();
    }
    return effect;
}
function stop(effect) {
    if (effect.active) {
        cleanup(effect);
        if (effect.options.onStop) {
            effect.options.onStop();
        }
        effect.active = false;
    }
}
let uid = 0;
function createReactiveEffect(fn, options) {
    const effect = function reactiveEffect() {
        if (!effect.active) {
            return fn();
        }
        if (!effectStack.includes(effect)) {
            cleanup(effect);
            try {
                enableTracking();
                effectStack.push(effect);
                activeEffect = effect;
                return fn();
            }
            finally {
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect.id = uid++;
    effect.allowRecurse = !!options.allowRecurse;
    effect._isEffect = true;
    effect.active = true;
    effect.raw = fn;
    effect.deps = [];
    effect.options = options;
    return effect;
}
function cleanup(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
        }
        deps.length = 0;
    }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === undefined) {
        return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()));
    }
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') && activeEffect.options.onTrack) {
            activeEffect.options.onTrack({
                effect: activeEffect,
                target,
                type,
                key
            });
        }
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    const effects = new Set();
    const add = (effectsToAdd) => {
        if (effectsToAdd) {
            effectsToAdd.forEach(effect => {
                if (effect !== activeEffect || effect.allowRecurse) {
                    effects.add(effect);
                }
            });
        }
    };
    if (type === "clear" /* CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        depsMap.forEach(add);
    }
    else if (key === 'length' && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newValue) {
                add(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            add(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        switch (type) {
            case "add" /* ADD */:
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)) {
                    // new index added to array -> length changes
                    add(depsMap.get('length'));
                }
                break;
            case "delete" /* DELETE */:
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;
            case "set" /* SET */:
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                }
                break;
        }
    }
    const run = (effect) => {
        if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') && effect.options.onTrigger) {
            effect.options.onTrigger({
                effect,
                target,
                key,
                type,
                newValue,
                oldValue,
                oldTarget
            });
        }
        if (effect.options.scheduler) {
            effect.options.scheduler(effect);
        }
        else {
            effect();
        }
    };
    effects.forEach(run);
}

const isNonTrackableKeys = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(key => Symbol[key])
    .filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    ['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
        const method = Array.prototype[key];
        instrumentations[key] = function (...args) {
            const arr = toRaw(this);
            for (let i = 0, l = this.length; i < l; i++) {
                track(arr, "get" /* GET */, i + '');
            }
            // we run the method using the original args first (which may be reactive)
            const res = method.apply(arr, args);
            if (res === -1 || res === false) {
                // if that didn't work, run it again using raw values.
                return method.apply(arr, args.map(toRaw));
            }
            else {
                return res;
            }
        };
    });
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
        const method = Array.prototype[key];
        instrumentations[key] = function (...args) {
            pauseTracking();
            const res = method.apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */ &&
            receiver ===
                (isReadonly
                    ? shallow
                        ? shallowReadonlyMap
                        : readonlyMap
                    : shallow
                        ? shallowReactiveMap
                        : reactiveMap).get(target)) {
            return target;
        }
        const targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
        if (!isReadonly && targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isRef(res)) {
            // ref unwrapping - does not apply for Array + integer key.
            const shouldUnwrap = !targetIsArray || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key);
            return shouldUnwrap ? res.value : res;
        }
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            oldValue = toRaw(oldValue);
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)
            ? Number(key) < target.length
            : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add" /* ADD */, key, value);
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
                trigger(target, "set" /* SET */, key, value, oldValue);
            }
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
        track(target, "has" /* HAS */, key);
    }
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
            console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
    },
    deleteProperty(target, key) {
        if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
            console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, readonlyHandlers, {
    get: shallowReadonlyGet
});

const toReactive = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
const toReadonly = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "get" /* GET */, key);
    }
    !isReadonly && track(rawTarget, "get" /* GET */, rawKey);
    const { has } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
    }
    else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    }
    else if (target !== rawTarget) {
        // #3602 readonly(reactive(Map))
        // ensure that the nested reactive `Map` can do tracking for itself
        target.get(key);
    }
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "has" /* HAS */, key);
    }
    !isReadonly && track(rawTarget, "has" /* HAS */, rawKey);
    return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */];
    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */, ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* ADD */, value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
        checkIdentityKeys(target, has, key);
    }
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, key, value);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set" /* SET */, key, value, oldValue);
    }
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
        checkIdentityKeys(target, has, key);
    }
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = ({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')
        ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)
            ? new Map(target)
            : new Set(target)
        : undefined;
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
        trigger(target, "clear" /* CLEAR */, undefined, undefined, oldTarget);
    }
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */, ITERATE_KEY);
        return target.forEach((value, key) => {
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
        const target = this["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly &&
            track(rawTarget, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" /* DELETE */ ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations = {
        get(key) {
            return get$1(this, key);
        },
        get size() {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations = {
        get(key) {
            return get$1(this, key, false, true);
        },
        get size() {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations = {
        get(key) {
            return get$1(this, key, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */),
        set: createReadonlyMethod("set" /* SET */),
        delete: createReadonlyMethod("delete" /* DELETE */),
        clear: createReadonlyMethod("clear" /* CLEAR */),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations = {
        get(key) {
            return get$1(this, key, true, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */),
        set: createReadonlyMethod("set" /* SET */),
        delete: createReadonlyMethod("delete" /* DELETE */),
        clear: createReadonlyMethod("clear" /* CLEAR */),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
    iteratorMethods.forEach(method => {
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? isReadonly
            ? shallowReadonlyInstrumentations
            : shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */) {
            return target;
        }
        return Reflect.get((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` +
            `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
            `which can lead to inconsistencies. ` +
            `Avoid differentiating between the raw and reactive versions ` +
            `of an object and only use the reactive version if possible.`);
    }
}

const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch (rawType) {
        case 'Object':
        case 'Array':
            return 1 /* COMMON */;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */;
        default:
            return 0 /* INVALID */;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */] || !Object.isExtensible(value)
        ? 0 /* INVALID */
        : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (target && target["__v_isReadonly" /* IS_READONLY */]) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
        if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
            console.warn(`value cannot be made reactive: ${String(target)}`);
        }
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */] &&
        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */) {
        return target;
    }
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* RAW */]);
    }
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    return ((observed && toRaw(observed["__v_raw" /* RAW */])) || observed);
}
function markRaw(value) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip" /* SKIP */, true);
    return value;
}

const convert = (val) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(val) ? reactive(val) : val;
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value);
}
function shallowRef(value) {
    return createRef(value, true);
}
class RefImpl {
    constructor(_rawValue, _shallow) {
        this._rawValue = _rawValue;
        this._shallow = _shallow;
        this.__v_isRef = true;
        this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
        track(toRaw(this), "get" /* GET */, 'value');
        return this._value;
    }
    set value(newVal) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(toRaw(newVal), this._rawValue)) {
            this._rawValue = newVal;
            this._value = this._shallow ? newVal : convert(newVal);
            trigger(toRaw(this), "set" /* SET */, 'value', newVal);
        }
    }
}
function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    return new RefImpl(rawValue, shallow);
}
function triggerRef(ref) {
    trigger(toRaw(ref), "set" /* SET */, 'value', ({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') ? ref.value : void 0);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        }
        else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory) {
        this.__v_isRef = true;
        const { get, set } = factory(() => track(this, "get" /* GET */, 'value'), () => trigger(this, "set" /* SET */, 'value'));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') && !isProxy(object)) {
        console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};
    for (const key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key) {
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
    }
    get value() {
        return this._object[this._key];
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key) {
    return isRef(object[key])
        ? object[key]
        : new ObjectRefImpl(object, key);
}

class ComputedRefImpl {
    constructor(getter, _setter, isReadonly) {
        this._setter = _setter;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = effect(getter, {
            lazy: true,
            scheduler: () => {
                if (!this._dirty) {
                    this._dirty = true;
                    trigger(toRaw(this), "set" /* SET */, 'value');
                }
            }
        });
        this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        if (self._dirty) {
            self._value = this.effect();
            self._dirty = false;
        }
        track(self, "get" /* GET */, 'value');
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function computed(getterOrOptions) {
    let getter;
    let setter;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions)) {
        getter = getterOrOptions;
        setter = ({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"????????? ESLint ???????????????\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. ?????????????????? Vue CLI ??????????????? Vue ?????????????????? 2. ??????????????????????????????????????? vue-cli-service????????? webpack ??????????????????????????? 3. ????????????????????????????????? webpack ????????????????????????????????????Loader???Plugin ????????????????????????????????? 4. ?????????????????????????????????????????????????????????","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')
            ? () => {
                console.warn('Write operation failed: computed value is readonly');
            }
            : _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions) || !getterOrOptions.set);
}




/***/ })

}]);