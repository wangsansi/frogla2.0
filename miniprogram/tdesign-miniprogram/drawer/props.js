/* eslint-disable */
const props = {
    /** 点击蒙层时是否触发抽屉关闭事件 */
    closeOnOverlayClick: {
        type: Boolean,
        value: true,
    },
    /** 抽屉关闭时是否销毁节点 */
    destroyOnClose: {
        type: Boolean,
        value: false,
    },
    /** 抽屉里的列表项 */
    items: {
        type: Array,
    },
    /** 抽屉方向 */
    placement: {
        type: String,
        value: 'right',
    },
    /** 是否显示遮罩层 */
    showOverlay: {
        type: Boolean,
        value: true,
    },
    /** 组件是否可见 */
    visible: {
        type: Boolean,
        value: false,
    },
    /** 抽屉层级，样式默认为 1500 */
    zIndex: {
        type: Number,
    },
};
export default props;

//# sourceMappingURL=props.js.map
