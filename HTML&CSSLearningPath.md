# HTML&CSS捨遗

## css控制文字溢出省略:

  ```html
<style>
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

<p>
  文字单行溢出省略测试文字文字单行溢出省略测试文字文字单行溢出省略测试文字文字单行溢出省略测试文字文字单行溢出省略测试文字
</p>
<!-- ----这是分割线---- -->
<style>
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
<p>
  文字多行溢出省略测试文字文字多行溢出省略测试文字文字多行溢出省略测试文字文字多行溢出省略测试文字文字多行溢出省略测试文字
</p>
  ```
 - 注意事项: 文字区域高度应设置为line-heigth的整数倍,防止文字露出


##  display: inline-block元素中添加文字(基线对其),导致元素错位

- 设置文字对其方式: vertical-align: top;

  > vertical-aligin属性作用于行内元素, 行内块元素, 默认值为baseline(基线对齐)


##  行高的单位与继承

- 独立的盒子行高单位：

  > 独立的盒子除像素单位(`px`)值行高外，都是自身文字大小的乘积

- 嵌套盒子行高单位：

  > 嵌套盒子父元素设置行高，子元素会直接继承；子元素设置百分比或`em`单位行高，将以父元素字体大小为基数相乘得出行高；子元素设置不带单位的行高，将以自身元素字体大小为基数相乘得出行高

## rem布局

- rem(font size of the root element)是一种相对于网页根元素来设置字体大小（区别于em根据父元素的字体大小）

- 在rem布局中设置屏幕旋转, 根元素字体大小不变:


  ```html
  @media screen and (orientation: portrait) {
    html {
      font-size: 16px;
    }
  }
  ```

  ​

## HTML5 & CSS3

### 语义化标签

​	html5新增语义化标签, 对SEO 更为友好

```html
<header></header>
<nav></nav>
<section></section>
<footer></footer>
```

### 对表单的支持

​	









## 捨遗

表单上传 文件: `enctype="multipart/form-data"`