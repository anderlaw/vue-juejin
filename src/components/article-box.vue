<template>
  <div class="article-box layout">
    <h3>为您推荐{{ title }}内容</h3>
    <div class="item" :key="index" v-for="(item,index) in viewData">
      <div class="pre-bar">
        <span>{{ item.author }}</span>
        <span>{{ item.date_time }}</span>
        <span>{{ item.belong }}</span>
      </div>
      <div class="title">{{ item.title }}</div>
      <div>
        <div class="btn-box">
          {{ item.reward_count }}
        </div>
        <div class="btn-box">
          {{ item.comment_count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['title','viewData'],
  watch:{
    viewData(){
      //刷新视图

    }
  }
}
</script>

<style scoped lang="scss">
// structure
.article-box{
  &.layout{
    // 布局
    background-color: #fff;
    padding: 10px;
    border: 1px solid #f2f4f5;
  }
  .item{
    &{
      padding:10px;
    }
    &:not(:first-child){
      border-top: 1px solid #f2f4f5;
    }
    .pre-bar{
      color: #b2b9c1;
      font-size: 12px;
    }
    .title{
      font-size:17px;
      line-height: 30px;
      color:#909090;
    }
    .btn-box{
      border: 1px solid #ccc;
      display: inline-block;
      text-align: center;
      font-size: 12px;
      color: #b2bac2;
      padding: 4px 10px;
    }
  }

}
//interface

//container

//content. custom user input
</style>
