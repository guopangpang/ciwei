<template>
  <div :style="{backgroundColor: bg_color}" class="container">
    <!--图片组件选择-->
    <div v-if="!is_new_img" class="second_container">
      <div class="create_img" :style="{backgroundColor: '#fff100'}">
        <div class="back_img">
          <img src="../src/back.png" @click="back_login()">
          <div>
            返回编辑
            <!--<img src="../src/btn/edit.png" style="width: 10vw;height: 10vw">-->
          </div>
        </div>
        <div class="next_img">
          <div style="margin-right: -2.6vw">
            生产海报
            <!--<img src="../src/btn/ad.png" style="width: 10vw;height: 10vw">-->
          </div>
          <img src="../src/next.png" @click="change_is_new_img()">
        </div>

        <!--图片显示-->
        <div style="position: relative;height: 100%;width: 100%">
          <img :src="show_bg" class="greate_img_bg">
          <img :src="show_img" class="greate_img_person" style="bottom: 4vw" :style="{width:show_img=== require('../src/person/7.png')?'83%':'90%'}">
          <div style="position: absolute;z-index: 5000;top: 18vw;left:3.5vw;width: 10px;font-family: SourceHanSansCN-Regular;font-size: .4rem;line-height: .6rem">{{my_name}}／是我</div>
          <div style="position: absolute;z-index: 5000;top: 18vw;right:3.5vw;width: 10px;font-family: SourceHanSansCN-Regular;font-size: .4rem;line-height: .6rem">我是／{{my_work}}</div>
        </div>
      </div>

      <!--选择列表-->
      <div style="flex: .1 1 auto;display: flex;align-items: center;">
        <div v-if="show_choose_person" class="choose_list">
          <div class="choose_item" v-for="(item,index) in person_list" :key="index" @click="change_person(index)">
            <img :src="item.img">
            <div>{{(index + 1)>9?0:'00'}}{{index + 1}}</div>
          </div>
        </div>

        <div v-if="show_choose_gd" class="choose_list">
          <div class="choose_item" v-for="(item,index) in bg_list" :key="index" @click="change_bg(index)">
            <img :src="item.bg">
            <div>{{(index + 1)>9?0:'00'}}{{index + 1}}</div>
          </div>
        </div>

        <div v-if="show_choose_bg_color" class="choose_list">
          <div class="choose_color_item" v-for="(item,index) in color_list" :key="index" @click="change_color(index)">
            <div class="choose_color_item_color" :style="{backgroundColor:item.color}"></div>
            <div class="choose_color_item_index">{{(index + 1)>9?0:'00'}}{{index + 1}}</div>
          </div>
        </div>
      </div>

      <!--按钮-->
      <div style="display: flex;justify-content: space-between">
        <div @click="choose_person()" :style="{backgroundColor:show_choose_person?'#fff100':'#fff'}" class="choose_button">
          <!--<img src="../src/btn/person.png" style="width: 13.5vw">-->人物
        </div>
        <div @click="choose_bg()" :style="{backgroundColor:show_choose_gd?'#fff100':'#fff'}" class="choose_button">
          <!--<img src="../src/btn/bg.png" style="width: 13.5vw">-->背景
        </div>
        <div @click="choose_bg_color()" :style="{backgroundColor:show_choose_bg_color?'#fff100':'#fff'}" class="choose_button">
          <!--<img src="../src/btn/bg_color.png" style="width: 13.5vw">-->底色
        </div>
      </div>
    </div>

    <!--按钮-->
    <div v-if="is_new_img" style="position: fixed;bottom: -2vw">
      <div style="display: flex;justify-content: space-between;width: 75vw;margin: 5vw 12.5vw">
        <div class="choose_button2" @click="back_choose_person()">
          <!--<img src="../src/btn/back2.png" style="width: 12vw">-->返回
        </div>
        <div class="choose_button2" @click="changan = !changan" style="width: 28vw">
          <!--<img src="../src/btn/press.png" style="width: 12vw">-->长按图片
          <!--<a :href="imgUrl" download="logo.png" style="color: #000000;text-decoration:none;">长按</a>-->
        </div>
        <div class="choose_button2" @click="goto_fenxiang()">
          <!--<img src="../src/btn/share.png" style="width: 12vw">-->分享
        </div>
      </div>
    </div>

    <div style="position: fixed;top:0;left: 0; display: flex;justify-content: center;align-items: center;
            width: 100vw;height: 100vh;background-color: rgba(0,0,0,0.6)" v-show="changan" @touchstart="changan_touchstart()"  @touchend="changeChangan()">
      <img :src="imgUrl" style="width: 85vw;">
    </div>
    <!--图片生成-->
    <div v-if="is_new_img" class="third_container" ref="box">
      <!--图片绘制-->
      <div :style="{backgroundColor: new_image.color}" class="new_img_bg" ref="box" v-show="is_true_img">
        <div style="padding: 4.5vw 0 2vw">
          <div class="new_img_title">
            <!--<div style="letter-spacing:-0.5vw;font-size: 7vw">{{new_image.im}}</div>-->
            <!--<div style="margin-top: -3vw;letter-spacing:-0.5vw;font-size: 7vw">{{new_image.able}}</div>-->
            <img :src="new_image.title" style="width: 66vw;margin-bottom: -1.5vw;">
          </div>
          <div class="new_image">
            <div style="position: relative;height: 100%;width: 100%">
              <div class="title_right_left">
                <div class="title_left">
                  <!--<div class="game_master">LOGO</div>-->
                  <!--<div class="game_master" style="margin-top: -0.4rem">MASTER</div>-->
                  <!--<div class="game_master_ch">品牌设计</div>-->
                  <img src="../src/master_xi.png" style="width: 12vw;">
                </div>
                <div class="title_right">
                  <!--<div class="number">NO.{{number}}</div>-->
                  <!--<div class="number_logo">L{{number}}满级</div>-->
                  <img :src="no1" style="width: 19vw;margin-top: -1.5vw">
                </div>
              </div>
              <img :src="new_image.bg" class="greate_img_bg">
              <img :src="new_image.person" class="greate_img_person" :style="{width:new_image.person=== require('../src/person/7.png')?'83%':'90%'}">
              <img class="rigjt_logo" src="../src/logo.png" style="position: absolute;z-index: 5000;width: 8vw;bottom: 6vw;right: 1vw;transform:rotate(90deg)">
              <div style="position: absolute;z-index: 5000;top: 22vw;left:4.5%;width: 10px;font-family: SourceHanSansCN-Regular; font-size: .4rem;line-height: .6rem">{{my_name}}／是我</div>
              <div style="position: absolute;z-index: 5000;top: 22vw;right:4.5%;width: 10px;font-family: SourceHanSansCN-Regular;font-size: .4rem;line-height: .6rem">我是／{{my_work}}</div>
            </div>
          </div>
        </div>
        <div class="footer_info">
          <!--<div style="width: 100%">-->
            <img :src="new_image.foot" style="height: 15.5vw">
            <!--<div class="footer_first">-->
              <!--<div class="start_game">START GAME</div>-->
              <!--<div class="shaoshao">-->
                <!--<div style="margin-top: 0">扫一扫</div>-->
                <!--<div style="margin-top: -0.4rem">变怪兽</div>-->
              <!--</div>-->
              <!--<img src="../src/foot_first_word.png" style="height: 10.5vw;width: 56.06vw;margin-left: 0vw">-->
            <!--</div>-->
            <!--<div class="footer_second">-->
              <!--<div class="tuoluoguai">{{new_image.name}}</div>-->
              <!--<div class="wojiushi">-->
                <!--<div style="margin-top: -0.2rem">角色 [你心中的超级英雄]</div>-->
                <!--<div style="margin-top: -0.2rem">惊喜 [性格彩蛋最终显示]</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <img src="../src/test/chanquan.png" class="erweima_img">
        </div>
      </div>
      <!--生成图片显示-->
      <img :src="imgUrl" style="width: 73vw;margin-top: 15vw;box-shadow:0 2px 8px 0 rgba(47,45,2,0.16)" v-show="!is_true_img">
    </div>

  </div>
