const baseUrl = "https://alsap.tracesec.cn/"; //基本接口地址

/**
 * GET 请求时，拼接请求URL
 * @param url 请求URL
 * @param params 请求参数
 * @returns {*}
 */
const handleUrl = (url) => (params) => {
  if (params) {
    let paramsArray = [];
    Object.keys(params).forEach((key) =>
      // @ts-ignore
      paramsArray.push(key + "=" + encodeURIComponent(params[key]))
    );
    if (url.search(/\?/) === -1) {
      // @ts-ignore
      typeof params === "object" ? (url += "?" + paramsArray.join("&")) : url;
    } else {
      url += "&" + paramsArray.join("&");
    }
  }
  return baseUrl + url;
};

export { handleUrl };
