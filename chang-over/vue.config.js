const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    //开发环境的配置，当然生产环境就会失败，后续再配置
    port: 8888, //可以输入 npm run serve 进行测试看下
    open: true, //启动项目会自动打开浏览器运行
    https: false,
    host: "localhost", // 主机名，也可以 127.0.0.1 或 做真机测试时候 0.0.0.0
    //vue.config.js

    proxy: {
      //配置跨域
      "/api": {
        target: "http://localhost:49849", //这里填写项目真实的后台接口地址
        changOrigin: true, //设置允许跨域
        pathRewrite: {
          //这个重写不可省略！因为我们真正请求的地址并不含 /api
          "^/api": "",
          /* 当我们在浏览器中看到请求的地址为：http://localhost:8080/api/data/getdata 时
            因为重写了 /api ，所以实际上访问的地址是：http://x.x.x.x:x/data/getdata，
            */
        },
      },
    },
  },
  lintOnSave: false, //关闭格式检查。
  productionSourceMap: true,
});
