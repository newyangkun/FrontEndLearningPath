# HTML&CSS捨遗

---
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


