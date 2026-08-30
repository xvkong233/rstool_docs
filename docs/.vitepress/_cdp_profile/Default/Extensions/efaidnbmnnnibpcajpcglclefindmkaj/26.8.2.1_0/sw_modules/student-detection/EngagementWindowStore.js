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
import{dcLocalStorage as t}from"../../common/local-storage.js";import{encodeDomain as e}from"../../common/domain-encoding.js";import{BROWSER_STUDENT_STATE_KEY as n,BROWSER_STUDENT_IS_ENTERPRISE_FIELD as r,ENGAGEMENT_STATE_TAG_FIELD as o,ENGAGEMENT_STATE_IDENTIFIED_AT_FIELD as i,ENGAGEMENT_STATE_RETENTION_EXPIRES_FIELD as a,ENGAGEMENT_STATE_EVENT_SENT_FIELD as s,ENGAGEMENT_STATE_CONFIG_VERSION_FIELD as c,ENGAGEMENT_STATE_ROLLING_WINDOW_FIELD as g}from"./constants.js";export class EngagementWindowStore{static normalizeParsedState(t){const e=t?.[g];return{...EngagementWindowStore.createEmptyState(),[o]:t?.[o]??"",[i]:t?.[i]??void 0,[a]:t?.[a]??void 0,[s]:!!t?.[s],[c]:t?.[c]??void 0,[r]:!0===t?.[r],[g]:EngagementWindowStore.normalizeRollingWindow(e)}}async getState(){await t.init();const e=t.getItem(n);if(!e)return EngagementWindowStore.createEmptyState();try{const t="string"==typeof e?JSON.parse(e):e;return EngagementWindowStore.normalizeParsedState(t)}catch{return EngagementWindowStore.createEmptyState()}}static createEmptyState(){return{[o]:"",[i]:void 0,[a]:void 0,[s]:!1,[c]:void 0,[g]:{}}}static normalizeRollingWindow(t){if(!t||"object"!=typeof t)return{};const e={};return Object.entries(t).forEach(([t,n])=>{Array.isArray(n)&&(e[t]=n.filter(t=>"string"==typeof t))}),e}static computeRetentionExpiresAt(t,e){if(!t||!e)return;const n=new Date(t);if(Number.isNaN(n.getTime()))return;const r=new Date(n);return r.setUTCDate(r.getUTCDate()+e),r.toISOString()}async saveState(e){await t.init(),await t.setItem(n,JSON.stringify(e))}static getUtcDayKey(){return(new Date).toISOString().slice(0,10)}static pruneWindow(t,e){const n=new Date;n.setUTCDate(n.getUTCDate()-e);const r=n.toISOString().slice(0,10),o={},i=t[g],a=EngagementWindowStore.normalizeRollingWindow(i);return Object.entries(a).forEach(([t,e])=>{t>=r&&(o[t]=e)}),{...t,[g]:o}}static recordEngagement(t,n,r=EngagementWindowStore.getUtcDayKey()){const o=e(n?.toLowerCase());if(!o)return t;const i=t[g],a=EngagementWindowStore.normalizeRollingWindow(i),s=new Set(a[r]??[]);return s.add(o),{...t,[g]:{...a,[r]:[...s]}}}}