<template>
    <div style="margin: 200px;">
        <Poptip title="提示标题" transfer v-model="aaa">
            <div slot="content" style="padding: 50px">
                <Button>click me</Button>
            </div>
            <Button>click 激活</Button>
        </Poptip>

        <button @click="aaa=!aaa">aaaaaaa</button>
    </div>
</template>
<script>
    export default {
      data(){
        return {
          aaa:true
        }
      },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
