<template>
  <div>
    <div style="position:fixed;width:100%;top:0px;z-index:10;">
      <div :class="{'hideNavBar':hideNavBar}">
        <navBar/>
      </div>
      <navTab/>
    </div>

    <div style="background-color:#f5f6f6;">
      <div class="container" style="height:1000px;padding-top:15px;">
        <div class="ibox box" style="width:74%;padding-right:15px;">
          <!-- util 组件的布局 -->
          <utilBar/>
          <!-- 文章内容组件 -->
          <div style="margin:10px;"></div>
          <articleNav @navTypeChange="handleArticleTypeChange"/>
          <!-- specific article content -->
          <articleBox :viewData="viewData" :title="title"/>
        </div>
        <div class="ibox box" style="width:25%;float:right;">
          <!-- 广告 -->
          <div class="content-item">
            <adsBar>
              <template slot="left-image">
                <img src="../../assets/qrcode.png" alt="">
              </template>
              <template slot="right-content">
                <div>
                  <span style="color:#000;font-weight:bold;">扫一扫关注</span>
                  <div style="color:#8f8f8f;">技术大师带你飞</div>
                </div>
              </template>
            </adsBar>
          </div>
          <!-- slider-掘金小册 -->
          <div class="content-item">
            <slider title="掘金小册" count="3" height="220">
              <template>
                <div class="slide-box_item">
                  <adsBar>
                    <template slot="left-image">
                      <img src="../../assets/book1.jpg" alt="">
                    </template>
                    <template slot="right-content">
                      <div>
                        <span>详解Laravel源码中优秀的设计模式</span>
                        <div class="new-price">新人价￥9.95 <span class="old-price">￥19.9</span></div>
                      </div>
                    </template>
                  </adsBar>
                  <adsBar>
                    <template slot="left-image">
                      <img src="../../assets/book2.jpg" alt="">
                    </template>
                    <template slot="right-content">
                      <div>
                        <span>详解Laravel源码中优秀的设计模式</span>
                        <div class="new-price">新人价￥9.95 <span class="old-price">￥19.9</span></div>
                      </div>
                    </template>
                  </adsBar>
                </div>
                <div class="slide-box_item">
                  <adsBar>
                    <template slot="left-image">
                      <img src="../../assets/book3.jpg" alt="">
                    </template>
                    <template slot="right-content">
                      <div>
                        <span>详解Laravel源码中优秀的设计模式</span>
                        <div class="new-price">新人价￥9.95 <span class="old-price">￥19.9</span></div>
                      </div>
                    </template>
                  </adsBar>
                  <adsBar>
                    <template slot="left-image">
                      <img src="../../assets/book4.jpg" alt="">
                    </template>
                    <template slot="right-content">
                      <div>
                        <span>详解Laravel源码中优秀的设计模式</span>
                        <div class="new-price">新人价￥9.95 <span class="old-price">￥19.9</span></div>
                      </div>
                    </template>
                  </adsBar>
                </div>
                <div class="slide-box_item">
                  <div style="padding-top:6px;">
                    <adsBar>
                      <template slot="left-image">
                        <img src="../../assets/book5.jpg" alt="">
                      </template>
                      <template slot="right-content">
                        <div>
                          <span>详解Laravel源码中优秀的设计模式</span>
                          <div class="new-price">新人价￥9.95 <span class="old-price">￥19.9</span></div>
                        </div>
                      </template>
                    </adsBar>
                  </div>
                  <div style="padding-top:6px;">
                    <adsBar>
                      <template slot="left-image">
                        <img src="../../assets/book6.jpg" alt="">
                      </template>
                      <template slot="right-content">
                        <div>
                          <span>详解Laravel源码中优秀的设计模式</span>
                          <div class="new-price">新人价￥9.95 <span class="old-price">￥19.9</span></div>
                        </div>
                      </template>
                    </adsBar>
                  </div>
                </div>
              </template>
            </slider>
          </div>
          <!-- 可能认识的人 -->
          <div class="content-item">
            <slider title="您可能感兴趣的人" count="2" height="320">
              <template>
                <div class="slide-box_item">
                    <adsBar>
                      <template slot="left-image">
                        <img src="../../assets/person1.jpg" alt="">
                      </template>
                      <template slot="right-content">
                        <div>
                          <span>狼人情歌</span>
                          <div class="old-price">前端开发@~~</div>
                        </div>
                      </template>
                    </adsBar>
                    <adsBar>
                      <template slot="left-image">
                        <img src="../../assets/person2.jpg" alt="">
                      </template>
                      <template slot="right-content">
                        <div>
                          <span>狼人情歌</span>
                          <div class="old-price">前端开发@~~</div>
                        </div>
                      </template>
                    </adsBar>
                    <adsBar>
                      <template slot="left-image">
                        <img src="../../assets/person3.jpg" alt="">
                      </template>
                      <template slot="right-content">
                        <div>
                          <span>狼人情歌</span>
                          <div class="old-price">前端开发@~~</div>
                        </div>
                      </template>
                    </adsBar>
                    <adsBar>
                      <template slot="left-image">
                        <img src="../../assets/person4.jpg" alt="">
                      </template>
                      <template slot="right-content">
                        <div>
                          <span>狼人情歌</span>
                          <div class="old-price">前端开发@~~</div>
                        </div>
                      </template>
                    </adsBar>
                </div>
                <div class="slide-box_item">
                    <adsBar>
                      <template slot="left-image">
                        <img src="../../assets/person5.jpg" alt="">
                      </template>
                      <template slot="right-content">
                        <div>
                          <span>狼人情歌</span>
                          <div class="old-price">前端开发@~~</div>
                        </div>
                      </template>
                    </adsBar>
                    <adsBar>
                      <template slot="left-image">
                        <img src="../../assets/person6.jpg" alt="">
                      </template>
                      <template slot="right-content">
                        <div>
                          <span>狼人情歌</span>
                          <div class="old-price">前端开发@~~</div>
                        </div>
                      </template>
                    </adsBar>
                    <adsBar>
                      <template slot="left-image">
                        <img src="../../assets/person7.jpg" alt="">
                      </template>
                      <template slot="right-content">
                        <div>
                          <span>狼人情歌</span>
                          <div class="old-price">前端开发@~~</div>
                        </div>
                      </template>
                    </adsBar>
                    <adsBar>
                      <template slot="left-image">
                        <img src="../../assets/person8.jpg" alt="">
                      </template>
                      <template slot="right-content">
                        <div>
                          <span>狼人情歌</span>
                          <div class="old-price">前端开发@~~</div>
                        </div>
                      </template>
                    </adsBar>
                </div>
              </template>
            </slider>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import navBar from '@/components/nav-bar.vue'
