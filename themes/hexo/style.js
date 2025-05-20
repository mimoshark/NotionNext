/* eslint-disable react/no-unknown-property */
/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  return (<style jsx global>{`
    // 底色
    body{
        background-color: #DCE8F8
    }
    .dark body{
        background-color: black;
    }
  
    /*  菜单下划线动画 */
    #theme-hexo .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#B8CBFA, #928CEE);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
    }
    
    #theme-hexo .menu-link:hover {
        background-size: 100% 2px;
        color: #AAB1F8;
    }

    /* 设置了从上到下的渐变黑色 */
    #theme-hexo .header-cover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%);
    }

    /* Custem */
    .tk-footer{
        opacity: 0;
    }

    // 选中字体颜色
    ::selection {
        background: #B8CBFA;
    }

    // 自定义滚动条
    ::-webkit-scrollbar {
        width: 10px; /* 设置滚动条的宽度 */
        height: 5px;/* 设置滚动条的高度（对于水平滚动条） */
    }

    ::-webkit-scrollbar-track {
        background: transparent;/* 设置滚动条轨道的背景为透明 */
    }

    ::-webkit-scrollbar-thumb {
        background-color: #f2f4db;/* 设置滚动条的滑块（thumb）的背景颜色为黄色 */
    }

    * {
        scrollbar-width:thin;/* 设置滚动条的宽度为细 */
        scrollbar-color: #e5a9cb transparent/* 设置滚动条的颜色为粉色*/
    }
    

  `}</style>)
}

export { Style }
