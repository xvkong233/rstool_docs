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
import{extractWebpageHTML as e}from"../../../resources/addWebpage/extractWebpageHTML.js";import{largeBlobStorage as t}from"../../../common/large-blob-storage.js";import{dcLocalStorage as n}from"./offscrenUtil.js";export const saveGenAISidePanelRenderedHTML=async r=>{if(document.querySelector("iframe#sidepanel"))return;const[o,a]=await Promise.all([n.getItem("sidepanelUrl"),n.getItem("appLocale")]),s=new URL(o);s.hash=r.hashRoute;const i=s.origin;s.searchParams.append("la",!1),s.searchParams.append("ca",chrome.runtime.id),s.searchParams.append("locale",a),s.searchParams.append("utl",!0);const m=(e=>{const t=document.createElement("iframe");return t.setAttribute("id","sidepanel"),t.width="373px",t.height="914px",t.border="none",t.onerror=e=>{console.error("Error in loading sidepanel iframe",e)},t.src=e,t})(s.href);let l;document.body.appendChild(m);let c,d=!1;const p=()=>{d||(d=!0,clearTimeout(c),l&&window.removeEventListener("message",l),m.remove())};c=setTimeout(p,35e3);const h=(()=>{let e;return{promise:new Promise((t,n)=>{const r=setTimeout(()=>{n(new Error("Hosted sidepanel ready event timeout"))},2e4);e=()=>{clearTimeout(r),t()}}),resolver:e}})();var g;l=async n=>{if(n.origin===i)switch(n.data.main_op){case"saveHtmlContent":window.removeEventListener("message",l),await async function(n){const r=(new DOMParser).parseFromString(n.htmlContent,"text/html"),o=await e(r),a=n.isAnonUser?"anonGenAISSRHtml":"signedInGenAISSRHtml";o?.html&&await t.setItem(a,o.html),p()}(n.data);break;case"cdnReady":h.resolver()}},window.addEventListener("message",l),g={type:"sidepanelHtmlContent",htmlContent:"<html><body><h1>Hello</h1></body></html>",disqualified:!1,pageLanguage:"en",url:"https://www.hello.com",touchpoint:"offscreen"},m&&h.promise.then(()=>m.contentWindow.postMessage(g,i)).catch(e=>{console.error("Error in sending message to sidepanel:",e.toString()),p()})};