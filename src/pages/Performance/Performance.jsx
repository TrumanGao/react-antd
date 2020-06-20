import React from "react";

export default class Performance extends React.Component {
  constructor() {
    super();
    console.log("window", window);
    console.log("window.performance", window.performance);
    // window.performance 两个方法
    // 方法1. now() 方法返回一个DOMHighResTimeStamp，其值取决于navigation start和作用域。如果作用域是window，则值是创建浏览器上下文的时间；如果作用域是worker，则值是创建worker的时间。
    console.log("方法1. window.performance.now()", window.performance.now());
    // 方法2. toJSON()方法返回Performance对象的序列化结果，包含可以被序列化的属性。
    console.log(
      "方法2. window.performance.toJSON()",
      window.performance.toJSON()
    );

    // window.performance 三个属性
    // 属性1. timing 属性返回一个PerformanceTiming对象，其中包含与延时相关的性能信息，例如导航开始的时间，重定向的开始时间和结束时间，响应的开始时间和结束时间等。
    console.log("属性1. window.performance.timing", window.performance.timing);
    // 属性2. navigation 属性返回一个PerformanceNavigation对象，该对象表示在给定浏览上下文中发生的导航类型，例如从历史记录导航到的页面，通过跟随链接导航到的页面等。
    console.log(
      "属性2. window.performance.navigation",
      window.performance.navigation
    );
    console.log(
      "属性3. window.performance.timeOrigin",
      window.performance.timeOrigin
    );

    // https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming
    // PerformanceTiming 对象：
    let {
      // navigationStart 是一个无符号long long 型的毫秒数，表征了从同一个浏览器上下文的上一个文档卸载(unload)结束时的UNIX时间戳。如果没有上一个文档，这个值会和PerformanceTiming.fetchStart相同。
      navigationStart,
      unloadEventStart,
      unloadEventEnd,
      redirectStart,
      redirectEnd,
      // fetchStart,
      // domainLookupStart,
      // domainLookupEnd,
      // connectStart,
      // connectEnd,
      // secureConnectionStart,
      requestStart,
      // responseStart,
      // responseEnd 是一个无符号long long 型的毫秒数，返回浏览器从服务器收到（或从本地缓存读取，或从本地资源读取）最后一个字节时（如果在此之前HTTP连接已经关闭，则返回关闭时）的Unix毫秒时间戳。
      responseEnd,
      // domLoading 是一个无符号long long 型的毫秒数，返回当前网页DOM结构开始解析时（即Document.readyState属性变为“loading”、相应的 readystatechange事件触发时）的Unix毫秒时间戳。
      domLoading,
      // domInteractive,
      // domContentLoadedEventStart,
      // domContentLoadedEventEnd,
      // domComplete 是一个无符号long long 型的毫秒数，返回当前文档解析完成，即Document.readyState 变为 'complete'且相对应的readystatechange 被触发时的Unix毫秒时间戳。
      domComplete,
      // requestStart 是一个无符号long long 型的毫秒数，返回浏览器向服务器发出HTTP请求时（或开始读取本地缓存时）的Unix毫秒时间戳。
      // loadEventStart,
      // loadEventEnd 是一个无符号long long 型的毫秒数，返回当load事件结束，即加载事件完成时的Unix毫秒时间戳。如果这个事件还未被发送，或者尚未完成，它的值将会是0.
      loadEventEnd,
    } = window.performance.timing;
    // 重定向耗时
    console.log("重定向耗时：", redirectEnd - redirectStart);
    // DOM 渲染耗时
    console.log("渲染耗时：", domComplete - domLoading);
    // 页面加载耗时
    console.log("页面加载耗时：", loadEventEnd,  navigationStart);
    // 页面卸载耗时
    console.log("页面卸载耗时：", unloadEventEnd - unloadEventStart);
    // 请求耗时
    console.log("请求耗时：", responseEnd - requestStart);
  }
  render() {
    return (
      <div>
        <h2>前端性能监控</h2>
      </div>
    );
  }
}
