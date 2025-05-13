import {View} from "@tarojs/components";
import {AtCard, AtNoticebar} from "taro-ui";
import {useEffect, useState} from "react";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import YxinR from "../../../http/httpUtils";
import {
  HOME_VIEW_CTI_TOTAL_COUNT,
  HOME_VIEW_SCO_ITEMS_COUNT,
  HOME_VIEW_SDO_ITEMS_COUNT,
} from "../../../http/backendApis";
import Taro from '@tarojs/taro'
import GlobalFooter from "@/components/GlobalFooter";

/**
 * 主页
 */

export default () => {
  const [ctiCount, setCtiCount] = useState<number>(0);
  const [ctiScoCount, setCtiScoCount] = useState<number>(0);
  const [ctiSdoCount, setCtiSdoCount] = useState<number>(0);

  // 跳转的函数
  const handleCardClick = () => {
    // 使用 wx.navigateTo 跳转到目标页面
    Taro.navigateTo({
      url: '/subpackage/pages/detailReport/index'  // 修改为你的目标页面路径
    })
  }

  const initData = () => {
    // @ts-ignore
    YxinR.getRequest(HOME_VIEW_CTI_TOTAL_COUNT).then(ctiCountRes => {
      setCtiCount(ctiCountRes.data.ctiCount)
    })

    // @ts-ignore
    YxinR.getRequest(HOME_VIEW_SCO_ITEMS_COUNT).then(ctiScoCountRes => {
      setCtiScoCount(ctiScoCountRes.data.scoCount)
    })

    // @ts-ignore
    YxinR.getRequest(HOME_VIEW_SDO_ITEMS_COUNT).then(ctiSdoCountRes => {
      setCtiSdoCount(ctiSdoCountRes.data.sdoCount)
    })

  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <View className="index-page">
      <AtNoticebar marquee icon='volume-plus'>
        ALSAP威胁情报智能分析平台小程序端正在开发，开发者-YxinMiracle
      </AtNoticebar>
      <View className='at-article'>
        <View className='at-article__h1'>
          系统信息展示
        </View>
        <AtCard
          onClick={handleCardClick}
          className="information-card left-enter"
          note='STIX2.1情报信息'
          extra='额外信息'
          title='情报个数'
          renderIcon={<View className='at-icon at-icon-settings'> </View>}
        >
          当前情报数：{ctiCount}
        </AtCard>
        <AtCard
          onClick={handleCardClick}
          className="information-card right-enter"
          note='STIX2.1可观测对象信息'
          extra='额外信息'
          title='系统可观测对象数'
          renderIcon={<View className='at-icon at-icon-settings'> </View>}
        >
          当前可观测对象数：{ctiScoCount}
        </AtCard>
        <AtCard
          onClick={handleCardClick}
          className="information-card left-enter"
          note='STIX2.1域对象信息'
          extra='额外信息'
          title='系统域对象数'
          renderIcon={<View className='at-icon at-icon-settings'> </View>}
        >
          当前域对象数：{ctiSdoCount}
        </AtCard>
      </View>
      <GlobalFooter />
    </View>
  );
};
