(self["webpackChunkvue_app_base"] = self["webpackChunkvue_app_base"] || []).push([[6],{

/***/ 5:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_ARR": function() { return /* binding */ EMPTY_ARR; },
/* harmony export */   "EMPTY_OBJ": function() { return /* binding */ EMPTY_OBJ; },
/* harmony export */   "NO": function() { return /* binding */ NO; },
/* harmony export */   "NOOP": function() { return /* binding */ NOOP; },
/* harmony export */   "PatchFlagNames": function() { return /* binding */ PatchFlagNames; },
/* harmony export */   "babelParserDefaultPlugins": function() { return /* binding */ babelParserDefaultPlugins; },
/* harmony export */   "camelize": function() { return /* binding */ camelize; },
/* harmony export */   "capitalize": function() { return /* binding */ capitalize; },
/* harmony export */   "def": function() { return /* binding */ def; },
/* harmony export */   "escapeHtml": function() { return /* binding */ escapeHtml; },
/* harmony export */   "escapeHtmlComment": function() { return /* binding */ escapeHtmlComment; },
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "generateCodeFrame": function() { return /* binding */ generateCodeFrame; },
/* harmony export */   "getGlobalThis": function() { return /* binding */ getGlobalThis; },
/* harmony export */   "hasChanged": function() { return /* binding */ hasChanged; },
/* harmony export */   "hasOwn": function() { return /* binding */ hasOwn; },
/* harmony export */   "hyphenate": function() { return /* binding */ hyphenate; },
/* harmony export */   "invokeArrayFns": function() { return /* binding */ invokeArrayFns; },
/* harmony export */   "isArray": function() { return /* binding */ isArray; },
/* harmony export */   "isBooleanAttr": function() { return /* binding */ isBooleanAttr; },
/* harmony export */   "isDate": function() { return /* binding */ isDate; },
/* harmony export */   "isFunction": function() { return /* binding */ isFunction; },
/* harmony export */   "isGloballyWhitelisted": function() { return /* binding */ isGloballyWhitelisted; },
/* harmony export */   "isHTMLTag": function() { return /* binding */ isHTMLTag; },
/* harmony export */   "isIntegerKey": function() { return /* binding */ isIntegerKey; },
/* harmony export */   "isKnownAttr": function() { return /* binding */ isKnownAttr; },
/* harmony export */   "isMap": function() { return /* binding */ isMap; },
/* harmony export */   "isModelListener": function() { return /* binding */ isModelListener; },
/* harmony export */   "isNoUnitNumericStyleProp": function() { return /* binding */ isNoUnitNumericStyleProp; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; },
/* harmony export */   "isOn": function() { return /* binding */ isOn; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isPromise": function() { return /* binding */ isPromise; },
/* harmony export */   "isReservedProp": function() { return /* binding */ isReservedProp; },
/* harmony export */   "isSSRSafeAttrName": function() { return /* binding */ isSSRSafeAttrName; },
/* harmony export */   "isSVGTag": function() { return /* binding */ isSVGTag; },
/* harmony export */   "isSet": function() { return /* binding */ isSet; },
/* harmony export */   "isSpecialBooleanAttr": function() { return /* binding */ isSpecialBooleanAttr; },
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "isSymbol": function() { return /* binding */ isSymbol; },
/* harmony export */   "isVoidTag": function() { return /* binding */ isVoidTag; },
/* harmony export */   "looseEqual": function() { return /* binding */ looseEqual; },
/* harmony export */   "looseIndexOf": function() { return /* binding */ looseIndexOf; },
/* harmony export */   "makeMap": function() { return /* binding */ makeMap; },
/* harmony export */   "normalizeClass": function() { return /* binding */ normalizeClass; },
/* harmony export */   "normalizeStyle": function() { return /* binding */ normalizeStyle; },
/* harmony export */   "objectToString": function() { return /* binding */ objectToString; },
/* harmony export */   "parseStringStyle": function() { return /* binding */ parseStringStyle; },
/* harmony export */   "propsToAttrMap": function() { return /* binding */ propsToAttrMap; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "slotFlagsText": function() { return /* binding */ slotFlagsText; },
/* harmony export */   "stringifyStyle": function() { return /* binding */ stringifyStyle; },
/* harmony export */   "toDisplayString": function() { return /* binding */ toDisplayString; },
/* harmony export */   "toHandlerKey": function() { return /* binding */ toHandlerKey; },
/* harmony export */   "toNumber": function() { return /* binding */ toNumber; },
/* harmony export */   "toRawType": function() { return /* binding */ toRawType; },
/* harmony export */   "toTypeString": function() { return /* binding */ toTypeString; }
/* harmony export */ });
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isObject(val)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
};
const replacer = (_key, val) => {
    if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */
const babelParserDefaultPlugins = [
    'bigInt',
    'optionalChaining',
    'nullishCoalescingOperator'
];
const EMPTY_OBJ = ({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production')
    ? Object.freeze({})
    : {};
const EMPTY_ARR = ({"env":{"TERM_PROGRAM":"vscode","npm_package_devDependencies_url_loader":"^4.1.1","NODE":"/usr/local/bin/node","INIT_CWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_devDependencies_terser_webpack_plugin":"^5.1.4","npm_config_version_git_tag":"true","SHELL":"/bin/zsh","TERM":"xterm-256color","HOMEBREW_BOTTLE_DOMAIN":"https://mirrors.ustc.edu.cn/homebrew-bottles/","npm_package_devDependencies_vue_template_compiler":"^2.6.14","TMPDIR":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/","npm_package_devDependencies_webpack_merge":"^5.8.0","npm_package_scripts_lint":"echo \"请使用 ESLint 实现此任务\"","npm_config_init_license":"MIT","TERM_PROGRAM_VERSION":"1.58.0","npm_package_eslintConfig_root":"true","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","npm_package_private":"true","npm_config_registry":"https://registry.yarnpkg.com","npm_package_devDependencies_clean_webpack_plugin":"^4.0.0-alpha.0","npm_package_readmeFilename":"README.md","npm_package_devDependencies_precss":"^4.0.0","USER":"lastbee","npm_package_description":"1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构 2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具） 3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务 4. 尽可能的使用上所有你了解到的功能和特性","npm_package_devDependencies_webpack":"^5.44.0","npm_package_devDependencies_webpack_cli":"^4.7.2","COMMAND_MODE":"unix2003","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_loader":"^6.1.1","npm_package_devDependencies_less_loader":"^10.0.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__babel_core":"^7.14.6","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.W8VgtVlng3/Listeners","npm_package_devDependencies_babel_loader":"^8.2.2","__CF_USER_TEXT_ENCODING":"0x1F6:0x19:0x34","npm_package_devDependencies_postcss":"^8.3.5","npm_package_devDependencies_less":"^4.1.1","npm_execpath":"/usr/local/lib/node_modules/yarn/bin/yarn.js","npm_package_devDependencies_mini_css_extract_plugin":"^2.1.0","npm_package_devDependencies_copy_webpack_plugin":"^9.0.1","PATH":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/yarn--1626359860641-0.4361641353740988:/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin:/Users/lastbee/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}","_":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base/node_modules/.bin/webpack","npm_package_dependencies_vue":"3","__CFBundleIdentifier":"com.microsoft.VSCode","PWD":"/Users/lastbee/Desktop/lagou-e-task/lagoufed-e-task/part2/fed-e-task-02-02/code/vue-app-base","npm_package_dependencies_core_js":"^3.6.5","npm_lifecycle_event":"build","LANG":"zh_CN.UTF-8","npm_package_devDependencies_vue_style_loader":"^4.1.3","npm_package_name":"vue-app-base","npm_package_devDependencies__babel_preset_env":"^7.14.7","npm_package_scripts_build":"webpack build --config=webpack.prod.js","npm_config_version_commit_hooks":"true","XPC_FLAGS":"0x0","npm_config_bin_links":"true","npm_config_ignore_engines":"true","XPC_SERVICE_NAME":"0","npm_package_version":"0.1.0","npm_package_devDependencies_autoprefixer":"^10.3.1","HOME":"/Users/lastbee","SHLVL":"2","npm_package_devDependencies__vue_cli_plugin_babel":"^4.5.13","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_package_devDependencies__vue_babel_preset_app":"^4.5.13","npm_package_scripts_serve":"webpack serve --config=webpack.dev.js","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_package_browserslist_3":"not dead","npm_config_version_git_message":"v%s","npm_package_browserslist_2":"ios 7","npm_package_browserslist_1":"last 2 versions","npm_package_devDependencies_vue_loader":"^16.3.0","LOGNAME":"lastbee","YARN_WRAP_OUTPUT":"false","npm_package_browserslist_0":"> 1%","npm_package_devDependencies_html_webpack_plugin":"^5.3.2","npm_lifecycle_script":"webpack build --config=webpack.prod.js","VSCODE_GIT_IPC_HANDLE":"/var/folders/d4/cbcyd7fd4cdbd02nmp_82qn80000gp/T/vscode-git-5d8528de11.sock","npm_package_eslintConfig_extends_1":"eslint:recommended","npm_package_eslintConfig_extends_0":"plugin:vue/essential","npm_package_devDependencies__vue_compiler_sfc":"^3.1.4","npm_config_version_git_sign":"","npm_config_ignore_scripts":"","npm_config_user_agent":"yarn/1.22.10 npm/? node/v14.16.0 darwin x64","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)","npm_config_init_version":"1.0.0","npm_config_ignore_optional":"","npm_package_devDependencies_css_loader":"^5.2.6","npm_package_eslintConfig_parserOptions_parser":"babel-eslint","COLORTERM":"truecolor","npm_node_execpath":"/usr/local/bin/node","npm_package_eslintConfig_env_node":"true","npm_package_devDependencies_optimize_css_assets_webpack_plugin":"^6.0.1","npm_config_version_tag_prefix":"v","NODE_ENV":"production"}}.env.NODE_ENV !== 'production') ? Object.freeze([]) : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => (str ? `on${capitalize(str)}` : ``));
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof __webpack_require__.g !== 'undefined'
                            ? __webpack_require__.g
                            : {}));
};




/***/ })

}]);