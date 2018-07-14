"use strict";
exports.__esModule = true;
var Row_vue_1 = require("./components/Row.vue");
var Col_vue_1 = require("./components/Col.vue");
var Anim_vue_1 = require("./components/Anim.vue");
var Badge_vue_1 = require("./components/Badge.vue");
var Blockquoto_vue_1 = require("./components/Blockquoto.vue");
var ButtonContainer_vue_1 = require("./components/ButtonContainer.vue");
var ButtonGroup_vue_1 = require("./components/ButtonGroup.vue");
var Container_vue_1 = require("./components/Container.vue");
var Button_vue_1 = require("./components/Button.vue");
var Select_vue_1 = require("./components/Select.vue");
var Form_vue_1 = require("./components/Form.vue");
var FormItem_vue_1 = require("./components/FormItem.vue");
var Input_vue_1 = require("./components/Input.vue");
var InputPassword_vue_1 = require("./components/InputPassword.vue");
var CheckboxGroup_vue_1 = require("./components/CheckboxGroup.vue");
var Switcher_vue_1 = require("./components/Switcher.vue");
var Radio_vue_1 = require("./components/Radio.vue");
var Textarea_vue_1 = require("./components/Textarea.vue");
var Progress_vue_1 = require("./components/Progress.vue");
var Card_vue_1 = require("./components/Card.vue");
var Collapse_vue_1 = require("./components/Collapse.vue");
var CollapseItem_vue_1 = require("./components/CollapseItem.vue");
var Hr_vue_1 = require("./components/Hr.vue");
var Menu_vue_1 = require("./components/Menu.vue");
var MenuRow_vue_1 = require("./components/MenuRow.vue");
var MenuItem_vue_1 = require("./components/MenuItem.vue");
var Side_vue_1 = require("./components/Side.vue");
var LayoutFooter_vue_1 = require("./components/LayoutFooter.vue");
var Layout_vue_1 = require("./components/Layout.vue");
var LayoutRight_vue_1 = require("./components/LayoutRight.vue");
var LayoutLeft_vue_1 = require("./components/LayoutLeft.vue");
var LayoutBody_vue_1 = require("./components/LayoutBody.vue");
var Modal_vue_1 = require("./components/Modal.vue");
var Icon_vue_1 = require("./components/Icon.vue");
var Tabs_vue_1 = require("./components/Tabs.vue");
var TabPanel_vue_1 = require("./components/TabPanel.vue");
var Uploader = require("./components/Uploader.vue")['default'];
var Code = require("./components/Code.vue")['default'];
var index_1 = require("./utils/index");
var ui = {
    Row: Row_vue_1["default"],
    Col: Col_vue_1["default"],
    Anim: Anim_vue_1["default"],
    Badge: Badge_vue_1["default"],
    Blockquoto: Blockquoto_vue_1["default"],
    ButtonContainer: ButtonContainer_vue_1["default"],
    ButtonGroup: ButtonGroup_vue_1["default"],
    Button: Button_vue_1["default"],
    Container: Container_vue_1["default"],
    Select: Select_vue_1["default"],
    Form: Form_vue_1["default"],
    FormItem: FormItem_vue_1["default"],
    Input: Input_vue_1["default"],
    InputPassword: InputPassword_vue_1["default"],
    // Checkbox,
    CheckboxGroup: CheckboxGroup_vue_1["default"],
    Switcher: Switcher_vue_1["default"],
    Radio: Radio_vue_1["default"],
    Textarea: Textarea_vue_1["default"],
    Progress: Progress_vue_1["default"],
    Card: Card_vue_1["default"],
    CollapseItem: CollapseItem_vue_1["default"],
    Collapse: Collapse_vue_1["default"],
    Hr: Hr_vue_1["default"],
    Menu: Menu_vue_1["default"],
    MenuItem: MenuItem_vue_1["default"],
    MenuRow: MenuRow_vue_1["default"],
    Side: Side_vue_1["default"],
    LayoutFooter: LayoutFooter_vue_1["default"],
    Layout: Layout_vue_1["default"],
    LayoutRight: LayoutRight_vue_1["default"],
    LayoutLeft: LayoutLeft_vue_1["default"],
    LayoutBody: LayoutBody_vue_1["default"],
    Modal: Modal_vue_1["default"],
    Icon: Icon_vue_1["default"],
    Tabs: Tabs_vue_1["default"],
    TabPanel: TabPanel_vue_1["default"],
    Uploader,
    Code,
};

