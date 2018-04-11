<template>
    <div>
<<<<<<< HEAD
        <Menu :theme="theme1" router active-name="1" collapse>
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
=======
        <Menu ref="menu" active-name="1-2" :open-names="openNames" theme="dark" accordion @on-open-change="handleOpenChange">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    Navigation One
                </template>
                <MenuGroup title="Item 1">
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                </MenuGroup>
                <MenuGroup title="Item 2">
                    <MenuItem name="1-3">Option 3</MenuItem>
                    <MenuItem name="1-4">Option 4</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-filing"></Icon>
                    Navigation Two
                </template>
                <MenuItem name="2-1">Option 5</MenuItem>
                <MenuItem name="2-2">Option 6</MenuItem>
                <Submenu name="3">
                    <template slot="title">Submenu</template>
                    <MenuItem name="3-1">Option 7</MenuItem>
                    <MenuItem name="3-2">Option 8</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">Submenu</template>
                    <MenuItem name="4-1">Option 7</MenuItem>
                    <MenuItem name="4-2">Option 8</MenuItem>
                </Submenu>
            </Submenu>
            <Submenu name="5">
                <template slot="title">
                    <Icon type="ios-gear"></Icon>
                    Navigation Three
                </template>
                <MenuItem name="5-1">Option 9</MenuItem>
                <MenuItem name="5-2">Option 10</MenuItem>
                <MenuItem name="5-3">Option 11</MenuItem>
                <MenuItem name="5-4">Option 12</MenuItem>
            </Submenu>
>>>>>>> eed57084949a9a38d3e40ce8c4a48a690e7fbce6
        </Menu>
        <Button @click="setOpenNames">修改展开数组</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                openNames: ['1']
            };
        },
        methods: {
            handleOpenChange (name) {
                console.log(name)
            },
            setOpenNames () {
                this.openNames = ['2', '3'];
                this.$nextTick(() => {
                    this.$refs.menu.updateOpened();
                })
            }
        }
    }
</script>
