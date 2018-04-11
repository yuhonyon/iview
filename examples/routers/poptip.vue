<template>
<<<<<<< HEAD
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
        poptip-class="aaaaaaaa"
        @on-ok="ok"
        @on-cancel="cancel">

    </Poptip>
      <Button v-poptip:aaa>删除</Button>
=======
    <div style="margin: 200px">
        <Tabs value="name1">
            <TabPane label="标签一" name="name1">
                <div style="width: 200px;height:300px">
                    <Poptip title="提示标题" content="标签一的内容" placement="left" transfer >
                        <Button id="aaa">左边</Button>
                    </Poptip>
                    <Poptip title="提示标题" content="标签一的内容" placement="right" transfer>
                        <Button id="aaa">右边</Button>
                    </Poptip>
                    <Poptip title="提示标题" content="标签一的内容" placement="top" transfer>
                        <Button id="aaa">上边</Button>
                    </Poptip>
                    <Poptip title="提示标题" content="标签一的内容" placement="bottom" transfer>
                        <Button id="aaa">下边</Button>
                    </Poptip>
                </div>
            </TabPane>
            <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        </Tabs>
>>>>>>> eed57084949a9a38d3e40ce8c4a48a690e7fbce6
    </div>
</template>
<script>
    export default {
<<<<<<< HEAD
      methods: {
                  ok () {
                      this.$Message.info('点击了确定');
                  },
                  cancel () {
                      this.$Message.info('点击了取消');
                  }
              }
=======
        data () {
            return {
                options: {

                }
            }
        }
>>>>>>> eed57084949a9a38d3e40ce8c4a48a690e7fbce6
    }
</script>
