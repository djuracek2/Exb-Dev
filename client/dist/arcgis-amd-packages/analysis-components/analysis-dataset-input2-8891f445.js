define(["exports","./index-14ccc47c","./index2-efc362f1","./utils-0d0e8208","./analysis-dataset-input-popover2-ec66b0cd","./analysis-label2-ccfc7e91"],(function(e,t,s,a,i,l){"use strict";const n="dataset-input",o={border:`${n}__border`,container:`${n}__container`},r=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.analysisDatasetInputChange=t.createEvent(this,"analysisDatasetInputChange",7),this.analysisHelpClick=t.createEvent(this,"analysisHelpClick",7),this.renderInitialMode=()=>t.h("section",null,t.h("calcite-label",{scale:a.UIDefaults.Scale},void 0!==this.label&&""!==this.label?t.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit(),hideHelp:this.hideHelp}):null,this.renderAddButton(),this.renderErrorMessage())),this.renderListMode=()=>{const e=this.valueArray?.map((e=>t.h("calcite-value-list-item",{key:e.id,value:e.id,label:e.name,description:e.description},t.h("calcite-action",{text:this.strings.remove,slot:"actions-end",label:this.strings.remove,appearance:"transparent",icon:"x",onClick:this.onValueListItemRemoveClicked}))));return t.h("section",{class:o.container},t.h("calcite-label",{scale:a.UIDefaults.Scale},t.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit(),hideHelp:this.hideHelp}),t.h("calcite-value-list",{class:o.border,onMouseOver:this.onValueListMouseOver,onMouseOut:this.onValueListMouseOut,onClick:this.onValueListClicked},e),this.renderErrorMessage()),this.isMultiSelect&&this.renderAddButton())},this.renderErrorMessage=()=>{const e=void 0!==this.errorMessage;return t.h("calcite-input-message",{hidden:!e,icon:"exclamationMarkTriangle",status:s.UIInputStatus.INVALID,scale:a.UIDefaults.Scale},this.errorMessage)},this.renderAddButton=()=>t.h("calcite-button",{appearance:"outline",kind:"neutral","icon-start":"plus",onClick:this.onAddButtonClicked,width:"full",scale:a.UIDefaults.Scale},this.strings.dataset),this.onAddButtonClicked=e=>{this.createDatasetInputPopover(e.target)},this.onValueListMouseOver=e=>{const t=e.target;"calcite-value-list-item"===t?.localName&&(void 0===this.replaceTooltip&&(this.replaceTooltip=document.createElement("calcite-tooltip"),this.replaceTooltip.placement="bottom",this.replaceTooltip.innerText=this.strings.replaceDataset),this.replaceTooltip.referenceElement=t,a.addOpenableDomElement(document,this.replaceTooltip))},this.onValueListMouseOut=()=>{a.removeOpenableDomElement(this.replaceTooltip)},this.onValueListClicked=e=>{const t=e.target;"calcite-value-list-item"===t?.localName&&this.createDatasetInputPopover(e.target)},this.onValueListItemRemoveClicked=e=>{const t=e.target.parentNode.value,s=this.valueArray?.filter((e=>e.id!==t));this.updateValueFromArray(s)},this.createDatasetInputPopover=e=>{void 0===this.datasetInputPopover&&(this.datasetInputPopover=document.createElement("analysis-dataset-input-popover"),this.datasetInputPopover.addEventListener("analysisDatasetInputPopoverClose",this.onDatasetPopoverClose),this.datasetInputPopover.addEventListener("analysisDatasetInputPopoverSelectionChange",this.onDatasetInputPopoverChange)),this.datasetInputPopover.selectedDatasetIds=this.valueArray?.map((e=>e.id)),this.datasetInputPopover.selectionMode=this.selectionMode,this.datasetInputPopover.analysisDatasets=this.analysisDatasets,this.datasetInputPopover.placement="leading",this.datasetInputPopover.referenceElement=e.parentElement??e,a.addOpenableDomElement(document,this.datasetInputPopover)},this.onDatasetPopoverClose=()=>{a.removeOpenableDomElement(this.datasetInputPopover),this.datasetInputPopover=void 0,this.validate()},this.onDatasetInputPopoverChange=e=>{const t=e.detail.selectedDatasetIds,s=new Set(t),a=this.analysisDatasets?.filter((e=>s.has(e.id)));this.updateValueFromArray(a)},this.updateValueFromArray=e=>{if(this.isMultiSelect)this.value=e;else{const t=void 0===e||e.length<1;this.value=t?void 0:e[0]}this.analysisDatasetInputChange.emit()},this.validate=()=>{this.required&&!this.hasValue?this.errorMessage=s.formatMessage(this.strings.isRequired,{label:this.label}):this.errorMessage=void 0},this.label=void 0,this.required=!1,this.selectionMode=void 0,this.analysisDatasets=void 0,this.value=void 0,this.hideHelp=!1,this.errorMessage=void 0}onValueChange(){this.validate()}get isMultiSelect(){return"multi"===this.selectionMode}get hasValue(){return this.isMultiSelect?void 0!==this.value&&this.value.length>0:void 0!==this.value}get valueArray(){let e;return void 0!==this.value&&(e=this.isMultiSelect?this.value:[this.value]),e}async componentWillLoad(){({strings:this.strings}=await s.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath(".")))}disconnectedCallback(){a.removeOpenableDomElement(this.datasetInputPopover),a.removeOpenableDomElement(this.replaceTooltip)}render(){return t.h(t.Host,null,this.hasValue?this.renderListMode():this.renderInitialMode())}async checkValidity(){this.validate();const e=void 0===this.errorMessage||""===this.errorMessage;return Promise.resolve(e)}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{value:["onValueChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex;flex-direction:column;width:var(--analysis-component-default-width)}.dataset-input__border{border:1px solid var(--analysis-ui-border-input)}.dataset-input__container{margin-bottom:var(--analysis-half-spacing)}"}},[0,"analysis-dataset-input",{label:[513],required:[516],selectionMode:[513,"selection-mode"],analysisDatasets:[16],value:[1040],hideHelp:[516,"hide-help"],errorMessage:[32],checkValidity:[64]},void 0,{value:["onValueChange"]}]);function h(){"undefined"!=typeof customElements&&["analysis-dataset-input","analysis-dataset-input-popover","analysis-label"].forEach((e=>{switch(e){case"analysis-dataset-input":customElements.get(e)||customElements.define(e,r);break;case"analysis-dataset-input-popover":customElements.get(e)||i.defineCustomElement();break;case"analysis-label":customElements.get(e)||l.defineCustomElement()}}))}h(),e.AnalysisDatasetInput=r,e.defineCustomElement=h}));