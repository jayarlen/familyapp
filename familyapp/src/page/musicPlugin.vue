<template>
  <Tabs value="name1" style="margin-left:50px;padding-left: 30px;overflow-x: scroll;width: 1600px">
    <TabPane label="网易云" name="name1" >
<space align="center" >
          <Card style="width:340px;margin: 20px">
            <div style="text-align:center">
              <iframe frameborder="no"  width=330 height=450 src="//music.163.com/outchain/player?type=0&id=3068013756&auto=0&height=430">
              </iframe>
            </div>
          </Card>

      <Card style="width:340px;margin: 20px">
            <div style="text-align:center">
              <iframe frameborder="no"  width=330 height=450 src="//music.163.com/outchain/player?type=0&id=1983608818&auto=0&height=430">
              </iframe>
            </div>
      </Card>
  <Card style="width:340px;margin: 20px">
    <div style="text-align:center">
      <iframe frameborder="no"  width=330 height=450 src="//music.163.com/outchain/player?type=0&id=7559330337&auto=0&height=430">
      </iframe>
    </div>
  </Card>

  <Card style="width:340px;margin: 20px">
    <div style="text-align:center">
      <iframe frameborder="no"  width=330 height=450 src="//music.163.com/outchain/player?type=0&id=2919023249&auto=0&height=430">
      </iframe>
    </div>
  </Card>
</space>


<space align="center">
        <Card style="width:340px;margin: 20px">
          <div style="text-align:center">
            <iframe frameborder="no"  width=330 height=450 src="//music.163.com/outchain/player?type=0&id=7379243691&auto=0&height=430">
            </iframe>
          </div>
        </Card>

        <Card style="width:340px;margin: 20px">
          <div style="text-align:center">
            <iframe frameborder="no"  width=330 height=450 src="//music.163.com/outchain/player?type=0&id=7553524762&auto=0&height=430">
            </iframe>
          </div>
        </Card>
        <Card style="width:340px;margin: 20px">
          <div style="text-align:center">
            <iframe frameborder="no"  width=330 height=450 src="//music.163.com/outchain/player?type=0&id=6948039584&auto=0&height=430">
            </iframe>
          </div>
        </Card>

        <Card style="width:340px;margin: 20px">
          <div style="text-align:center">
            <iframe frameborder="no"  width=330 height=450 src="//music.163.com/outchain/player?type=0&id=884528449&auto=0&height=430">
            </iframe>
          </div>
        </Card>

      </space>






    </TabPane>
    <TabPane label="QQ音乐" name="name2">
      <Card style="width:100%;height: 100%">
          <iframe frameborder="none" style=" width:1300px;  height:950px;" src="https://y.qq.com/"  >

          </iframe>
        </Card>




    </TabPane>
    <TabPane label="酷狗音乐" name="name3">
      <div class="nav1" style="display: flex;padding: 10px;margin-bottom: 50px">
      <Image  style="width: 100px;height: 200px ;flex: 1" src="https://file.iviewui.com/images/image-demo-13.jpg"/>
        <div class="nav2" style="flex: 3;display: flex;flex-direction: column;padding: 10px">
      <sapn style="font-size: 40px;flex: 1;text-align: left">别再拖延，帮你跑起来的超然节奏</sapn>
      <div class="nav3" style="flex: 1;padding: 10px">
        <Button style="margin: 0 10px">播放全部</Button>
        <Button style="margin: 0 10px">添加歌单</Button>
        <Button style="margin: 0 10px">收藏</Button>
      </div>
        </div>
      </div>
      <scroll :on-reach-edge="handleReachEdge" style="margin-top: 50px;margin-left: 400px;margin-bottom: 50px">
      <Card dis-hover v-for="(item, index) in list" :key="index" style="margin: 32px 0;text-align: center;width: 600px">
         {{ item }}
      </Card>
      </scroll>
      <div style="margin-top: 50px">
        腾讯音乐娱乐集团 腾讯音乐人 酷狗音乐人 星曜推歌 5sing原创音乐 曲库开放计划 听歌识曲 歌叽歌叽
        <br>
        关于酷狗 商务合作 广告服务 投诉指引 隐私政策 儿童隐私政策 用户服务协议 招聘信息 客服中心 举报中心
        <br>
        粤网文（2022）1053-085号 网络视听许可证 1910564号 增值电信业务 粤B2-20060339 粤ICP备09017694号
        <br>
        粤公网安备 44030002000001号 互联网宗教信息服务许可证 粤（2022）0000022 营业执照
      </div>
    </TabPane>
  </Tabs>
</template>

<script>
export default {
  data () {
    return {
      list: ['01   David   Guetta、Ne-Yo、Akon - Play Hard' ,'02  Klaas、Carlprit - Do What You Do (Radio Edit)',
    '03 Dropgun、Kaleena Zanders - Nothing New (Explicit)','04 Garmiani、Sanjin - Jump & Sweat',
    '05 Turbotronic - Booty Shake (Radio Edit) ','06 Alex Ferro、Itro - Delay',
    '07 BloXberg、Mark Cox - Fresh  Sexy (Radio Edit)','08 Mesto、Jonas Aden - Your Melody',
    '09 Asher Monroe - Here With You ','10 Hillsong Young & Free - Wake (Studio Version) ',
    "11 La Musique d'Ordinateur - Doghouse'"," 12 BROHUG - If I'm Wrong ' " ,
    '13 Handsome Dancer - Coincidance','14 Karma、Karma - Seven Days 2006 (DZ Shark & M Dee Original Radio)',
    '15 Blue Affair、Sasha Dith、Carlprit - Ya Odna (Dance Edit)','16 Cascada - The Rhythm of the Night',
    '17 BIGBANG - BABY BABY','18 Billie Eilish、Justin Bieber - bad guy ',
    '19 Yoomiii - Run Into The Sun ','20 Lana Grace - Move Your Body',
    '21 FUNNY - Sing A Song (Original Mix)'],
    }
  },
  methods: {
    handleReachEdge (dir) {
      return new Promise(resolve => {
        setTimeout(() => {
          if (dir > 0) {
            const first =this.list. indexOf(this.list[0]);
            for (let i = 1; i < this.list.length; i++) {
              this.list.unshift(this.list[first-i]);
            }
          } else {
            const last = this.list[this.list.length - 1];
            for (let i = 1; i < this.list.length; i++) {
              this.list.push(this.list[last + i]);
            }
          }
          resolve();
        }, 2000);
      });
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  text-align: center;
}

</style>
