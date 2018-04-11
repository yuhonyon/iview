<template>
    <form :class="classes" :autocomplete="autocomplete"><slot></slot></form>
</template>
<script>
    // https://github.com/ElemeFE/element/blob/dev/packages/form/src/form.vue
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-form';

    export default {
        name: 'iForm',
        props: {
            model: {
                type: Object
            },
            rules: {
                type: Object
            },
            labelWidth: {
                type: Number
            },
            labelPosition: {
                validator (value) {
                    return oneOf(value, ['left', 'right', 'top']);
                },
                default: 'right'
            },
            inline: {
                type: Boolean,
                default: false
            },
            showMessage: {
                type: Boolean,
                default: true
            },
            autocomplete: {
                validator (value) {
                    return oneOf(value, ['on', 'off']);
                },
                default: 'off'
            }
        },
        provide() {
            return { form : this };
        },
        data () {
            return {
                fields: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-label-${this.labelPosition}`,
                    {
                        [`${prefixCls}-inline`]: this.inline
                    }
                ];
            }
        },
        methods: {
            resetFields(prop) {
              if(prop){
                if(typeof prop ==='string'){
                  prop=[prop];
                }
                const field = this.fields.filter(field =>{

                  if(prop.includes(field.prop)){

                    field.resetField();
                    return true;
                  }
                  return false;
                })[0];
                if (!field) { throw new Error('[iView warn]: must call resetField with valid prop string!'); }
                return;
              }

                this.fields.forEach(field => {
                    field.resetField();
                });
            },
            resetValidate(prop){
              if(prop){
                if(typeof prop ==='string'){
                  prop=[prop];
                }
                const field = this.fields.filter(field =>{
                  if(prop.includes(field.prop)){
                    field.resetValidate();
                    return true;
                  }
                  return false;
                })[0];
                if (!field) { throw new Error('[iView warn]: must call resetValidate with valid prop string!'); }


                return;
              }
              this.fields.forEach(field => {
                  field.resetValidate();
              });
            },
            validate(callback) {
                return new Promise(resolve => {
                    let valid = true;
                    let count = 0;
                    this.fields.forEach(field => {
                        field.validate('', errors => {
                            if (errors) {
                                valid = false;
                            }
                            if (++count === this.fields.length) {
                                // all finish
                                resolve(valid);
                                if (typeof callback === 'function') {
                                    callback(valid);
                                }
                            }
                        });
                    });
                });
            },
            validateField(prop, cb) {
              const field = this.fields.filter(field => field.prop === prop)[0];
              if (!field) { throw new Error('[iView warn]: must call validateField with valid prop string!'); }
              field.validate('', cb);
            }
        },
        watch: {
            // rules() {
            //     this.validate();
            // }
        },
        created () {
            this.$on('on-form-item-add', (field) => {
                if (field) this.fields.push(field);
                return false;
            });
            this.$on('on-form-item-remove', (field) => {
                if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
                return false;
            });
        }
    };
</script>
