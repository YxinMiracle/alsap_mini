import {View, WebView, Button} from "@tarojs/components";
import "./index.scss";
import {useEffect, useState} from "react";
import towxmlFunc from "../../../../towxml";
import {AtButton} from 'taro-ui'
import GlobalFooter from "@/components/GlobalFooter";

/**
 * 主页
 */


export default () => {
  const [webViewState, setWebViewState] = useState<boolean>(false)

  const [contentFirst] = useState("# SeeSeeYouExec: Windows Session Hijacking via CcmExec\n" +
    "> 系统收入时间：2024-11-15 \n 图谱情况：有 \n 技战术情况: 有 \n 规则情况: 有 \n 审核作者: YxinMiracle \n\n" +
    "![YxinMiracle](https://storage.googleapis.com/gweb-cloudblog-publish/images/threat-intelligence-default-banner-simplifie.max-700x700.png)\n" +
    "## 情报摘要\n" +
    "本报告深入分析了威胁情报，揭示了针对选举活动的多层次威胁及其战术、技术和行为特征。全球范围内，选举成为各类威胁行动者的关注焦点，从网络入侵到信息操作，涉及广泛的技术手段和目的。理解这些威胁对于加强防御、制定应对策略至关重要。报告强调了需要综合考虑不同类型的威胁和策略，以及跨领域的防御合作，以确保选举过程的安全和公正。\n" +
    "## ATT&CK映射 (ttp映射)\n" +
    "### 技战术概览\n" +
    "| **Techniques ID** | **Techniques Name**     | **Tactic ID** | **Tactic Name**        |\n" +
    "|-------------------|-------------------------|---------------|------------------------|\n" +
    "| T1078             | Valid Accounts           | TA0004        | Privilege Escalation    |\n" +
    "| T1112             | Modify Registry          | TA0005        | Defense Evasion         |\n" +
    "### 详情展示\n" +
    "| **Sentence**                                                                                                                                                                                                 | **Techniques ID** | **Techniques Name**     | **Tactic ID** | **Tactic Name**        | **Entity**                             | **Relationship** | **Action**              | **Procedure**                                                                                                                                                                                                                                                                                                                                                                                                                                                   |\n" +
    "|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-------------------------|---------------|------------------------|----------------------------------------|------------------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n" +
    "| In this blog post, we will show a novel way of how adversaries can move laterally and elevate privileges within Microsoft Entra ID when organizations use a popular security architecture involving Intune - managed Privileged Access Workstations (PAWs) by abusing Intune permissions (DeviceManagementConfiguration.ReadWrite). | T1078              | Valid Accounts           | TA0004        | Privilege Escalation    | Microsoft Entra ID, Intune-managed Privileged Access Workstations (PAWs) | abusing          | move laterally and elevate privileges | In this blog post, adversaries demonstrate a novel method of exploiting **Microsoft Entra ID** and abusing **Intune permissions** to move laterally within an organization's network, targeting **Intune-managed Privileged Access Workstations (PAWs)**. By leveraging Intune's **DeviceManagementConfiguration.ReadWrite** permission, they escalate privileges and establish a foothold within the network.                                                                                                                                                                                                                                                                                                                                                       |\n" +
    "| All ) granted to Entra ID service principals.                                                                                                                                                               | T1112              | Modify Registry          | TA0005        | Defense Evasion         | Entra ID service principals            | granted to       | all permissions          | The attackers have assigned **all permissions** to **Entra ID service principals**, enabling them to execute various operations within the system environment. This could potentially lead to unauthorized access or privilege escalation.                                                                                                                                                                                                                                                                                                                                                         |\n" +
    "### 攻击路线\n" +
    "Initial Access → Persistence → Privilege Escalation → Defense Evasion → Lateral Movement\n" +
    "### 可能的技术路线\n" +
    "详情请看系统: \n");

  const [contentSecond] = useState(""+
    "## STIX SCO实体\n" +
    "| SCO实体名称      | SCO实体类型  |\n" +
    "|----------------|---------|\n" +
    "| Telegram      | software |\n" +
    "| RUsponder     | tool     |\n" +
    "| Cyber Front Z | tool     |\n" +
    "| Microsoft Windows | software |\n" +
    "| X             | software |\n" +
    "| Google        | software |\n" +
    "## 规则\n" +
    "### Yara规则\n" +
    "``` yara\n" +
    "rule CcmPwn_Cobalt_Strike_Beacon_Malware_Detection {\n" +
    "    meta:\n" +
    "        description = \"Detects indicators related to CcmPwn, Cobalt Strike, beacon malware, and .NET infrastructure usage.\"\n" +
    "        reference = \"/cti/show/detail/1857434255588622337\"\n" +
    "        author = \"yxinmiracle\"\n" +
    "        date = \"2024-11-17\"\n" +
    "    strings:\n" +
    "        $CcmPwn = \"CcmPwn\"\n" +
    "        $Cobalt_Strike = \"Cobalt Strike\"\n" +
    "        $beacon = \"beacon\"\n" +
    "        $Infrastructure = \".NET\"\n" +
    "    condition:\n" +
    "        ($CcmPwn | $Cobalt_Strike | $beacon) && $Infrastructure\n" +
    "}\n" +
    "```\n" +
    "### Snort规则\n" +
    "``` snort\n" +
    "alert IP any any -> [dennyhacker.no-ip.org] any (msg:\"Connection attempt to known malicious domain\"; sid:1; rev:1;)\n" +
    "alert IP any any -> [spl.noip.me] any (msg:\"Connection attempt to known malicious domain\"; sid:2; rev:1;)\n" +
    "```");

  useEffect(() => {

  }, [])

  const handleClick = () => {
    console.log(webViewState)
    // 可以设置一个状态来控制 web-view 的显示或隐藏
    setWebViewState(true)
  };

  // @ts-ignore
  return (
    <View className="detail-report-page">

      <view className="card">
        <view className="card-header">
          <text className="card-title">SeeSeeYouExec: Windows Session Hijacking via CcmExec</text>
          <text className="card-date">2024-11-15</text>
        </view>
        <view className="card-body">
          <view className="card-info">
            <text className="icon">📊</text>
            <text className="info-label">图谱情况：</text>
            <text className="info-value">有</text>
          </view>
          <view className="card-info">
            <text className="icon">⚙️</text>
            <text className="info-label">技术情况：</text>
            <text className="info-value">有</text>
          </view>
          <view className="card-info">
            <text className="icon">📋</text>
            <text className="info-label">规则情况：</text>
            <text className="info-value">有</text>
          </view>
          <view className="card-info">
            <text className="icon">📝</text>
            <text className="info-label">审核作者：</text>
            <text className="info-value">YxinMiracle</text>
          </view>
        </view>
      </view>
      <View>
        {
          // @ts-ignore
          <towxml nodes={towxmlFunc(contentFirst, 'markdown')}/>
        }
        <AtButton type='primary' size="small" onClick={handleClick}>点击查看可能的攻击步骤</AtButton>
        {
          // @ts-ignore
          <towxml nodes={towxmlFunc(contentSecond, 'markdown')}/>
        }
      </View>
      <View>
        {webViewState && (
          <WebView src="https://alsap.tracesec.cn/cti/show/detail/1857434255588622337?tab=behavior"/>
        )}
      </View>
      <View className="button-block"></View>
      <GlobalFooter/>
    </View>
  );
};
