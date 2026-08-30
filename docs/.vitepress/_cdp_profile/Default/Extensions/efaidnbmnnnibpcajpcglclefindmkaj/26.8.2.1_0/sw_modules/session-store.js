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
import{loggingApi as t}from"../common/loggingApi.js";export const SESSION_TYPES={HTML_TO_PDF:"html-to-pdf",OUTLOOK_PDF:"outlook-pdf",MSWORD_DOCUMENT:"msword-document",UPSELL:"upsell"};const e={[SESSION_TYPES.OUTLOOK_PDF]:{domains:["https://outlook.office365.com","https://outlook.office.com","https://outlook.live.com","https://outlook.cloud.microsoft"],ttlMs:3e5},[SESSION_TYPES.MSWORD_DOCUMENT]:{domains:["https://word.cloud.microsoft","https://[a-z0-9-]+\\.sharepoint\\.com","https://onedrive.live.com"],ttlMs:3e5},[SESSION_TYPES.HTML_TO_PDF]:{ttlMs:18e5,defaultData:{sourceTabUrl:null,frameId:null,targetSectionId:null}},[SESSION_TYPES.UPSELL]:{ttlMs:18e5,idFormat:"numeric"}},o=new Map;function n(){const t=Date.now();o.forEach((e,n)=>{t-e.createdAt>e.ttlMs&&o.delete(n)})}export function createSession({type:t,data:e,tabId:s,ttlMs:r=18e5,useOnce:i=!1,idFormat:l}={}){if(!t||"object"!=typeof e||null===e)return null;if(n(),o.size>=200){const t=o.keys().next().value;void 0!==t&&o.delete(t)}const a=function(t){return"numeric"===t?`${Date.now()}${String(Math.floor(1e3*Math.random())).padStart(3,"0")}`:crypto.randomUUID()}(l);return o.set(a,{type:t,data:{...e,...Number.isInteger(s)?{sourceTabId:s}:null},tabId:Number.isInteger(s)?s:null,createdAt:Date.now(),ttlMs:r,useOnce:i}),a}export function getSession(e,s){if(!e||!s)return null;n();const r=String(s),i=o.get(r);return i?i.type!==e?(t.warn({message:"Session not found in session-store",type:e,reason:"type-mismatch"}),null):(i.useOnce&&o.delete(r),i.data):(t.warn({message:"Session not found in session-store",type:e,reason:"missing-or-expired"}),null)}export function deleteSessionsForTab(t){Number.isInteger(t)&&o.forEach((e,n)=>{e.tabId===t&&o.delete(n)})}export function createSessionFromMessage(t,o){const n=e[t?.type];if(!n)return null;const s=n.domains;if(s){const t=o?.url?new URL(o.url).origin:null;if(!(t&&(s.includes(t)||s.some(e=>new RegExp(`^${e}$`,"i").test(t)))))return null}const r={...n.defaultData||{},...t.data};return createSession({type:t.type,data:r,tabId:o?.id,ttlMs:n.ttlMs,useOnce:n.useOnce,idFormat:n.idFormat})}export function getSessionFromMessage(t){return Object.hasOwn(e,t?.type)?getSession(t.type,t.sessionId):null}