<template>
  <div class="card">
    <div class="card_item">
      <slot name="left-image"></slot>
      <slot name="right-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .card{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    .card_item{
      display: flex;
      flex-direction: row;
      align-items: center;
      img{
        margin-right:6px;
        width:30%;
      }
    }
  }
</style>
