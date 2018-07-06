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
declare let layui: any;
declare let $: any;
layui.form.on('select', (data: any) => {
    console.log(data.elem.checked, data.elem.name)
})
layui.form.on('checkbox', (data: any) => {
    // console.log(data.elem.checked, data.elem.name)
    data.elem.dispatchEvent(new Event('change'))
    // data.elem.checked = true;
    // data.elem.change()

    // $(data.elem).attr('checked', true)
})
layui.form.on('radio', (data: any) => {
    console.log(data.elem.checked, data.elem.name)
})
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
}
export default {
    install
}