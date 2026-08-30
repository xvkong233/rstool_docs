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
import state from"./state.js";import{createFteTooltip,updateFteToolTipCoolDown,removeFteTooltip as removeFteTooltipUtil}from"../utils/fte-utils.js";import{sendAnalytics,sendErrorLog}from"../utils/util.js";const OUTLOOK_FTE_TOOLTIP_CONTAINER_CLASS="acrobat-fte-tooltip-container",OUTLOOK_FTE_TOOLTIP_BUTTON_CLASS="acrobat-fte-tooltip-button",OUTLOOK_TOUCH_POINT_CLASS="outlook-acrobat-touch-point",OUTLOOK_FTE_STATE_STORAGE_KEY="acrobat-outlook-fte-state",acrobatPromotionSource="outlookPDF",documentListenerOptions={signal:state?.eventControllerSignal},removeFteTooltip=()=>{const t=document.getElementsByClassName(OUTLOOK_TOUCH_POINT_CLASS);removeFteTooltipUtil("acrobat-fte-tooltip-container"),t.length>0&&t[0]?.classList.remove("fte-hover"),document.removeEventListener("click",handleFteClickOutside,documentListenerOptions)},handleFteClickOutside=t=>{const e=document.getElementsByClassName("acrobat-fte-tooltip-container");e.length>0&&(e[0]?.contains(t?.target)||(removeFteTooltip(),sendAnalytics([["DCBrowserExt:Outlook:FTE:Dismissed"]])))},handleFteButtonClick=()=>{removeFteTooltip(),sendAnalytics([["DCBrowserExt:Outlook:FTE:Closed"]])},addFTETooltipEventListeners=(t,e)=>{const o=t?.querySelector(".acrobat-fte-tooltip-button");o?.addEventListener("click",handleFteButtonClick),document.addEventListener("click",handleFteClickOutside,documentListenerOptions),t?.addEventListener("mouseenter",()=>{e.classList.add("fte-hover")}),t?.addEventListener("mouseleave",()=>{e.classList.remove("fte-hover")})},addFTE=async()=>{try{const t=document.getElementsByClassName(OUTLOOK_TOUCH_POINT_CLASS),e=document.getElementsByClassName("acrobat-fte-tooltip-container");if(t?.length>0&&t[0]&&0===e?.length){const e=state?.config,o=createFteTooltip(e?.fteToolTipStrings,"outlookPDF");addFTETooltipEventListeners(o,t[0]),t[0].appendChild(o),sendAnalytics([["DCBrowserExt:Outlook:FTE:Shown"]]),await updateFteToolTipCoolDown(e?.fteConfig,"acrobat-outlook-fte-state")}}catch(t){sendErrorLog("OutlookTouchPoint","Failure in addFTE")}};export{addFTE,removeFteTooltip};