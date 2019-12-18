"use strict";
var _a;

Object.defineProperty(exports, "__esModule", { value: true });
exports.FRAGMENT = Symbol(true ? "Fragment" : "");
exports.PORTAL = Symbol(true ? "Portal" : "");
exports.SUSPENSE = Symbol(true ? "Suspense" : "");
exports.OPEN_BLOCK = Symbol(true ? "openBlock" : "");
exports.CREATE_BLOCK = Symbol(true ? "createBlock" : "");
exports.CREATE_VNODE = Symbol(true ? "createVNode" : "");
exports.CREATE_COMMENT = Symbol(true ? "createCommentVNode" : "");
exports.CREATE_TEXT = Symbol(true ? "createTextVNode" : "");
exports.RESOLVE_COMPONENT = Symbol(true ? "resolveComponent" : "");
exports.RESOLVE_DYNAMIC_COMPONENT = Symbol(true ? "resolveDynamicComponent" : "");
exports.RESOLVE_DIRECTIVE = Symbol(true ? "resolveDirective" : "");
exports.WITH_DIRECTIVES = Symbol(true ? "withDirectives" : "");
exports.RENDER_LIST = Symbol(true ? "renderList" : "");
exports.RENDER_SLOT = Symbol(true ? "renderSlot" : "");
exports.CREATE_SLOTS = Symbol(true ? "createSlots" : "");
exports.TO_STRING = Symbol(true ? "toString" : "");
exports.MERGE_PROPS = Symbol(true ? "mergeProps" : "");
exports.TO_HANDLERS = Symbol(true ? "toHandlers" : "");
exports.CAMELIZE = Symbol(true ? "camelize" : "");
exports.SET_BLOCK_TRACKING = Symbol(true ? "setBlockTracking" : "");
exports.helperNameMap = (_a = {},
    _a[exports.FRAGMENT] = "Fragment",
    _a[exports.PORTAL] = "Portal",
    _a[exports.SUSPENSE] = "Suspense",
    _a[exports.OPEN_BLOCK] = "openBlock",
    _a[exports.CREATE_BLOCK] = "createBlock",
    _a[exports.CREATE_VNODE] = "createVNode",
    _a[exports.CREATE_COMMENT] = "createCommentVNode",
    _a[exports.CREATE_TEXT] = "createTextVNode",
    _a[exports.RESOLVE_COMPONENT] = "resolveComponent",
    _a[exports.RESOLVE_DYNAMIC_COMPONENT] = "resolveDynamicComponent",
    _a[exports.RESOLVE_DIRECTIVE] = "resolveDirective",
    _a[exports.WITH_DIRECTIVES] = "withDirectives",
    _a[exports.RENDER_LIST] = "renderList",
    _a[exports.RENDER_SLOT] = "renderSlot",
    _a[exports.CREATE_SLOTS] = "createSlots",
    _a[exports.TO_STRING] = "toString",
    _a[exports.MERGE_PROPS] = "mergeProps",
    _a[exports.TO_HANDLERS] = "toHandlers",
    _a[exports.CAMELIZE] = "camelize",
    _a[exports.SET_BLOCK_TRACKING] = "setBlockTracking",
    _a);
function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach(function (s) {
        exports.helperNameMap[s] = helpers[s];
    });
}
exports.registerRuntimeHelpers = registerRuntimeHelpers;
