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
        background-color: #03477C;/* 当启用暗色模式时，设置背景颜色为黑色 */
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

/* 当鼠标悬停在右侧文章菜单链接上时，展开渐变的下划线 */
#theme-hexo .menu-link:hover {
    background-size: 100% 2px; /* 鼠标悬停时，背景的宽度变为 100%（填满整个菜单项的宽度），高度保持为 2px */
    color: #5631CE; /* 改变文字颜色为深紫蓝色 */
}

/* 在头部封面上添加渐变效果 */
#theme-hexo .header-cover::before {
    content: ""; /* 伪元素的内容为空 */
    position: absolute; /* 绝对定位，覆盖整个父元素 */
    top: 0; /* 设置伪元素的位置，顶部对齐 */
    left: 0; /* 设置伪元素的位置，左侧对齐 */
    width: 100%; /* 伪元素宽度为父元素的 100% */
    height: 100%; /* 伪元素高度为父元素的 100% */
    background: linear-gradient(to bottom, #7FB2DA 0%, #7FB2DA 10%, #7FB2DA 25%, #7FB2DA 75%, #7FB2DA 100%); 
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
    background-image: url('https://img.icons8.com/ios/50/shark-body.png');  /* 替换为图标链接 */
    background-size: cover;  /* 使图片填充滑块区域 */
    }

    * {
        scrollbar-width:thin;/* 设置滚动条的宽度为细 */
        scrollbar-color: #5631CE transparent/* 设置滚动条的颜色为深紫蓝色*/
    }
}
import React, { useState, useEffect } from 'react';
import { useGlobal } from '@/lib/global';
import { WordCount, countWords } from './path-to-your-wordcount-function';  // 引入你刚刚定义的 WordCount 和 countWords

const ArticlePage = ({ pageContentText }) => {
  const { locale } = useGlobal(); // 获取全局的 locale
  const [wordCountData, setWordCountData] = useState({ wordCount: 0, readTime: 0 });

  // 在组件加载时计算字数和阅读时间
  useEffect(() => {
    const { wordCount, readTime } = countWords(pageContentText);
    setWordCountData({ wordCount, readTime });
  }, [pageContentText]);

  return (
    <div>
      {/* 显示文章的字数和阅读时间 */}
      <WordCount wordCount={wordCountData.wordCount} readTime={wordCountData.readTime} />
      
      {/* 你的文章内容 */}
      <div className="article-content">
        <p>{pageContentText}</p>
      </div>
    </div>
  );
};

export default ArticlePage;



  `}</style>)
}

export { Style }
