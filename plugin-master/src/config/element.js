import { Button } from 'element-ui'

function install(Vue) {
    if (install.installed) {
        return
    }

    Vue.component(Button.name, Button)
}
export default install
