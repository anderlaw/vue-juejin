<template>
  <div class="util-bar">
    <img class="avatar" :src="avatarSrc" alt="avatar">
    <span class="util-bar_item">发沸点</span>
    <span class="util-bar_item">写文章</span>
    <span class="util-bar_item">分享链接</span>
    <div class="draft">
      <span >草稿</span>
    </div>
  </div>
</template>

<script>
let avatarSrc = require('../assets/avatar.jpg')
export default {
  data(){
    return {
      avatarSrc:avatarSrc
    }
  }
}
</script>

<style scoped lang="scss">
.util-bar{
  display: inline-block;
  background-color: #fff;
  width: 100%;
  height: 40px;
  line-height: 40px;
  .avatar{
    vertical-align:-12px;height:40px;
  }
  .util-bar_item{
    font-size: 14px;
    color: #0081ff;
    margin: 0 10px;
    cursor: pointer;
  }
  .draft{
    color: #8f8f8f;
    float:right;
    margin-right:20px;
    cursor: pointer;
  }
}

</style>
