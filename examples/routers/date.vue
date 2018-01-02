<template>
<div class="search-date-wrapper">
  <RadioGroup v-model="button1" type="button">
        <Radio :disabled="true" label="本次住院"></Radio>
        <Radio label="院外7日"></Radio>
        <Radio label="全部"></Radio>
  </RadioGroup>
  &emsp;
  <Form ref="searchDate" :model="searchDate"  inline>
        <FormItem prop="user">
          <Row>
              <Col span="11">
                  <DatePicker type="date" placeholder="开始时间" v-model="searchDate.date"></DatePicker>
              </Col>
              <Col span="2" style="text-align: center">-</Col>
              <Col span="11">
                  <DatePicker type="date" placeholder="结束时间" v-model="searchDate.time"></DatePicker>
              </Col>
          </Row>
        </FormItem>
        <FormItem>
            <Button type="primary">查询</Button>
        </FormItem>
    </Form>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    searchDate:{

    },
    button1:"全部"
  })
}
</script>
