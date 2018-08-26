"use strict";
const Row_vue_1 = require("./components/Row.vue");
const Col_vue_1 = require("./components/Col.vue");
const Anim_vue_1 = require("./components/Anim.vue");
const Badge_vue_1 = require("./components/Badge.vue");
const Blockquoto_vue_1 = require("./components/Blockquoto.vue");
const ButtonContainer_vue_1 = require("./components/ButtonContainer.vue");
const ButtonGroup_vue_1 = require("./components/ButtonGroup.vue");
const Container_vue_1 = require("./components/Container.vue");
const Button_vue_1 = require("./components/Button.vue");
const Select_vue_1 = require("./components/Select.vue");
const Form_vue_1 = require("./components/Form.vue");
const FormItem_vue_1 = require("./components/FormItem.vue");
const Input_vue_1 = require("./components/Input.vue");
const InputPassword_vue_1 = require("./components/InputPassword.vue");
const CheckboxGroup_vue_1 = require("./components/CheckboxGroup.vue");
const Switcher_vue_1 = require("./components/Switcher.vue");
const Radio_vue_1 = require("./components/Radio.vue");
const Textarea_vue_1 = require("./components/Textarea.vue");
const Progress_vue_1 = require("./components/Progress.vue");
const Card_vue_1 = require("./components/Card.vue");
const Collapse_vue_1 = require("./components/Collapse.vue");
const CollapseItem_vue_1 = require("./components/CollapseItem.vue");
const Hr_vue_1 = require("./components/Hr.vue");
const Menu_vue_1 = require("./components/Menu.vue");
const MenuRow_vue_1 = require("./components/MenuRow.vue");
const MenuItem_vue_1 = require("./components/MenuItem.vue");
const Side_vue_1 = require("./components/Side.vue");
const LayoutFooter_vue_1 = require("./components/LayoutFooter.vue");
const Layout_vue_1 = require("./components/Layout.vue");
const LayoutRight_vue_1 = require("./components/LayoutRight.vue");
const LayoutLeft_vue_1 = require("./components/LayoutLeft.vue");
const LayoutBody_vue_1 = require("./components/LayoutBody.vue");
const Modal_vue_1 = require("./components/Modal.vue");
const Icon_vue_1 = require("./components/Icon.vue");
const Tabs_vue_1 = require("./components/Tabs.vue");
const TabPanel_vue_1 = require("./components/TabPanel.vue");
const Iconfont = require("./components/Iconfont.vue")['default'];
const Uploader = require("./components/Uploader.vue")['default'];
const Code = require("./components/Code.vue")['default'];
const Page = require("./components/Page.vue")['default'];
const index_1 = require("./utils/index");
const filters = require("./utils/filters");
const ui = {
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
    Iconfont,
    Code,
    Page
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
export const config = {
    iconfont: 'icon'
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
    for (const key in filters) {
        Vue.filter(key, filters[key])
    }
    if (opts.iconfont) {
        config.iconfont = opts.iconfont
    }
    if (opts.iconfont_url) {
        index_1.load_css(opts.iconfont_url);
    }
    if (!window.layui) {
        index_1.load_css('//unpkg.com/castle-ui@1.0.28/dist/css/layui.css');
        index_1.load_js('//unpkg.com/castle-ui/dist/layui.all.js', function () {
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
export function tips(content, follow, options) {
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
/**
 * 加载中提示
 * @param icon
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
export function loading(icon, options) {
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
/**
 * msg 提示
 * @param content
 * @param options
 * @param end
 * @link http://www.layui.com/doc/modules/layer.html
 */
export function msg(content, options, end) {
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
/**
 * 确认对话框
 * @param content
 * @param yes
 * @param cancel
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
export function confirm(content, yes, cancel, options) {
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
/**
 * 警告
 * @param content
 * @param yes
 * @param options
 * @link http://www.layui.com/doc/modules/layer.html
 */
export function alert(content, yes, options) {
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
export default {
    install: install,
    alert: alert,
    confirm: confirm,
    msg: msg,
    tips: tips,
    loading: loading
};