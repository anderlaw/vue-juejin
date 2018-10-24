<template>
  <div class="article-box">
    <div class="article-box_title" v-switchNav="'item'">
      <span class="item active">热门</span>
      <span class="item">最新</span>
      <span class="item">评论</span>
      <div style="float:right;">
        <span class="item">本周最热</span>
        <span class="dot iconfont icon-dot"></span>
        <span class="item">本月最热</span>
        <span class="dot iconfont icon-dot"></span>
        <span class="item">历史最热</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    registerSorterClick(){
      let box = this.$el.querySelector('.article-box_title');
      box.addEventListener('click',(event)=>{
        let className = event.target.className;
        if(className.indexOf('item') !== -1){
          ///处理逻辑
          let type = event.target.innerHTML;
          this.$emit('navTypeChange',type)
        }
      })
    }
  },
  mounted(){
    this.registerSorterClick();
  }
}
</script>

<style lang="scss" scoped>
.article-box{
  background-color: #fff;
  padding:6px 10px;
  border: 1px solid #f2f4f5;
  border-bottom: none;
  .article-box_title{
    color: #909090;
    font-size: 16px;
    display: inline-block;
    width: 100%;

    .dot{
      vertical-align: top;
      display: inline-block;

    }
    .item{
      cursor: pointer;
      display: inline-block;
      line-height: 16px;

    }
    & > .item{
      padding: 0 10px;
    }
    & > .item:not(:first-child){
      border-left: 1px solid #ccc;
    }
    .item.active{
      color: #4480fe;
    }
  }
}
</style>
