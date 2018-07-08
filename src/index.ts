import Row from './components/Row.vue'
import Col from './components/Col.vue'
import Anim from './components/Anim.vue'
import Badge from './components/Badge.vue'
import Blockquoto from './components/Blockquoto.vue'
import ButtonContainer from './components/ButtonContainer.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import Container from './components/Container.vue'
import Button from './components/Button.vue'
import Select from './components/Select.vue'
import Form from './components/Form.vue'
import FormItem from './components/FormItem.vue'
import Input from './components/Input.vue'
import InputPassword from './components/InputPassword.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import Switcher from './components/Switcher.vue'
import Radio from './components/Radio.vue'
import Textarea from './components/Textarea.vue'
import Progress from './components/Progress.vue'
import Card from './components/Card.vue'
import Collapse from './components/Collapse.vue'
import CollapseItem from './components/CollapseItem.vue'
import Hr from './components/Hr.vue'
import Menu from './components/Menu.vue'
import MenuRow from './components/MenuRow.vue'
import MenuItem from './components/MenuItem.vue'
import Side from './components/Side.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import Layout from './components/Layout.vue'
import LayoutRight from './components/LayoutRight.vue'
import LayoutLeft from './components/LayoutLeft.vue'
import LayoutBody from './components/LayoutBody.vue'
import Modal from './components/Modal.vue'
import { load_js, load_css } from './utils/index';
declare let layui: any;
declare let $: any;
declare let window: any;
const ui: any = {
    Row,
    Col,
    Anim,
    Badge,
    Blockquoto,
    ButtonContainer,
    ButtonGroup,
    Button,
    Container,
    Select,
    Form,
    FormItem,
    Input,
    InputPassword,
    // Checkbox,
    CheckboxGroup,
    Switcher,
    Radio,
    Textarea,
    Progress,
    Card,
    CollapseItem,
    Collapse,
    Hr,
    Menu,
    MenuItem,
    MenuRow,
    Side,
    LayoutFooter,
    Layout,
    LayoutRight,
    LayoutLeft,
    LayoutBody,
    Modal,
}
function init() {
    layui.form.on('select', (data: any) => {
        // console.log(data.elem.checked, data.elem.name)

        data.elem.dispatchEvent(new Event('change'))
    })
    layui.form.on('switch', (data: any) => {
        // console.log(data.elem.checked, data.elem.name)

        data.elem.dispatchEvent(new Event('change'))
    })
    layui.form.on('checkbox', (data: any) => {
        // console.log(data.elem.checked, data.elem.name)
        data.elem.dispatchEvent(new Event('change'))
        // data.elem.checked = true;
        // data.elem.change()

        // $(data.elem).attr('checked', true)
    })
    layui.form.on('radio', (data: any) => {
        // console.log(data.elem.checked, data.elem.name)

        data.elem.dispatchEvent(new Event('change'))
    })
}
/**
 * 安装
 * @param Vue 
 * @param opts 
 */
function install(Vue: any, opts = {}) {
    for (let key in ui) {
        Vue.component(key, ui[key])
    }
    Vue.prototype.$loading = loading;
    Vue.prototype.$msg = msg;
    Vue.prototype.$alert = alert;
    Vue.prototype.$confirm = confirm;
    Vue.prototype.$tips = tips;
    if (!window.layui) {
        load_css('http://pbidicyq9.bkt.clouddn.com/css/layui.css')
        load_js('http://pbidicyq9.bkt.clouddn.com/layui.all.js', () => {
            init()
        })
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
export function tips(content: string, follow: any = '', options: any = {}) {
    if (window.layui) {
        layui.layer.tips(content, follow, options)
    } else {
        setTimeout(() => {
            tips(content, follow, options)
        }, 200)
    }
}
/**
 * 加载中提示
 * @param icon 
 * @param options 
 * @link http://www.layui.com/doc/modules/layer.html
 */
export function loading(icon: string = '', options: any = {}) {
    if (window.layui) {
        layui.layer.load(icon, options)
    } else {
        setTimeout(() => {
            loading(icon, options)
        }, 200)
    }
}
/**
 * msg 提示 
 * @param content 
 * @param options 
 * @param end 
 * @link http://www.layui.com/doc/modules/layer.html
 */
export function msg(content = "", options: any = {}, end: Function = () => { }) {
    if (window.layui) {
        layui.layer.msg(content, options, end)
    } else {
        setTimeout(() => {
            msg(content, options, end)
        }, 200)
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
export function confirm(content: string = '', yes: Function, cancel: Function, options: any = {}) {
    if (window.layui) {
        layui.layer.confirm(content, options, yes, cancel)
    } else {
        setTimeout(() => {
            confirm(content, options, yes, cancel)
        }, 200)
    }
}
/**
 * 警告
 * @param content 
 * @param yes 
 * @param options 
 * @link http://www.layui.com/doc/modules/layer.html
 */
export function alert(content: string = '', yes: Function, options: any = {}) {
    if (window.layui) {
        layui.layer.alert(content, options, yes)
    } else {
        setTimeout(() => {
            alert(content, options, yes)
        }, 200)
    }
}
export default {
    install, alert, confirm, msg, tips, loading
}