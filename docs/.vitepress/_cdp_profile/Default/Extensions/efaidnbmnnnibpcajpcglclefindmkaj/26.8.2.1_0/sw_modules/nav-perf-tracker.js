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
import{loggingApi as e}from"../common/loggingApi.js";const t=new Map;export function recordMainFrameNavStart(r,n,a){const o=Number(r);!o||o<0||"number"!=typeof n||(t.size>300&&(e.warn({message:"DC Acrobat Extn: navStartByTab exceeded 300 entries — clearing"}),t.clear()),t.set(o,n))}export function getNavStart(e){return t.get(Number(e))??-1}export function clearNavStart(e){t.delete(Number(e))}