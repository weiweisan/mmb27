// 创建一个构造函数
var MMB = function(){

}
// 公共APiurl 公共属性 本地内网ip
// MMB.prototype.baseUrl = 'http://localhost:9090';
// 公共的外网ip
MMB.prototype.baseUrl = 'http://47.52.242.30:9090';
// 公共的函数
MMB.prototype.getQueryString = function (name){
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}