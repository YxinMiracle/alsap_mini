const customInterceptors = (chain) => {
  const requestParams = chain.requestParams; //请求参数

  // console.log(requestParams, "requestParams");

  //返回一个Promis
  return chain.proceed(requestParams).then(res => {
    // console.log(res.statusCode, "res.statusCode");
    // 只要请求成功，不管返回什么状态码，都走这个回调
    return res;
  }).catch(error => {
    return Promise.reject(error)
  })
}

//可扩展多个拦截器
const interceptors = [customInterceptors];

//导出拦截器的数组
export default interceptors;
