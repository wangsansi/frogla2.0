// components/ticketCard/ticketCard.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ticket:{
      type: Object,
      value: {}
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cardTap:function (e:any) {
      this.triggerEvent('cardTap', e)
    }
  }
})
