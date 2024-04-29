System.register(["jimu-core","jimu-arcgis","jimu-ui","jimu-core/data-source","esri/widgets/UtilityNetworkTrace","esri/core/reactiveUtils","esri/layers/FeatureLayer","esri/Graphic"],(function(e,t){var a={},i={},s={},o={},n={},r={},l={},u={};return{setters:[function(e){a.BaseWidget=e.BaseWidget,a.DataRecordsSelectionChangeMessage=e.DataRecordsSelectionChangeMessage,a.DataSourceManager=e.DataSourceManager,a.MessageManager=e.MessageManager,a.React=e.React,a.css=e.css,a.jsx=e.jsx,a.lodash=e.lodash},function(e){i.JimuMapViewComponent=e.JimuMapViewComponent,i.MapViewManager=e.MapViewManager},function(e){s.WidgetPlaceholder=e.WidgetPlaceholder,s.defaultMessages=e.defaultMessages},function(e){o.DataSourceStatus=e.DataSourceStatus},function(e){n.default=e.default},function(e){r.default=e.default},function(e){l.default=e.default},function(e){u.default=e.default}],execute:function(){e((()=>{var e={16733:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M5 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M5 12.5a2.5 2.5 0 1 1-.703-1.739l1.86-1.389A2.5 2.5 0 1 1 10.95 8h2.099a2.5 2.5 0 0 1 2.75-1.982l.447-1.354A2.5 2.5 0 0 1 17.5 0a2.5 2.5 0 1 1-.304 4.982l-.447 1.352a2.5 2.5 0 0 1-.352 4.5l.924 3.172a2.5 2.5 0 1 1-.963.27l-.954-3.278A2.501 2.501 0 0 1 13.05 9h-2.1A2.503 2.503 0 0 1 9 10.95v4.1a2.5 2.5 0 1 1-1 0v-4.1a2.496 2.496 0 0 1-1.312-.727l-1.852 1.384c.106.277.164.578.164.893m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M17 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path><path fill="#000" d="M3 7V6H2v1zM3 8v1H2V8zM3 17v-1H2v1zM2 18h1v1H2z"></path></svg>'},94129:e=>{"use strict";e.exports=u},135:e=>{"use strict";e.exports=r},99818:e=>{"use strict";e.exports=l},88275:e=>{"use strict";e.exports=n},26826:e=>{"use strict";e.exports=i},48891:e=>{"use strict";e.exports=a},11840:e=>{"use strict";e.exports=o},30726:e=>{"use strict";e.exports=s}},t={};function c(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,c),s.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var d={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(d),c.d(d,{__set_webpack_public_path__:()=>w,default:()=>M});var e=c(48891),t=c(26826),a=c(30726),i=c(11840),s=c(88275),o=c(135);const n=[{value:"traceId",label:"Trace Id"},{value:"traceName",label:"Trace name"},{value:"traceDescription",label:"Trace description"},{value:"startingPoints",label:"Starting points"},{value:"barriers",label:"Barriers"},{value:"version",label:"Version"},{value:"username",label:"User"},{value:"date",label:"Date"},{value:"elementCount",label:"Count of features"},{value:"functionResult",label:"Trace functions"},{value:"areaStatistic",label:"Area statistic"}];var r,l=c(99818),u=c(94129);!function(e){e[e.Feet=528e4]="Feet",e[e.Miles=1e3]="Miles",e[e.Kilometers=1609.344]="Kilometers",e[e.Meters=1609344]="Meters",e[e.Yards=176e4]="Yards"}(r||(r={}));var p=function(e,t,a,i){return new(a||(a=Promise))((function(s,o){function n(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,r)}l((i=i.apply(e,t||[])).next())}))};class h{constructor(){this.unt=null,this.activeDataSourceId="",this.appConfigDataSources=null,this.updatedConfig=null,this.props=null,this.mvManager=t.MapViewManager.getInstance(),this.getOutputDataSource=t=>e.DataSourceManager.getInstance().getDataSource(t),this.buildTraceResultStatsAsOutput=t=>p(this,void 0,void 0,(function*(){const s=`${this.props.widgetId}-output`;let o=this.getOutputDataSource(s);if(o||(o=yield e.DataSourceManager.getInstance().createDataSource(s)),!o)return;if(0===(null==t?void 0:t.length))return void o.setStatus(i.DataSourceStatus.NotReady);const r=[];r.push({alias:"OBJECTID",type:"double",name:"OBJECTID"}),n.forEach((e=>{var t,a,i,o,n;const l=(null===(n=null===(o=null===(i=null===(a=null===(t=this.updatedConfig)||void 0===t?void 0:t.configInfo)||void 0===a?void 0:a[this.activeDataSourceId])||void 0===i?void 0:i.traceResultAreaSettings)||void 0===o?void 0:o.resultAreaProperties)||void 0===n?void 0:n.areaUnit)||"square-feet";"areaStatistic"===e.value?("square-miles"===l||"square-meters"===l||"square-feet"===l||"square-kilometers"===l)&&r.push({alias:this.appConfigDataSources[s].schema.fields[e.value].alias,type:"double",name:e.value}):"version"===e.value||"elementCount"===e.value?r.push({alias:this.appConfigDataSources[s].schema.fields[e.value].alias,type:"double",name:e.value}):r.push({alias:this.appConfigDataSources[s].schema.fields[e.value].alias,type:"string",name:e.value})}));const c=[];r.forEach((e=>{e.name&&c.push({fieldName:e.name,label:e.alias})}));const d=[];t.forEach(((e,t)=>{const a={};a.OBJECTID=t,r.forEach((t=>{const i=e.attributes[t.name];null!=i&&("date"===t.name?a[t.name]=i.toString():a[t.name]=i)}));const i=new u.default({geometry:e.geometry,attributes:a});d.push(i)}));const p=Object.assign({},a.defaultMessages),h=new l.default({id:s+"_layer",title:this.props.intl.formatMessage({id:"outputStatistics",defaultMessage:p.outputStatistics},{name:this.props.label}),fields:r,geometryType:"polygon",source:d,objectIdField:"OBJECTID",popupTemplate:{title:"{traceName}",content:[{type:"fields",fieldInfos:c}]}});o.layer=h,null==o||o.setStatus(i.DataSourceStatus.Unloaded),null==o||o.setCountStatus(i.DataSourceStatus.Unloaded),null==o||o.addSourceVersion()}))}static getInstance(){return h.instance||(h.instance=new h),h.instance}loadPropsFromView(e){this.props=e}loadTraceWidgetFromAPI(e,t,a){var i,o,n,r,l,u;return p(this,void 0,void 0,(function*(){null!==this.unt&&null!==this.unt.viewModel&&this.unt.viewModel.reset();let c=null;e.view.map.utilityNetworks&&(c=e.view.map.utilityNetworks.getItemAt(0));const d=new s.default({container:t,utilityNetwork:c,view:e.view,showSelectionAttributes:!0,selectOnComplete:!0,showGraphicsOnComplete:!0,selectedTraces:[],flags:[],enableResultArea:null===(n=null===(o=null===(i=this.props.config.configInfo)||void 0===i?void 0:i[e.dataSourceId])||void 0===o?void 0:o.traceResultAreaSettings)||void 0===n?void 0:n.enableResultArea,resultAreaProperties:null===(u=null===(l=null===(r=this.props.config.configInfo)||void 0===r?void 0:r[e.dataSourceId])||void 0===l?void 0:l.traceResultAreaSettings)||void 0===u?void 0:u.resultAreaProperties});return this.unt=d,this.activeDataSourceId=e.dataSourceId,this.appConfigDataSources=a,this.updatedConfig=this.props.config,yield this.loadAllChildDS(),this.registerEvents(),d}))}updateUntProps(e,t,a,i){var s,o,n,r;null===(o=null===(s=this.unt)||void 0===s?void 0:s.set)||void 0===o||o.call(s,"enableResultArea",e),null===(r=null===(n=this.unt)||void 0===n?void 0:n.set)||void 0===r||r.call(n,"resultAreaProperties",t),this.appConfigDataSources=i,this.updatedConfig=a}registerEvents(){this.unt.on("create-result-area",(()=>{const e=[];setTimeout((()=>{this.unt.viewModel.traceResults.forEach((t=>{t.resultAreaGraphic&&e.push(t.resultAreaGraphic)})),this.buildTraceResultStatsAsOutput(e)}),500)})),this.unt.on("select-features",(t=>{this.clearSelection(t);const a=this.getActiveMap(),i=null==a?void 0:a.jimuLayerViews,s=e.DataSourceManager.getInstance(),o={},n=[],r=[];t.resultSet.forEach((e=>{e.forEach((e=>{for(const t in i){const a=s.getDataSource(i[t].layerDataSourceId);if(a&&"FEATURE_LAYER"===a.type&&a.layer.id===e.layer.id){const i=e.layer.objectIdField;o[t]||(o[t]={ds:a,objectIdList:[]}),e.featureSet.features.forEach((e=>{o[t].objectIdList.push(e.attributes[i])})),r.push(t),n.push(this.fetchRecords(a,o[t].objectIdList))}}}))})),Promise.all(n).then((t=>{let a=[];if(r.forEach(((e,i)=>{var s;(null===(s=t[i])||void 0===s?void 0:s.length)>0&&(o[e].ds.selectRecordsByIds(o[e].objectIdList.map(String),t[i],!0),a=a.concat(t[i]))})),a.length>0){const t=new e.DataRecordsSelectionChangeMessage(this.props.id,a);e.MessageManager.getInstance().publishMessage(t)}}))})),this.unt.on("clear-selection",(e=>{var t,a,s,o;this.unt&&(null===(t=this.unt.view)||void 0===t||t.closePopup(),null===(o=this.getOutputDataSource(null===(s=null===(a=this.props)||void 0===a?void 0:a.outputDataSources)||void 0===s?void 0:s[0]))||void 0===o||o.setStatus(i.DataSourceStatus.NotReady),this.clearSelection(e))}));const t=this.getFeatureLayerDS();null!==t&&(this.unt.gdbVersion=t.getGDBVersion(),o.default.watch((()=>t.layer.gdbVersion),(e=>{this.unt.gdbVersion=e})))}fetchRecords(e,t){return p(this,void 0,void 0,(function*(){const a={};a.objectIds=t,a.returnGeometry=!0;const i=yield e.query(a);return Promise.resolve(null==i?void 0:i.records)}))}clearSelection(t){const a=this.getActiveMap();if(null!==a){const i=a.jimuLayerViews,s=e.DataSourceManager.getInstance();if(t.resultSet.length>0){const e=[];for(const t in i){if(!e.includes(i[t].layerDataSourceId)){const e=s.getDataSource(i[t].layerDataSourceId);e&&"FEATURE_LAYER"===e.type&&e.clearSelection()}e.push(i[t].layerDataSourceId)}}else for(const e in i){const t=s.getDataSource(i[e].layerDataSourceId);t&&"FEATURE_LAYER"===t.type&&t.clearSelection()}}}clearAll(){var t,a,i;let s=null;null===(a=null===(t=this.unt)||void 0===t?void 0:t.view)||void 0===a||a.closePopup();const o=null===(i=this.mvManager)||void 0===i?void 0:i.getAllJimuMapViewIds();null==o||o.forEach((t=>{var a;const i=null===(a=this.mvManager)||void 0===a?void 0:a.getJimuMapViewById(t);if(s=i,null!==s){const t=e.DataSourceManager.getInstance(),a=s.jimuLayerViews;for(const e in a){const i=t.getDataSource(a[e].layerDataSourceId);i&&"FEATURE_LAYER"===i.type&&i.clearSelection()}s.view.graphics.removeAll(),this.callResetOnJSWidget()}}))}callResetOnJSWidget(){null!==this.unt&&null!==this.unt.viewModel&&null!==this.unt.viewModel._unObject&&this.unt.viewModel.reset()}getActiveMap(){let e=null;if(this.props&&this.props.config.useMapWidget){const t=this.mvManager.getJimuMapViewGroup(this.props.useMapWidgetIds);if(t&&t.jimuMapViews)for(const a in t.jimuMapViews)t.jimuMapViews[a].dataSourceId&&(t.jimuMapViews[a].isActive||void 0===t.jimuMapViews[a].isActive)&&(e=t.jimuMapViews[a])}return e}getFeatureLayerDS(){const t=this.getActiveMap();if(null!==t){const a=t.jimuLayerViews,i=e.DataSourceManager.getInstance();for(const e in a){const t=i.getDataSource(a[e].layerDataSourceId);if(!t)return null;if("FEATURE_LAYER"===t.type){const e=t;if(e.getLayerDefinition().fields.some((e=>"subnetworkname"===e.name.toLowerCase())))return e}}return null}return null}loadAllChildDS(){return p(this,void 0,void 0,(function*(){const t=this.getActiveMap();if(t){yield t.whenAllJimuLayerViewLoaded();const a=e.DataSourceManager.getInstance().getDataSource(t.dataSourceId);return a.isDataSourceSet&&!a.areChildDataSourcesCreated()&&(yield a.childDataSourcesReady()),!0}return!1}))}}function v(t,a){const i=t.surfaces[1].bg;return e.css`
    overflow: auto;
    width: 100%;
    height: 100%;
    background-color: ${i};
    .widget-utility-trace {
      width: 100%;
      height: 100%;
      background-color: ${i};
    }
  `}var g=c(16733),f=c.n(g),S=function(e,t,a,i){return new(a||(a=Promise))((function(s,o){function n(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,r)}l((i=i.apply(e,t||[])).next())}))};class m extends e.BaseWidget{constructor(t){super(t),this.containerRef=e.React.createRef(),this.viewModel=h.getInstance(),this.onActiveViewChange=e=>{this.viewModel.loadPropsFromView(this.props),null!==e?(this.state.unt&&null!==this.state.unt&&(null!==this.state.unt.viewModel.utilityNetwork?(this.viewModel.clearAll(),this.state.unt.destroy()):this.state.unt.destroy()),this.setState({},(()=>S(this,void 0,void 0,(function*(){const t=document.createElement("div");t.className="trace-container",this.containerRef.current.innerHTML="",this.containerRef.current.appendChild(t);const a=yield this.viewModel.loadTraceWidgetFromAPI(e,t,this.props.dataSources);this.setState({unt:a,jmv:e,activeDataSource:e.dataSourceId},(()=>{this.viewModel.loadAllChildDS()}))}))))):(this.state.unt&&(null!==this.state.unt&&null!==this.state.unt.viewModel.utilityNetwork?(this.viewModel.callResetOnJSWidget(),this.viewModel.clearAll(),this.state.unt.destroy()):this.state.unt.destroy()),this.setState({unt:null,jmv:null}))},this.componentDidUpdate=t=>S(this,void 0,void 0,(function*(){var a,i,s,o,n,r;if(window.jimuConfig.isInBuilder&&(null!==this.state.jmv?null!==this.state.unt&&Object.prototype.hasOwnProperty.call(this.props.config,"configInfo")&&(this.props.config.useMapWidget?this.setState({unt:this.state.unt,hasMapWidget:!0}):this.onActiveViewChange(null)):this.setState({hasMapWidget:!1},(()=>{this.viewModel.callResetOnJSWidget(),this.viewModel.clearAll()}))),Object.prototype.hasOwnProperty.call(this.props.config,"configInfo")){const l=null===(s=null===(i=null===(a=t.config)||void 0===a?void 0:a.configInfo)||void 0===i?void 0:i[this.state.activeDataSource])||void 0===s?void 0:s.traceResultAreaSettings,u=null===(r=null===(n=null===(o=this.props.config)||void 0===o?void 0:o.configInfo)||void 0===n?void 0:n[this.state.activeDataSource])||void 0===r?void 0:r.traceResultAreaSettings;(null==l?void 0:l.enableResultArea)===(null==u?void 0:u.enableResultArea)&&e.lodash.isDeepEqual(null==l?void 0:l.resultAreaProperties,null==u?void 0:u.resultAreaProperties)||this.viewModel.updateUntProps(null==u?void 0:u.enableResultArea,null==u?void 0:u.resultAreaProperties,this.props.config,this.props.dataSources)}})),this.componentWillUnmount=()=>{this.viewModel.clearAll()},this.state={jmv:null,unt:null,hasMapWidget:this.props.config.useMapWidget,activeDataSource:""}}componentDidMount(){}render(){var i;return(0,e.jsx)("div",{css:v(this.props.theme,this.props.config),id:this.props.widgetId+"_trace_widget"},(0,e.jsx)("div",{ref:this.containerRef,css:this.state.hasMapWidget?e.css`
    height: 100%;
  `:""}),this.state.hasMapWidget?"":(0,e.jsx)(a.WidgetPlaceholder,{icon:f(),message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:"Utility Network Trace"}),widgetId:this.props.id}),this.props.config.useMapWidget&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(i=this.props.useMapWidgetIds)||void 0===i?void 0:i[0],onActiveViewChange:this.onActiveViewChange}))}}m.mapExtraStateProps=e=>{var t;return{dataSources:null===(t=null==e?void 0:e.appConfig)||void 0===t?void 0:t.dataSources}};const M=m;function w(e){c.p=e}})(),d})())}}}));