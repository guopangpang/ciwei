<template>
  <div :style="{backgroundColor: bg_color}" class="container">
    <div v-if="!is_new_img" class="second_container">
      <div class="create_img" :style="{backgroundColor: 'yellow'}">
        <div class="back_img">
          <img src="../src/back.png">
          <div>返回编辑</div>
        </div>
        <div class="next_img">
          <div>生成海报</div>
          <img src="../src/next.png" @click="change_is_new_img()">
        </div>

        <div style="position: relative;height: 100%;width: 100%">
          <img :src="show_bg" class="greate_img_bg">
          <img :src="show_img" class="greate_img_person">
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

    <div v-if="is_new_img">
      <div>
        <div class="new_image" :style="{backgroundColor: 'yellow'}">
          <div style="position: relative;height: 100%;width: 100%">
            <img :src="new_image.bg" class="greate_img_bg">
            <img :src="new_image.person" class="greate_img_person">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'game',
    data () {
      return {
        show_img:'',
        show_bg:require('../src/bg/bg1.png'),
        bg_color:'yellow',
        show_choose_person:true,
        show_choose_gd:false,
        show_choose_bg_color:false,
        person_list:[{img:require('../src/person/1.png'),name:'',im:'',able:''},
          {img:require('../src/person/2.png'),name:'',im:'',able:''},
          {img:require('../src/person/3.png'),name:'',im:'',able:''},
          {img:require('../src/person/4.png'),name:'',im:'',able:''},
          {img:require('../src/person/5.png'),name:'',im:'',able:''},
          {img:require('../src/person/6.png'),name:'',im:'',able:''},
          {img:require('../src/person/7.png'),name:'',im:'',able:''},
          {img:require('../src/person/8.png'),name:'',im:'',able:''},
          {img:require('../src/person/9.png'),name:'',im:'',able:''},
          {img:require('../src/person/10.png'),name:'',im:'',able:''},
          {img:require('../src/person/11.png'),name:'',im:'',able:''},
          {img:require('../src/person/12.png'),name:'',im:'',able:''},
          {img:require('../src/person/13.png'),name:'',im:'',able:''},
          {img:require('../src/person/14.png'),name:'',im:'',able:''},
          {img:require('../src/person/15.png'),name:'',im:'',able:''},
          {img:require('../src/person/16.png'),name:'',im:'',able:''},
          {img:require('../src/person/17.png'),name:'',im:'',able:''},
          {img:require('../src/person/18.png'),name:'',im:'',able:''},
          {img:require('../src/person/19.png'),name:'',im:'',able:''},
          {img:require('../src/person/20.png'),name:'',im:'',able:''},
        ],
        bg_list:[{bg:require('../src/bg/bg1.png')},
          {bg:require('../src/bg/bg2.png')},
          {bg:require('../src/bg/bg3.png')},
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
        color_list:[{color:'yellow'},{color:'blue'},{color:'#fff'},{color:'pink'},{color:'yellow'}],
        new_image:{person:'',name:'',able:'',im:'',bg:'',color:''},

        is_new_img:false
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
      change_is_new_img(){
        this.is_new_img = true;
        this.bg_color = 'yellow'
      }
    }
  }
</script>

<style scoped>
  .container{
    width: 100vw;
    height: 99.5vh;
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
    border-radius: 1.4rem;
    background-color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-family: SourceHanSansSC-Bold;
  }

  .new_image{
    position: relative;
    width: 70vw;
    height: 95vw;
    border: 4px solid #000;
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

</style>
