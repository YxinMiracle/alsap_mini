export default defineAppConfig({
  pages: [
    'pages/index/index',  // 首页
    "pages/search/index",
  ],
  subPackages: [
    {
      "root": "subpackage",  // 子包的根目录
      "pages": [
        "pages/detailReport/index",  // 详情报告页面
      ]
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        iconPath: 'assert/data_select.png',
        selectedIconPath: 'assert/data_selected.png',
        pagePath: 'pages/index/index',
        text: '数据',
      },
      {
        iconPath: 'assert/search.png',
        selectedIconPath: 'assert/searched.png',
        pagePath: 'pages/search/index',
        text: '搜索',
      },
      // {
      //   iconPath: 'assert/search.png',
      //   selectedIconPath: 'assert/searched.png',
      //   pagePath: 'subpackage/pages/detailReport/index',  // 详情报告页面指向子包
      //   text: '报告',
      // },
    ],
    color: '#000',
    selectedColor: '#56abe4',
    backgroundColor: '#fff',
    borderStyle: 'white',
  },
})
