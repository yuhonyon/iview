<template>
<div>
  <div class="block">
    <span class="demonstration">默认为 Date 对象</span>
    <div class="demonstration">值：{{ value10 }}</div>
    <DatePicker

      v-model="value6"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </DatePicker>
    <DatePicker
      style="width:200px;"
      v-model="value10"
      :max-date="value11"
      default-time="12:12:00"
      type="datetime"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日 HH:mm:ss">
    </DatePicker>
    <DatePicker
      style="width:200px;"
      v-model="value11"
      :min-date="value10"
      type="datetime"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日 HH:mm:ss">
    </DatePicker>
  </div>
  <div class="block">
    <span class="demonstration">使用 value-format</span>
    <div class="demonstration">值：{{ value11 }}</div>
    <DatePicker
      v-model="value11"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd">
    </DatePicker>
  </div>
  <div class="block">
    <span class="demonstration">时间戳</span>
    <div class="demonstration">值：{{ value12 }}</div>
    <DatePicker
      v-model="value12"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="timestamp">
    </DatePicker>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        value10: '',
        value11: '',
        value12: '',
        value6:''
      };
    }
  };
</script>
