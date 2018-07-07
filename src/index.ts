/// <reference path="layui.d.ts"></reference>
// import "jquery"
// import '../assets/layui'
// import '../assets/css/layui.css'

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
    if (!window.layui) {
        load_css('http://pbidicyq9.bkt.clouddn.com/css/layui.css')
        load_js('http://pbidicyq9.bkt.clouddn.com/layui.all.js', () => {
            init()
        })
    } else {
        init();
    }
}
export default {
    install
}