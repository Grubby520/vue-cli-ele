/**
 * 开发环境和生产环境
 * 
 * baseUrl： 域名
 * routerMode: 路由模式
 * imgBaseUrl： 图片地址
 * 
 */

 let [baseUrl, routerMode, imgBaseUrl] = ['', 'hash', ''];

 if(process.env.NODE_ENV == 'development'){
     imgBaseUrl = '/img/';
 } else if(process.env.NODE_ENV == 'production'){
    baseUrl = '',
    imgBaseUrl = '';
 }

 export {
     baseUrl,
     routerMode,
     imgBaseUrl
 }
