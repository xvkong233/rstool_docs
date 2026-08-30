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
export function handleOutlookAttachmentFlow(e,o){return new Promise((s,t)=>{chrome.runtime.sendMessage({main_op:"get-session",type:"outlook-pdf",sessionId:e}).then(e=>{const n=e?.data;if(!n?.url)return void t({message:"No outlook attachment session"});const r=new URL(n.url);Object.entries(n.queryParams||{}).forEach(([e,o])=>{r.searchParams.set(e,o)}),o(r.toString(),n.token?{"X-Token":n.token}:{}),s()}).catch(e=>{t({message:"Failed to resolve outlook attachment session",error:e?.toString()})})})}export function handleMsWordDownloadFlow(e,o){return new Promise((s,t)=>{chrome.runtime.sendMessage({main_op:"get-session",type:"msword-document",sessionId:e}).then(e=>{const n=e?.data;if(!n?.url)return void t({message:"No msword download session"});const r=new URL(n.url);Object.entries(n.queryParams||{}).forEach(([e,o])=>{r.searchParams.set(e,o)}),o(r.toString()),s()}).catch(e=>{t({message:"Failed to resolve msword download session",error:e?.toString()})})})}