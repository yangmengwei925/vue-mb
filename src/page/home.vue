<template>
  <div class="header">
    <swiper ref="HeaderSwiper" :options="SwiperOptions">
      <swiper-slide v-for="(item,index) in SlideList" :key="index">
        <img class="header-slide" :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
   
  </div>
</template>

<script>
import {Get, Post} from "@/Plugin/Request";
import url from "@/Plugin/URL";
import "swiper/dist/css/swiper.css";
import {swiper, swiperSlide} from "vue-awesome-swiper";
import {Modal} from "ant-design-vue";

export default {
  name: "layout-header",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      User: this.$ResponseData,
      SwiperOptions: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      SlideList: [],
      PathName: "index",
    };
  },
  watch: {
    "$route.name": function () {
      this.handlePathName();
    },
  },
  created() {
    this.LoadSlide();
    // this.handlePathName();
  },
  methods: {
    LoadSlide() {
      Post(url.slide_list).then((res) => {
        this.SlideList = [];
        for (let n = 0; n < res.data.length; n++) {
          this.SlideList.push(res.data[n].carouselUrl);
        }
      });
    },
    // handlePathName() {
    //   if (this.$route.name === "layout") {
    //     this.PathName = "index";
    //   } else {
    //     this.PathName = this.$route.name;
    //   }
    // },
    // toPath(name) {
    //   if (this.$route.name !== name) {
    //     this.PathName = name;
    //     this.$router.push({name: name});
    //   }
    // },

  },
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 2rem;
  background: #fff;
  overflow: hidden;
}

.header-slide {
  display: block;
   width: 100%;
  /* max-height: 100%; */
   /* margin: 0 auto;  */
}
.swiper-pagination{
  
}



</style>