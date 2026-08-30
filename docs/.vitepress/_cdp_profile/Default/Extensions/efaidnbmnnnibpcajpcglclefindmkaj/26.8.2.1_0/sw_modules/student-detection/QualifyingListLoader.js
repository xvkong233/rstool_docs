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
import e from"../CacheStore.js";import{common as t}from"../common.js";import{forceResetService as n}from"../force-reset-service.js";import{CONTENT_SIGNAL_RULES_CACHE_KEY as i,CONTENT_SIGNAL_RULES_OTE_FEATURE as r}from"./constants.js";import{getStudentDetectionConfig as s,applyFloodgateClassificationRules as o}from"./StudentDetectionConfig.js";import{CONTENT_SIGNAL_RULES_ENCODING as a,decodeContentSignalRulesEntries as u,decodeStudentSiteTouchpointEntries as c}from"../../common/domain-encoding.js";export class QualifyingListLoader{constructor(t=new e(r)){this.cacheStore=t}static parseConfig(e){if(!e?.entries||!Array.isArray(e.entries)||0===e.entries.length)return null;const t=e.encoding===a?u(e.entries):e.entries;let n;if(Array.isArray(e.studentSiteTouchpoints?.entries)&&e.studentSiteTouchpoints.entries.length>0){n={entries:e.encoding===a?c(e.studentSiteTouchpoints.entries):e.studentSiteTouchpoints.entries}}return{version:e.version||"1.0.0",rules:{uniqueDomainThreshold:e.rules?.uniqueDomainThreshold,activeDayThreshold:e.rules?.activeDayThreshold,engagementSpanDays:e.rules?.engagementSpanDays,windowDays:e.rules?.windowDays},entries:t,...n?{studentSiteTouchpoints:n}:{}}}static async finalizeConfig(e){if(!e)return null;const t=await s();return{...e,rules:o(e.rules,t)}}static async fetchFromUrl(e){const t=await fetch(e);if(!t.ok)return null;const n=await t.json();return QualifyingListLoader.finalizeConfig(QualifyingListLoader.parseConfig(n))}async load(){const e=t.getContentSignalRulesUri();if(!e)return null;const s=async()=>{const t=await fetch(e);if(!t.ok)return null;const n=await t.json(),r=QualifyingListLoader.parseConfig(n);return r&&await this.cacheStore.set(i,r),QualifyingListLoader.finalizeConfig(r)};try{const{executionResult:e}=await n.executeFeature(r,s);if(e)return e}catch{}const o=await this.cacheStore.get(i);return o?QualifyingListLoader.finalizeConfig(QualifyingListLoader.parseConfig(o)):s()}}