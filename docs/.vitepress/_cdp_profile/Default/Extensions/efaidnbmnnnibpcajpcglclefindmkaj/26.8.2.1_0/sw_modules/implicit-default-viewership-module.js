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
import{floodgate as t}from"./floodgate.js";import{dcLocalStorage as e}from"../common/local-storage.js";import{fetchDefaultViewershipConfig as i}from"../content_scripts/utils/util.js";import{util as a}from"./util.js";const l=e=>{try{return JSON.parse(t.getFeatureMeta(e))}catch(t){return{}}};async function r(r,o){const[s,n]=await Promise.all([t.hasFlag(`dc-cv-${r}-implicit-default-viewership`),t.hasFlag(`dc-cv-${r}-implicit-default-viewership-control`)]);if(!s&&!n)return void o({enableImplicitDefaultViewershipFeature:!1,isAcrobatDefaultForSurface:!1,toastMessage:"",fteToolTipStrings:{title:"",description:"",button:""}});let c={};s?c=l(`dc-cv-${r}-implicit-default-viewership`):n&&(c=l(`dc-cv-${r}-implicit-default-viewership-control`));const p=((t,i)=>{const a="en-US"===e.getItem("locale")||"en-GB"===e.getItem("locale");return a&&t||!a&&i})(!!c&&c.enLocaleEnabled,!!c&&c.nonEnLocaleEnabled),u=e.getItem(`${r}-pdf-default-viewership`),m=e.getItem("pdfViewer");""===u&&"false"!==m&&p&&(s?(e.setItem(`${r}-pdf-implicit-dv-feature-enablement-status`,"true"),e.setItem(`${r}-pdf-default-viewership`,"true")):n&&e.setItem(`${r}-pdf-implicit-dv-feature-enablement-status`,"false"));const f=e.getItem(`${r}-pdf-implicit-dv-feature-enablement-status`),d="true"===await i(r),g=s&&p&&"true"===f;e.setItem(`${r}-pdf-implicit-dv-feature-enabled`,g.toString()),o({enableImplicitDefaultViewershipFeature:g,isAcrobatDefaultForSurface:d,toastMessage:a.getTranslation(`${r}ImplicitDVNotification`),fteToolTipStrings:{title:a.getTranslation(`${r}ImplicitDVFTEHeader`),description:a.getTranslation(`${r}ImplicitDVFTEBody`),button:a.getTranslation("closeButton")}})}export{r as implicitDefaultViewershipInit};