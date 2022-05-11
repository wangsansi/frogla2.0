
Page({
  data:{
    categoryList: [{id:1,name:'绿化'},{id:2,name:'安防'},{id:3,name:'客服'},{id:4,name:'卫生'}],
    imageUrl: [],
    _num:3,
    suggestsList:[]
  },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea)
  },
  upLoadImage: function(){
    var that = this;
    wx.chooseMedia({
      count: 3, 
      mediaType: ['image'],
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'],
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var uploadedImageLists = that.data.imageUrl;
        console.log(res.tempFiles);
        var totalImages = uploadedImageLists.concat((res.tempFiles).map(item=>item.tempFilePath));
        var aNum = 0;
        if(totalImages.length >= 3) {
          totalImages.length = 3;
          aNum = 1;
        }
        console.log(totalImages)
          that.setData({
            num: 0,
            addNum: aNum,
            imageUrl:totalImages
          })
      }
    })
  },
  removeImage: function(e){
    var that = this;
    var currentImageLists = that.data.imageUrl; 
    currentImageLists.splice(e.target.dataset.index,1);
    that.setData({
        imageUrl:currentImageLists
    })
    if(currentImageLists.length < 9 && currentImageLists.length >= 1) {
       that.setData({
            addNum: 0
       })
    } else if(currentImageLists.length == 0) {
       that.setData({
            addNum: 1,
            num: 1
       })
    }
  },
  preImage:function(e:any){
    var that = this;
    var currentImageUrl = that.data.imageUrl[e.target.dataset.index]
    wx.previewImage({
      current: currentImageUrl, // 当前显示图片的http链接
      urls: that.data.imageUrl // 需要预览的图片http链接列表
    })
  },
  formSubmit: function(e:any) {
    let {title,category,content} = e.detail.value
    let image = this.data.imageUrl
    if (title && category && content) {
      let postData = {
        title,
        category,
        content,
        image
      }
      console.log(postData)
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
      wx.navigateBack()
    } else {
      wx.showToast({
        title: '工单未填写完整',
        icon: 'error',
        duration: 2000
      })      
    }
  }
})