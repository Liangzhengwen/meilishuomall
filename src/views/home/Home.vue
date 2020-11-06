<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <tab-control
            ref="tabControl" 
            v-show="isTabFixed"
            @itemClick="tabClick" 
            :titles="['流行','新款','精选']" 
            :class="{fixed:isTabFixed}">
        </tab-control>
        <scroll 
            ref="scroll" 
            class="content" 
            :probe-type="3" 
            :pull-up-load="true"
            @pullingUp="loadMore"
            @scroll="contentScroll">
            <home-swiper 
                :banners="banners" 
                ref="hSwiper" 
                @swiperImageLoad="swiperImageLoad">
            </home-swiper>
            <feature-view :features="recommends"></feature-view>
            <recommend-view></recommend-view>
            <tab-control 
                ref="tabControl2" 
                @itemClick="tabClick" 
                :titles="['流行','新款','精选']" 
                :class="{fixed:isTabFixed}">
            </tab-control>
            <!-- <goods-list :goods-list="showGoodsList"></goods-list> -->
            <ul>
                <li>woshidata1</li>
                <li>woshidata2</li>
                <li>woshidata3</li>
                <li>woshidata4</li>
                <li>woshidata5</li>
                <li>woshidata6</li>
                <li>woshidata7</li>
                <li>woshidata8</li>
                <li>woshidata9</li>
                <li>woshidata10</li>
                <li>woshidata11</li>
                <li>woshidata12</li>
                <li>woshidata13</li>
                <li>woshidata14</li>
                <li>woshidata15</li>
                <li>woshidata16</li>
                <li>woshidata17</li>
                <li>woshidata18</li>
                <li>woshidata19</li>
                <li>woshidata20</li>
                <li>woshidata21</li>
                <li>woshidata22</li>
                <li>woshidata23</li>
                <li>woshidata24</li>
                <li>woshidata25</li>
                <li>woshidata26</li>
                <li>woshidata27</li>
                <li>woshidata28</li>
                <li>woshidata29</li>
                <li>woshidata30</li>
                <li>woshidata31</li>
                <li>woshidata32</li>
                <li>woshidata33</li>
                <li>woshidata34</li>
                <li>woshidata35</li>
                <li>woshidata36</li>
                <li>woshidata37</li>
                <li>woshidata38</li>
                <li>woshidata39</li>
                <li>woshidata40</li>
                <li>woshidata41</li>
                <li>woshidata42</li>
                <li>woshidata43</li>
                <li>woshidata44</li>
                <li>woshidata45</li>
                <li>woshidata46</li>
                <li>woshidata47</li>
                <li>woshidata48</li>
                <li>woshidata49</li>
                <li>woshidata50</li>
                <li>woshidata51</li>
                <li>woshidata52</li>
                <li>woshidata53</li>
                <li>woshidata54</li>
                <li>woshidata55</li>
                <li>woshidata56</li>
                <li>woshidata57</li>
                <li>woshidata58</li>
                <li>woshidata59</li>
                <li>woshidata60</li>
                <li>woshidata61</li>
                <li>woshidata62</li>
                <li>woshidata63</li>
                <li>woshidata64</li>
                <li>woshidata65</li>
                <li>woshidata66</li>
                <li>woshidata67</li>
                <li>woshidata68</li>
                <li>woshidata69</li>
                <li>woshidata70</li>
                <li>woshidata71</li>
                <li>woshidata72</li>
                <li>woshidata73</li>
                <li>woshidata74</li>
                <li>woshidata75</li>
                <li>woshidata76</li>
                <li>woshidata77</li>
                <li>woshidata78</li>
                <li>woshidata79</li>
                <li>woshidata80</li>
                <li>woshidata81</li>
                <li>woshidata82</li>
                <li>woshidata83</li>
                <li>woshidata84</li>
                <li>woshidata85</li>
                <li>woshidata86</li>
                <li>woshidata87</li>
                <li>woshidata88</li>
                <li>woshidata89</li>
                <li>woshidata90</li>
                <li>woshidata91</li>
                <li>woshidata92</li>
                <li>woshidata93</li>
                <li>woshidata94</li>
                <li>woshidata95</li>
                <li>woshidata96</li>
                <li>woshidata97</li>
                <li>woshidata98</li>
                <li>woshidata99</li>
                <li>woshidata100</li>
            </ul>
        </scroll>
        <back-top  @backTop="backTop" class="back-top" v-show="showBackTop"><img src="~assets/img/common/top.png" alt=""></back-top>
    </div>
</template>

<script>

    import NavBar from 'components/common/navbar/NavBar'
    import HomeSwiper from './childComps/HomeSwiper'
    import FeatureView from './childComps/FeatureView'
    import RecommendView from './childComps/RecommendView'
    import TabControl from 'components/content/tabControl/TabControl'
    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/content/backtop/BackTop'
    // import GoodsList from './childComps/GoodsList'

    // import {getHomeMultidata,getHomeData} from "network/home"
    import {getHomeMultidata} from "network/home"
    import {debounce} from "common/utils"

    export default {
        name:'Home',
        components: {
            NavBar,
            HomeSwiper,
            FeatureView,
            RecommendView,
            TabControl,
            Scroll,
            BackTop
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
                showBackTop: false,
                isTabFixed: false,
                tabOffsetTop: 0,
                saveY: 0,
            }
        },
        computed: {
            showGoodsList() {
                return this.goodsList['this.currentType'].list
            }
        },
        destroyed(){
            console.log('home destoryed')
        },
        activated: function () {
            this.$refs.scroll.scrollTo(0 , this.saveY, 0)
            this.$refs.scroll.refresh()
        },
        deactivated: function () {
            this.saveY = this.$refs.scroll.getScrollY()
        },
        created(){
            // 1.请求多个数据
            this.getHomeMultidata();

            // 2.请求商品数据
            // this.getHomeData('pop')
            // this.getHomeData('new')
            // this.getHomeData('sell')
        },
        mounted(){
            //监听item中图片加载完成
            const refresh = debounce(this.$refs.scroll.refresh,500)
            this.$bus.$on('itemImageLoad',()=>{
               refresh()
            })

        },
        methods:{
            //监听事件相关函数
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
                //保持活动时两个tabControl一致
                this.$refs.tabControl.currentIndex = index
                this.$refs.tabControl2.currentIndex = index
            },
            backTop() {
                this.$refs.scroll.scrollTo(0,0)
            },
            contentScroll(position) {
                //1.监听backtop是否显示
                this.showBackTop = (-position.y) > 888

                //2.决定tabControl是否吸顶
                this.isTabFixed = (-position.y) > this.tabOffsetTop
            },
            loadMore(){
                console.log('上拉加载')
                // this.getHomeData(this.currentType)
            },
            swiperImageLoad(){
                //获取tabControl的offsetTop,所以组件中都有一个$el,方便获取组件中的元素
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
                console.log(this.tabOffsetTop)
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
        /* padding-top: 44px; */
        height: 100vh;
        position: relative;
    }
    .home-nav{
        background: var(--color-tint);
        color:var(--color-background);

        /* 在浏览器原生滚动时使用 */
        /* position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999; */
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    .tab-control{
        /* position: sticky;//停留位置
        top:44px; */
        z-index: 9;
        position: relative;
    }
    /* .content{
        overflow: hidden;
        height: calc(100% - 93px);
    } */
    .back-top{
        position:fixed;
        right: 10px;
        bottom: 60px;
    }
    .fixed {
        position: fixed;
        top: 44px;
        left: 0;
        right: 0;
    }
</style>