import navTab from '@/components/nav-tab.vue'
import utilBar from '@/components/util-bar.vue'
import adsBar from '@/components/ad-card.vue'
import slider from '@/components/slider.vue'
import articleNav from '@/components/article-nav.vue'
import articleBox from '@/components/article-box.vue'
export default {
  components:{
    navBar,navTab,utilBar,adsBar,slider,articleNav,articleBox
  },
  data(){
    return {
      hideNavBar:false,
      title:'热门',
      viewData:[
        { author:'xxx',date_time:'36分钟前',belong:'Nginx前端',title:'Nginx入门视频',reward_count:10,comment_count:6 },
        { author:'xxx',date_time:'36分钟前',belong:'Nginx前端',title:'Nginx入门视频',reward_count:10,comment_count:6 },
        { author:'xxx',date_time:'36分钟前',belong:'Nginx前端',title:'Nginx入门视频',reward_count:10,comment_count:6 },
        { author:'xxx',date_time:'36分钟前',belong:'Nginx前端',title:'Nginx入门视频',reward_count:10,comment_count:6 },
        { author:'xxx',date_time:'36分钟前',belong:'Nginx前端',title:'Nginx入门视频',reward_count:10,comment_count:6 },
        { author:'xxx',date_time:'36分钟前',belong:'Nginx前端',title:'Nginx入门视频',reward_count:10,comment_count:6 },
        { author:'xxx',date_time:'36分钟前',belong:'Nginx前端',title:'Nginx入门视频',reward_count:10,comment_count:6 },
      ]
    }
  },
  methods:{
    initScrollConfig(){
      //add event
      document.addEventListener('scroll',(event)=>{
        let top = document.documentElement.scrollTop;
        if(top >= 400){
          this.hideNavBar = true;
          document.body.style.paddingTop = '44px';
        }else{
          this.hideNavBar = false;
          document.body.style.paddingTop = '98px';
        }
      })
      //judge scroll top and set the body element 's paddig-top
      let top = document.documentElement.scrollTop;
      if(top >= 400){
        this.hideNavBar = true;
        document.body.style.paddingTop = '44px';
      }else{
        this.hideNavBar = false;
        document.body.style.paddingTop = '98px';
      }
    },
    handleArticleTypeChange(type){
      this.title = type;
      console.log(type);
      //拿数据
    },
    getViewDataByType(){

    }
  },
  mounted() {
    this.initScrollConfig();
  }
}
</script>

<style>
.hideNavBar{
  display: none;
  transition: 1s ease-in-out all;
}
.content-item{
  padding: 6px;
  background-color: #fff;
  margin-bottom: 10px;
}

</style>
