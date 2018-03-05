<template>
    <div>

            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">

                <Form-item label-for="input" label="介绍" prop="desc">
                    <Input element-id="input" icon="ios-search" v-model.number="formValidate.desc" type="text" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                </Form-item>

                <Form-item label-for="select"  label="城市" prop="city">
                    <Select element-id="select" filterable v-model="formValidate.city" placeholder="请选择所在地">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                    </Select>
                </Form-item>

                <Form-item label-for="input" label="name" prop="name">
                    <Input element-id="input" icon="ios-search" v-model.number="formValidate.name" type="text" placeholder="请输入..."></Input>
                </Form-item>

                <FormItem label="Checkbox" prop="checkbox">
           <CheckboxGroup v-model="formValidate.checkbox">
               <Checkbox label="Eat"></Checkbox>
               <Checkbox label="Sleep"></Checkbox>
               <Checkbox label="Run"></Checkbox>
               <Checkbox label="Movie"></Checkbox>
           </CheckboxGroup>
       </FormItem>

                <Form-item>
                    <Button type="primary" @click="handleSubmit('formValidate')" icon="ios-cloud-upload-outline">提交</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px" icon="ios-reload">重置</Button>
                    <Button type="ghost" @click="handleReset2('formValidate')" style="margin-left: 8px" icon="ios-reload">重置</Button>
                </Form-item>
            </Form>


    </div>
</template>
<script>
    export default {

        data () {
          const validateInHospitalId=(rule,value,callback)=>{
              if(value==""||this.hospitalInfo.buildType===1){
                callback()
              }else if(value>=0||value!==parseInt(value)){
                callback(new Error('本地部署必须为负整数'))
              }else{
                callback()
              }

            }
            return {
              aaaaaa:true,
                dataCascader: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                color: '#19be6b',
                valuer: 3,
                valuec: [],
                datac: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                value1: '',
                value11: 25,
                data1: [],
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: [],
                name: '',
                formValidate: {
                  checkbox:[],
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: null,
                    cascader: [],
                    inputnumber: 1
                },

                ruleValidate: {

                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'change' }
                    ],
                    city: [
                        { required:  this.aaaaaafn, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: this.aaaaaafn, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: this.aaaaaafn, message: '请输入个人介绍', trigger: 'change',type:'any' },{
                          trigger:'change',
                        }
                    ]
                }
            }
        },
        methods: {
            aaaaaafn(){

              return this.aaaaaa;
            },
            handleSubmit (name) {

                //this.ruleValidate.desc[0].required=false;
                this.aaaaaa=false

              this.$refs[name].resetFields(['desc','city'])
                // this.$refs[name].validate((valid) => {
                //     if (valid) {
                //         this.$Message.success('提交成功!');
                //     } else {
                //         this.$Message.error('表单验证失败!');
                //     }
                // })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleReset2(name){
              this.$refs[name].validate();
            },
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            }
        }
    }
</script>
