<template>
    <div>
      <Poptip trigger="hover" title="提示标题" content="提示内容">
          <Button>hover 激活</Button>
      </Poptip>
      <Poptip title="提示标题" content="提示内容">
          <Button>click 激活</Button>
      </Poptip>
      <Poptip trigger="focus" title="提示标题" content="提示内容">
          <Button>focus 激活</Button>
      </Poptip>
      <Poptip trigger="focus" title="提示标题" content="提示内容">
          <i-input placeholder="输入框的 focus"></i-input>
      </Poptip>
      <Poptip
        ref="aaa"
        confirm
        title="您确认删除这条内容吗？"
        @on-ok="ok"
        @on-cancel="cancel">

    </Poptip>
      <Button v-poptip:aaa>删除</Button>
    </div>
</template>
<script>
    export default {
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
