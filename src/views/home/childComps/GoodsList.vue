<template>
    <div class="goods">
      <good-list-item v-for="(item,index) in goodsList" :key="index" :goods-item="item"></good-list-item>
    </div>
</template>

<script>
    import GoodsListItem from './GoodsListItem'
    export default {
      name:"GoodList",
      props:{
        goodsList:{
          type:Array,
          default(){
            return []
          }
        }
      },
      componetnts:{
        GoodsListItem
      }
    }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>