<template>
  <div :style="{backgroundColor: bg_color}" class="container">
    <div v-if="!is_new_img" class="second_container">
      <div class="create_img" :style="{backgroundColor: 'yellow'}">
        <div class="back_img">
          <img src="../src/back.png" @click="back_login()">
          <div>返回编辑</div>
        </div>
        <div class="next_img">
          <div>生成海报</div>
          <img src="../src/next.png" @click="change_is_new_img()">
        </div>

        <div style="position: relative;height: 100%;width: 100%">
          <img :src="show_bg" class="greate_img_bg">
          <img :src="show_img" class="greate_img_person">
          <div style="position: absolute;z-index: 5000;top: 18vw;left:5vw;width: 10px;font-family: SourceHanSansSC-Bold;font-size: 12px">{{my_name}}／是我</div>
          <div style="position: absolute;z-index: 5000;top: 18vw;right:5vw;width: 10px;font-family: SourceHanSansSC-Bold;font-size: 12px">我是／{{my_work}}</div>
        </div>
      </div>

      <div>
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

      <div style="display: flex;justify-content: space-between">
        <div @click="choose_person()" :style="{backgroundColor:show_choose_person?'yellow':'#fff'}" class="choose_button">人物</div>
        <div @click="choose_bg()" :style="{backgroundColor:show_choose_gd?'yellow':'#fff'}" class="choose_button">背景</div>
        <div @click="choose_bg_color()" :style="{backgroundColor:show_choose_bg_color?'yellow':'#fff'}" class="choose_button">颜色</div>
      </div>
    </div>

    <div v-if="is_new_img" style="position: fixed;bottom: 3vw">
      <div style="display: flex;justify-content: space-between;width: 75vw;margin: 5vw 12.5vw">
        <div class="choose_button2" @click="back_choose_person()">返回</div>
        <div class="choose_button2">
          <a :href="imgUrl" download="logo.png" style="color: #000000;text-decoration:none;">长按</a>
        </div>
        <div class="choose_button2" @click="goto_fenxiang()">分享</div>
      </div>
    </div>

    <div v-if="is_new_img" class="third_container" ref="box">
      <div :style="{backgroundColor: new_image.color}" class="new_img_bg" ref="box" v-show="is_true_img">
        <div style="padding: 5vw 0 2vw">
          <div class="new_img_title">
            <div>{{new_image.im}}</div>
            <div style="margin-top: -6px">{{new_image.able}}</div>
          </div>
          <div class="new_image">
            <div style="position: relative;height: 100%;width: 100%">
              <div class="title_right_left">
                <div class="title_left">
                  <div class="game_master">GAME</div>
                  <div class="game_master" style="margin-top: -0.4rem">MASTER</div>
                  <div class="game_master_ch">游戏大咖</div>
                </div>
                <div class="title_right">
                  <div class="number">NO.{{number}}</div>
                  <div class="number_logo">L{{number}}满级</div>
                </div>
              </div>
              <img :src="new_image.bg" class="greate_img_bg">
              <img :src="new_image.person" class="greate_img_person">
              <img class="rigjt_logo" src="../src/logo.png" style="position: absolute;z-index: 5000;width: 8vw;bottom: 8vw;right: 0;transform:rotate(90deg)">
              <div style="position: absolute;z-index: 5000;top: 18vw;left:3%;width: 10px;font-family: SourceHanSansSC-Bold;font-size: 12px">{{my_name}}／是我</div>
              <div style="position: absolute;z-index: 5000;top: 18vw;right:3%;width: 10px;font-family: SourceHanSansSC-Bold;font-size: 12px">我是／{{my_work}}</div>
            </div>
          </div>
        </div>
        <div class="footer_info">
          <div style="width: 100%">
            <div class="footer_first">
              <div class="start_game">START GAME</div>
              <div class="shaoshao">
                <div style="margin-top: 0">扫一扫</div>
                <div style="margin-top: -0.4rem">变怪兽</div>
              </div>
            </div>
            <div class="footer_second">
              <div class="tuoluoguai">{{new_image.name}}</div>
              <div class="wojiushi">
                <div style="">角色 [你心中的超级英雄]</div>
                <div style="margin-top: -0.2rem">惊喜 [性格彩蛋最终显示]]</div>
              </div>
            </div>
          </div>
          <img src="../src/test/chanquan.png" class="erweima_img">
        </div>
      </div>
      <img :src="imgUrl" style="width: 75vw;margin-top: 5vw;box-shadow:0 0 10px #000" v-show="!is_true_img">
    </div>

  </div>
</template>

