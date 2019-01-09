$(function () {
    var mmb = new MMB();
    // 调用实例里面都函数
    mmb.getindexmenu();
});
// 组员往公共对象里面添加函数 获取主页菜单的函数
MMB.prototype.getindexmenu = function () {
    // mmb.getindexmenu 是mmb实例对象调用的getindexmenu函数 所以this就是 mmb实例
    console.log(this);
    $.ajax({
        url: this.baseUrl + '/api/getindexmenu',
        success: function (data) {
            console.log(data);
            var html = template('indexMenuTpl',data);
            $('#nav .mui-row').html(html);
        }
    })
}
// 组员往公共对象里面添加函数 获取主页折扣商品的函数
MMB.prototype.getmoneyctrl = function () {

}