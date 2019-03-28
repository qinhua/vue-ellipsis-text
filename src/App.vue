<template>
  <div class="container">
    <h2>文本溢出隐藏组件</h2>  
    <ul class="content-box">
      <li>
        <h3>1.单行文字超出显示...</h3>      
        <ellipsis-text :content="content"/>
      </li>
      <li>
        <h3>2.单行文字超出显示【更多】</h3>      
        <ellipsis-text :content="content" :hasMore="true"/>
      </li>
      <li>
        <h3>3.多行(2行)文字超出显示...</h3>      
        <ellipsis-text :content="content" :line="2"/>
      </li>
      <li>
        <h3>4.多行(2行)文字超出显示【更多】</h3>      
        <ellipsis-text :content="content" :hasMore="true" :line="2"/>
      </li>
      <li>
        <h3>5.当内容为html片段时，超出(3行)显示【更多】</h3>      
        <ellipsis-text :content="htmlContent" :hasMore="true" :isHtml="true" :line="3"/>
      </li>
      <li>
        <h3>6.监听文字展开与收起事件</h3>        
        <ellipsis-text :content="content" :line="2" :hasMore="true" ref="ellipsisText" @reveal="show" @fold="hide"/>
      </li>
    </ul>    
    <p class="copyright">Copyright©2019 Chin All Rights Reserved.</p>
  </div>
</template>
<script>
import EllipsisText from "./ellipsisText/EllipsisText";
// import EllipsisText from "../dist/ellipsisText.umd";

export default {
  name: "app",
  components: { EllipsisText },
  data() {
    return {
        content: '据说每个男人生命里都有一道白月光，娴静，美好，甜美着整个青春的回忆。粟融珵生命里的特么为毛是只黑月光？', //内容
        triggerMore: true, //点击更多时候是否触发展开操作
        line: 2, //展示几行文字
        hasMore: true, //是否显示更多按钮
        isHtml: false, //是否是html内容
        revealWidth: 70, //更多按钮宽度
        revealText: '【详情】', //更多按钮文案
        foldText: '收起', //收起按钮文案
        htmlContent:'<p>夏雨溪再扭头看看在一旁幸灾乐祸的工作人员，将自己<span style="color:#ff2500">已经有些潮湿的头发</span>拢到了脑后，脸色有难看冷哼了一声<img style="display:inline-block;height:22px;vertical-align: bottom;" src="http://pic2.sc.chinaz.com/Files/pic/Listfaces/4124/18.gif"/>。这人究竟是怎么在JX活下来的？光是凭着她这种想法，要是有一天JX面临破产或者是其他什么倒霉事情，估计这个人二话不说就会把辞呈交上去。“好歹你也是一个美女，怎么气量这么小？”刘明昊说着，从自己的胸口掏出一个帕子将自己身上的水渍擦了下去，看着在自己前面两个大眼睛瞄来瞄去的夏雨溪，脸上满是疑问。</p>'
    };
  },
  methods: {
    /**
     * 展开文字
     */
    show(data) {
      alert("展开文字");
    },
    /**
     * 收起文字
     */
    hide(data) {
      alert("收起文字");
    }
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
a,
input,
button {
  text-decoration: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
ul,
li {
  list-style: none;
}
// 容器
.container {
  width: 90%;
  // max-width: 700px;
  min-width: 200px;
  margin: 0 auto;
}
h2 {
  padding: 20px 0;
  text-align: center;
  font-size: 16px;
  color: #333;
}
.content-box {
  box-sizing:border-box;
  width: 100%;
  li {
    padding: 20px;
    margin-bottom: 12px;  
    background: #fff;
    border-radius:3px;
    box-shadow: inset 0px 0px 16px 0 #d1dde6;
  }
  h3 {
    padding-bottom: 10px;
    font-weight: normal;
    line-height: 1.2;
    font-size: 16px;
    color: #0a85e0;
  }
}
.copyright {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  line-height: 1;
  font-size: 12px;
  text-align: center;
  color: #999;
}
</style>
