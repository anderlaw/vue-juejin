<template>
<div class="slide-box">
  <div class="slide-box_title">
    <span>{{ title }}</span>
    <div style="float:right;">
      <span class="iconfont icon-page-left" @click="localIndex--"></span>
      <span class="iconfont icon-arrow-right" @click="localIndex++"></span>
    </div>
  </div>
  <div class="slide-box_wrap">
    <div class="slide-box_container" style="position:absolute;">
      <slot>

      </slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:['title','count','height'],
  data(){
    return {
      localIndex:0,
      wrap:null,
      width:0
    }
  },
  methods:{
    initPageInfo(){
      //初始化

      //获取盒子宽度
      this.width = parseFloat(window.getComputedStyle(this.$el).width);

      //设置容器元素的总长度
      this.container = this.$el.querySelector('.slide-box_container');
      this.container.style.width = this.width*this.count+'px';

      //设置子元素的宽度
      let items = this.$el.querySelectorAll('.slide-box_item');
      items.forEach(ele=>{
        ele.style.width = this.width+'px';
      })
      //设置包围盒子的高度
      this.wrap = this.$el.querySelector('.slide-box_wrap');
      this.wrap.style.height = parseFloat(this.height)+'px'
    }
  },
  watch:{
    localIndex(index){
      if(index > this.count-1){
        this.localIndex = 0;
      }
      if(index < 0){
        this.localIndex = this.count-1
      }
      // fixed half px bug.in case the value is 120.5 ,maybe chrome will treat it as 121 px.
      // so use parseInt deal it.
      let offsetLeft = -parseInt(this.localIndex*this.width);

      //执行替换
      this.$nextTick(()=>{
        this.container.style.transform = "translateX("+ offsetLeft +"px)";
      })
    }
  },
  mounted(){
    this.initPageInfo();
  }
}
</script>

<style scoped lang="scss">
.iconfont{
  cursor: pointer;
}
.slide-box{
  .slide-box_title{
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    line-height: 45px;
  }
  .slide-box_wrap{
    position:relative;
    overflow:hidden;
    .slide-box_container{
      transition: 0.4s all ease-in-out;
      position: absolute;
      .slide-box_item{
        float: left;
        & > div{
          padding-top:6px;
        }
      }
    }
  }
}


</style>
