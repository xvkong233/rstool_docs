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
export const STUDENT_TOOLS_TOUCHPOINT_REGISTRY={flashcards:{id:"flashcards",googleSearchRoutingContext:"ExtensionGoogleSearchResult:generateFlashcards",contextMenuRoutingContext:"ExtensionContextMenu:generateFlashcards",surfaces:["google-search","context-menu"],contextMenuId:"createFlashcardsFromWebpageContextMenu",translationTitleKey:"studentToolsTouchpointFlashcards",analyticsSubType:"flashcards",navigationView:"files"},quiz:{id:"quiz",googleSearchRoutingContext:"ExtensionGoogleSearchResult:generatePracticeQuiz",contextMenuRoutingContext:"ExtensionContextMenu:generatePracticeQuiz",surfaces:["google-search","context-menu"],contextMenuId:"createQuizFromWebpageContextMenu",translationTitleKey:"studentToolsTouchpointQuiz",analyticsSubType:"quiz",navigationView:"files"},"study-guide":{id:"study-guide",googleSearchRoutingContext:"ExtensionGoogleSearchResult:generateStudyGuide",contextMenuRoutingContext:"ExtensionContextMenu:generateStudyGuide",surfaces:["google-search","context-menu"],contextMenuId:"createStudyGuideFromWebpageContextMenu",translationTitleKey:"studentToolsTouchpointStudyGuideContextMenu",analyticsSubType:"study-guide",navigationView:"files"},mindmap:{id:"mindmap",googleSearchRoutingContext:"ExtensionGoogleSearchResult:generateMindmap",surfaces:["google-search"],translationTitleKey:"studentToolsTouchpointMindmap",analyticsSubType:"mindmap",navigationView:"files"}};export const STUDENT_TOOLS_TOUCHPOINT_SEARCH_ORDER=["study-guide","flashcards","mindmap","quiz"];export function getStudentToolsTouchpointConfig(e){return STUDENT_TOOLS_TOUCHPOINT_REGISTRY[e]}export function getTouchpointsForSurface(e){return Object.values(STUDENT_TOOLS_TOUCHPOINT_REGISTRY).filter(t=>t.surfaces.includes(e))}