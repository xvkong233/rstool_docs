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
(()=>{let e=null,t=null;!async function(){const o=chrome.runtime.getURL("content_scripts/wikipedia/wikipedia-touchpoint-service.js");if(t=await import(o).catch(()=>null),!t)return;let r;try{r=await chrome.runtime.sendMessage({main_op:"wikipedia-convert-to-pdf-init"})}catch(e){return}r?.enableWikipediaConvertToPdfTouchpoint&&(await t.initTouchpointService(r),t.startInjectionObserver(),e=()=>t.syncStandaloneNav(),window.addEventListener("resize",e),chrome.runtime.onMessage.addListener(e=>{const o=r;switch(e?.content_op){case"show-direct-verb-toast":o?.convertToPdfToastMessage&&t.showToast(t.TOAST_PROMOTION_SOURCE,o.convertToPdfToastMessage);break;case"update-direct-verb-progress":{const o=t.getTouchpointElement();t.updateProgress(o,e.progress);break}case"reset-direct-verb-cta":t.resetTouchpointState();break;case"show-direct-verb-error-toast":case"show-direct-verb-tab-close-error-toast":{const r=e=>e?.split("#")[0]??"";if(e.sourceTabUrl&&r(e.sourceTabUrl)!==r(window.location.href))break;t.resetTouchpointState();const s="show-direct-verb-tab-close-error-toast"===e.content_op?o?.convertToPdfTabCloseErrorToastMessage:o?.convertToPdfErrorToastMessage;if(!s)break;const a={variant:"error"};o?.tryAgainText&&(a.actionButton={text:o.tryAgainText,className:"acrobat-toast-action-button--link",onClick:()=>t.retryConversion()}),t.showToast(t.TOAST_PROMOTION_SOURCE,s,a);break}}}))}()})();