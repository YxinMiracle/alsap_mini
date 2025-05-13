import {Button, Input, View, Text, Image, RichText} from "@tarojs/components";
import {AtMessage, AtTag, AtToast} from 'taro-ui'
import {useEffect, useState} from "react";
import "./index.scss";
import YxinR from "../../../http/httpUtils";
import {SEARCH_CTI} from "../../../http/backendApis";
import Taro from "@tarojs/taro";
import GlobalFooter from "@/components/GlobalFooter";


/**
 * 搜索页
 */

export default () => {
  const [ctiSearchedList, setCtiSearchedList] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(""); // 状态绑定

  const searchCti = () => {
    if (value === ""){
      Taro.atMessage({
        'message': '请勿查询空消息',
        'type': 'warning',
      })
      return
    }
    setCtiSearchedList([])
    YxinR.postRequest(SEARCH_CTI, {
      searchText: value,
    }).then((res) => {
      if (res.code === 0) {
        setCtiSearchedList(res.data.records);
      }
      console.log(res);
    });
  };

  // 监听 value 变化来触发搜索
  // useEffect(() => {
  //   searchCti();
  // }, []); // 当 value 改变时触发 searchCti

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const renderTag = (value) => {
    return (
      <Text className={`tag ${value ? 'tag-yes' : 'tag-no'}`}>
        {value ? '有' : '无'}
      </Text>
    );
  }

  return (
    <View className="search-page">
      <AtMessage />
      <View className="input-bar">
        <View className="input-container">
          <Input
            className="input-field"
            type="text"
            placeholder="请输入想要搜索的情报内容"
            value={value}
            onInput={handleInputChange}
            onConfirm={()=>searchCti()} // 监听回车键确认事件
          />
        </View>
        <Button onClick={()=>searchCti()} className="search-button" type='primary'>搜索情报</Button>
      </View>
      <View>
        <AtToast isOpened={open} onClose={()=>setOpen(false)} text="没做好，别点了" icon="close"></AtToast>

        <View className="card-container">
          {ctiSearchedList.map((item, index) => {
            // @ts-ignore
            return (
              <View key={index} className="card" onClick={()=>setOpen(true)}>
                {/* 左侧图片 */}
                <Image className="card-image"
                       src={item.imageUrl ?? "https://storage.googleapis.com/gweb-cloudblog-publish/images/threat-intelligence-default-banner-simplifie.max-700x700.png"}
                       mode="aspectFill"/>

                {/* 中间内容 */}
                <View className="card-content">
                  {/* 标题 */}
                  <RichText className="card-title"
                            nodes={item.title.length > 110 ? item.title.slice(0, 110) + '...' : item.title}
                  />

                  <View>
                    <Text style={{fontSize: 12, color:'#b2b2b2'}}>
                      {item.simpleContent.length > 150 ? item.simpleContent.slice(0, 150) + '...' : item.simpleContent}
                    </Text>

                  </View>

                  {/* 数量展示 */}
                  <View className="card-numbers">
                    <Text>实体数量：<Text className="number-value">{item.entityNum}个</Text></Text>
                    <Text className="separator">|</Text>
                    <Text>SCO数量：<Text className="number-value">{item.scoNum}个</Text></Text>
                    <Text className="separator">|</Text>
                    <Text>SDO数量：<Text className="number-value">{item.sdoNum}个</Text></Text>
                  </View>

                  {/* 是否有图谱与规则 */}
                  <View className="card-tags">
                    <Text>图谱：<Text className="number-value">{renderTag(item.hasGraph)}</Text></Text>
                    <Text>规则：<Text className="number-value">{renderTag(item.hasRule)}</Text></Text>
                    <Text>技战术：<Text className="number-value">{renderTag(item.hasTtp)}</Text></Text>
                  </View>
                </View>

                {/* 右侧箭头 */}
                <View className="card-arrow at-icon at-icon-chevron-right"></View>
              </View>
            );
          })}
        </View>
      </View>
      <GlobalFooter />
    </View>
  );
};
