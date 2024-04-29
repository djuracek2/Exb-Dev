define(["exports","./index-14ccc47c","./index2-efc362f1","./utils-0d0e8208","./analysis-label2-ccfc7e91"],(function(e,a,t,s,l){"use strict";const i="control-margin",n=a.proxyCustomElement(class extends a.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisBooleanInputChange=a.createEvent(this,"analysisBooleanInputChange",7),this.analysisHelpClick=a.createEvent(this,"analysisHelpClick",7),this.handleCheckChange=()=>{this.value=!this.value,this.analysisBooleanInputChange.emit()},this.value=void 0,this.label=void 0,this.labelLayout=void 0,this.displayStyle="checkbox",this.validationParams=void 0,this.hideHelp=!1}render(){const e=t.formatValidationParamsMessage(this.validationParams),l=!1===t.isEmptyDataItem(e),n=t.getUIInputStatusFromMessageType(this.validationParams?.type);return a.h(a.Host,null,a.h("calcite-label",{class:"label",layout:this.labelLayout??"inline"},"switch"===this.displayStyle?a.h("calcite-switch",{class:i,scale:s.UIDefaults.Scale,checked:this.value??!1,onCalciteSwitchChange:this.handleCheckChange}):a.h("calcite-checkbox",{class:i,scale:s.UIDefaults.Scale,checked:this.value??!1,onCalciteCheckboxChange:this.handleCheckChange}),!1===t.isEmptyDataItem(this.label)&&a.h("analysis-label",{label:this.label,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit(),hideHelp:this.hideHelp})),a.h("calcite-input-message",{status:n,hidden:!l,scale:s.UIDefaults.Scale,icon:"exclamationMarkTriangle"},e))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{--calcite-label-margin-bottom:0rem}.control-margin{margin-bottom:var(--analysis-quarter-spacing)}.label{width:100%}"}},[1,"analysis-boolean-input",{value:[1540],label:[513],labelLayout:[513,"label-layout"],displayStyle:[513,"display-style"],validationParams:[16],hideHelp:[516,"hide-help"]}]);function o(){"undefined"!=typeof customElements&&["analysis-boolean-input","analysis-label"].forEach((e=>{switch(e){case"analysis-boolean-input":customElements.get(e)||customElements.define(e,n);break;case"analysis-label":customElements.get(e)||l.defineCustomElement()}}))}o(),e.AnalysisBooleanInput=n,e.defineCustomElement=o}));