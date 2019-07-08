<!-- 分享图片生成 -->
<template>
  <div class="container">
    <div class="share-img">
      <img :src="imgUrl" alt="分享图">
    </div>
    <div class="creat-img" ref="box">
      <img src="../src/header.jpg" style="width: 200px;height: 200px" alt="分享背景图">
      <!--<div id="qrcode" class="qrcode"></div>-->
      <img src="../src/header.jpg" style="width: 100px;height: 100px;margin-left: -100px" alt="分享背景图">
    </div>
  </div>
</template>

<script>
import { qrcanvas } from 'qrcanvas'
import html2canvas from 'html2canvas'
export default {
  data () {
    return {
      imgUrl: ''
    }
  },
  watch: {
    imgUrl (val, oldval) {
      // 监听到imgUrl有变化以后 说明新图片已经生成 隐藏DOM
      // this.$refs.box.style.display = 'none'
    }
  },
  created () {
    let that = this;
    that.$nextTick(function () {
      // 生成二维码
      // var canvas1 = qrcanvas({
      //   data: decodeURIComponent(that.$route.query.url),
      //   size: 128
      // });
      // document.getElementById('qrcode').innerHTML = '';
      // document.getElementById('qrcode').appendChild(canvas1);

      // 合成分享图
      // that.$indicator.open({
      //   text: '正在生成图片...',
      //   spinnerType: 'fading-circle'
      // });
      html2canvas(that.$refs.box,{
        backgroundColor: null,
        width:100,
        useCORS: true // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题
      }).then(function (canvas) {
        // that.imgUrl = URL.createObjectURL(that.base64ToBlob(canvas.toDataURL()))
        that.imgUrl = canvas.toDataURL("image/png");
        console.log(1111,that.imgUrl);
        // setTimeout(() => {
          // that.$indicator.close()
          // that.$toast({
          //   message: '图片已生成，长按保存分享给你的好友吧',
          //   position: 'middle',
          //   duration: 3000
          // })
        // }, 2000)
      })
    })
  },

  methods: {
    // base64转blob
    base64ToBlob: function (code) {
      let parts = code.split(';base64,');
      let contentType = parts[0].split(':')[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;

      let uInt8Array = new Uint8Array(rawLength);

      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
      }
      return new Blob([uInt8Array], {type: contentType})
    }
  }
}

</script>
<style scoped>
  .creat-img img{
    z-index: 3;
  }
  .qrcode{
    position: absolute;
    bottom: .15rem;
    left: 50%;
    margin-left: -64px;
    z-index: 5;
  }

</style>
