<template>
        <!--全屏幕轮播图 -->
               <!-- <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" style = "width:16rem;height:5.12rem;"> -->

               <swiper v-if="pages.length" :options="swiperOption" ref="mySwiper" :style = "warpStyle" style = "z-index:0;">
                                    <!-- slides -->
                                    
                                    <swiper-slide v-for = "item in pages" :key = "item.url" >
                                   
                                        <img :src="item" class="swiper-lazy" :style = "warpStyle" >

                                        <div class="swiper-lazy-preloader"></div>
                                
                                    </swiper-slide>
                                  
      
                                    <!-- Optional controls -->
                                    <div class="swiper-pagination"  slot="pagination"></div>
                
                     </swiper>
 

</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:["warpStyle","pages"],
     name: 'carrousel',
    data() {
      return {
        swiperOption: {
    loop: true,
     pagination: {
      el: '.swiper-pagination',
    },
    autoplay:true,
    delay:3000,
    disableOnInteraction:false,
    effect:"slide",
      lazy: {
    loadPrevNext: true,
  },
        }
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)

    },
    components: {
        swiper,
        swiperSlide
  }

}
</script>

<style>
    .swiper-lazy-preloader{
        background:transparent;
    }
</style>
