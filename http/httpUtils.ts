import Taro from "@tarojs/taro";
import interceptors from "./interceptors";
// @ts-ignore
// eslint-disable-next-line import/first
import CryptoJS from "crypto-js";

interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem));

class HttpUtils {
  /**
   * 请求公共方法
   * @param {*} method Request的method类型  post 或者 get
   * @param {*} url 请求的接口
   * @param {*} params 请求参数
   * @param {*} header 自定义请求头
   * @returns 返回promise 对象
   */
  RequestOptions(method = "GET", url = "", params = {}, header = null) {
    const baseUrl = "https://alsap.tracesec.cn"; //基本接口地址
    // @ts-ignore
    let { contentType = "application/json" } = header || {};

    let requestUrl = url;
    // 如果说没有找到http，那么就去封装对应的请求，要是get请求，我们就手动封装url
    if (requestUrl.indexOf("http") < 0) {
      requestUrl =
        method == "GET" ? baseUrl + requestUrl : baseUrl + requestUrl;
    }

    let option = {
      url: requestUrl, //地址
      data: method == "GET" ? {} : { ...params }, //传参
      method: method, //请求方式
      timeout: 30000, // 超时时间
      header: {
        //请求头
        "content-type": contentType,
        // @ts-ignore
        ...header,
      },
    };

    // @ts-ignore
    return Taro.request(option)
      .then((res) => {
        // if (!res.data) return;

        // const { status, msg } = res.data;
        // // console.log("请求的内容", res);
        //
        // // 对接口返回状态进行处理
        // if (status == 201) {
        //   // 错误信息
        //   Taro.showToast({
        //     title: msg,
        //     icon: "none",
        //     duration: 1500,
        //   });
        // } else if (status == 202) {
        //   // ... 无token时退出登录的处理
        //
        //   return null;
        // }
        console.log(res);
        return res.data;
      })
      .catch((rejectvalue) => {
        console.log("网络请求异常", rejectvalue, option);
        return null;
      });
  }

  /**
   * Taro的get基础请求
   * @param {*} url
   * @param {*} params
   * @returns
   */
  getRequest = (url, params) => {
    return this.RequestOptions("GET", url, params);
  };

  lF = "zxcvbnmlkjhgfdsaqwertyuiop0987654321QWERTYUIOPLKJHGFDSAZXCVBNM";
  fne = this.lF + "-@#$%^&*+!";

  qu = (e) => {
    return e.map((t) => this.fne[t]).join("");
  };

  dne = (e, t) => {
    return parseInt(String(Math.random() * (t - e + 1) + e), 10);
  };

  hne = (e) => {
    return [...Array(e)].map(() => this.lF[this.dne(0, 61)]).join("");
  };

  uK = (input) => {
    return CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
  };

  t1 = (e = {}) => {
    // @ts-ignore
    const { p: t, n: u, k: o, a: i } = e;
    //@ts-ignore
    return this.uK(u + o + i);
  };

  /**
   * Taro的POST请求
   * @param {*} url
   * @param {*} params
   * @returns
   */
  postRequest = (url, params) => {
    const ixHyFxIl = JSON.stringify;
    // @ts-ignore
    const rightData = params;
    const dataString = CryptoJS.enc.Base64.stringify(
      CryptoJS.enc.Utf8.parse(ixHyFxIl(params))
    );
    const key = CryptoJS.enc.Utf8.parse(
      this.qu([41, 1, 23, 5, 61, 23, 19, 15, 2, 7, 18, 62, 54, 46, 53, 54, 45])
    );
    const encrypted = CryptoJS.DES.encrypt(dataString, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });

    const newParams = {
      [this.qu([10, 56, 10, 41, 35, 59, 34, 47, 13])]: encrypted.toString(),
    };

    const L = this.hne(16);
    const T = Date.now();

    const d = {
      [this.qu([56, 62, 52, 11, 23, 62, 39, 18, 16, 62, 60, 24, 5, 2, 18])]: L,
      [this.qu([
        56, 62, 52, 11, 23, 62, 39, 18, 16, 62, 40, 23, 6, 18, 14, 20, 15, 6,
        25,
      ])]: T,
    };

    const p = {
      p: ixHyFxIl(rightData),
      a: T,
      n: L,
      k: this.qu([8, 28, 20, 42, 21, 53, 65, 6]),
    };

    //@ts-ignore
    d[
      this.qu([
        56, 62, 52, 11, 23, 62, 39, 18, 16, 62, 53, 23, 11, 5, 15, 20, 22, 19,
        18,
      ])
    ] = this.t1(p);

    // post请求的params需要进行加密处理
    // @ts-ignore
    return this.RequestOptions("POST", url, newParams, d);
  };
}

export default new HttpUtils();
