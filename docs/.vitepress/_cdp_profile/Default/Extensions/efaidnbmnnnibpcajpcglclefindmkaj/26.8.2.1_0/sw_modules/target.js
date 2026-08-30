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
import{common as e}from"./common.js";import{dcLocalStorage as t}from"../common/local-storage.js";import{util as s}from"./util.js";import{OFFSCREEN_DOCUMENT_PATH as r}from"../common/constant.js";let a=null;class n{inFlightOffers=new Map;async getTargetOfferFromOffscreen(t){const a=t.join(",");if(this.inFlightOffers.has(a))return this.inFlightOffers.get(a);const n=`${r}?env=${e.getEnv()}`;await s.setupOffscreenDocument(n);const o=new Promise(async e=>{const s=await chrome.runtime.sendMessage({main_op:"callTargetAPI",target:"offscreen",mboxes:t});try{s&&s.targetOffersResponse?e(JSON.parse(s.targetOffersResponse||"[]")):e([])}catch(t){console.log("Error parsing target offers response",t),e([])}});return this.inFlightOffers.set(a,o),o.finally(()=>this.inFlightOffers.delete(a)),o}removeMboxFromStorage=e=>{this.availableResponse=this.availableResponse.filter(t=>!Object.prototype.hasOwnProperty.call(t,e))};mergeResponses=(e,t)=>{const s=new Map;return e.forEach(e=>{const t=Object.keys(e).find(e=>"expiry"!==e);t&&s.set(t,e)}),t.forEach(e=>{const t=Object.keys(e).find(e=>"expiry"!==e);t&&s.set(t,e)}),Array.from(s.values())};checkOfferInStorage=async e=>{if(this.availableResponse=t.getItem("targetResponse"),this.availableResponse)try{this.availableResponse=JSON.parse(this.availableResponse)}catch(e){console.log("Error parsing target response",e),this.availableResponse=[]}else this.availableResponse=[];if(0===this.availableResponse.length)return{cached:[],toFetch:[...e]};const s=await Promise.all(e.map(async e=>{const t=this.availableResponse.find(t=>Object.prototype.hasOwnProperty.call(t,e));if(!t)return null;return Date.now()>t.expiry?(this.removeMboxFromStorage(e),null):t}));this.availableResponse.length>0?t.setItem("targetResponse",JSON.stringify(this.availableResponse)):t.removeItem("targetResponse");return{cached:s.filter(e=>null!==e),toFetch:e.filter((e,t)=>null===s[t])}};async getTargetOffer(e){const{cached:s,toFetch:r}=await this.checkOfferInStorage(e);if(0===r.length)return s;let a=await this.getTargetOfferFromOffscreen(r);if(a){let e=t.getItem("targetResponse");try{e=e?JSON.parse(e):[]}catch(t){console.log("Error parsing target response",t),e=[]}a=a.map(e=>{const t=Object.keys(e)[0];return t&&Object.keys(e[t]).length>0?{...e,expiry:Date.now()+432e5}:null}).filter(Boolean);const s=this.mergeResponses(e,a);t.setItem("targetResponse",JSON.stringify(s))}return this.mergeResponses(s,a||[])}}a||(a=new n);export const target=a;