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
!function(){function e(e,t){if(e instanceof Headers)return e.get(t);if("object"==typeof e){const n=Object.keys(e).find(e=>e.toLowerCase()===t.toLowerCase());return n?e[n]:null}return null}function t(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))}async function n(e,n){try{const o=e?.clone(),r=await(o?.json());o?.url&&function(e){try{const t=new URL(e);return t&&["outlook.live.com","outlook.office.com","outlook.office365.com","outlook.cloud.microsoft"].includes(t.hostname)}catch(e){return!1}}(o.url)&&t(n,{success:!0,data:r,responseUrl:o.url})}catch(e){t(n,{success:!1,error:e.message})}}function o(n,o,r){const c=n?.headers?.get("Content-Type");if(c&&!c.toLowerCase().includes("application/pdf"))return;const s=n?.headers?.get("Content-Disposition"),a=function(e){if(!e)return null;const t=e.match(/filename=([^;]+)/i);if(t){let e=t[1].trim();e=e.replace(/^["']|["']$/g,""),e=e.replace(/\\(.)/g,"$1");try{const t=decodeURIComponent(e);t===e||t.includes("�")||(e=t)}catch(e){}return e}return null}(s),u=function(t){if(!t||!Array.isArray(t)||t.length<2)return null;const n=t[1];if(!n||!n.headers)return null;const o=e(n.headers,"X-Token");if(o)return{headerName:"X-Token",value:o};const r=e(n.headers,"Authorization");if(r&&/^Bearer\s+/i.test(r))return{headerName:"Authorization",value:r.replace(/^Bearer\s+/i,"")};return null}(r);t(o,n?.url&&a&&u?{success:!0,responseUrl:n.url,filename:a,authToken:u.value,authHeaderName:u.headerName}:{success:!1,error:"No response URL, filename, or authToken"})}!function(){const e=window.fetch;window.fetch=function(...r){const c=r[0]||"";if(c&&(c.includes("service.svc?action=GetAttachmentDownloadToken")||c.includes("service.svc/s/GetFileAttachment"))){const s=c.includes("service.svc?action=GetAttachmentDownloadToken")?"acrobat-outlook-token-intercept-response":"acrobat-outlook-attachment-intercept-response";return e(...r).then(e=>(e.ok?(async()=>{"acrobat-outlook-token-intercept-response"===s?n(e,s):o(e,s,r)})():(async()=>{t(s,{success:!1,status:e.status})})(),e)).catch(e=>{throw t(s,{success:!1,error:e.message}),e})}return e(...r)}}()}();