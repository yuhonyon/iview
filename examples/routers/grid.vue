<<<<<<< HEAD
<template>
  <div>
    <Table
      :data="tableData"
      :max-height="900"
      ref="bbb"
      border
      stripe
      size="medium"

      style="width: 100%">
      <Column
        prop="date"
        label="日期"
        sortable
        width="180">
      </Column>
      <Column
        prop="name"
        label="姓名"
        width="180">
      </Column>
      <Column
        prop="address"
        label="地址"
        :show-tooltip-when-overflow="true"
        :formatter="formatter">
      </Column>
      <Column
         ref="aaa"
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <Tag
            :color="scope.row.tag === '家' ? 'red' : 'green'"
            >{{scope.row.tag}}</Tag>
        </template>
      </Column>
    </Table>

    <Button @click="aaa">aaaa</Button>
  </div>
=======
<style>
    .view {
        height: 100px;
        width: 100px;
        background: yellow;
    }
</style>
<template>
    <div>
        <Row type='flex' justify='center'>
            <i-col span='21' class="offset-header">
                <Row type='flex' :gutter='16' justify='space-between'>
                    <i-col :order='25'>
                        <div class="view">
                            <label>245</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='1'>
                        <div class="view" >
                            <label>1</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='2'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='3'>
                        <div class="view"   >
                            <label>3</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='4'>
                        <div class="view"   >
                            <label>4</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='5'>
                        <div class="view"   >
                            <label>5</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='6'>
                        <div class="view"   >
                            <label>6</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='7'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='8'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='9'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='10'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='11'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='12'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='13'>
                        <div class="view"   >
                            <label>12</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='14'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='15'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='16'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='17'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='18'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='19'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='20'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='21'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='22'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='23'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='24'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='25'>
                        <div class="view"   >
                            <label>25-------</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='26'>
                        <div class="view"   >
                            <label>26------</label>
                        </div>
                    </i-col>
                </Row>
            </i-col>
        </Row>
    </div>
>>>>>>> eed57084949a9a38d3e40ce8c4a48a690e7fbce6
</template>

<script>
  export default {
    mounted(){

    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
      }
    },
    methods: {
      aaa(){
        this.$refs.bbb.confirmFilter('el-table_1_column_4',['家'])
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    }
  }
</script>
