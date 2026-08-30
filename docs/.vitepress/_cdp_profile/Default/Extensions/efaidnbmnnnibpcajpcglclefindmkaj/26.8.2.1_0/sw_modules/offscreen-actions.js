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
import{OFFSCREEN_DOCUMENT_PATH as e}from"../common/constant.js";import{dcLocalStorage as n}from"../common/local-storage.js";import{common as t}from"./common.js";import{communicate as o}from"./communicate.js";import{Proxy as r}from"./proxy.js";import{util as s}from"./util.js";let i=null;i||(i=new function(){this.proxy=r.proxy.bind(this);const o=()=>n.getItem("anonUserUUID")||t.createAnonUserUUID();this.getDocState=function(e){const t=n.getItem("filesData")||{};if(t.filePath)try{const n=new Map(JSON.parse(t.filePath));if(!n.has(e))return;return n.get(e)}catch(e){}},this.setupWorkerOffscreen=async function(r){if(n.getItem("rrv")){const i=t.getEnv(),a=`${e}?env=${i}&rrv=true`;await s.setupOffscreenDocument(a);const c=o(),f=await chrome.runtime.sendMessage({main_op:"createIframeToLoadAjsWorker",target:"offscreen",rrvEnabled:!0,env:i,anonUserUUID:c}),p=n.getItem("lrrv");if(f.iframeLoaded&&p&&r&&!r.startup&&r.acceptRanges&&r.pdfSize>0){const e=this.getDocState(r.pdfURL)||{};chrome.runtime.sendMessage({main_op:"getLinearizedRendition",target:"offscreen",tabId:r.tabId,viewerInstanceId:r.viewerInstanceId,pdfURL:decodeURIComponent(r.pdfURL),pdfSize:r.pdfSize,docLastOpenState:e})}}},this.closeOffscreenDocument=function(){chrome.offscreen.closeDocument()},this.rapidRenditionResponse=function(e){delete e.main_op,e.content_op="rapidRenditionResponse",chrome.tabs.sendMessage(e.tabId,e)},this.rapidRenditionError=function(e){delete e.main_op,e.content_op="rapidRenditionError",chrome.tabs.sendMessage(e.tabId,e)},this.handleFgResponseFromCDN=async function(r){const i=r.response,a=JSON.parse(i);a.timestamp=Date.now(),n.setItem("ffResponse_anon",JSON.stringify(a));const c=t.getEnv(),f=`${e}?env=${c}`;await s.setupOffscreenDocument(f);const p=o();setTimeout(()=>{chrome.runtime.sendMessage({main_op:"fgResponseFromCDN",target:"offscreen",response:JSON.stringify(a),iframeURL:t.getSignInUrl(),anonUserUUID:p})},50)}}),o.registerHandlers({setupWorkerOffscreen:i.proxy(i.setupWorkerOffscreen),closeOffscreenDocument:i.proxy(i.closeOffscreenDocument),rapidRenditionResponse:i.proxy(i.rapidRenditionResponse),rapidRenditionError:i.proxy(i.rapidRenditionError),fgResponseFromCDN:i.proxy(i.handleFgResponseFromCDN)});export const offscreenActions=i;