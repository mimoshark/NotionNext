/* eslint-disable react/no-unknown-property */
/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  return (<style jsx global>{`
    // 底色/* 设置页面背景颜色 */
    body{
        background-color: #DCE8F8/* 背景色为浅蓝色 */
    }
    .dark body{
        background-color: black;/* 当启用暗色模式时，设置背景颜色为黑色 */
    }
 
    /*  菜单下划线动画 */
    #theme-hexo .menu-link {
        text-decoration: none; /* 移除菜单链接的默认下划线 */
        background-image: linear-gradient(#B8CBFA, #928CEE); /* 创建从浅蓝色到紫色的渐变背景 */
        background-repeat: no-repeat;/* 禁止背景图像重复 */
        background-position: bottom center;/* 背景图像定位到底部居中 */
        background-size: 0 2px;/* 初始时，背景的宽度为 0，背景的高度为 2px，表示没有显示的下划线 */
        transition: background-size 100ms ease-in-out;/* 设置背景大小变化的过渡动画，持续 100ms，使用 ease-in-out 缓动函数 */
    }

/* 当鼠标悬停在菜单链接上时，展开渐变的下划线 */
#theme-hexo .menu-link:hover {
    background-size: 100% 2px; /* 鼠标悬停时，背景的宽度变为 100%（填满整个菜单项的宽度），高度保持为 2px */
    color: #AAB1F8; /* 改变文字颜色为浅蓝色 */
}

/* 在头部封面上添加渐变效果 */
#theme-hexo .header-cover::before {
    content: ""; /* 伪元素的内容为空 */
    position: absolute; /* 绝对定位，覆盖整个父元素 */
    top: 0; /* 设置伪元素的位置，顶部对齐 */
    left: 0; /* 设置伪元素的位置，左侧对齐 */
    width: 100%; /* 伪元素宽度为父元素的 100% */
    height: 100%; /* 伪元素高度为父元素的 100% */
    background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%); 
    /* 创建一个从上到下的黑色渐变效果：透明到半透明黑色，再到透明，给封面添加层次感 */
}

/* 自定义的 .tk-footer 类，设置透明度为 0，即隐藏该元素 */
.tk-footer {
    opacity: 0; /* 使 footer 元素完全透明，相当于隐藏该元素 */
}
    // 选中字体颜色
    ::selection {
        background: #7FB2DA;
    }

    // 自定义滚动条
    ::-webkit-scrollbar {
        width: 10px; /* 设置滚动条的宽度 */
        height: 5px;/* 设置滚动条的高度（对于水平滚动条） */
    }

    ::-webkit-scrollbar-track {
        background: transparent;/* 设置滚动条轨道的背景为透明 */
    }
    /* 滚动条滑块（thumb）使用图片 */
    ::-webkit-scrollbar-thumb {
    background-image: url('https://www.flaticon.com/svg/static/icons/svg/1230/1230311.svg');  /* 替换为图标链接 */
    background-size: cover;  /* 使图片填充滑块区域 */
    }

    * {
        scrollbar-width:thin;/* 设置滚动条的宽度为细 */
        scrollbar-color: #e5a9cb transparent/* 设置滚动条的颜色为粉色*/
    }
  /* 目录进度条：设置进度条背景色 */
.h-4.bg-indigo-400 {
    background-color: #9c26b0; /* 设置进度条的背景颜色为紫色 */
}

/* 文章页隐藏字数 */
#wordCountWrapper > span:nth-child(1) {
    display: none !important; /* 隐藏字数信息 */
}

/* 文章页隐藏阅读时长 */
#wordCountWrapper > span:nth-child(2) {
    display: none !important; /* 隐藏阅读时长信息 */
}

/* 打开字数和阅读时长，去除之前的隐藏设置 */
#wordCountWrapper > span:nth-child(1),
#wordCountWrapper > span:nth-child(2) {
    display: inline !important; /* 使字数和阅读时长显示出来 */
}  

  `}</style>)
}

export { Style }
