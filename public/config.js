if (window.ZEle === undefined) {
  window.ZEle = {};
  window._env_ = {};
}
// window.ZEle.endpoint = "http://192.168.3.239:8090";
// window.ZEle.endpoint = "http://demo.smallsaas.cn";
window.ZEle.endpoint = "";
window.ZEle.nav = "left"; // LeftNavCollaps left top both
window.ZEle.indexPage = "";
window.ZEle.breadcrumb = true;

window.ZEle.remoteConfig = {};

window._env_ = {
  // REACT_APP_API_HOST: "192.168.3.175:6881",//ZLMediaKit服务的地址，默认端口为80
  REACT_APP_API_HOST: "202.63.172.43:6881",//ZLMediaKit服务的地址，默认端口为80
  ZlMediaKit_Secret:"035c73f7-bb6b-4889-a715-d9eb2d1925cc",//ZLMediaKit配置文件的Secret
  // AKSTREAM_WEB_API:"192.168.3.175:5800",//AKStreamWeb服务器的地址，默认端口为5800
  AKSTREAM_WEB_API:"202.63.172.43:5800",//AKStreamWeb服务器的地址，默认端口为5800
  AKStream_AccessKey:"047I4WS1-U51UBO6W-1J4BT21P-MF17IT99-92J8WIHU-944Q4KIW"//AKStreamWeb配置文件的AccessKey
}