//一级分类模版
var firstStage = '<div class="manage-button">' +
'<button type="button" class="btn btn-default" data-toggle="modal" data-target="#addNewCategory">添加分类</button>' +
'</div>' +
'<table class="table table-bordered table-hover">' +
'<thead>' +
  '<tr>' +
    '<th>序号</th>' +
    '<th>分类名称</th>' +
  '</tr>' +
'</thead>' +
'<tbody>' +
  '<% for (var i=0;i<data.length;i++) { %>' +
    '<tr>' +
      '<td><a href="javascript:;"><%=data[i].id%></a></td>' +
      '<td><a href="javascript:;"><%=data[i].categoryName%></a></td>' +
    '</tr>' +
  '<% } %>' +
'</tbody>' +
'</table>' +
'<nav class="pull-right">' +
  '<ul class="pagination">' +
    '<li class="active"><a href="#">1</a></li>' +
  '</ul>' +
'</nav>' +
'<div class="modal fade" id="addNewCategory" tabindex="-1" role="dialog">' +
  '<div class="modal-dialog popups" role="document">' +
    '<div class="modal-content">' +
      '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>' +
        '<h4 class="modal-title" id="exampleModalLabel">添加分类</h4>' +
      '</div>' +
      '<div class="modal-body">' +
        '<form>' +
          '<div class="form-group">' +
            '<input type="text" class="form-control" placeholder="请输入一级分类名称">' +
          '</div>' +
        '</form>' +
      '</div>' +
      '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>' +
        '<button type="button" class="btn btn-primary">确定</button>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div>';

//二级分类模版
var secondStage = '<div class="manage-button">' +
  '<button type="button" class="btn btn-default" data-toggle="modal" data-target="#addNewSecondCategory">添加分类</button>' +
'</div>' +
'<table class="table table-bordered table-hover">' +
  '<thead>' +
    '<tr>' +
      '<th>序号</th>' +
      '<th>一级分类名称</th>' +
      '<th>二级分类名称</th>' +
      '<th>二级分类logo</th>' +
    '</tr>' +
  '</thead>' +
  '<tbody>' +
  '<%for(var i=0;i<data.data.length;i++){%>' +
    '<tr>' +
      '<td><%=data.data[i].id%></td>' +
      '<td><%=data.data[i].categoryId == 1? "运动馆":""%></td>' +
      '<td><%=data.data[i].brandName%></td>' +
      '<td><img src=".<%=data.data[i].brandLogo%>" alt=""/></td>' +
    '</tr>' +
  '<%}%>' +
  '</tbody>' +
'</table>' +
'<nav class="pull-right">' +
  '<ul class="pagination">' +
    '<%if(data.page == 1){%>' +
      '<li class="active"><a href="#">1</a></li>' +
    '<%}else {%>' +
      '<%for(var i=0;i<data.page;i++){%>' +
        '<li><a href="#"><%=i%></a></li>' +
      '<%}%>' +
    '<%}%>' +
    '<%if(!data.page == 1){%>' +
      '<li>' +
        '<a href="#">' +
          '<span aria-hidden="true">&gt;</span>' +
        '</a>' +
      '</li>' +
      '<li>' +
        '<a href="#">' +
          '<span aria-hidden="true">&raquo;</span>' +
        '</a>' +
      '</li>' +
    '<%}%>' +
  '</ul>' +
'</nav>' +
'<div class="modal fade" id="addNewSecondCategory" tabindex="-1" role="dialog">' +
  '<div class="modal-dialog popups" role="document">' +
    '<div class="modal-content">' +
      '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>' +
        '<h4 class="modal-title" id="exampleModalLabel">添加分类</h4>' +
      '</div>' +
      '<div class="modal-body">' +
        '<form>' +
          '<div class="form-group">' +
            '<div class="dropdown">' +
              '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                '一级分类:' +
                '<span class="caret"></span>' +
              '</button>' +
              '<ul class="dropdown-menu dLabel-classify" aria-labelledby="dLabel">' +
                '<li value="1">户外馆</li>' +
                '<li value="2">帆布馆</li>' +
                '<li value="3">男式馆</li>' +
                '<li value="4">女士馆</li>' +
                '<li value="5">运动馆</li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          '<div class="form-group">' +
            '<input type="text" class="form-control" placeholder="请输入二级分类名称">' +
          '</div>' +
          '<div class="form-group">' +
            '<div class="control-group">' +
               '<label class="control-label" for="imgUpload">上传图片</label>' +
               '<div class="controls">' +
               '<input class="input-file uniform_on" id="imgUpload" name="classify-img" type="file">' +
               '</div>' +
             '</div>' +
          '</div>' +
        '</form>' +
      '</div>' +
      '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>' +
        '<button type="button" class="btn btn-primary">确认</button>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div>';

//用户管理模版
var userManagement = '<table class="table table-bordered table-hover">' +
  '<thead>' +
    '<tr>' +
      '<th>序号</th>' +
      '<th>用户名</th>' +
      '<th>手机号</th>' +
      '<th>状态</th>' +
      '<th>操作</th>' +
    '</tr>' +
  '</thead>' +
  '<tbody>' +
    '<%for(var i=0; i<data.data.length;i++){%>' +
      '<tr>' +
        '<td><%=data.data[i].id%></td>' +
        '<td><%=data.data[i].username%></td>' +
        '<td><%=data.data[i].mobile%></td>' +
        '<td><%=data.data[i].isDelete == 1? \'正常\':\'禁用\'%></td>' +
        '<td>' +
        '<%if(data.data[i].isDelete == 1){%>' +
          '<button type="button" class="btn btn-danger">禁用</button>' +
        '<%}else {%>' +
          '<button type="button" class="btn btn-success">启用</button>' +
        '<%}%>' +
        '</td>' +
      '</tr>' +
    '<%}%>' +
  '</tbody>' +
'</table>' +
'<nav class="pull-right">' +
  '<ul class="pagination">' +
    '<%if(data.page == 1){%>' +
      '<li class="active"><a href="#">1</a></li>' +
    '<%}else {%>' +
      '<%for(var i=0;i<data.page;i++){%>' +
        '<li><a href="#"><%=i%></a></li>' +
      '<%}%>' +
    '<%}%>' +
    '<%if(!data.page == 1){%>' +
      '<li>' +
        '<a href="#">' +
          '<span aria-hidden="true">&gt;</span>' +
        '</a>' +
      '</li>' +
      '<li>' +
        '<a href="#">' +
          '<span aria-hidden="true">&raquo;</span>' +
        '</a>' +
      '</li>' +
    '<%}%>' +
  '</ul>' +
'</nav>';
