define(["exports","./index2-5ec30cf6","./store-c935607a"],(function(t,e,s){"use strict";const i=e.proxyCustomElement(class extends e.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisToolCreditSettingsHelpClick=e.createEvent(this,"analysisToolCreditSettingsHelpClick",7),this.handleBooleanInputChange=t=>{const e=t.target.value;s.state.creditUsageSettings.askConfirmation=e,s.state.creditUsageSettings={...s.state.creditUsageSettings}},this.handleNumberInputChange=t=>{const e=t.target.value;s.state.creditUsageSettings.creditThreshold=e,s.state.creditUsageSettings={...s.state.creditUsageSettings}}}async checkValidity(){let t=!0;return!0===s.state.creditUsageSettings.askConfirmation&&void 0!==this.thresholdInputElement&&(t=await this.thresholdInputElement.checkValidity()),Promise.resolve(t)}async componentWillLoad(){({strings:this.strings}=await e.fetchComponentLocaleStrings(this.hostElement,e.getAssetPath(".")))}render(){return e.h(e.Host,null,e.h("analysis-boolean-input",{displayStyle:"switch",label:this.strings.askConfirmation,value:s.state.creditUsageSettings.askConfirmation,onAnalysisBooleanInputChange:this.handleBooleanInputChange,onAnalysisHelpClick:t=>this.analysisToolCreditSettingsHelpClick.emit({key:"askConfirmation",parameterName:this.strings.askConfirmation,refElement:t.target})}),e.h("analysis-number-input",{hidden:!s.state.creditUsageSettings.askConfirmation,label:this.strings.creditThreshold,min:0,numberType:"integer",required:s.state.creditUsageSettings.askConfirmation,value:s.state.creditUsageSettings.creditThreshold,ref:t=>this.thresholdInputElement=t,onAnalysisNumberInputChange:this.handleNumberInputChange,onAnalysisHelpClick:t=>this.analysisToolCreditSettingsHelpClick.emit({key:"creditThreshold",parameterName:this.strings.creditThreshold,refElement:t.target})}))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":host{display:block}"}},[1,"analysis-tool-credit-settings",{checkValidity:[64]}]);function n(){"undefined"!=typeof customElements&&["analysis-tool-credit-settings"].forEach((t=>{"analysis-tool-credit-settings"===t&&(customElements.get(t)||customElements.define(t,i))}))}n(),t.AnalysisToolCreditSettings=i,t.defineCustomElement=n}));