<script>
  import html2canvas from 'html2canvas'
  export default {
    name: 'game',
    data () {
      return {
        my_name:'',
        my_work:'',
        show_img:'',
        show_bg:require('../src/bg/bg1.png'),
        bg_color:'',
        number:2,
        show_choose_person:true,
        show_choose_gd:false,
        show_choose_bg_color:false,
        person_list:[{img:require('../src/person/1.png'),name:'刺猬陀螺怪',im:'我是 [佛系品牌设计师] ',able:'擅长 [吹牛卖稿谈客户]'},
          {img:require('../src/person/2.png'),name:'刺猬陀螺怪',im:'我是 [软萌品牌设计师]',able:'擅长 [沟通交流一稿过]'},
          {img:require('../src/person/3.png'),name:'刺猬陀螺怪',im:'我是 [肥宅品牌设计师]',able:'擅长 [节约时尚国际范]'},
          {img:require('../src/person/4.png'),name:'刺猬陀螺怪',im:'我是 [逗比品牌设计师]',able:'擅长 [帅气风流有文化]'},
          {img:require('../src/person/5.png'),name:'波波陀螺怪',im:'我是 [闷骚品牌设计师]',able:'擅长[熬夜加班改稿件]'},
          {img:require('../src/person/6.png'),name:'小美陀螺怪',im:'我是 [学霸品牌设计师]',able:'擅长[熬夜加班改稿件]'},
          {img:require('../src/person/7.png'),name:'落鸡陀螺怪',im:'我是 [朋克品牌设计师]',able:'擅长[时尚动感小清新]'},
          {img:require('../src/person/8.png'),name:'托尼陀螺怪',im:'我是 [咸鱼品牌设计师]',able:'擅长 [软件技能样样通]'},
          {img:require('../src/person/9.png'),name:'好抠陀螺怪',im:'我是 [懒癌品牌设计师]',able:'擅长 [酷炫狂拽吊炸天]'},
          {img:require('../src/person/10.png'),name:'诺娃陀螺怪',im:'我是 [萝莉品牌设计师]',able:'擅长 [冷艳高贵接地气]'},
          {img:require('../src/person/11.png'),name:'山姆陀螺怪',im:'我是 [学渣品牌设计师] ',able:'擅长 [奔放洋气有风度]'},
          {img:require('../src/person/12.png'),name:'猪猪陀螺怪',im:'我是 [吃货品牌设计师]',able:'擅长 [学习总结做设计]'},
          {img:require('../src/person/13.png'),name:'安娜陀螺怪',im:'我是 [御姐品牌设计师]',able:'擅长 [外猛内柔女汉子]'},
          {img:require('../src/person/14.png'),name:'小美陀螺怪',im:'我是 [修仙品牌设计师]',able:'擅长 [首页私活赚大发]'},
          {img:require('../src/person/15.png'),name:'雷雷陀螺怪',im:'我是 [清真品牌设计师] ',able:'擅长 [忧郁深沉无所谓]'},
          {img:require('../src/person/16.png'),name:'星星陀螺怪',im:'我是 [怪诞品牌设计师]',able:'擅长 [低调奢华有内涵]'},
          {img:require('../src/person/17.png'),name:'精杠陀螺怪',im:'我是 [奶狗品牌设计师]',able:'擅长 [字体品牌做捞狗]'},
          {img:require('../src/person/18.png'),name:'噜当陀螺怪',im:'我是 [暖男品牌设计师] ',able:'擅长 [卖萌嘟嘴剪刀手]'},
          {img:require('../src/person/19.png'),name:'斯斯陀螺怪',im:'我是 [硬核品牌设计师]',able:'擅长 [生活工作两不误]'},
          {img:require('../src/person/20.png'),name:'扁壶陀螺怪',im:'我是 [精分品牌设计师]',able:'擅长 [五彩斑斓的黑色]'},
        ],
        bg_list:[{bg:require('../src/bg/bg3.png')},
          {bg:require('../src/bg/bg1.png')},
          {bg:require('../src/bg/bg2.png')},
          {bg:require('../src/bg/bg4.png')},
          {bg:require('../src/bg/bg5.png')},
          {bg:require('../src/bg/bg6.png')},
          {bg:require('../src/bg/bg7.png')},
          {bg:require('../src/bg/bg8.png')},
          {bg:require('../src/bg/bg9.png')},
          {bg:require('../src/bg/bg10.png')},
          {bg:require('../src/bg/bg11.png')},
          {bg:require('../src/bg/bg12.png')},
          {bg:require('../src/bg/bg13.png')},
          {bg:require('../src/bg/bg14.png')},
          {bg:require('../src/bg/bg15.png')},
          {bg:require('../src/bg/bg16.png')},
          {bg:require('../src/bg/bg17.png')},
          {bg:require('../src/bg/bg18.png')},
          {bg:require('../src/bg/bg19.png')},
          {bg:require('../src/bg/bg20.png')},
          {bg:require('../src/bg/bg21.png')},
          {bg:require('../src/bg/bg22.png')},
          {bg:require('../src/bg/bg23.png')},
          {bg:require('../src/bg/bg24.png')},
        ],
        color_list:[{color:'yellow'},{color:'#fff'},{color:'#00FFFF'},{color:'pink'},{color:'red'}],
        new_image:{person:'',name:'',able:'',im:'',bg:'',color:''},

        is_new_img:false,
        imgUrl:'',
        is_true_img:true
      }
    },
    mounted(){
      this.show_img = this.person_list[0].img;
      this.show_bg = this.bg_list[0].bg;
      this.bg_color = this.color_list[0].color;

      this.new_image.person = this.person_list[0].img;
      this.new_image.name = this.person_list[0].name;
      this.new_image.able = this.person_list[0].able;
      this.new_image.im = this.person_list[0].im;
      this.new_image.bg = this.bg_list[0].bg;
      this.new_image.color = this.color_list[0].color;

      this.my_name = localStorage.getItem('my_name');
      this.my_work = localStorage.getItem('my_work')
    },
    methods:{
      change_person(id){
        this.show_img = this.person_list[id].img;
        this.new_image.person = this.person_list[id].img;
        this.new_image.name = this.person_list[id].name;
        this.new_image.able = this.person_list[id].able;
        this.new_image.im = this.person_list[id].im;
      },
      change_bg(id){
        this.show_bg = this.bg_list[id].bg;
        this.new_image.bg = this.bg_list[id].bg;
      },
      change_color(id){
        this.bg_color = this.color_list[id].color;
        this.new_image.color = this.color_list[id].color;
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
      },
      //显示新生成的图片
      change_is_new_img(){
        this.is_true_img = true;
        this.is_new_img = true;
        this.bg_color = 'yellow';
        this.$nextTick(()=>{
          this.create_img()
        });
      },
      back_login(){
        this.$router.push({path:'/login'})
      },
      back_choose_person(){
        this.is_new_img = false;
        this.bg_color = this.new_image.color;
      },
      goto_fenxiang(){
        this.$router.push({path:'/newImg'})
      },
      create_img(){
        html2canvas(this.$refs.box,{
          backgroundColor: this.new_image.color,
          useCORS: true // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题
        }).then((canvas) => {
          // this.imgUrl = URL.createObjectURL(this.base64ToBlob(canvas.toDataURL()))
          this.imgUrl = canvas.toDataURL("image/png");
          this.is_true_img = false
        })
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
      // imgClick() {
      //   var alink = document.createElement ( 'a' );
      //   alink.href = this.imgUrl;
      //   alink.download = 'pic'; // 图片名
      //   alink.click ()
      // }
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
    width: calc(100% - 14vw);
    height: calc(100% - 14vw);
    padding: calc(7vw - 4px)
  }
  .create_img{
    position: relative;
    width: 86vw;
    height: 105vw;
    border: 4px solid #000;
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
  }
  .greate_img_bg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%
  }
  .greate_img_person{
    position: absolute;
    width: 90%;
    left: 5%;
    bottom: 0
  }
  .choose_list{
    display:flex;
    width: 86vw;
    overflow: auto;
    margin: 1rem 0;
  }
  .choose_item{
    width: 23%;
    flex: none;
    text-align: center;
  }
  .choose_item img{
    width: 80%;
    height: 70%;
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
    border: 3px solid #000;
    width: 6rem;
    height: 2.8rem;
    line-height: 2.8rem;
    border-radius: 2.8rem;
    background-color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-family: SourceHanSansSC-Bold;
  }
  .choose_button2{
    border: 3px solid #000;
    width: 5.5rem;
    height: 2.8rem;
    line-height: 2.8rem;
    border-radius: 2.8rem;
    background-color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-family: SourceHanSansSC-Bold;
  }

  .third_container{
    /*text-align: center;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .new_img_bg{
    width: 80vw;
  }
  .new_img_title{
    border: 4px solid #000;
    /*border-bottom: none;*/
    width: 70vw;
    margin: 0 auto -4px;
    padding-bottom: 1vw;
  }
  .new_img_title div{
    text-align: center;
    font-size: 6.6vw;
    font-family: SourceHanSansSC-Bold;
  }
  .new_image{
    position: relative;
    width: 70vw;
    height: 90vw;
    border: 4px solid #000;
    margin: 0 auto;
  }
  .greate_img_bg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%
  }
  .greate_img_person{
    position: absolute;
    width: 90%;
    left: 5%;
    bottom: 0
  }
  .title_right_left{
    position: absolute;
    top: 0;
    width: 94%;
    margin: 0 3%;
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
    font-family: SourceHanSansSC-Bold;
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
    width: 70vw;
    margin:  0 auto;
    justify-content: space-between;
    padding-bottom: 5vw;
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
    width: 14vw;
    height: 14vw;
    margin-top: 1.5vw;
    margin-left: .5vw;
  }
  .footer_second{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: -0.5rem;
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
