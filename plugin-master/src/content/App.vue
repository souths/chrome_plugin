<template>
    <div class="app-wrap">
        <el-button @click="handleClick" type="primary">测试按钮App</el-button>
    </div>
</template>

<script>
import '@/assets/less/index.less'
import compTable from './components/table.vue'

export default {
    name: 'app',
    components: {
        compTable
    },
    data() {
        return {
            showTable: false
        }
    },
    methods: {
        handleClick() {
            this.toggleTable(true)
        },
        toggleTable(status) {
            this.showTable = status
        },
        handleSubmit() {
            this.$msgbox.alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.showTable = false
                    this.$message({
                        type: 'info',
                        message: `action: ${action}`
                    })
                }
            })
        }
    }
}
</script>