function init() {
    layui.form.on('select', function (data) {
        // console.log(data.elem.checked, data.elem.name)
        data.elem.dispatchEvent(new Event('change'));
    });
    layui.form.on('switch', function (data) {
        // console.log(data.elem.checked, data.elem.name)
        data.elem.dispatchEvent(new Event('change'));
    });
    layui.form.on('checkbox', function (data) {
        // console.log(data.elem.checked, data.elem.name)
        data.elem.dispatchEvent(new Event('change'));
        // data.elem.checked = true;
        // data.elem.change()
        // $(data.elem).attr('checked', true)
    });
    layui.form.on('radio', function (data) {
        // console.log(data.elem.checked, data.elem.name)
        data.elem.dispatchEvent(new Event('change'));
    });
}
/**
 * 安装
 * @param Vue
 * @param opts
 */
function install(Vue, opts) {
    if (opts === void 0) {
        opts = {};
    }
    for (var key in ui) {
        Vue.component(key, ui[key]);
    }
    Vue.prototype.$loading = loading;
    Vue.prototype.$msg = msg;
    Vue.prototype.$alert = alert;
    Vue.prototype.$confirm = confirm;
    Vue.prototype.$tips = tips;
    if (!window.layui) {
        index_1.load_css(opts.server + '/css/layui.css');
        index_1.load_js(opts.server + '/layui.all.js', function () {
            init();
        });
    } else {
        init();
    }
}
/**
 * tip提示
 * @param content
 * @param follow
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
function tips(content, follow, options) {
    if (follow === void 0) {
        follow = '';
    }
    if (options === void 0) {
        options = {};
    }
    if (window.layui) {
        layui.layer.tips(content, follow, options);
    } else {
        setTimeout(function () {
            tips(content, follow, options);
        }, 200);
    }
}
exports.tips = tips;
/**
 * 加载中提示
 * @param icon
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
function loading(icon, options) {
    if (icon === void 0) {
        icon = '';
    }
    if (options === void 0) {
        options = {};
    }
    if (window.layui) {
        layui.layer.load(icon, options);
    } else {
        setTimeout(function () {
            loading(icon, options);
        }, 200);
    }
}
exports.loading = loading;
/**
 * msg 提示
 * @param content
 * @param options
 * @param end
 * @link http://www.layui.com/doc/modules/layer.html
 */
function msg(content, options, end) {
    if (content === void 0) {
        content = "";
    }
    if (options === void 0) {
        options = {};
    }
    if (end === void 0) {
        end = function () {};
    }
    if (window.layui) {
        layui.layer.msg(content, options, end);
    } else {
        setTimeout(function () {
            msg(content, options, end);
        }, 200);
    }
}
exports.msg = msg;
/**
 * 确认对话框
 * @param content
 * @param yes
 * @param cancel
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
function confirm(content, yes, cancel, options) {
    if (content === void 0) {
        content = '';
    }
    if (options === void 0) {
        options = {};
    }
    if (window.layui) {
        layui.layer.confirm(content, options, yes, cancel);
    } else {
        setTimeout(function () {
            confirm(content, options, yes, cancel);
        }, 200);
    }
}
exports.confirm = confirm;
/**
 * 警告
 * @param content
 * @param yes
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
function alert(content, yes, options) {
    if (content === void 0) {
        content = '';
    }
    if (options === void 0) {
        options = {};
    }
    if (window.layui) {
        layui.layer.alert(content, options, yes);
    } else {
        setTimeout(function () {
            alert(content, options, yes);
        }, 200);
    }
}
exports.alert = alert;
exports["default"] = {
    install: install,
    alert: alert,
    confirm: confirm,
    msg: msg,
    tips: tips,
    loading: loading
};