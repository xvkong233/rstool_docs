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
const OUTLOOK_FTE_STATE_STORAGE_KEY="acrobat-outlook-fte-state",OUTLOOK_TOUCH_POINT_CLASS="outlook-acrobat-touch-point";class OutlookFte{id="outlookfte";timeout=2e3;static OUTLOOK_DOMAINS=["outlook.office365.com","outlook.office.com","outlook.live.com","outlook.cloud.microsoft"];constructor(){const t=window.location.hostname;if(!OutlookFte.OUTLOOK_DOMAINS.some(o=>t.includes(o)))return this.isEligible=async()=>!1,void(this.render=async()=>{});this.initPromise=this.loadServices()}async loadServices(){[this.fteUtils,this.state]=await Promise.all([import(chrome.runtime.getURL("content_scripts/utils/fte-utils.js")),import(chrome.runtime.getURL("content_scripts/outlook/state.js")).then(t=>t.default)])}getTouchPointElement=async()=>{for(let t=0;t<10;t++){const t=document.getElementsByClassName(OUTLOOK_TOUCH_POINT_CLASS);if(t?.length>0)return t[0];await new Promise(t=>setTimeout(t,100))}return null};async render(){chrome.runtime.sendMessage({main_op:"outlook-fte-render"})}async initFteStateAndConfig(){let t={count:0,nextDate:(new Date).getTime()};return t=(await chrome.storage.local.get("acrobat-outlook-fte-state"))?.["acrobat-outlook-fte-state"]||t,chrome.storage.local.set({[OUTLOOK_FTE_STATE_STORAGE_KEY]:t}),t}async isEligible(){const t=await chrome.runtime.sendMessage({main_op:"outlook-init"});if(!t?.enableOutlookPDFTouchPoint)return!1;await this.initPromise;const o=await this.initFteStateAndConfig(),e=t?.fteConfig,i=t?.enableOutlookFteTooltip;return!!await(this.fteUtils?.shouldShowFteTooltip(e,o,i))&&await this.getTouchPointElement()}}