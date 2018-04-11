<template>
    <li :class="classes" @click.stop="handleClick" :style="itemStyle">
      <Tooltip v-if="!!tooltip&&parent.collapse" :popper-class="popperClass" transfer :content="tooltip" placement="right"><slot></slot></Tooltip>
      <slot v-else></slot>
    </li>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { findComponentUpward } from '../../utils/assist';
    import Tooltip from '../tooltip/';
    const prefixCls = 'ivu-menu';
    import mixin from './mixin';

    export default {
        name: 'MenuItem',
        mixins: [ Emitter, mixin ],
        components: {
          Tooltip
        },
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            tooltip:String,
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                active: false,
                parent: findComponentUpward(this, 'Menu')
            };
        },
        computed: {
            popperClass(){
              return `${prefixCls}-tooltip`
            },
            classes () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-item-selected`]: this.active,
                        [`${prefixCls}-item-disabled`]: this.disabled,
                        [`${prefixCls}-item-tooltip`]:!!this.tooltip&&this.parent.collapse
                    }
                ];
            },
            itemStyle () {
                return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
                    paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
                } : {};
            }
        },
        methods: {
            handleClick () {
                if (this.disabled) return;

                let parent = findComponentUpward(this, 'Submenu');

                if (parent) {
                    this.dispatch('Submenu', 'on-menu-item-select', this.name);
                } else {
                    this.dispatch('Menu', 'on-menu-item-select', this.name);
                }
            }
        },
        mounted () {
            this.$on('on-update-active-name', (name) => {
                if (this.name === name) {
                    this.active = true;
                    this.dispatch('Submenu', 'on-update-active-name', name);
                } else {
                    this.active = false;
                }
            });
        }
    };
</script>
