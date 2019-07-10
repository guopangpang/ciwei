<template>
  <div :style="{backgroundColor: bg_color}" class="container">
    <div class="hello">
      砸 瓦鲁多！！！
    </div>
    <div class="aaa">
      砸 瓦鲁多！！！
    </div>
    <div class="bbb">
      the World!!
    </div>
    <div class="ccc">
      the World!!
    </div>
    <div class="ddd">
      the World!!
    </div>

    <div class="eeee" :style="{backgroundColor: 'yellow'}">
      <div style="position: relative;height: 100%;width: 80%">
        <img :src="show_bg" style="position: absolute;top: 0;width: 100%;height: 100%">
        <img :src="show_img" style="position: absolute;bottom: 0">
      </div>
    </div>

    <div>
      <div v-if="show_choose_person" style="display:flex; width: 75vw;overflow: auto">
        <div style="width: 50px;flex: none">
          <img src="../src/test/chanquan.png" style="width: 40px">
          <div>人物1</div>
        </div>
        <div style="width: 50px;flex: none" @click="aaaa()">
          <img src="../src/test/gongneng.png" style="width: 40px">
          <div>人物11</div>
        </div>
        <div style="width: 50px;flex: none">
          <img src="../src/test/chanquan.png" style="width: 40px">
          <div>人物2</div>
        </div>
        <div style="width: 50px;flex: none">
          <img src="../src/test/sanzi.png" style="width: 40px">
          <div>人物4</div>
        </div>
        <div style="width: 50px;flex: none">
          <img src="../src/test/chanquan.png" style="width: 40px">
          <div>人物6</div>
        </div>
        <div style="width: 50px;flex: none">
          <img src="../src/test/chanquan.png" style="width: 40px">
          <div>人物5</div>
        </div>
        <div style="width: 50px;flex: none">
          <img src="../src/test/chanquan.png" style="width: 40px">
          <div>人物1</div>
        </div>
        <div style="width: 50px;flex: none">
          <img src="../src/test/chanquan.png" style="width: 40px">
          <div>人物1</div>
        </div>

      </div>

      <div v-if="show_choose_gd" style="display:flex; width: 75vw;overflow: auto">
        <div style="width: 50px;flex: none">
          <img src="../src/test/chanquan.png" style="width: 40px">
          <div>人物1</div>
        </div>
        <div style="width: 50px;flex: none" @click="bbbb()">
          <img src="../src/test/gongneng.png" style="width: 40px">
          <div>人物11</div>
        </div>
        <div style="width: 50px;flex: none">
          <img src="../src/test/chanquan.png" style="width: 40px">
          <div>人物2</div>
        </div>
      </div>

      <div v-if="show_choose_bg_color" style="display:flex; width: 75vw;overflow: auto">
        <div style="width: 50px;flex: none">
          <img src="../src/test/chanquan.png" style="width: 40px">
          <div>人物1</div>
        </div>
        <div style="width: 50px;flex: none" @click="cccc()">
          <img src="../src/test/gongneng.png" style="width: 40px">
          <div>人物11</div>
        </div>
        <div style="width: 50px;flex: none">
          <img src="../src/test/chanquan.png" style="width: 40px">
          <div>人物2</div>
        </div>
      </div>
    </div>

    <div style="display: flex">
      <div @click="choose_person()">人物</div>
      <div @click="choose_bg()">背景</div>
      <div @click="choose_bg_color()">颜色</div>
    </div>

    <Footer></Footer>


  </div>
</template>

<script>
import Footer from './my_footer'

export default {
  name: 'HelloWorld',
  components: {Footer},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show_img:require('../src/test/chanquan.png'),
      show_bg:require('../src/test/five.png'),
      bg_color:'red',
      show_choose_person:true,
      show_choose_gd:false,
      show_choose_bg_color:false
    }
  },
  methods:{
    aaaa(){
      this.show_img = require('../src/test/sanzi.png')
    },
    bbbb(){
      this.show_bg = require('../src/test/four.png')
    },
    cccc(){
      this.bg_color = 'green'
    },
    choose_person(){
      this.show_choose_person = true;
      this.show_choose_gd = false;
      this.show_choose_bg_color = false
    },
    choose_bg(){
      this.show_choose_person = false;
      this.show_choose_gd = true;
      this.show_choose_bg_color = false
    },
    choose_bg_color(){
      this.show_choose_person = false;
      this.show_choose_gd = false;
      this.show_choose_bg_color = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    height: 80vh
  }
  .hello{
    font-family: SourceHanSansSC-Bold;
  }
  .aaa{
    font-family: SourceHanSansSC-Light;
  }
  .bbb{
    font-family: FF-DIN-Round-Pro-Black;
  }
  .ccc{
    font-family: FF-DIN-Round-Pro-Bold;
  }
  .ddd{
    font-family: FF-DIN-Round-Pro-Medium;
  }
  .eeee{
    width: 90%;
    height: 300px;
    border: 4px solid #000;
  }
</style>
