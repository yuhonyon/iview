<template>
    <div>
        <!-- <DatePicker v-model="value" @on-change="handleChange" type="datetimerange" placeholder="Select date" style="width: 400px"></DatePicker>
        <DatePicker v-model="value2" type="date" @on-change="handleChange" style="width: 200px"></DatePicker>
        {{ value }}
        <br>
        {{ value2 }}

        <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>

        <br>
        <DatePicker type="year" v-model="value3" placeholder="Select year" style="width: 200px"></DatePicker>
        <DatePicker type="month" v-model="value4" placeholder="Select month" style="width: 200px"></DatePicker> -->

        <DatePicker  :maxDate="value6"   v-model="value5"  format="yyyy-MM-dd HH:mm:ss" type="datetime" @on-change="handleChange" style="width: 200px"></DatePicker>


        <br>
        <br>
        <br>
        <DatePicker type="date" :minDate="value5" maxDate="today" format="yyyy-MM-dd "  value-format="yyyy/MM/dd  HH:mm:ss" v-model="value6" defaultTime="12:23:23" placeholder="Select month" style="width: 200px"></DatePicker>{{value6}}

    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: ['2018-03-05 10:00:00', '2018-05-15 10:01:00'],
                value2: '2018-02-05 10:09:00',
                value3: '1978',
                value4: '1978-05',
                value5: '2018-3-1 12:2',
                value6: '2018-3-1 ',
            }
        },
        methods: {
            handleChange (v) {
                //console.log(this.value2,v);
            }
        }
    }
</script>
