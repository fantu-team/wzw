const db=wx.cloud.database();
Page({
    data: {
        imgUrls: [
            '../../images/s1.jpg',
            '../../images/s2.jpg',
            '../../images/s3.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iscollect: true
    },
    collect: function(){
        this.setData({
            iscollect: !this.data.iscollect
        })
        console.log(this.data.iscollect);
    },
    onLoad: function (options) {

      },

})