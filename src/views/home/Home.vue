<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
        <feature-view :features="recommends"></feature-view>
        <recommend-view></recommend-view>
        <tab-control @itemClick="tabClick" ref="tabControl" :titles="['流行','新款','精选']"></tab-control>
        <!-- <goods-list :goods-list="showGoodsList"></goods-list> -->
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>

    import NavBar from 'components/common/navbar/NavBar'
    import HomeSwiper from './childComps/HomeSwiper'
    import FeatureView from './childComps/FeatureView'
    import RecommendView from './childComps/RecommendView'
    import TabControl from 'components/content/tabControl/TabControl'
    // import GoodsList from './childComps/GoodsList'

    // import {getHomeMultidata,getHomeData} from "network/home"
    import {getHomeMultidata} from "network/home"

    export default {
        name:'Home',
        components: {
            NavBar,
            HomeSwiper,
            FeatureView,
            RecommendView,
            TabControl,
            // GoodsList
        },
        data(){
            return{
                banners:[],
                recommends:[],
                goodsList: {
                    'pop': {page: 1, list: []},
                    'new': {page: 1, list: []},
                    'sell': {page: 1, list: []}
                },
                currentType: 'pop',
            }
        },
        computed: {
            showGoodsList() {
                return this.goodsList['this.currentType'].list
            }
        },
        created(){
            // 1.请求多个数据
            this.getHomeMultidata();

            // 2.请求商品数据
            // this.getHomeData('pop')
            // this.getHomeData('new')
            // this.getHomeData('sell')
        },
        methods:{
		    tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                        break
                }
                console.log(index)
            },
            /**
             * 网络请求相关方法
             */
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    console.log(res)
                    this.banners = res.data.banner.list
                    this.recommends = res.data.recommend.list
                    // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
                    // this.$nextTick(() => {
                    //     this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
                    // })
                })
            },
            // getHomeData(type){
            //     getHomeData(type,this.goodsList[type].page).then(res=>{
            //         const goodsList = res.data.list;
            //         this.goodsList[type].list.push(...goodsList)
            //         this.goodsList[type].page += 1

            //         this.$refs.scroll.finishPullUp()

            //     })
            // }
        }
        
    }
</script>

<style scoped>
    #home{
        padding-top: 44px;
    }
    .home-nav{
        background: var(--color-tint);
        color:var(--color-background);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }
    .tab-control{
        position: sticky;
        top:40px
    }
</style>