</template>

<script>
  import html2canvas from 'html2canvas'
  export default {
    name: 'game',
    data () {
      return {
        my_name:'',//输入的名称
        my_work:'',//输入的工作
        show_img:'',//人物图片
        show_bg:require('../src/bg/bg1.png'),//背景图片
        bg_color:'',//背景颜色
        number:2,//选择logo编号
        show_choose_person:true,//人物选择栏
        show_choose_gd:false,//背景图选择栏
        show_choose_bg_color:false,//背景色选择栏
        person_list:[
          {img:require('../src/person/1.png'),title:require('../src/title/title1.png'),foot:require('../src/foot/foot1.png'),name:'刺猬陀螺怪',im:'我是 [佛系品牌设计师] ',able:'擅长 [吹牛卖稿谈客户]'},
          {img:require('../src/person/2.png'),title:require('../src/title/title2.png'),foot:require('../src/foot/foot2.png'),name:'刺猬陀螺怪',im:'我是 [软萌品牌设计师]',able:'擅长 [沟通交流一稿过]'},
          {img:require('../src/person/3.png'),title:require('../src/title/title3.png'),foot:require('../src/foot/foot3.png'),name:'刺猬陀螺怪',im:'我是 [肥宅品牌设计师]',able:'擅长 [节约时尚国际范]'},
          {img:require('../src/person/4.png'),title:require('../src/title/title4.png'),foot:require('../src/foot/foot4.png'),name:'刺猬陀螺怪',im:'我是 [逗比品牌设计师]',able:'擅长 [放大缩小改配色]'},
          {img:require('../src/person/5.png'),title:require('../src/title/title5.png'),foot:require('../src/foot/foot5.png'),name:'波波陀螺怪',im:'我是 [闷骚品牌设计师]',able:'擅长[帅气风流有文化]'},
          {img:require('../src/person/6.png'),title:require('../src/title/title6.png'),foot:require('../src/foot/foot6.png'),name:'小美陀螺怪',im:'我是 [学霸品牌设计师]',able:'擅长[熬夜加班改稿件]'},
          {img:require('../src/person/7.png'),title:require('../src/title/title7.png'),foot:require('../src/foot/foot7.png'),name:'落鸡陀螺怪',im:'我是 [朋克品牌设计师]',able:'擅长[时尚动感小清新]'},
          {img:require('../src/person/8.png'),title:require('../src/title/title8.png'),foot:require('../src/foot/foot8.png'),name:'托尼陀螺怪',im:'我是 [咸鱼品牌设计师]',able:'擅长 [软件技能样样通]'},
          {img:require('../src/person/9.png'),title:require('../src/title/title9.png'),foot:require('../src/foot/foot9.png'),name:'好抠陀螺怪',im:'我是 [懒癌品牌设计师]',able:'擅长 [酷炫狂拽吊炸天]'},
          {img:require('../src/person/10.png'),title:require('../src/title/title10.png'),foot:require('../src/foot/foot10.png'),name:'诺娃陀螺怪',im:'我是 [萝莉品牌设计师]',able:'擅长 [冷艳高贵接地气]'},
          {img:require('../src/person/11.png'),title:require('../src/title/title11.png'),foot:require('../src/foot/foot11.png'),name:'山姆陀螺怪',im:'我是 [学渣品牌设计师] ',able:'擅长 [奔放洋气有风度]'},
          {img:require('../src/person/12.png'),title:require('../src/title/title12.png'),foot:require('../src/foot/foot12.png'),name:'猪猪陀螺怪',im:'我是 [吃货品牌设计师]',able:'擅长 [学习总结做设计]'},
          {img:require('../src/person/13.png'),title:require('../src/title/title13.png'),foot:require('../src/foot/foot13.png'),name:'安娜陀螺怪',im:'我是 [御姐品牌设计师]',able:'擅长 [外猛内柔女汉子]'},
          {img:require('../src/person/14.png'),title:require('../src/title/title14.png'),foot:require('../src/foot/foot14.png'),name:'小美陀螺怪',im:'我是 [修仙品牌设计师]',able:'擅长 [首页私活赚大发]'},
          {img:require('../src/person/15.png'),title:require('../src/title/title15.png'),foot:require('../src/foot/foot15.png'),name:'雷雷陀螺怪',im:'我是 [清真品牌设计师] ',able:'擅长 [忧郁深沉无所谓]'},
          {img:require('../src/person/16.png'),title:require('../src/title/title16.png'),foot:require('../src/foot/foot16.png'),name:'星星陀螺怪',im:'我是 [怪诞品牌设计师]',able:'擅长 [低调奢华有内涵]'},
          {img:require('../src/person/17.png'),title:require('../src/title/title17.png'),foot:require('../src/foot/foot17.png'),name:'精杠陀螺怪',im:'我是 [奶狗品牌设计师]',able:'擅长 [字体品牌做捞狗]'},
          {img:require('../src/person/18.png'),title:require('../src/title/title18.png'),foot:require('../src/foot/foot18.png'),name:'噜当陀螺怪',im:'我是 [暖男品牌设计师] ',able:'擅长 [卖萌嘟嘴剪刀手]'},
          {img:require('../src/person/19.png'),title:require('../src/title/title19.png'),foot:require('../src/foot/foot19.png'),name:'斯斯陀螺怪',im:'我是 [硬核品牌设计师]',able:'擅长 [生活工作两不误]'},
          {img:require('../src/person/20.png'),title:require('../src/title/title20.png'),foot:require('../src/foot/foot20.png'),name:'扁壶陀螺怪',im:'我是 [精分品牌设计师]',able:'擅长 [五彩斑斓的黑色]'},
        ],//人物列表
        bg_list:[
          {bg:require('../src/bg/bg23.png')},
          {bg:require('../src/bg/bg24.png')},
          {bg:require('../src/bg/bg1.png')},
          {bg:require('../src/bg/bg2.png')},
          {bg:require('../src/bg/bg3.png')},
          {bg:require('../src/bg/bg6.png')},
          {bg:require('../src/bg/bg5.png')},
          {bg:require('../src/bg/bg4.png')},
          {bg:require('../src/bg/bg15.png')},
          {bg:require('../src/bg/bg16.png')},
          {bg:require('../src/bg/bg17.png')},
          {bg:require('../src/bg/bg18.png')},
          {bg:require('../src/bg/bg19.png')},
          {bg:require('../src/bg/bg20.png')},
          {bg:require('../src/bg/bg22.png')},
          {bg:require('../src/bg/bg21.png')},
          {bg:require('../src/bg/bg14.png')},
          {bg:require('../src/bg/bg11.png')},
          {bg:require('../src/bg/bg13.png')},
          {bg:require('../src/bg/bg12.png')},
          {bg:require('../src/bg/bg7.png')},
          {bg:require('../src/bg/bg9.png')},
          {bg:require('../src/bg/bg10.png')},
          {bg:require('../src/bg/bg8.png')},
        ],//背景图列表
        color_list:[{color:'#ffffff'},{color:'#fff100'},{color:'#00b27a'},{color:'#1295d8'},{color:'#f87089'},{color:'#d79133'},{color:'#faedbc'}],//背景色列表
        new_image:{person:'',name:'',title:'', foot:'', able:'',im:'',bg:'',color:''},//生成图片需要的信息
        changan:false,
        isFirst:true,
        start_time:'',
        no1:require('../src/bianzi/no1.png'),

        is_new_img:false,//控制显示选择图片选择显示
        imgUrl:'',//生成图片
        is_true_img:true//真正图片显示
      }
    },
    mounted(){
      //设定页面首次显示默认值
      this.show_img = this.person_list[0].img;
      this.show_bg = this.bg_list[4].bg;
      this.bg_color = this.color_list[1].color;
      //设定生成图片信息
      this.new_image.person = this.person_list[0].img;
      this.new_image.name = this.person_list[0].name;
      this.new_image.able = this.person_list[0].able;
      this.new_image.im = this.person_list[0].im;
      this.new_image.title = this.person_list[0].title;
      this.new_image.foot = this.person_list[0].foot;
      this.new_image.bg = this.bg_list[4].bg;
      this.new_image.color = this.color_list[1].color;


      this.my_name = localStorage.getItem('my_name');
      this.my_work = localStorage.getItem('my_work');
      this.number = localStorage.getItem('number');
      if(this.number ==1){
        this.no1 = require('../src/bianzi/no1.png')
      }else if(this.number ==2){
        this.no1 = require('../src/bianzi/no2.png')
      }else if(this.number ==3){
        this.no1 = require('../src/bianzi/no3.png')
      }

    },
    methods:{
      //选择人物
      change_person(id){
        if(this.isFirst){
          this.duiying(id);
        }
        this.show_img = this.person_list[id].img;
        this.new_image.person = this.person_list[id].img;
        this.new_image.name = this.person_list[id].name;
        this.new_image.able = this.person_list[id].able;
        this.new_image.im = this.person_list[id].im;
        this.new_image.title = this.person_list[id].title;
        this.new_image.foot = this.person_list[id].foot;
      },
      duiying(id){
        switch(id){
          case 0:
            this.show_bg = this.bg_list[4].bg;
            this.new_image.bg = this.bg_list[4].bg;
            return;
          case 1:
            this.show_bg = this.bg_list[5].bg;
            this.new_image.bg = this.bg_list[5].bg;
            return;
          case 2:
            this.show_bg = this.bg_list[6].bg;
            this.new_image.bg = this.bg_list[6].bg;
            return;
          case 3:
            this.show_bg = this.bg_list[7].bg;
            this.new_image.bg = this.bg_list[7].bg;
            return;
          case 4:
            this.show_bg = this.bg_list[8].bg;
            this.new_image.bg = this.bg_list[8].bg;
            return;
          case 5:
            this.show_bg = this.bg_list[9].bg;
            this.new_image.bg = this.bg_list[9].bg;
            return;
          case 6:
            this.show_bg = this.bg_list[10].bg;
            this.new_image.bg = this.bg_list[10].bg;
            return;
          case 7:
            this.show_bg = this.bg_list[11].bg;
            this.new_image.bg = this.bg_list[11].bg;
            return;
          case 8:
            this.show_bg = this.bg_list[20].bg;
            this.new_image.bg = this.bg_list[20].bg;
            return;
          case 9:
            this.show_bg = this.bg_list[21].bg;
            this.new_image.bg = this.bg_list[21].bg;
            return;
          case 10:
            this.show_bg = this.bg_list[22].bg;
            this.new_image.bg = this.bg_list[22].bg;
            return;
          case 11:
            this.show_bg = this.bg_list[23].bg;
            this.new_image.bg = this.bg_list[23].bg;
            return;
          case 12:
            this.show_bg = this.bg_list[16].bg;
            this.new_image.bg = this.bg_list[16].bg;
            return;
          case 13:
            this.show_bg = this.bg_list[17].bg;
            this.new_image.bg = this.bg_list[17].bg;
            return;
          case 14:
            this.show_bg = this.bg_list[18].bg;
            this.new_image.bg = this.bg_list[18].bg;
            return;
          case 15:
            this.show_bg = this.bg_list[19].bg;
            this.new_image.bg = this.bg_list[19].bg;
            return;
          case 16:
            this.show_bg = this.bg_list[12].bg;
            this.new_image.bg = this.bg_list[12].bg;
            return;
          case 17:
            this.show_bg = this.bg_list[13].bg;
            this.new_image.bg = this.bg_list[13].bg;
            return;
          case 18:
            this.show_bg = this.bg_list[14].bg;
            this.new_image.bg = this.bg_list[14].bg;
            return;
          case 19:
            this.show_bg = this.bg_list[15].bg;
            this.new_image.bg = this.bg_list[15].bg;
            return;

        }
      },
      //选择背景图片
      change_bg(id){
        this.isFirst = false;
        this.show_bg = this.bg_list[id].bg;
        this.new_image.bg = this.bg_list[id].bg;
      },
      //选择背景色
      change_color(id){
        this.isFirst = false;
        this.bg_color = this.color_list[id].color;
        this.new_image.color = this.color_list[id].color;
      },
      //显示人物选择栏
      choose_person(){
        this.show_choose_person = true;
        this.show_choose_gd = false;
        this.show_choose_bg_color = false
      },
      //显示背景图片选择栏
      choose_bg(){
        this.show_choose_person = false;
        this.show_choose_gd = true;
        this.show_choose_bg_color = false
      },
      //显示背景色选择栏
      choose_bg_color(){
        this.show_choose_person = false;
        this.show_choose_gd = false;
        this.show_choose_bg_color = true
      },
      //显示新生成的图片
      change_is_new_img(){
        this.is_true_img = true;
        this.is_new_img = true;
        this.bg_color = '#fff100';
        this.$nextTick(()=>{
          this.create_img()
        });
      },
      //返回login页面
      back_login(){
        this.$router.push({path:'/login'})
      },
      changan_touchstart(){
        this.start_time = new Date();
        // console.log(this.start_time.getTime())
      },
      changeChangan(){
        // this.changan = !this.changan
        let end_time = new Date();
        if((end_time.getTime() - this.start_time.getTime())<100){
          this.changan = !this.changan
        }
        // console.log(end_time.getTime() - this.start_time.getTime())
      },
      back_choose_person(){
        this.is_new_img = false;
        this.bg_color = this.new_image.color;
      },
      goto_fenxiang(){
        this.$router.push({path:'/newImg'})
      },
      create_img(){
        setTimeout(()=>{
          html2canvas(this.$refs.box,{
            backgroundColor: this.new_image.color,
            useCORS: true // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题
          }).then((canvas) => {
            // this.imgUrl = URL.createObjectURL(this.base64ToBlob(canvas.toDataURL()))
            this.imgUrl = canvas.toDataURL("image/png");
            this.is_true_img = false
          })
        },2000);
      },
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
      },
    }
  }
