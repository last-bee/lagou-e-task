(self["webpackChunkvue_app_base"] = self["webpackChunkvue_app_base"] || []).push([[3],{

/***/ 2:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition; },
/* harmony export */   "Comment": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Comment; },
/* harmony export */   "Fragment": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment; },
/* harmony export */   "KeepAlive": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KeepAlive; },
/* harmony export */   "Static": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static; },
/* harmony export */   "Suspense": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Suspense; },
/* harmony export */   "Teleport": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Teleport; },
/* harmony export */   "Text": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text; },
/* harmony export */   "callWithAsyncErrorHandling": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling; },
/* harmony export */   "callWithErrorHandling": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling; },
/* harmony export */   "camelize": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.camelize; },
/* harmony export */   "capitalize": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.capitalize; },
/* harmony export */   "cloneVNode": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cloneVNode; },
/* harmony export */   "compatUtils": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.compatUtils; },
/* harmony export */   "computed": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.computed; },
/* harmony export */   "createBlock": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createBlock; },
/* harmony export */   "createCommentVNode": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode; },
/* harmony export */   "createHydrationRenderer": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer; },
/* harmony export */   "createRenderer": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer; },
/* harmony export */   "createSlots": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createSlots; },
/* harmony export */   "createStaticVNode": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode; },
/* harmony export */   "createTextVNode": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createTextVNode; },
/* harmony export */   "createVNode": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode; },
/* harmony export */   "customRef": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.customRef; },
/* harmony export */   "defineAsyncComponent": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent; },
/* harmony export */   "defineComponent": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent; },
/* harmony export */   "defineEmit": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmit; },
/* harmony export */   "defineEmits": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmits; },
/* harmony export */   "defineExpose": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineExpose; },
/* harmony export */   "defineProps": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineProps; },
/* harmony export */   "devtools": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.devtools; },
/* harmony export */   "getCurrentInstance": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance; },
/* harmony export */   "getTransitionRawChildren": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren; },
/* harmony export */   "h": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h; },
/* harmony export */   "handleError": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.handleError; },
/* harmony export */   "initCustomFormatter": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter; },
/* harmony export */   "inject": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.inject; },
/* harmony export */   "isProxy": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isProxy; },
/* harmony export */   "isReactive": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReactive; },
/* harmony export */   "isReadonly": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReadonly; },
/* harmony export */   "isRef": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRef; },
/* harmony export */   "isRuntimeOnly": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly; },
/* harmony export */   "isVNode": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isVNode; },
/* harmony export */   "markRaw": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.markRaw; },
/* harmony export */   "mergeDefaults": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults; },
/* harmony export */   "mergeProps": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeProps; },
/* harmony export */   "nextTick": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick; },
/* harmony export */   "onActivated": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onActivated; },
/* harmony export */   "onBeforeMount": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount; },
/* harmony export */   "onBeforeUnmount": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount; },
/* harmony export */   "onBeforeUpdate": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate; },
/* harmony export */   "onDeactivated": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onDeactivated; },
/* harmony export */   "onErrorCaptured": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured; },
/* harmony export */   "onMounted": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted; },
/* harmony export */   "onRenderTracked": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked; },
/* harmony export */   "onRenderTriggered": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered; },
/* harmony export */   "onServerPrefetch": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch; },
/* harmony export */   "onUnmounted": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted; },
/* harmony export */   "onUpdated": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated; },
/* harmony export */   "openBlock": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.openBlock; },
/* harmony export */   "popScopeId": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.popScopeId; },
/* harmony export */   "provide": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.provide; },
/* harmony export */   "proxyRefs": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.proxyRefs; },
/* harmony export */   "pushScopeId": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.pushScopeId; },
/* harmony export */   "queuePostFlushCb": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb; },
/* harmony export */   "reactive": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.reactive; },
/* harmony export */   "readonly": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.readonly; },
/* harmony export */   "ref": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ref; },
/* harmony export */   "registerRuntimeCompiler": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler; },
/* harmony export */   "renderList": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderList; },
/* harmony export */   "renderSlot": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderSlot; },
/* harmony export */   "resolveComponent": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponent; },
/* harmony export */   "resolveDirective": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDirective; },
/* harmony export */   "resolveDynamicComponent": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent; },
/* harmony export */   "resolveFilter": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveFilter; },
/* harmony export */   "resolveTransitionHooks": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks; },
/* harmony export */   "setBlockTracking": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking; },
/* harmony export */   "setDevtoolsHook": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook; },
/* harmony export */   "setTransitionHooks": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks; },
/* harmony export */   "shallowReactive": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReactive; },
/* harmony export */   "shallowReadonly": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly; },
/* harmony export */   "shallowRef": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowRef; },
/* harmony export */   "ssrContextKey": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey; },
/* harmony export */   "ssrUtils": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrUtils; },
/* harmony export */   "toDisplayString": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toDisplayString; },
/* harmony export */   "toHandlerKey": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey; },
/* harmony export */   "toHandlers": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlers; },
/* harmony export */   "toRaw": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRaw; },
/* harmony export */   "toRef": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRef; },
/* harmony export */   "toRefs": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRefs; },
/* harmony export */   "transformVNodeArgs": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs; },
/* harmony export */   "triggerRef": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.triggerRef; },
/* harmony export */   "unref": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.unref; },
/* harmony export */   "useAttrs": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useAttrs; },
/* harmony export */   "useContext": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useContext; },
/* harmony export */   "useSSRContext": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSSRContext; },
/* harmony export */   "useSlots": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSlots; },
/* harmony export */   "useTransitionState": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState; },
/* harmony export */   "version": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.version; },
/* harmony export */   "warn": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn; },
/* harmony export */   "watch": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch; },
/* harmony export */   "watchEffect": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect; },
/* harmony export */   "withAsyncContext": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext; },
/* harmony export */   "withCtx": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withCtx; },
/* harmony export */   "withDefaults": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDefaults; },
/* harmony export */   "withDirectives": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDirectives; },
/* harmony export */   "withScopeId": function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withScopeId; },
/* harmony export */   "Transition": function() { return /* binding */ Transition; },
/* harmony export */   "TransitionGroup": function() { return /* binding */ TransitionGroup; },
/* harmony export */   "createApp": function() { return /* binding */ createApp; },
/* harmony export */   "createSSRApp": function() { return /* binding */ createSSRApp; },
/* harmony export */   "hydrate": function() { return /* binding */ hydrate; },
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "useCssModule": function() { return /* binding */ useCssModule; },
/* harmony export */   "useCssVars": function() { return /* binding */ useCssVars; },
/* harmony export */   "vModelCheckbox": function() { return /* binding */ vModelCheckbox; },
/* harmony export */   "vModelDynamic": function() { return /* binding */ vModelDynamic; },
/* harmony export */   "vModelRadio": function() { return /* binding */ vModelRadio; },
/* harmony export */   "vModelSelect": function() { return /* binding */ vModelSelect; },
/* harmony export */   "vModelText": function() { return /* binding */ vModelText; },
/* harmony export */   "vShow": function() { return /* binding */ vShow; },
/* harmony export */   "withKeys": function() { return /* binding */ withKeys; },
/* harmony export */   "withModifiers": function() { return /* binding */ withModifiers; }
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is, props) => {
        const el = isSVG
            ? doc.createElementNS(svgNS, tag)
            : doc.createElement(tag, is ? { is } : undefined);
        if (tag === 'select' && props && props.multiple != null) {
            el.setAttribute('multiple', props.multiple);
        }
        return el;
    },
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        const cloned = el.cloneNode(true);
        // #3072
        // - in `patchDOMProp`, we store the actual value in the `el._value` property.
        // - normally, elements using `:value` bindings will not be hoisted, but if
        //   the bound value is a constant, e.g. `:value="true"` - they do get
        //   hoisted.
        // - in production, hoisted nodes are cloned when subsequent inserts, but
        //   cloneNode() does not copy the custom property we attached.
        // - This may need to account for other custom DOM properties we attach to
        //   elements in addition to `_value` in the future.
        if (`_value` in el) {
            cloned._value = el._value;
        }
        return cloned;
    },
    // __UNSAFE__
    // Reason: insertAdjacentHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG, cached) {
        if (cached) {
            let first;
            let last;
            let i = 0;
            let l = cached.length;
            for (; i < l; i++) {
                const node = cached[i].cloneNode(true);
                if (i === 0)
                    first = node;
                if (i === l - 1)
                    last = node;
                parent.insertBefore(node, anchor);
            }
            return [first, last];
        }
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        if (anchor) {
            let insertionPoint;
            let usingTempInsertionPoint = false;
            if (anchor instanceof Element) {
                insertionPoint = anchor;
            }
            else {
                // insertAdjacentHTML only works for elements but the anchor is not an
                // element...
                usingTempInsertionPoint = true;
                insertionPoint = isSVG
                    ? doc.createElementNS(svgNS, 'g')
                    : doc.createElement('div');
                parent.insertBefore(insertionPoint, anchor);
            }
            insertionPoint.insertAdjacentHTML('beforebegin', content);
            if (usingTempInsertionPoint) {
                parent.removeChild(insertionPoint);
            }
        }
        else {
            parent.insertAdjacentHTML('beforeend', content);
        }
        let first = before ? before.nextSibling : parent.firstChild;
        const last = anchor ? anchor.previousSibling : parent.lastChild;
        const ret = [];
        while (first) {
            ret.push(first);
            if (first === last)
                break;
            first = first.nextSibling;
        }
        return ret;
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    if (value == null) {
        value = '';
    }
    if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        // directly setting className should be faster than setAttribute in theory
        // if this is an element during a transition, take the temporary transition
        // classes into account.
        const transitionClasses = el._vtc;
        if (transitionClasses) {
            value = (value
                ? [value, ...transitionClasses]
                : [...transitionClasses]).join(' ');
        }
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    if (!next) {
        el.removeAttribute('style');
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(next)) {
        if (prev !== next) {
            const current = style.display;
            style.cssText = next;
            // indicates that the `display` of the element is controlled by `v-show`,
            // so we always keep the current `display` value regardless of the `style` value,
            // thus handing over control to `v-show`.
            if ('_vod' in el) {
                style.display = current;
            }
        }
    }
    else {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key);
        if (value == null || (isBoolean && value === false)) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' && el.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
        if (value == null) {
            el.removeAttribute(key);
        }
        return;
    }
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (value === '' && type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            el[key] = true;
            return;
        }
        else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            el[key] = '';
            el.removeAttribute(key);
            return;
        }
        else if (type === 'number') {
            // e.g. <img :width="null">
            el[key] = 0;
            el.removeAttribute(key);
            return;
        }
    }
    // some properties perform value validation and throw
    try {
        el[key] = value;
    }
    catch (e) {
        if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` +
                `value ${value} is invalid.`, e);
        }
    }
}

// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
let skipTimestampCheck = false;
if (typeof window !== 'undefined') {
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    if (_getNow() > document.createEvent('Event').timeStamp) {
        // if the low-res timestamp which is bigger than the event timestamp
        // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listeners as well.
        _getNow = () => performance.now();
    }
    // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
    // and does not fire microtasks in between event propagation, so safe to exclude.
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = Promise.resolve();
const reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const forcePatchProp = (_, key) => key === 'value';
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    switch (key) {
        // special
        case 'class':
            patchClass(el, nextValue, isSVG);
            break;
        case 'style':
            patchStyle(el, prevValue, nextValue);
            break;
        default:
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                // ignore v-model listeners
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
                    patchEvent(el, key, prevValue, nextValue, parentComponent);
                }
            }
            else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
                patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
            }
            else {
                // special case for <input v-model type="checkbox"> with
                // :true-value & :false-value
                // store value as dom properties since non-string values will be
                // stringified.
                if (key === 'true-value') {
                    el._trueValue = nextValue;
                }
                else if (key === 'false-value') {
                    el._falseValue = nextValue;
                }
                patchAttr(el, key, nextValue, isSVG);
            }
            break;
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML
        if (key === 'innerHTML') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
            return true;
        }
        return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable') {
        return false;
    }
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
        return false;
    }
    return key in el;
}

function useCssModule(name = '$style') {
    /* istanbul ignore else */
    {
        const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
        if (!instance) {
            ({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssModule must be called inside setup()`);
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            ({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS modules injected.`);
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            ({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') &&
                (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS module named "${name}".`);
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    /* istanbul ignore next */
    if (!instance) {
        ({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') &&
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssVars is called without current active component instance.`);
        return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(setVars, { flush: 'post' }));
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(setVars);
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* SUSPENSE */) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
                setVarsOnVNode(suspense.activeBranch, vars);
            });
        }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
        vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 /* ELEMENT */ && vnode.el) {
        const style = vnode.el.style;
        for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
        }
    }
    else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
        vnode.children.forEach(c => setVarsOnVNode(c, vars));
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = (Transition.props = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.props, DOMTransitionPropsValidators));
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */
const callHook = (hook, args = []) => {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
        hook.forEach(h => h(...args));
    }
    else if (hook) {
        hook(...args);
    }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */
const hasExplicitCallback = (hook) => {
    return hook
        ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)
            ? hook.some(h => h.length > 1)
            : hook.length > 1
        : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
        }
    }
    if (rawProps.css === false) {
        return baseProps;
    }
    const { name = 'v', type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done) => {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear) => {
        return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            callHook(hook, [el, resolve]);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) {
                    whenTransitionEnds(el, type, enterDuration, resolve);
                }
            });
        };
    };
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
        onBeforeEnter(el) {
            callHook(onBeforeEnter, [el]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear(el) {
            callHook(onBeforeAppear, [el]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(() => {
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) {
                    whenTransitionEnds(el, type, leaveDuration, resolve);
                }
            });
            callHook(onLeave, [el, resolve]);
        },
        onEnterCancelled(el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [el]);
        },
        onAppearCancelled(el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [el]);
        },
        onLeaveCancelled(el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [el]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) {
        return null;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
    if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production'))
        validateDuration(res);
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<transition> explicit duration is not a valid number - ` +
            `got ${JSON.stringify(val)}.`);
    }
    else if (isNaN(val)) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<transition> explicit duration is NaN - ` +
            'the duration expression might be incorrect.');
    }
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = (el._endId = ++endId);
    const resolveIfNotStale = () => {
        if (id === el._endId) {
            resolve();
        }
    };
    if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return resolve();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
            end();
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
        const state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState)();
        let prevChildren;
        let children;
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.toRaw)(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment;
            prevChildren = children;
            children = slots.default ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren)(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                }
                else if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<TransitionGroup> children must be keyed.`);
                }
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1
        ? root
        : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const getModelAssigner = (vnode) => {
    const fn = vnode.props['onUpdate:modelValue'];
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? value => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        trigger(target, 'input');
    }
}
function trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || el.type === 'number';
        addEventListener(el, lazy ? 'change' : 'input', e => {
            if (e.target.composing)
                return;
            let domValue = el.value;
            if (trim) {
                domValue = domValue.trim();
            }
            else if (castToNumber) {
                domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(domValue);
            }
            el._assign(domValue);
        });
        if (trim) {
            addEventListener(el, 'change', () => {
                el.value = el.value.trim();
            });
        }
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate(el, { value, modifiers: { trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing)
            return;
        if (document.activeElement === el) {
            if (trim && el.value.trim() === value) {
                return;
            }
            if ((number || el.type === 'number') && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(el.value) === value) {
                return;
            }
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
    }
};
const vModelCheckbox = {
    created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
                const index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) {
                    assign(modelValue.concat(elementValue));
                }
                else if (!checked && found) {
                    const filtered = [...modelValue];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) {
                    cloned.add(elementValue);
                }
                else {
                    cloned.delete(elementValue);
                }
                assign(cloned);
            }
            else {
                assign(getCheckboxValue(el, checked));
            }
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
        el.checked = value.has(vnode.props.value);
    }
    else if (value !== oldValue) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
    }
}
const vModelRadio = {
    created(el, { value }, vnode) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            el._assign(getValue(el));
        });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
            el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
        }
    }
};
const vModelSelect = {
    created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value);
        addEventListener(el, 'change', () => {
            const selectedVal = Array.prototype.filter
                .call(el.options, (o) => o.selected)
                .map((o) => number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(getValue(o)) : getValue(o));
            el._assign(el.multiple
                ? isSetModel
                    ? new Set(selectedVal)
                    : selectedVal
                : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
        ({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') &&
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<select multiple v-model> expects an Array or Set value for its binding, ` +
                `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
                option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
            }
            else {
                option.selected = value.has(optionValue);
            }
        }
        else {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
                if (el.selectedIndex !== i)
                    el.selectedIndex = i;
                return;
            }
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) {
        el.selectedIndex = -1;
    }
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch (el.tagName) {
        case 'SELECT':
            modelToUse = vModelSelect;
            break;
        case 'TEXTAREA':
            modelToUse = vModelText;
            break;
        default:
            switch (vnode.props && vnode.props.type) {
                case 'checkbox':
                    modelToUse = vModelCheckbox;
                    break;
                case 'radio':
                    modelToUse = vModelRadio;
                    break;
                default:
                    modelToUse = vModelText;
            }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}

const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const modifierGuards = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */
const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
                return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */
const withKeys = (fn, modifiers) => {
    return (event) => {
        if (!('key' in event)) {
            return;
        }
        const eventKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);
        if (modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
            return fn(event);
        }
    };
};

const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue)
            return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}

const rendererOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({ patchProp, forcePatchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration
        ? renderer
        : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer)(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = ((...args) => {
    ensureRenderer().render(...args);
});
const hydrate = ((...args) => {
    ensureHydrationRenderer().hydrate(...args);
});
const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
        injectNativeTagCheck(app);
        injectCompilerOptionsCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
            // __UNSAFE__
            // Reason: potential execution of JS expressions in in-DOM template.
            // The user must make sure the in-DOM template is trusted. If it's
            // rendered by the server, the template should not contain any user data.
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
});
const createSSRApp = ((...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')) {
        injectNativeTagCheck(app);
        injectCompilerOptionsCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
            return mount(container, true, container instanceof SVGElement);
        }
    };
    return app;
});
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag),
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly)()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, 'isCustomElement', {
            get() {
                return isCustomElement;
            },
            set() {
                (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`The \`isCustomElement\` config option is deprecated. Use ` +
                    `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` +
            `a build of Vue.js that includes the runtime compiler (aka "full build"). ` +
            `Since you are using the runtime-only build, \`compilerOptions\` ` +
            `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` +
            `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` +
            `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` +
            `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, 'compilerOptions', {
            get() {
                (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
                return compilerOptions;
            },
            set() {
                (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
        const res = document.querySelector(container);
        if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') && !res) {
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Failed to mount app: mount target selector "${container}" returned null.`);
        }
        return res;
    }
    if (({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') &&
        container instanceof window.ShadowRoot &&
        container.mode === 'closed') {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    }
    return container;
}




/***/ })

}]);