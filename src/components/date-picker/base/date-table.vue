<template>
    <div
        :class="classes"
        @mousemove="handleMouseMove">
        <div :class="[prefixCls + '-header']">
            <span v-for="day in headerDays" :key="day">
                {{day}}
            </span>
        </div>
        <span :class="getCellCls(cell)" v-for="(cell, index) in readCells"><em :index="index" @click="handleClick(cell)">{{ cell.text }}</em></span>
    </div>
</template>
<script>
    import { getFirstDayOfMonth, getDayCountOfMonth } from '../util';
    import { deepCopy } from '../../../utils/assist';
    import Locale from '../../../mixins/locale';

    const prefixCls = 'ivu-date-picker-cells';

    const clearHours = function (time) {
        const cloneDate = new Date(time);
        cloneDate.setHours(0, 0, 0, 0);
        return cloneDate.getTime();
    };

    export default {
        mixins: [ Locale ],
        props: {
            date: {},
            year: {},
            month: {},
            selectionMode: {
                default: 'day'
            },
            disabledDate: {},
            startDate: {},
            endDate: {},
            maxDate:null,
            minDate:null,
            rangeState: {
                default () {
                    return {
                        endDate: null,
                        selecting: false
                    };
                }
            },
            value: ''
        },
        data () {
            return {
                prefixCls: prefixCls,
                readCells: []
            };
        },
        watch: {
            'rangeState.endDate' (newVal) {
                this.markRange(newVal);
            },
            startDate(newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.rangeState.selecting = true;
                    this.markRange(newVal);
                } else if (!newVal) {
                    this.rangeState.selecting = false;
                    this.markRange(newVal);
                } else {
                    this.markRange();
                }
            },
            endDate(newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.rangeState.selecting = false;
                    this.markRange(newVal);
//                    this.$emit('on-pick', {
//                        startDate: this.startDate,
//                        endDate: this.endDate
//                    });
                }
            },
            cells: {
                handler (cells) {
                    this.readCells = cells;
                },
                immediate: true
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`
                ];
            },
            headerDays () {
                const weekStartDay = Number(this.t('i.datepicker.weekStartDay'));
                const translatedDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(item => {
                    return this.t('i.datepicker.weeks.' + item);
                });
                const weekDays = translatedDays.splice(weekStartDay, 7 - weekStartDay).concat(translatedDays.splice(0, weekStartDay));
                return weekDays;
            },
            cells () {
                const date = new Date(this.year, this.month, 1);
                const weekStartDay = Number(this.t('i.datepicker.weekStartDay'));
                const day = (getFirstDayOfMonth(date) || 7) - weekStartDay; // day of first day
                const today = clearHours(new Date());    // timestamp of today
                const selectDay = clearHours(new Date(this.value));    // timestamp of selected day
                const minDay = clearHours(new Date(this.startDate));
                const maxDay = clearHours(new Date(this.endDate));

                const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
                const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

                const disabledDate = this.disabledDate;

                let cells = [];
                const cell_tmpl = {
                    text: '',
                    type: '',
                    date: null,
                    selected: false,
                    disabled: false,
                    range: false,
                    start: false,
                    end: false
                };
                if (day !== 7) {
                    for (let i = 0; i < day; i++) {
                        const cell = deepCopy(cell_tmpl);
                        cell.type = 'prev-month';
                        cell.text = dateCountOfLastMonth - (day - 1) + i;
                        cell.date = new Date(this.year, this.month - 1, cell.text);
                        const time = clearHours(cell.date);
                        cell.disabled = (typeof disabledDate === 'function' && disabledDate(new Date(time)))||this.disableRangeDate(new Date(time));
                        cells.push(cell);
                    }
                }

                for (let i = 1; i <= dateCountOfMonth; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.text = i;
                    cell.date = new Date(this.year, this.month, cell.text);
                    const time = clearHours(cell.date);
                    cell.type = time === today ? 'today' : 'normal';
                    cell.selected = time === selectDay;
                    cell.disabled = (typeof disabledDate === 'function' && disabledDate(new Date(time)))||this.disableRangeDate(new Date(time));
                    cell.range = time >= minDay && time <= maxDay;
                    cell.start = this.startDate && time === minDay;
                    cell.end = this.endDate && time === maxDay;

                    cells.push(cell);
                }

                const nextMonthCount = 42 - cells.length;
                for (let i = 1; i <= nextMonthCount; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.type = 'next-month';
                    cell.text = i;
                    cell.date = new Date(this.year, this.month + 1, cell.text);
                    const time = clearHours(cell.date);
                    cell.disabled = (typeof disabledDate === 'function' && disabledDate(new Date(time)))||this.disableRangeDate(new Date(time));
                    cells.push(cell);
                }

                return cells;
            }
        },
        methods: {
            handleClick (cell) {

                if (cell.disabled) return;
                const newDate = cell.date;

                if (this.selectionMode === 'range') {
                    if (this.startDate && this.endDate) {
                        const startDate = new Date(newDate.getTime());
                        const endDate = null;
                        this.rangeState.selecting = true;
                        this.markRange(this.startDate);

                        this.$emit('on-pick', {startDate, endDate}, false);
                    } else if (this.startDate && !this.endDate) {
                        if (newDate >= this.startDate) {
                            const endDate = new Date(newDate.getTime());
                            this.rangeState.selecting = false;

                            this.$emit('on-pick', {startDate: this.startDate, endDate});
                        } else {
                            const startDate = new Date(newDate.getTime());

                            this.$emit('on-pick', {startDate, endDate: this.endDate}, false);
                        }
                    } else if (!this.startDate) {
                        const startDate = new Date(newDate.getTime());
                        this.rangeState.selecting = true;
                        this.markRange(this.startDate);

                        this.$emit('on-pick', {startDate, endDate: this.endDate}, false);
                    }
                } else {
                    this.$emit('on-pick', newDate);
                }
                this.$emit('on-pick-click');
            },
            disableRangeDate(date){
              let maxDate=this.maxDate;
              let minDate=this.minDate;

                if(maxDate==='today'){
                  maxDate=new Date().setHours(23,59,59,999)
                }
                if(minDate==='today'){
                  minDate=new Date().setHours(0,0,0,0)
                }
                if(maxDate==='now'){
                  maxDate=new Date()
                }
                if(minDate==='now'){
                  minDate=new Date()
                }

              if(maxDate){
                if (maxDate instanceof Date) {
                  if (date.getTime()>maxDate.getTime())return true
                }else{
                  if (date.getTime()>new Date(maxDate).getTime()) return true
                }
              }
              if(minDate){
                if (minDate instanceof Date) {
                  if (date.getTime()<minDate.getTime())return true
                }else{
                  if (date.getTime()<new Date(minDate).getTime()) return true
                }
              }

              return false
            },
            handleMouseMove (event) {
                if (!this.rangeState.selecting) return;

                this.$emit('on-changerange', {
                    startDate: this.startDate,
                    endDate: this.endDate,
                    rangeState: this.rangeState
                });

                const target = event.target;
                if (target.tagName === 'EM') {
                    const cell = this.cells[parseInt(event.target.getAttribute('index'))];
//                    if (cell.disabled) return;    // todo 待确定
                    this.rangeState.endDate = cell.date;
                }
            },
            markRange (endDate) {
                const startDate = this.startDate;
                if (!endDate) endDate = this.endDate;

                const minDay = clearHours(new Date(startDate));
                const maxDay = clearHours(new Date(endDate));

                this.cells.forEach(cell => {
                    if (cell.type === 'today' || cell.type === 'normal') {
                        const time = clearHours(new Date(this.year, this.month, cell.text));
                        cell.range = time >= minDay && time <= maxDay;
                        cell.start = startDate && time === minDay;
                        cell.end = endDate && time === maxDay;
                    }
                });
            },
            getCellCls (cell) {
                return [
                    `${prefixCls}-cell`,
                    {
                        [`${prefixCls}-cell-selected`]: cell.selected || cell.start || cell.end,
                        [`${prefixCls}-cell-disabled`]: cell.disabled,
                        [`${prefixCls}-cell-today`]: cell.type === 'today',
                        [`${prefixCls}-cell-prev-month`]: cell.type === 'prev-month',
                        [`${prefixCls}-cell-next-month`]: cell.type === 'next-month',
                        [`${prefixCls}-cell-range`]: cell.range && !cell.start && !cell.end
                    }
                ];
            },

        }
    };
</script>
