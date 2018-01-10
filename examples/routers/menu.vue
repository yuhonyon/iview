<template>
    <div>
        <Menu :theme="theme1" active-name="1" collapse>
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
        <br>
        <p>切换主题</p>
        <Radio-group v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
        </Radio-group>
        <Input v-model="value4" icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></Input>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                value4: ''
            }
        }
    }
</script>
