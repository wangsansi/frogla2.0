
Page({ 
  data: {
    ticketsList:[
      {
        id:1,
        title: '3号楼大厅脏',
        content: '3号楼大厅脏，好几天了没人打扫',
        time: '2022-02-14',
        process: '完成'
      },
      {
        id:2,
        title: '3号楼大厅脏',
        content: '3号楼大厅脏，好几天了没人打扫',
        time: '2022-02-14',
        process: '完成'
      },
      {
        id:3,
        title: '3号楼大厅脏',
        content: '3号楼大厅脏，好几天了没人打扫',
        time: '2022-02-14',
        process: '完成'
      },
      {
        id:4,
        title: '3号楼大厅脏',
        content: '3号楼大厅脏，好几天了没人打扫',
        time: '2022-02-14',
        process: '完成'
      },
      {
        id:5,
        title: '3号楼大厅脏',
        content: '3号楼大厅脏，好几天了没人打扫',
        time: '2022-02-14',
        process: '完成'
      },
      {
        id:6,
        title: '3号楼大厅脏',
        content: '3号楼大厅脏，好几天了没人打扫3号楼大厅脏，好几天了没人打扫3号楼大厅脏，好几天了没人打扫',
        time: '2022-02-14',
        process: '完成'
      }
    ]
  },
  cardTap(e:any){
    console.log(e,'e')
    let ticketId = e.target.dataset.id
    wx.navigateTo({
      url: `../ticketDetails/ticketDetails?ticketId=${ticketId}`,
    })
  }
})

