Page({
  data:{
    errorList: {},
    multiArray: [['1幢'],['1单元'],['101室']],
    multiIndex: [0,0,0],
    committeeArray: [],
    committeeIndex: 0,
    sexItems: [
      {value: '1', name: '男', checked: true},
      {value: '0', name: '女'},
    ],
    comitteeChecked: false
  },
  // 房号选择
  bindMultiPickerChange: function (e:any) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  // 性别选择
  radioChange: function(e:any){
    const items = this.data.sexItems
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }
    this.setData({
      sexItems:items
    })
  },
  // 是否业委会
  switchChange: function(e:any){
    this.setData({
      comitteeChecked:e.detail.value
    })
  },
  // 业委会职位
  bindpickerChange: function (e:any) {
    this.setData({
      committeeIndex: e.detail.value
    })
  },
  // 提交
  formSubmit: function (e:any) {
    let toastMsg = {'name': '姓名', 'mobile': '手机号', 'idcard': '身份证号'}
    let data= e.detail.value
    let keys = Object.keys(data)
    keys = keys.filter(key=>(data[key] === '' || (key === 'mobile' && data[key].length != 11) || (key === 'idcard' && data.idcard.length != 18)))
    console.log(keys)
    keys = keys.map(key=>toastMsg[key])
    keys.length > 0 && wx.showToast({
      title: `请正确填写：${keys.join('、')}`,
      icon: 'none',
      duration: 2000
    })
    if (keys.length < 1 ) {
      wx.showModal({
        title: '确定提交？',
        content: '请确认信息填写无误',
        success (res) {
          if (res.confirm) {
            wx.showToast({
              title: `提交成功`,
              icon: 'success',
              duration: 2000
            })
            wx.redirectTo({
              url: '../check/check'
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      
      
    } 
   
  },
  async getCommitteeData(){
    return new Promise((resolve)=>{
      resolve({
        code:0,
        msg:'ok',
        data: [{
          id:1,
          name: '业委会主任'
        },{
          id:2,
          name: '业委会委员'
        },{
          id:3,
          name: '监事会主任'
        },{
          id:4,
          name: '监事会委员'
        }]
      })
    })
  },
  async getMultiData(multiIndex:number[],column?: number){
    let buildingList = this.data.multiArray[0],
        unitList = this.data.multiArray[1],
        roomList = this.data.multiArray[2],
        bulidingIndex = multiIndex[0],
        unitIndex = multiIndex[1]
    if (!column || column === 0) {
      // 初始化
      if (column !== 0) {
        console.log('初始化,请求楼号')
        buildingList = (await this.getBuildingCount()).data
        buildingList = buildingList.map((item)=>`${item}幢`)
      }
      console.log('请求单元')
      unitList = (await this.getUnitCount(buildingList[bulidingIndex])).data 
      unitList = unitList.map((item)=>`${item}单元`)   
    }
    console.log('请求房号')
    roomList = (await this.getRoomList([buildingList[bulidingIndex],unitList[unitIndex]])).data
    roomList = roomList.map((item)=>`${item}室`)
    
    let multiArray : string [] [] = [buildingList,unitList,roomList]
    return multiArray
  },
  getBuildingCount(){
    return new Promise((resolve)=>{
      resolve({
        code:0,
        msg:'ok',
        data: [2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      })
    })
  },
  getUnitCount(e:number){
    console.log(e)
    return new Promise((resolve)=>{
      resolve({
        code:0,
        msg:'ok',
        data: [1,2,3]
      })
    })
  },
  getRoomList(e:[]){
    console.log(e)
    return new Promise((resolve)=>{
      resolve({
        code:0,
        msg:'ok',
        data: ['101','102','103','104']
      })
    })
  },
  async bindMultiPickerColumnChange(e:any){
    let {column, value} = e.detail
    let multiIndex = this.data.multiIndex
    if (column === 2) {
      multiIndex[2] = value
      this.setData({
        multiIndex
      }) 
      return
    }
    if (column === 0) {
      multiIndex[0] = value
      multiIndex[1] = 0
      multiIndex[2] = 0
    } else if (column === 1){
      multiIndex[1] = value
      multiIndex[2] = 0
    }
    let multiArray = await this.getMultiData(multiIndex,column)
    this.setData({
      multiArray,
      multiIndex
    }) 
  },
  async onLoad() {
    let multiArray =  await this.getMultiData(this.data.multiIndex)
    let committeeArray = (await this.getCommitteeData()).data
    this.setData({
      multiArray,
      committeeArray
    }) 
  },
})

export {}