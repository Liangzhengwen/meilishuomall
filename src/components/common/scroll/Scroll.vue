<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

	export default {
		name: "Scroll",
    props: {
		  probeType: {
		    type: Number,
        default: 1
      },
      pullUpLoad: {
		    type: Boolean,
        default: false
      },
      // data: {
		  //   type: Array,
      //   default: () => {
      //     return []
      //   }
      // }
    },
    data() {
		  return {
		    scroll: {}
      }
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
        setTimeout(() => {
          this._initScroll()
        }, 1000);
        
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
              return
            }
            // 创建better-scroll对象
            this.scroll = new BScroll(this.$refs.wrapper, {
              probeType:this.probeType,
              pullUpLoad:this.pullUpLoad,
              click:true,
              scrollY: true,
            })

            //监听滚动位置X轴，Y轴
            this.scroll.on('scroll',(position)=>{
              this.$emit('scroll',position)
            })

            //监听上拉加载事件
            this.scroll.on('pullingUp',()=>{
              this.$emit('pullingUp')
            })
        },
        scrollTo(x,y,time=888){
          this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
        },
        finishPullUp() {
          this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
        },
        refresh(){
          this.scroll && this.scroll.refresh && this.scroll.refresh()  //this.scroll && this.scroll.refresh为了解决找不到refresh函数，严谨
        },
        getScrollY(){
          return this.scroll ? this.scroll.y : 0
        }
    },
	}
</script>

<style scoped>

</style>
