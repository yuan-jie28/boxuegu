//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //课程列表
    class: [
      { id: 1, img: 'https://m.boxuegu.com/web/images/index/course.png', text: '就业课' },
      { id: 2, img: 'https://m.boxuegu.com/web/images/index/mircoCourse.png', text: '提升课' },
      { id: 3, img: 'https://m.boxuegu.com/web/images/index/freeMicroCourse.png', text: '免费课' },
      { id: 4, img: 'https://m.boxuegu.com/web/images/index/courseType.png', text: '课程分类' },
    ],
    //就业课列表
    list:[
      { id: 1, img: 'https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png', text1: "JavaEE", text2: "JavaEE是一个开放的、基于标椎的平台", text3: "1784人学习", money: "￥14980.00" },
      { id: 2, img: 'https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png', text1: "Python+人工智能", text2: "最有前景的开发职位", text3: "877人学习", money: "￥14980.00" },
      { id: 3, img: 'https://file.boxuegu.com/3940be1c755a44eeb8e2e0aaf984756e.png', text1: "前端与移动开发", text2: "用户界面的构筑者", text3: "1230人学习", money: "￥14980.00" },
      { id: 4, img: 'https://file.boxuegu.com/6c0ffe21a06d421d90be8a0061c14c1a.png', text1: "软件测试", text2: "", text3: "1784人学习", money: "￥14980.00" },
    ],
    //推荐课程
    recommend: [
      { id: 1, img1: "http://file.boxuegu.com/e6432db4d06c42b9aca7aede22ba9437.jpg", test1: "所有人都能学的数据…", test2: "710人学习", money1: "￥399.00", img2: "http://file.boxuegu.com/989b9bd2a12d471b8e7579b7182d08b6.png", test3: "MySQL数据库性能优…", test4: "107人学习", money2: "￥199.00" },
      { id: 2, img1: "http://file.boxuegu.com/df25a3e7031a48d39a896d4e38d3d3d5.png", test1: "Java并发编程原理精讲", test2: "107人学习", money1: "￥199.00", img2: "http://file.boxuegu.com/854b60de9d6742dbb29a47370b7c8650.png", test3: "GAN生成对抗网络入…", test4: "183人学习", money2: "￥199.00" },
      { id: 3, img1: "http://file.boxuegu.com/854b60de9d6742dbb29a47370b7c8650.png", test1: "基于Kylin搞定千亿…", test2: "187人学习", money1: "￥199.00", img2: "http://file.boxuegu.com/90bb08a6bacd49baa5492c5eaa94c060.jpg", test3: "游戏AI实战课——深入…", test4: "109人学习", money2: "￥199.00"},
    ],
    //免费课
    free: [
      { id: 1, img1: "http://file.boxuegu.com/74773be265b840b3af9da88f6f42841d.jpg", test1: "2小时用GO语言实现…", test2: "770人学习", money: "免费", img2: "http://file.boxuegu.com/7e1535f414a64d3fa4d60e7c8a84cca3.jpg", test3: "JavaEE在线就业班2.…", test4: "107人学习", money: "免费" },
      { id: 2, img1: "http://file.boxuegu.com/3ed09c2ae4ea4542add4ac8b098c9535.jpg", test1: "Axure基础课", test2: "452人学习", money: "免费", img2: "http://file.boxuegu.com/6a0330c2237b4ed3af2a2703cc2f1419.jpg", test3: "产品经理职业公开课", test4: "369人学习", money: "免费" },
      { id: 3, img1: "http://file.boxuegu.com/ccc47386e2b048658f944d0db943321c.jpg", test1: "短视频创造营造探店精…", test2: "437人学习", money: "免费", img2: "http://file.boxuegu.com/49b20b70e42e446cafc60f9c6fd98d84.jpg", test3: "剪辑大神50招", test4: "649人学习", money: "免费" },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
   
  }
})
