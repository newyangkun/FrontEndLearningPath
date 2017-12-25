<template>
  <div>
    <!-- 头部 -->
    <div class="header">
        <nav class="navbar navbar-custom">
            <div class="navbar-header">
                <a href="javascript:;" class="navbar-brand">
                    <i class="fa fa-navicon"></i>
                </a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-bell"></i>
                        <span class="badge">8</span>
                    </a>
                </li>
                <li>
                    <a href="./settings.html">
                        <i class="fa fa-user"></i>
                        个人中心
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-sign-out"></i>
                        退出
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-tasks"></i>
                    </a>
                </li>
            </ul>
        </nav>          
    </div>
    <!-- 主体 -->
    <div class="main">
        <!-- 侧边栏 -->
        <div class="aside">
            <!-- 个人资料 -->
            <div class="profile">
                <!-- 头像 -->
                <div class="avatar img-circle">
                    <img src="../../assets/img/avatar.jpg">
                </div>
                <h4>布头儿</h4>
            </div>
            <!-- 导航菜单 -->
            <div class="navs">
                <ul class="list-unstyled">
                    <li>
                        <a href="./index.html" class="active">
                            <i class="fa fa-home"></i>
                            仪表盘
                        </a>
                    </li>
                    <li>
                        <a href="./user_list.html">
                            <i class="fa fa-bell"></i>
                            用户管理
                        </a>
                    </li>
                    <li>
                        <a href="./teacher_list.html">
                            <i class="fa fa-bell"></i>
                            讲师管理
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i class="fa fa-cog"></i>
                            课程管理
                            <i class="arrow fa fa-angle-right"></i>
                        </a>
                        <ul class="list-unstyled">
                            <li>
                                <a href="./course_add.html">
                                     课程添加
                                </a>
                            </li>
                            <li>
                                <a href="./course_list.html">
                                    课程列表
                                </a>
                            </li>
                            <li>
                                <a href="./course_category.html">
                                    课程分类
                                </a>
                            </li>
                            <li>
                                <a href="./course_topic.html">
                                    课程专题
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="./advert_list.html">
                            <i class="fa fa-bell"></i>
                            广告管理
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i class="fa fa-cog"></i>
                            系统设置
                            <i class="arrow fa fa-angle-right"></i>
                        </a>
                        <ul class="list-unstyled">
                            <li>
                                <a href="javascript:;">
                                    网站设置
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                     权限管理
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 其它页面自已调整吧 -->
        <div class="container-fluid">
            <!-- 个人资料 -->
            <div class="body teacher-profile">
                <div class="profile">
                    <div class="row survey">
                        <div class="col-md-3">
                            <div class="cell money">
                                <i class="fa fa-money"></i>
                                <span>我的收入</span>
                                <h5>￥11.11</h5>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="cell th">
                                <i class="fa fa-th"></i>
                                <span>课程数量</span>
                                <h5>12</h5>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="cell user">
                                <i class="fa fa-user"></i>
                                <span>用户数量</span>
                                <h5>236</h5>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="cell eye">
                                <i class="fa fa-eye"></i>
                                <span>浏览量</span>
                                <h5>22435</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style>

</style>