</script>

<style scoped>
  .container{
    width: 100vw;
    height: 100vh;
  }
  .second_container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /*width: calc(100% - 14vw);*/
    /*height: calc(100% - 14vw);*/
    /*padding: */
    width: calc(80vw - 10px);
    height:  calc(100vh - 7vw);
    padding: 5vw 10vw 2vw
  }
  .create_img{
    position: relative;
    width: calc(80vw - 10px);
    height: 99vw;
    border: 5px solid #000;
    border-radius: 5px;
    /*flex: .5 1 auto;*/
  }
  .back_img{
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 1000;
    top: 3vw;
    left: 3vw;
  }
  .back_img img{
    width: 9vw;
    height: 9vw;
  }
  .back_img div{
    margin-left: 5px;
    line-height: 1rem;
    width: 46px;
    font-family: SourceHanSansSC-Bold;
    font-weight: bold;
  }
  .next_img{
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 1000;
    top: 3vw;
    right: 3vw;
  }
  .next_img img{
    width: 9vw;
    height: 9vw;
  }
  .next_img div{
    margin-right: -8px;
    line-height: 1rem;
    width: 46px;
    font-family: SourceHanSansSC-Bold;
    font-weight: bold;
  }
  .greate_img_bg{
    position: absolute;
    top: -0.2%;
    left: -0.2%;
    width: 100.3%;
    height: 100.5%
  }
  .greate_img_person{
    position: absolute;
    width: 90%;
    left: 6%;
    bottom: 4vw
  }
  .choose_list{
    display:flex;
    width: 82vw;
    /*height: 26vw;*/
    overflow: auto;
    margin: 1vw 0 0 0;
  }
  .choose_item{
    width: 18vw;
    flex: none;
    text-align: center;
  }
  .choose_item img{
    width: 13.6vw;
    height: 17.66vw;
  }
  .choose_item div{
    font-family: FF-DIN-Round-Pro-Bold;
    text-align: center;
  }
  .choose_color_item{
    width: 18%;
    margin-right: 4%;
    flex: none;
  }
  .choose_color_item_color{
    border: 2px solid #000;
    height: 19vw;
  }
  .choose_color_item_index{
    font-family: FF-DIN-Round-Pro-Bold;
    text-align: center;
  }
  .choose_button{
    border: 5px solid #000;
    width: 20vw;
    height: 11vw;
    line-height: 10.5vw;
    border-radius: 11vw;
    background-color: #fff;
    text-align: center;
    font-size: 6.5vw;
    font-family: SourceHanSansSC-Bold;
    font-weight: bold;
  }
  .choose_button2{
    border: 5px solid #000;
    width: 17vw;
    height: 10vw;
    line-height: 10vw;
    border-radius: 10vw;
    background-color: #fff;
    text-align: center;
    font-size: 6.5vw;
    font-family: SourceHanSansSC-Bold;
    font-weight: bold;
  }

  .third_container{
    /*text-align: center;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  .new_img_bg{
    width: 80vw;
  }
  .new_img_title{
    border: 4px solid #000;
    border-top-left-radius:4px;
    border-top-right-radius:4px;
    /*border*/
    /*border-bottom: none;*/
    width: 70vw;
    margin: 0 auto -4px;
    padding: 1vw 0 1vw 0;
    /*padding-bottom: 1vw;*/
    text-align: center;
  }
  .new_img_title div{
    text-align: center;
    font-size: 6.6vw;
    /*font-family: SourceHanSansSC-Bold;*/
  }
  .new_image{
    position: relative;
    width: 70vw;
    height: 90vw;
    border: 4px solid #000;
    border-bottom-left-radius:4px;
    border-bottom-right-radius:4px;
    margin: 0 auto;
  }
  .title_right_left{
    position: absolute;
    top: 2vw;
    width: 92%;
    margin: 0 4%;
    display: flex;
    justify-content: space-between;
    z-index: 5000;
  }

  .title_left{}
  .game_master{
    font-family: FF-DIN-Round-Pro-Bold;
  }
  .game_master_ch{
    margin-top: -1vw;
    /*font-family: SourceHanSansSC-Bold;*/
  }
  .title_right{}
  .number{
    font-family: FF-DIN-Round-Pro-Medium;
    font-size: 1.8rem;
  }
  .number_logo{
    text-align: right;
    font-family: SourceHanSansSC-Bold;
    font-size: .4rem;
  }

  .footer_info{
    display: flex;
    width: 72vw;
    margin:  0 auto;
    justify-content: space-between;padding-top: .8vw;
    padding-bottom: 3.6vw;
  }
  .footer_first{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%
  }
  .start_game{
    font-size: 7vw;
    font-family: FF-DIN-Round-Pro-Medium;
  }
  .shaoshao{
    /*margin: 0 0 0 .7rem;*/
    font-size: 3vw;
    font-family: SourceHanSansSC-Bold;
  }
  .erweima_img{
    width: 15.5vw;
    height: 15.5vw;
    /*margin-top: 1vw;*/
    /*margin-left: 2.2vw;*/
  }
  .footer_second{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: -3.5vw;
    margin-left: 0vw;
  }
  .tuoluoguai{
    /*margin-right: .2vw;*/
    font-size: 5.62vw;
    font-family: SourceHanSansSC-Bold;
  }
  .wojiushi{
    margin-top: 0.4rem;
    font-size: 2.4vw;
    font-family: SourceHanSansSC-Bold;
  }



</style>
