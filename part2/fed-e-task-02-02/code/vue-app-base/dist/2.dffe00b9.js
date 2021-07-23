(self["webpackChunkvue_app_base"] = self["webpackChunkvue_app_base"] || []).push([[2],[
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition; },
/* harmony export */   "Comment": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment; },
/* harmony export */   "Fragment": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment; },
/* harmony export */   "KeepAlive": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive; },
/* harmony export */   "Static": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static; },
/* harmony export */   "Suspense": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense; },
/* harmony export */   "Teleport": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport; },
/* harmony export */   "Text": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text; },
/* harmony export */   "Transition": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition; },
/* harmony export */   "TransitionGroup": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup; },
/* harmony export */   "callWithAsyncErrorHandling": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling; },
/* harmony export */   "callWithErrorHandling": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling; },
/* harmony export */   "camelize": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize; },
/* harmony export */   "capitalize": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize; },
/* harmony export */   "cloneVNode": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode; },
/* harmony export */   "compatUtils": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.compatUtils; },
/* harmony export */   "computed": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed; },
/* harmony export */   "createApp": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp; },
/* harmony export */   "createBlock": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock; },
/* harmony export */   "createCommentVNode": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode; },
/* harmony export */   "createHydrationRenderer": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer; },
/* harmony export */   "createRenderer": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer; },
/* harmony export */   "createSSRApp": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp; },
/* harmony export */   "createSlots": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots; },
/* harmony export */   "createStaticVNode": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode; },
/* harmony export */   "createTextVNode": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode; },
/* harmony export */   "createVNode": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode; },
/* harmony export */   "customRef": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef; },
/* harmony export */   "defineAsyncComponent": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent; },
/* harmony export */   "defineComponent": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent; },
/* harmony export */   "defineEmit": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmit; },
/* harmony export */   "defineEmits": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmits; },
/* harmony export */   "defineExpose": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineExpose; },
/* harmony export */   "defineProps": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps; },
/* harmony export */   "devtools": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools; },
/* harmony export */   "getCurrentInstance": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance; },
/* harmony export */   "getTransitionRawChildren": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren; },
/* harmony export */   "h": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h; },
/* harmony export */   "handleError": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError; },
/* harmony export */   "hydrate": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate; },
/* harmony export */   "initCustomFormatter": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter; },
/* harmony export */   "inject": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject; },
/* harmony export */   "isProxy": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy; },
/* harmony export */   "isReactive": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive; },
/* harmony export */   "isReadonly": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly; },
/* harmony export */   "isRef": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef; },
/* harmony export */   "isRuntimeOnly": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly; },
/* harmony export */   "isVNode": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode; },
/* harmony export */   "markRaw": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw; },
/* harmony export */   "mergeDefaults": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults; },
/* harmony export */   "mergeProps": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps; },
/* harmony export */   "nextTick": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick; },
/* harmony export */   "onActivated": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated; },
/* harmony export */   "onBeforeMount": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount; },
/* harmony export */   "onBeforeUnmount": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount; },
/* harmony export */   "onBeforeUpdate": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate; },
/* harmony export */   "onDeactivated": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated; },
/* harmony export */   "onErrorCaptured": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured; },
/* harmony export */   "onMounted": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted; },
/* harmony export */   "onRenderTracked": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked; },
/* harmony export */   "onRenderTriggered": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered; },
/* harmony export */   "onServerPrefetch": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch; },
/* harmony export */   "onUnmounted": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted; },
/* harmony export */   "onUpdated": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated; },
/* harmony export */   "openBlock": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock; },
/* harmony export */   "popScopeId": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId; },
/* harmony export */   "provide": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide; },
/* harmony export */   "proxyRefs": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs; },
/* harmony export */   "pushScopeId": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId; },
/* harmony export */   "queuePostFlushCb": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb; },
/* harmony export */   "reactive": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive; },
/* harmony export */   "readonly": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly; },
/* harmony export */   "ref": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref; },
/* harmony export */   "registerRuntimeCompiler": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler; },
/* harmony export */   "render": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "renderList": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList; },
/* harmony export */   "renderSlot": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot; },
/* harmony export */   "resolveComponent": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent; },
/* harmony export */   "resolveDirective": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective; },
/* harmony export */   "resolveDynamicComponent": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent; },
/* harmony export */   "resolveFilter": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveFilter; },
/* harmony export */   "resolveTransitionHooks": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks; },
/* harmony export */   "setBlockTracking": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking; },
/* harmony export */   "setDevtoolsHook": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook; },
/* harmony export */   "setTransitionHooks": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks; },
/* harmony export */   "shallowReactive": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive; },
/* harmony export */   "shallowReadonly": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly; },
/* harmony export */   "shallowRef": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef; },
/* harmony export */   "ssrContextKey": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey; },
/* harmony export */   "ssrUtils": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils; },
/* harmony export */   "toDisplayString": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString; },
/* harmony export */   "toHandlerKey": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey; },
/* harmony export */   "toHandlers": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers; },
/* harmony export */   "toRaw": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw; },
/* harmony export */   "toRef": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef; },
/* harmony export */   "toRefs": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs; },
/* harmony export */   "transformVNodeArgs": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs; },
/* harmony export */   "triggerRef": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef; },
/* harmony export */   "unref": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref; },
/* harmony export */   "useAttrs": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useAttrs; },
/* harmony export */   "useContext": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useContext; },
/* harmony export */   "useCssModule": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule; },
/* harmony export */   "useCssVars": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars; },
/* harmony export */   "useSSRContext": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext; },
/* harmony export */   "useSlots": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSlots; },
/* harmony export */   "useTransitionState": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState; },
/* harmony export */   "vModelCheckbox": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox; },
/* harmony export */   "vModelDynamic": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic; },
/* harmony export */   "vModelRadio": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio; },
/* harmony export */   "vModelSelect": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect; },
/* harmony export */   "vModelText": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText; },
/* harmony export */   "vShow": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow; },
/* harmony export */   "version": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version; },
/* harmony export */   "warn": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn; },
/* harmony export */   "watch": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch; },
/* harmony export */   "watchEffect": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect; },
/* harmony export */   "withAsyncContext": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext; },
/* harmony export */   "withCtx": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx; },
/* harmony export */   "withDefaults": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDefaults; },
/* harmony export */   "withDirectives": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives; },
/* harmony export */   "withKeys": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys; },
/* harmony export */   "withModifiers": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers; },
/* harmony export */   "withScopeId": function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId; },
/* harmony export */   "compile": function() { return /* binding */ compile; }
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);



function initDev() {
    {
        (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.initCustomFormatter)();
    }
}

// This entry exports the runtime only, and is built as
if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
    initDev();
}
const compile = () => {
    if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
        (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)(`Runtime compilation is not supported in this build of Vue.` +
            (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                ) /* should not happen */);
    }
};




/***/ })
]]);