import * as layui from '../assets/layui.all'
import '../assets/css/layui.css'

import Row from './components/Row.vue'
import Col from './components/Col.vue'
import Anim from './components/Anim.vue'
import Badge from './components/Badge.vue'
import Blockquoto from './components/Blockquoto.vue'
import ButtonContainer from './components/ButtonContainer.vue'
import ButtonGroup from './components/ButtonGroup.vue'
const layui = {
    Row,
    Col,
    Anim,
    Badge,
    Blockquoto,
    ButtonContainer,
    ButtonGroup
}
/**
 * 安装
 * @param Vue 
 * @param opts 
 */
function install(Vue, opts = {}) {
    for (let key in layui) {
        Vue.component(key, layui[key])
    }
}
export default {
    install
}