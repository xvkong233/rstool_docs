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
let fteAbortController=new AbortController;const abortController=new AbortController,state={downloadUrl:null,fileName:null,fileExtension:null,get fteEventControllerSignal(){return fteAbortController.signal},disconnectFteEventListeners(){fteAbortController?.abort(),fteAbortController=new AbortController},get eventControllerSignal(){return abortController.signal},disconnectEventListeners(){abortController?.abort()}};export default state;