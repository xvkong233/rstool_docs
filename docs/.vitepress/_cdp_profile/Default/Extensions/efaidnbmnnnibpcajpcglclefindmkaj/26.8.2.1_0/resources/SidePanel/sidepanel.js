/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
import{dcLocalStorage as e}from"../../common/local-storage.js";import{SIDE_PANEL_HASH_ROUTES as t}from"../../common/constant.js";import{util as o}from"../../browser/js/content-util.js";import{checkCdnConnectivity as n}from"../../common/util.js";import{connectSidePanelPort as r,createSendAnalytics as s,getSidePanelTabId as a,isHomeShellRoute as m}from"./sidePanelUtil.js";import{fetchAndSendHtmlContent as i}from"./htmlContentFetcher.js";import{getGenAiPrerenderState as d,shouldShowTrefoilLoader as l,showTrefoilLoader as c}from"./loaderUIHelper.js";import{Cdn as p}from"./cdn.js";import{initHomeMode as h}from"./home.js";import{initOfflineMode as f}from"./offline.js";import{registerHostedShellListeners as I}from"./shell-listeners.js";const u=Date.now();await e.init();const E=e.getItem("isSidePanelHomeEnabled");let w=e.getItem("touchpoint");e.removeItem("touchpoint");let P=e.getItem("hashRoute");e.removeItem("hashRoute"),w||(w="ExtensionAction",P=t.HOME),E||(P=t.SIDE_PANEL);const b=m(P),j=document.getElementById("tooltipTextEnabled");E&&b&&j&&(j.id="tooltipTextEnabledHome"),o.translateElementsByAppLocale(".translate");const g=await d(P,w);l(g)&&c(),chrome.runtime.sendMessage({type:"sidepanel_render_mode",tabId:a(),renderMode:`${g?.showPreRendered?"csssr":"trefoil"}:${b?"home":"genai"}`}).catch(()=>{}),g?.showPreRendered&&(e=>{const t=document.createElement("iframe");t.id="sidepanelPreRendered",t.title="Adobe Chatbot",t.srcdoc=e,document.body.appendChild(t)})(g.ssrHtml);const H=e.getItem("sidepanelUrl");if(H){await n(H)?b?await h(u,P,w):await async function(e,t,o,n){const r=a(),m=s(r);m(`DCBrowserExt:SidePanel:Opened:${t||"Unspecified"}`);const d=new p({initTimeStamp:e,hostedHashRoute:n,touchpoint:t,ssrHtml:o?.ssrHtml,hasPendingPrompt:!!o?.hasPendingPrompt,onIframeLoad:()=>m(`DCBrowserExt:SidePanel:IframeLoaded:${t}`),onIframeError:()=>m(`DCBrowserExt:SidePanel:IframeLoadError:${t}`)});I({cdn:d,sendAnalytics:m,tabId:r,touchpoint:t,hashRoute:n}),await i({cdn:d,tabId:d.tabId,touchpoint:t})}(u,w,g,P):f(u)}else{const e=a();r(e,u),chrome.runtime.sendMessage({type:"sidepanel_close_reason",tabId:e,reason:"NoSidepanelUrl"})}