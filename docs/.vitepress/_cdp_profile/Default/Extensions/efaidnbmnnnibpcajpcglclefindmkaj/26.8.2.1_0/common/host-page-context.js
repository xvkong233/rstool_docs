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
import{isChromeViewerOpened as t}from"./util.js";import{util as r}from"../sw_modules/util.js";export const HOST_PAGE_TYPE={EXTENSION_PDF_VIEWER:"extensionPDFViewer",ACROBAT_WEB:"acrobatWeb",DEFAULT:"default"};export function getHostPageType(e){if(!e)return HOST_PAGE_TYPE.DEFAULT;if(t(e))return HOST_PAGE_TYPE.EXTENSION_PDF_VIEWER;try{if(r.isAcrobatOrigin(new URL(e).origin))return HOST_PAGE_TYPE.ACROBAT_WEB}catch{}return HOST_PAGE_TYPE.DEFAULT}export async function getHostPageTypeForTab(t){try{const r=await chrome.tabs.get(t);return getHostPageType(r?.url)}catch{return HOST_PAGE_TYPE.DEFAULT}}