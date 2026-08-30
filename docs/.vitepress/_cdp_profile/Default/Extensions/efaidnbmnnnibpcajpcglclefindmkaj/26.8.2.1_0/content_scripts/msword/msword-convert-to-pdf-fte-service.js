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
import{createFteTooltip,removeFteTooltip,addFteCloseButtonListener,updateFteToolTipCoolDown,acrobatTouchPointClicked,initFteStateAndConfig,shouldShowFteTooltip}from"../utils/fte-utils.js";import state from"./state.js";const MSWORD_FTE_STORAGE_KEY="acrobat-msword-fte-state",FTE_TYPE="msword-convert-to-pdf",ARROW_HALF_WIDTH=8,BUTTON_TOOLTIP_GAP_PX=10;export async function isMSWordConvertToPdfFteEligible(t){if(!t?.enableConvertToPDFTouchPoint||!t?.enableFte)return!1;const e=await initFteStateAndConfig(MSWORD_FTE_STORAGE_KEY);return shouldShowFteTooltip(t.fteConfig,e,t.enableFte)}const positionTooltip=(t,e)=>{const o=t.getBoundingClientRect(),n=e.getBoundingClientRect();e.style.top=`${o.bottom+10}px`;const i=Math.max(8,o.right-n.width);e.style.left=`${i}px`;const r=e.querySelector(".acrobat-fte-tooltip-arrow-msword-convert-to-pdf"),s=o.left+o.width/2;r&&(r.style.left=s-i-8+"px")};export function tryShowMSWordFte({touchPoint:t,fteTooltipStrings:e,fteConfig:o,sendAnalyticsEvent:n,source:i,workflow:r}){if(!t||document.getElementsByClassName("acrobat-fte-tooltip-container").length>0)return;const s=createFteTooltip(e,FTE_TYPE);if(!s)return;const c=()=>positionTooltip(t,s);state.disconnectFteEventListeners();const l=state.fteEventControllerSignal,a=t=>{s.isConnected&&!s.contains(t.target)&&(removeFteTooltip(),state.disconnectFteEventListeners(),n("DCBrowserExt:DirectVerb:Fte:Dismissed",{source:i,workflow:r}))};addFteCloseButtonListener(s,{fteType:FTE_TYPE,onClose:()=>{state.disconnectFteEventListeners(),n("DCBrowserExt:DirectVerb:Fte:Closed",{source:i,workflow:r})}}),document.body.appendChild(s),c(),window.addEventListener("resize",c,{signal:l}),document.addEventListener("keydown",t=>{"Escape"===t.key&&s.isConnected&&(t.preventDefault(),removeFteTooltip(),state.disconnectFteEventListeners(),n("DCBrowserExt:DirectVerb:Fte:Dismissed",{source:i,workflow:r}))},{signal:l}),setTimeout(()=>document.addEventListener("click",a,{signal:l,capture:!0}),0),updateFteToolTipCoolDown(o,MSWORD_FTE_STORAGE_KEY),n("DCBrowserExt:DirectVerb:Fte:Shown",{source:i,workflow:r})}export function markMSWordFteConsumed(){return state.disconnectFteEventListeners(),removeFteTooltip(),acrobatTouchPointClicked(MSWORD_FTE_STORAGE_KEY)}