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
const abortController=new AbortController,state={lastAttachmentURL:"",lastFileName:"",token:"",tokenHeaderName:"X-Token",config:{},expressConfig:{},lastTabUrl:"",adobeCleanFontAdded:!1,expressState:{expressTouchpointAdded:!1,imageURL:null,resizeHandler:null,tooltip:null},get eventControllerSignal(){return abortController.signal},disconnectEventListeners(){abortController?.abort()}};export default state;