const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    //开发环境的配置，当然生产环境就会失败，后续再配置
    port: 8888, //可以输入 npm run serve 进行测试看下
    open: true, //启动项目会自动打开浏览器运行
    https: false,
    host: "localhost", // 主机名，也可以 127.0.0.1 或 做真机测试时候 0.0.0.0
  },
  lintOnSave: false, //关闭格式检查。
  productionSourceMap: false, // 打包时, 不生成 .map 文件, 加快打包构
});
