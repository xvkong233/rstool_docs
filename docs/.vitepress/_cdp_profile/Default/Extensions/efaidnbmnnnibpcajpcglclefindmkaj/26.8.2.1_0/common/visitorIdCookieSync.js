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
import{dcLocalStorage as t,getInstallUpdateTimestamps as i}from"./local-storage.js";import{loggingApi as o}from"./loggingApi.js";const e="visitorIdECIDMap";export function recordECIDAndDetectRotation(n){var r;if(null!=n&&""!==n)try{const s=t.getItem("anonUserUUID");if(!s)return;let a={};try{const i=t.getItem(e);i&&(a=JSON.parse(i))}catch(t){a={}}const c=(r=a[s],Array.isArray(r)?r:null!=r&&""!==r?[String(r)]:[]);if(c.includes(n))return;if(c.push(n),a[s]=c,t.setItem(e,JSON.stringify(a)),c.length>1){t.setItem("visitorIdRotationTimestamp",Date.now());const{install:e,update:n}=i();o.info({message:"VisitorIdRotationDetected",context:"visitorIdRotation",ecidArray:c.join(","),visitorsCount:c.length,anonUserUUID:s,iV:t.getItem("installVersion"),iT:e,uT:n})}}catch(t){}}