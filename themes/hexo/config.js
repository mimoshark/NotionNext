const CONFIG = {
  HEXO_HOME_BANNER_ENABLE: true,
  // 3.14.1以后的版本中，欢迎语在blog.config.js中配置，用英文逗号','隔开多个。
  HEXO_HOME_BANNER_GREETINGS: [
    'Hi，我是一个程序员',
    'Hi，我是一个打工人',
    'Hi，我是一个干饭人',
    '欢迎来到我的博客🎉'
  ], // 首页大图标语文字

  HEXO_HOME_NAV_BUTTONS: true, // 首页是否显示分类大图标按钮
  // 已知未修复bug, 在移动端开启true后会加载不出图片； 暂时建议设置为false。
  HEXO_HOME_NAV_BACKGROUND_IMG_FIXED: false, // 首页背景图滚动时是否固定，true 则滚动时图片不懂动； false则随鼠标滚动 ;
  // 是否显示开始阅读按钮
  HEXO_SHOW_START_READING: true,

  // 菜单配置
  HEXO_MENU_INDEX: true, // 显示首页
  HEXO_MENU_CATEGORY: true, // 显示分类
  HEXO_MENU_TAG: true, // 显示标签
  HEXO_MENU_ARCHIVE: true, // 显示归档
  HEXO_MENU_SEARCH: true, // 显示搜索
  HEXO_MENU_RANDOM: true, // 显示随机跳转按钮

  HEXO_POST_LIST_COVER: true, // 列表显示文章封面
  HEXO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEXO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEXO_POST_LIST_SUMMARY: true, // 文章摘要
  HEXO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEXO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEXO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEXO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEXO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEXO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEXO_WIDGET_ANALYTICS: true, // 显示统计卡
  HEXO_WIDGET_TO_TOP: true,
  HEXO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEXO_WIDGET_DARK_MODE: true, // 夜间模式
  HEXO_WIDGET_TOC: true // 移动端悬浮目录
}
/* 导航栏签颜色 */
#sticky-nav.bg-indigo-700 {
    background-color: #9c26b0;
}

/* 夜间模式导航栏签颜色 */
.dark div#sticky-nav {
 background-color: red;
}


/* 首页开始阅读按钮 */
.glassmorphism.w-40.z-40 {
    background-color: #9c26b0;
    border: none;
}

/* 标签颜色 */
a.cursor-pointer.bg-indigo-700 {
    background-color: #9c26b0;
}

/* 移动端侧边栏 */
#side-bar>.bg-indigo-700 {
    background-color: #9c26b0;
}

/* 移动端侧边栏菜单 */
nav div:hover,li:hover {
    background-color: #9c26b0!important;
}

/* 悬浮菜单 */
.right-2 .bg-indigo-700 {
    background-color: #9c26b0;
}

/* 目录进度条 */
.h-4.bg-indigo-400 {
    background-color: #9c26b0;
}

/* 目录文字高亮 */
nav .text-green-500{
    color: #9c26b0;
}

/* 网站页脚 */ 
footer.bg-indigo-700{
    background-color: #9c26b0;
}

/* 翻页按钮 */
button.bg-indigo-700{
    background-color: #9c26b0;
}

/* 文章页隐藏发布时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > a {
  display: none;
}


/* 文章页隐藏发布时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > a {
  display: none;
}

/* 文章页隐藏更新时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > span.whitespace-nowrap {
  display: none;
}

/* 文章页隐藏阅读次数 */
#article-wrapper .busuanzi_container_page_pv {
  display: none ！important;
}

/* 文章页隐藏字数 */
#wordCountWrapper > span:nth-child(1){
 display: none !important;
}

/* 文章页隐藏阅读时长 */
#wordCountWrapper > span:nth-child(2){
 display: none;
}
export default CONFIG
