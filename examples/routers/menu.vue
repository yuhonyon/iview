<template>
    <div>

        <Menu ref="menu"  active-name="1" :openNames="openNames"  collapse>
          <MenuGroup title="后退账号管理">
            <MenuItem name="/menu">
            <Icon type="document-text"></Icon><span>后台账号管理</span></MenuItem>
            <MenuItem name="/roleManagement">
            <Icon type="document-text"></Icon><span>角色管理</span></MenuItem>
        </MenuGroup>
            <Menu-item name="/tabs" tooltip="内容管理">
                <Icon type="ios-paper"></Icon>
                <span>内容管理</span>
            </Menu-item>
            <Menu-item name="2">
                <Icon type="ios-people"></Icon>
                <span>用户管理</span>
            </Menu-item>
            <Submenu name="3" tooltip="统计分析">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    <span>统计分析</span>
                </template>
                <Menu-item name="3-1">新增和启动</Menu-item>
                <Menu-item name="3-2">活跃分析</Menu-item>
                <Menu-item name="3-3">时段分析</Menu-item>
            </Submenu>
            <Submenu name="5" tooltip="统计分析">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    <span>统计分析</span>
                </template>
                <Menu-item name="5-1">新增和启动</Menu-item>
                <Menu-item name="5-2">活跃分析</Menu-item>
                <Menu-item name="5-3">时段分析</Menu-item>
            </Submenu>
            <Menu-item name="4">
                <Icon type="settings"></Icon>
                <span>综合设置</span>
            </Menu-item>

        </Menu>
        <Button @click="setOpenNames">修改展开数组</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                openNames: ['3']
            };
        },
        methods: {
            handleOpenChange (name) {
                console.log(name)
            },
            setOpenNames () {
                this.openNames = [ '5'];
                this.$nextTick(() => {
                    this.$refs.menu.updateOpened();
                })
            }
        }
    }
</script>
