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
import{dcSessionStorage as e,dcLocalStorage as t}from"./local-storage.js";import{CACHE_PURGE_SCHEME as o}from"../sw_modules/constant.js";import{analytics as r}from"./analytics.js";import{getFloodgateFlag as n,getSurfaceId as s}from"./util.js";import{getDirectVerbProperty as i,DIRECT_VERB_PROP as c,logDirectVerbPerfMetrics as a,removeInactiveTabDirectVerbSessionFlag as u}from"../sw_modules/direct-verb-utils.js";const m="pdfRenderingSession_";export function getSessionKey(e){return`${m}${e}`}function d(t){const o=getSessionKey(t),r=e.getItem(o);return r&&e.removeItem(o),r}async function f(){const t=await n("dc-cv-pdf-tab-close-analytics",o.NO_CALL);return t||Object.keys(e).forEach(t=>{t.startsWith(m)&&e.removeItem(t)}),t}export function cleanupOldPdfRenderingTrackingStorage(){e.getItem("directFlowSessionsWhereViewerLoading")&&e.removeItem("directFlowSessionsWhereViewerLoading")}export async function registerPDFRenderingSession(t,o){if(!await f())return;const r=function(t){const o=getSessionKey(t);return e.getItem(o)}(t);r||function(t,o){const r=getSessionKey(t);e.setItem(r,o)}(t,{source:o,startTime:Date.now()})}export async function removeAllPDFRenderingSessionsFromTab(e){await f()&&d(e)}export function shouldShowImplicitDVCoachmark(e){const o=s(e);if(!o)return!1;const r=t.getItem(`${o}-pdf-default-viewership`),n=(t.getItem("viewerStorage")||{})[`${o}-default-viewership-coach-mark-shown`];return"true"===r&&!n&&"gdrive_chrome-native_view-NDV"!==e}export async function pdfRenderingTabCloseListener(e){if(function(e){u(e);const t=i(e,c.SOURCE_TAB_ID),o=i(e,c.PAYWALL_SHOWN),r=i(e,c.CONVERSION_ERROR_SHOWN);!t||o||r||chrome.tabs.sendMessage(t,{content_op:"show-direct-verb-tab-close-error-toast",sourceTabUrl:i(e,c.SOURCE_TAB_URL),promotionSource:i(e,c.PROMOTION_SOURCE)}).catch(()=>{})}(e),a(e),!await f())return;const t=d(e);if(t){const e=t.startTime?Date.now()-t.startTime:void 0,o=t.directFlowSuccess?"afterDirectFlowSuccess":"beforeDirectFlowSuccess";r.event("DCBrowserExt:Viewer:DirectFlow:TabClosedBeforeViewerLoaded",{source:t.source,loadTime:e,workflow:o})}}export async function pdfRenderingTabNavigatedAwayListener(e,t,o,r){await f()&&(o&&o(t)||r&&await r(e)||d(e))}