System.register(["jimu-core","jimu-core/react","jimu-for-builder","jimu-for-builder/service","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components"],(function(e,t){var s={},i={},o={},a={},n={},l={},r={},p={};return{setters:[function(e){s.APP_FRAME_NAME_IN_BUILDER=e.APP_FRAME_NAME_IN_BUILDER,s.AppMode=e.AppMode,s.BrowserSizeMode=e.BrowserSizeMode,s.CONSTANTS=e.CONSTANTS,s.Immutable=e.Immutable,s.Keyboard=e.Keyboard,s.LoadingType=e.LoadingType,s.PageMode=e.PageMode,s.React=e.React,s.ReactRedux=e.ReactRedux,s.ReactResizeDetector=e.ReactResizeDetector,s.SessionManager=e.SessionManager,s.appActions=e.appActions,s.classNames=e.classNames,s.css=e.css,s.defaultMessages=e.defaultMessages,s.getAppStore=e.getAppStore,s.hooks=e.hooks,s.jimuHistory=e.jimuHistory,s.jsx=e.jsx,s.lodash=e.lodash,s.polished=e.polished,s.portalUrlUtils=e.portalUrlUtils,s.portalUtils=e.portalUtils,s.queryString=e.queryString,s.semver=e.semver,s.urlUtils=e.urlUtils,s.utils=e.utils,s.version=e.version},function(e){i.useEffect=e.useEffect,i.useRef=e.useRef,i.useState=e.useState},function(e){o.appStateHistoryActions=e.appStateHistoryActions,o.builderActions=e.builderActions,o.builderAppSync=e.builderAppSync,o.getAppConfigAction=e.getAppConfigAction,o.helpUtils=e.helpUtils},function(e){a.AppType=e.AppType,a.appServices=e.appServices},function(e){n.useTheme=e.useTheme,n.withTheme=e.withTheme},function(e){l.AdvancedButtonGroup=e.AdvancedButtonGroup,l.AlertPopup=e.AlertPopup,l.Button=e.Button,l.Dropdown=e.Dropdown,l.DropdownButton=e.DropdownButton,l.DropdownItem=e.DropdownItem,l.DropdownMenu=e.DropdownMenu,l.Modal=e.Modal,l.ModalBody=e.ModalBody,l.ModalFooter=e.ModalFooter,l.ModalHeader=e.ModalHeader,l.Option=e.Option,l.Popper=e.Popper,l.Select=e.Select,l.Switch=e.Switch,l.TagInput=e.TagInput,l.TextArea=e.TextArea,l.TextInput=e.TextInput,l.Toast=e.Toast,l.ToastType=e.ToastType,l.Tooltip=e.Tooltip,l.UserProfile=e.UserProfile,l.defaultMessages=e.defaultMessages},function(e){r.dataComponentsUtils=e.dataComponentsUtils},function(e){p.ProxySettingPopup=e.ProxySettingPopup,p.proxySettingUtils=e.proxySettingUtils}],execute:function(){e((()=>{var e={4065:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 4h12v7H2zM0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 10a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></path></svg>'},4795:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="#00C9DD" d="m0 9 4 2v5l-4-2zm4-7 4 2v5L4 7zm4 7 4 2v5l-4-2z"></path><path fill="#70F2FF" d="m0 9 4-2 4 2-4 2zm4-7 4-2 4 2-4 2zm4 7 4-2 4 2-4 2z"></path><path fill="#008197" d="m4 11 4-2v5l-4 2zm4-7 4-2v5L8 9zm4 7 4-2v4.667L12 16z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},888:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M10 5H6v9h4zM6 3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" clip-rule="evenodd"></path></svg>'},1658:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clip-rule="evenodd"></path></svg>'},4928:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 3H4v11h8zM4 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z" clip-rule="evenodd"></path></svg>'},4454:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.329 1a.875.875 0 0 0-.87.773l-.005.102v1.78c-4.878.411-7.355 3.17-7.432 8.277L1 12.374v.64l.006.35c.004.124.009.256.016.396l.034.503c.089.525.433.757.82.736.305-.018.532-.302.607-.6l.103-.398.109-.388c.122-.42.23-.72.324-.901 1.298-2.504 3.343-3.685 5.435-3.824v1.38a.875.875 0 0 0 1.364.725l.087-.067 4.796-4.196a.875.875 0 0 0 .078-1.24l-.078-.077-4.796-4.197A.875.875 0 0 0 9.33 1" clip-rule="evenodd"></path></svg>'},3416:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6.671 1c.449 0 .819.338.87.773l.005.102v1.78c4.878.411 7.355 3.17 7.432 8.277l.022.442v.64c-.002.217-.008.467-.022.746l-.034.503c-.089.525-.433.757-.82.736-.305-.018-.532-.302-.607-.6l-.103-.398-.108-.388c-.123-.42-.231-.72-.325-.901-1.298-2.504-3.343-3.685-5.435-3.824v1.38a.875.875 0 0 1-1.364.725l-.087-.067L1.299 6.73a.875.875 0 0 1-.078-1.24l.078-.077 4.796-4.197A.875.875 0 0 1 6.67 1" clip-rule="evenodd"></path></svg>'},119:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m14 4-6 8-6-8z"></path></svg>'},4138:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.25 5.621a.6.6 0 0 1 .933-.5l3.568 2.38a.6.6 0 0 1 0 .998l-3.568 2.38a.6.6 0 0 1-.933-.5z" clip-rule="evenodd"></path></svg>'},6245:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 3a2 2 0 0 1 2-2h8.086a1 1 0 0 1 .707.293l2.914 2.914a1 1 0 0 1 .293.707v1.982l-.612-.613c-.367-.366-.95-.379-1.302-.027L10.18 9.162a2.625 2.625 0 1 0-3.643 3.643l-.092.092L6.067 15H3a2 2 0 0 1-2-2zm1.75.75a1 1 0 0 1 1-1h5.875a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1zm10.92 4.455c.28-.282.747-.272 1.04.022l1.063 1.063c.294.293.304.76.022 1.04l-5.313 5.314-1.944.35a.463.463 0 0 1-.531-.532l.35-1.944z" clip-rule="evenodd"></path></svg>'},5648:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 3a2 2 0 0 1 2-2h8.086a1 1 0 0 1 .707.293l2.914 2.914a1 1 0 0 1 .293.707V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm1.75.75a1 1 0 0 1 1-1h5.875a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1zm7.875 6.875a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0" clip-rule="evenodd"></path></svg>'},4767:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 2H2v2h12zM2 1H1v4h14V1h-1zm2 7H2v6h2zM2 7H1v8h4V7H4zm6 1h6v6H8zM7 7h8v8H7V8z" clip-rule="evenodd"></path></svg>'},4357:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1m0 3V1H5v2zm1.895 1h-9.79l.8 11h8.19z" clip-rule="evenodd"></path></svg>'},9964:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},1262:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARYSURBVHgB7ZvLahNRGMf/J6mirWJcKFhQp4IKLdiK6KaCEURQF1bwumr6BK1P0OkTmDxB01XxAsaNghU7BV2ICHVRF4oaFRUMaERbxaY5nm9iFk3SJOcyl9T+YLqYziSc//muJ+cwBMHktIVIIYEIGwZHXtxxsBQdw5XjWfgMg5/cnIqLv6Ni0PHaD7A02OIELpxy4BPeCzA+HcPmpUFwPrDywKuYFdaRxPkTE/AY7wSggbcXRkpmzmNQgmVR5CnwtoxX7mFeADJzzofFRw/AKMI9PIgT5gS49WDAHXjzZq4GEwGTCTEMuYeeAEbMXBXhHhHYWIzO6FiFmgBk5kWcFQNP+D/wChjLC6vLqLqHnAAN01jQ8AzYUkomjTYWoGzmjA2KL7DQEvxzjybiRH0Brk/Zwfi3KYQQDarM2gLQrG8q3A6vqatQu8qM1Hy2Y8leXYMnuAjY0fHKu9UCuIGOChmz9MU2Y3B3J8JGtQCcgp15SID0kW68PX0UZzu3IyxUC8B4HzzE6tiATP8BjB/ugdW+EUFTwwLgqQBlEtYOvD3Tj2t9+wMVog2ajOzbhdHuPYita0N2/he67j6We3/vTveSJTv/G/bca0y8+wwdItAgvm0rrvXucwfvN+RK6SM92t+tJYDVEbwP94rgqoOWAKsB32zXyX1F3HkGHQ7GNrlB0yS+CUBBiy4dZnLfjAvw37vAmgBocQJNg2Eg09+rVU2uChegSnI6fkip2/QtCySsTtEAdTf1LKVLivgylCrDblEaf5J6T8sCtgRQAtcjnZUbPKElADVCYSG/WMDY3BvIoiwAmbTVvgFhIfnyPbIL8oWWkgDUBI327EFYoDZ87IX87BNKAlD/H6bZt+fUBk9IC0CzT6s5YSHzMae1KCItQLOpzC+Sr95DB6k8RrNPq0AqyLTDz/M/4BdSAlCwIX+zFQKgiXbYC6RdgKJt191HSkVHGFHKAjSTQ09f4OrsS7Q6WpUgVV+tztqCCAwSW78uFD93yWC0naPVGfq5S5eDU08w61MqDKUL+Nlmr8UAaPDtzyJaHS0B7nzKuVdQ0BqA7NJZJdrONvD4OY4p9AddYg2P1hRks0a5n/guahD5QOnuGluGkWijMgszOVrD++yu6A6LpbVmhdCacY7ZyluBB8Hkqw84LmbVl96iWEhV3gpFFij3FtRkOV/0fHpFOGxcOZWtvF29UfLGw2NAYcT8fv8AKbI0Lp8YqvWvlbfKTt6zEI2WNkYzZqE1yaPIbVw+mVrpgcabpUkIROPCWUZbSAhHDC2D+R8TGDqXr/eg3Hb5yfsJRN2NlHGEE0c4u42LJ2eafUHtwETZPcASCJ48eDGNYjFVK8g1Qu/ITLDuQSdFklj4mWpk5vUwd2jKP/dwZM28HuaPzZXSaMKwe5TMnInAZmjgZbw7OGkmjRox83r4c3aY3EMuTjjgoni51MpHZ2vR2D0ck/7dDP4KUGa5e8S8NvN6/AXWppIKbqQ9gQAAAABJRU5ErkJggg=="},8891:e=>{"use strict";e.exports=s},1315:e=>{"use strict";e.exports=i},3137:e=>{"use strict";e.exports=o},6325:e=>{"use strict";e.exports=a},4796:e=>{"use strict";e.exports=n},726:e=>{"use strict";e.exports=l},338:e=>{"use strict";e.exports=r},7756:e=>{"use strict";e.exports=p}},t={};function d(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,d),o.exports}d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var s in t)d.o(t,s)&&!d.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var c={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(c),d.d(c,{__set_webpack_public_path__:()=>Ne,default:()=>ke});var e,t,s,i,o=d(8891),a=d(726),n=d(3137),l=d(6325);!function(e){e.Experience="Web Experience",e.Template="Web Experience Template"}(e||(e={})),function(e){e.Published="Published",e.Draft="Draft",e.Changed="Changed",e.Publishing="Publishing"}(t||(t={})),function(e){e.Save="Save",e.Saved="Saved",e.Saving="Saving",e.SaveError="Save Error",e.SaveSuccess="Save Success"}(s||(s={})),function(e){e.SaveAs="Save_As",e.Save="Save",e.SaveInDropdown="Save_In_Dropdown"}(i||(i={}));const r={createNew:"Create new",newExperience:"New experience",undo:"Undo",redo:"Redo",save:"Save",saving:"Saving",saved:"Saved",download:"Download",saveError:"Saving error",saveSuccess:"Saved successfully!",publishing:"Publishing",published:"Published",publishError:"Publishing error",publishSuccess:"Published successfully!",publishTo:"Publish to",publishOptions:"Publish options",copySuccess:"Copied successfully!",changeShareSettings:"Change share settings",viewPublishedItem:"View published item",copyPublishedItemLink:"Copy published item link",headerLeave:"Leave",headerLeaveSite:"Leave site?",headerLeaveDescription:"Changes you made may not be saved.",editPageForLargeScreen:"Edit your page for large screen devices",editPageForMediumScreen:"Edit your page for medium screen devices",editPageForSmallScreen:"Edit your page for small screen devices",appMode:"Live view",generateTemplate:"Generate template",moreOptionsForTool:"More",moreTools:"More tools",access:"Access",generateTemplateSuccess:"Generated template successfully!",generateTemplateError:"Generating error",headerLockLayout:"Lock layout",enableLayoutEditing:"Turn on layout lock to disable layout editing",disableLayoutEditing:"Turn off layout lock to enable layout editing",layoutIsEnabled:"Layout editing is enabled.",layoutIsDisabled:"Layout editing is disabled.",appTypeTemplate:"Experience Template",appTypeExperience:"Experience",publishedTitle:"This item can be viewed by users you've shared with.",publishedUnsaveTitle:"There are unpublished changes since last publishing.",itemStatusDraft:"Draft",draftStatusTitle:"This item is not published. It can only be viewed by you.",headerHome:"Home",renameExperience:"Rename experience",renameTemplate:"Rename template",turnOnLiveView:"Turn on live view",turnOffLiveView:"Turn off live view",changeScreenSize:"Change screen size",createNewExperience:"Create new experience",gotIt:"Got it",templateRemind:"You are now working on an experience template.",unpublishedChanges:"Unpublished changes"};var p=d(7756),h=d(338),u=d(4796),m=d(1658),g=d.n(m);const v=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:g()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var b=d(4138),f=d.n(b);const w=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:f()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var S=d(3416),y=d.n(S);const x=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:y()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var j=d(4454),T=d.n(j);const O=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:T()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var A=d(4357),P=d.n(A);const M=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:P()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var k=d(5648),N=d.n(k);const I=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:N()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var C=d(6245),$=d.n(C);const z=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:$()},i)):o.React.createElement("svg",Object.assign({className:a},i))};class R extends o.React.PureComponent{getStyle(e){return o.css`
      .item-inner {
        width: 16px;
        height: 16px;
        position: relative;
      }

      .item-loader-container {
        width: 100%;
        height: 100%;
      }

      .la-ball-fall,
        .la-ball-fall>div {
          position:relative;
          -webkit-box-sizing:border-box;
          -moz-box-sizing:border-box;
          box-sizing:border-box
        }

      .la-ball-fall {
        display:block;
        font-size:0;
        color:${e.colors.black}
      }

      .la-ball-fall>div {
        display:inline-block;
        float:none;
        background-color:currentColor;
        border:0 solid currentColor
      }

      .la-ball-fall {
        width:54px;
        height:18px
      }

      .la-ball-fall>div{
        width:10px;
        height:10px;
        margin:4px;
        border-radius:100%;
        opacity:0;
        -webkit-animation:ball-fall 1s ease-in-out infinite;
        -moz-animation:ball-fall 1s ease-in-out infinite;
        -o-animation:ball-fall 1s ease-in-out infinite;
        animation:ball-fall 1s ease-in-out infinite
      }

      .la-ball-fall>div:nth-of-type(1){
        -webkit-animation-delay:-200ms;
        -moz-animation-delay:-200ms;
        -o-animation-delay:-200ms;
        animation-delay:-200ms
      }

      .la-ball-fall>div:nth-of-type(2){
        -webkit-animation-delay:-100ms;
        -moz-animation-delay:-100ms;
        -o-animation-delay:-100ms;
        animation-delay:-100ms
      }

      .la-ball-fall>div:nth-of-type(3){
        -webkit-animation-delay:0ms;
        -moz-animation-delay:0ms;
        -o-animation-delay:0ms;
        animation-delay:0ms
      }

      .la-ball-fall.la-2x{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .la-ball-fall.la-2x>div{
        width:25%;
        height:25%;
        margin:3%;
      }

      @-webkit-keyframes ball-fall{
        0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}
        20%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
        90%{opacity:.5}
        100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}
      }

      @-moz-keyframes ball-fall{
        0%{opacity:0;-moz-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}20%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}
        100%{opacity:0;-moz-transform:translateY(145%);transform:translateY(145%)}
      }

      @-o-keyframes ball-fall{
        0%{opacity:0;-o-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}20%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}
        100%{opacity:0;-o-transform:translateY(145%);transform:translateY(145%)}
      }

      @keyframes ball-fall{
        0%{opacity:0;-webkit-transform:translateY(-145%);
        -moz-transform:translateY(-145%);
        -o-transform:translateY(-145%);
        transform:translateY(-145%)}10%{opacity:.5}
        20%{opacity:1;-webkit-transform:translateY(0);
        -moz-transform:translateY(0);
        -o-transform:translateY(0);
        transform:translateY(0)}
        80%{opacity:1;-webkit-transform:translateY(0);
        -moz-transform:translateY(0);
        -o-transform:translateY(0);
        transform:translateY(0)}
        90%{opacity:.5}
        100%{opacity:0;
        -webkit-transform:translateY(145%);
        -moz-transform:translateY(145%);
        -o-transform:translateY(145%);
        transform:translateY(145%)}
      }
    `}render(){return(0,o.jsx)("div",{className:"w-100 h-100",css:this.getStyle(this.props.theme)},(0,o.jsx)("div",{className:"item-inner"},(0,o.jsx)("div",{className:"item-loader-container"},(0,o.jsx)("div",{className:"la-ball-fall la-2x"},(0,o.jsx)("div",null),(0,o.jsx)("div",null),(0,o.jsx)("div",null)))))}}const E=R;var D=d(1315),B=d(9964),L=d.n(B);const U=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:L()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var F;!function(e){e.AllFolder="AllFolder",e.OtherFolder="OtherFolder"}(F||(F={}));const H={IMAGE:[".png",".jpg",".gif",".jpeg"]},_=e=>{const s=o.hooks.useTranslation(a.defaultMessages),i=(0,u.useTheme)(),r=(0,D.useRef)(null),p=(0,D.useRef)(null),d=o.css`
    &.modal-dialog{
      width: ${o.polished.rem(640)};
      max-width: ${o.polished.rem(640)};
    }
    & .edit-info-con {
      .info-content-otherinfo {
        width: ${o.polished.rem(346)};
      }
      .info-content-pic {
        width: ${o.polished.rem(240)};
        aspect-ratio: 200/133;
        background-size: 100% 100%;
        background-position: top center;
        margin-right: ${o.polished.rem(20)};
      }
      .edit-thumbnail-btn {
        width: ${o.polished.rem(240)};
        margin-top: ${o.polished.rem(11)};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        display: block;
      }
      .edit-thumbnail-btn-con:hover .edit-thumbnail-btn {
      }
      .info-title-input {
        margin-bottom: ${o.polished.rem(16)};
      }
      .edit-thumbnail-inp {
        bottom: 0;
        left: 0;
        width: ${o.polished.rem(240)};
        height: ${o.polished.rem(34)};
        opacity: 0;
        cursor: pointer;
      }
      .info-content-label {
        font-size: ${o.polished.rem(14)};
        line-height: ${o.polished.rem(18)};
        color: ${i.colors.palette.dark[300]};
        font-weight: 600;
        margin-bottom: ${o.polished.rem(10)} !important;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
      }
      .info-content-textarea {
        resize: none;
        padding: ${o.polished.rem(4)} ${o.polished.rem(6)};
        box-sizing: border-box;
        font-size: ${o.polished.rem(14)};
        textarea {
          max-height: ${o.polished.rem(87)};
          min-height: ${o.polished.rem(32)};
        }
      }
    }
  `,{folderUrl:c,templateHeaderText:h,experienceHeaderText:m,originalAppInfo:g,isOpen:v,toggle:b,changePublishStatus:f,onSaveSuccess:w,onSaveError:S,togglePublishOptionList:y,handleTokenInvalid:x,checkAndShowReadOnlyRemind:j}=e,[T,O]=(0,D.useState)(!1),[A,P]=(0,D.useState)(!1),[M,k]=(0,D.useState)(null),[N,I]=(0,D.useState)([]),[C,$]=(0,D.useState)((null==g?void 0:g.title)||""),[z,R]=(0,D.useState)([]),[E,B]=(0,D.useState)(g),[L,F]=(0,D.useState)((null==g?void 0:g.ownerFolder)||"/"),[_,V]=(0,D.useState)([]),[W,Y]=(0,D.useState)((null==g?void 0:g.snippet)||""),[q,G]=(0,D.useState)(null);(0,D.useEffect)((()=>{v&&(X(),J(),Q(),K())}),[v]);const K=()=>{var e,t;const s=(null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.user)||void 0===t?void 0:t.username)||"",i=(null==g?void 0:g.username)===s;F(i&&(null==g?void 0:g.ownerFolder)||"/")},Q=()=>{var e;const t=(null==g?void 0:g.tags)?null===(e=null==g?void 0:g.tags)||void 0===e?void 0:e.asMutable({deep:!0}):[],s=null==t?void 0:t.filter((e=>e));$((null==g?void 0:g.title)||""),B(g),F((null==g?void 0:g.ownerFolder)||"/"),V(s),Y((null==g?void 0:g.snippet)||"")},X=()=>{var e,t;if(window.jimuConfig.isDevEdition)return!1;const s=(null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.user)||void 0===t?void 0:t.username)||"";s&&l.appServices.getUserTags(s).then((e=>{var t;const s=null===(t=null==e?void 0:e.tags)||void 0===t?void 0:t.map((e=>e.tag));R(s||[])}))},J=()=>!window.jimuConfig.isDevEdition&&l.appServices.getFolders({num:1}).then((e=>{Z(e||[])}),(e=>Promise.reject(e))),Z=e=>{const t=(0,o.getAppStore)().getState().user,s=(null==t?void 0:t.username)||"",i=[];s&&i.push({value:"/",text:s}),e.forEach((e=>{const t={value:e.id,text:e.title};i.push(t)})),I(i)},ee=(e,t=!1)=>{let s=e.target.value;s=s.length>250?s.slice(0,250):s;let i=E;window.jimuConfig.isDevEdition&&(i=i.set("text","")),t&&(s=/^[ ]*$/.test(s)?E.title:s,s=null==s?void 0:s.replace(/(^\s*)|(\s*$)/g,"")),i=i.set("name",s),i=i.set("title",s),B(i),$(s)},te=e=>{let s=e.typeKeywords||[];return s=s.map((e=>e.includes("version:")?`version:${o.version}`:e.includes("publishVersion:")?`publishVersion:${o.version}`:e.includes("status:")?`status: ${t.Draft}`:e)),e.set("typeKeywords",s)},se=()=>{b(),S(!0),G(null),Y("")};return(0,o.jsx)(a.Modal,{isOpen:null==e?void 0:e.isOpen,centered:!0,returnFocusAfterClose:!0,css:d,backdrop:"static"},(0,o.jsx)(a.ModalHeader,{toggle:se},(null==e?void 0:e.isTemplate)?h:m),(0,o.jsx)(a.ModalBody,null,(0,o.jsx)("div",{className:"edit-info-con h-100","data-testid":"editInfo"},(0,o.jsx)("div",{className:"d-flex justify-content-center w-100 h-100"},(0,o.jsx)("div",null,(0,o.jsx)("div",{"data-testid":"thumbnailCon",className:"info-content-pic",style:{backgroundImage:`url(${q||(()=>{const e=null==E?void 0:E.thumbnail,t=(0,o.getAppStore)().getState().portalUrl,s=o.SessionManager.getInstance().getSessionByUrl(t);if(null==E?void 0:E.thumbnailurl)return E.thumbnailurl;let i=e;return i=i?`${t}/sharing/rest/content/items/${E.id}/info/${e}?token=${null==s?void 0:s.token}`:`${c}./dist/runtime/assets/defaultthumb.png`,e&&window.jimuConfig.isDevEdition&&(i=`${window.location.origin}/apps/${E.id}/${e}`),i})()})`}}),(0,o.jsx)("div",{className:"position-relative edit-thumbnail-btn-con"},(0,o.jsx)(a.Button,{className:"edit-thumbnail-btn",title:s("editThumbnail")},s("editThumbnail")),(0,o.jsx)("input",{"data-testid":"thumbnailInput",title:s("editThumbnail"),ref:r,className:"position-absolute edit-thumbnail-inp",type:"file",accept:".png, .jpeg, .jpg, .gif, .bmp",onChange:()=>{const e=r.current.files;if(!e||!e[0])return!1;const t=e[0].name;if(e[0].size>10485760)return k(s("fileSizeTips",{maxSize:"10M"})),P(!0),r.current.value=null,!1;const i=t.split(".")[t.split(".").length-1],o=`.${i}`;if(!H.IMAGE.includes(o.toLowerCase()))return k(s("editAppErrorMessage")),P(!A),!1;const a=new File([e[0]],`thumbnail${(new Date).getTime()}${o}`,{type:`image/${i}`}),n=window.URL.createObjectURL(a);G(n),p.current=a}}))),(0,o.jsx)("div",{className:"info-content-otherinfo flex-grow-1"},(0,o.jsx)("div",{className:"info-content-label",title:s("name")},s("name")),(0,o.jsx)(a.TextInput,{value:C,className:"info-title-input",onChange:e=>{let t=e.target.value;t.length>250&&(t=t.slice(0,250)),$(t)},onBlur:e=>{ee(e,!0)},onKeyUp:e=>{ee(e)}}),(0,o.jsx)("div",{className:"info-content-label",title:s("summaryField")},s("summaryField")),(0,o.jsx)(a.TextArea,{placeholder:s("summaryPlaceholder"),defaultValue:W,height:80,className:"info-content-textarea form-control mb-4",onAcceptValue:e=>{const t=E.set("snippet",e);B(t),Y(e)}}),!window.jimuConfig.isDevEdition&&(0,o.jsx)("div",{className:"select-choices-con mb-4"},(0,o.jsx)("div",{className:"info-content-label",title:s("tags")},s("tags")),(0,o.jsx)(a.TagInput,{data:_,selectListData:z,onChange:e=>{const t=E.setIn(["tags"],e);V(e),B(t)},name:s("tagsLowerCase"),menuProps:{maxHeight:80}})),!window.jimuConfig.isDevEdition&&(0,o.jsx)("div",null,(0,o.jsx)("div",{className:"info-content-label",title:s("saveInFolder")},s("saveInFolder")),(0,o.jsx)(a.Select,{value:L||"/",onChange:e=>{const t=e.target.value;F(t)}},N.map((e=>(0,o.jsx)(a.Option,{value:e.value,key:e.value},e.text))))))),T&&(0,o.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",zIndex:1e4},className:"jimu-primary-loading"}),(0,o.jsx)(a.AlertPopup,{isOpen:A,hideCancel:!0,toggle:()=>{P(!A)}},(0,o.jsx)("div",{className:"align-middle pt-2",style:{fontSize:"1rem"}},(0,o.jsx)(U,{className:"mr-2 align-middle",size:24,color:"var(--warning-600)"}),(0,o.jsx)("span",{className:"align-middle"},M))))),(0,o.jsx)(a.ModalFooter,null,(0,o.jsx)(a.Button,{type:"primary",onClick:()=>{if(j())return void b();O(!0);const e=p.current||null,s=window.jimuConfig.isDevEdition?null:L,i=te(g),a=te(E);n.builderAppSync.publishChangeSelectionToApp(null),l.appServices.saveAsApp(null==i?void 0:i.asMutable({deep:!0}),null==a?void 0:a.asMutable({deep:!0}),s,e).then((e=>{const{id:s}=e;(0,o.getAppStore)().dispatch(n.builderActions.refreshAppListAction(!0));const i=E.set("id",s).set("thumbnailurl",null);B(i),n.builderAppSync.publishAppInfoChangeToApp(i),o.jimuHistory.changeQueryObject({id:s},!1),O(!1),b(),f(t.Draft),w(),y&&y()}),(e=>{O(!1),O(!1),b(),S(),x(e)}))}},s("commonModalOk")),(0,o.jsx)(a.Button,{onClick:se},s("commonModalCancel"))))},V=Object.assign({},r,a.defaultMessages),W=e=>{const t=o.hooks.useTranslation(V),n=(0,u.useTheme)(),{originalAppInfo:r,folderUrl:p,appConfig:d,isSave:c,toolListWidth:h,isInDropdown:m,saveState:g,clickSaveButtonType:v,isOpenSaveAsPopper:b,handleTokenInvalid:f,togglePublishOptionList:w,onSaveSuccess:S,setIsOpenSaveAsPopper:y,onSaveError:x,onSaveStateChange:j,changePublishStatus:T,onSaveClick:O,clickSaveButtonTypeChange:A,checkAndShowReadOnlyRemind:P,saveAsPrivileges:M}=e,k=o.React.useRef(c),N=e=>e===v&&(e===i.Save?!m&&g===s.Saving:g===s.Saving),C=(null==r?void 0:r.type)===l.AppType.TemplateType;return(0,o.jsx)("div",null,m?(0,o.jsx)("div",null,h<138&&(0,o.jsx)(a.DropdownItem,{onClick:c?void 0:()=>{A(i.SaveInDropdown),setTimeout((()=>{O()}))},title:t("save"),className:"dropdown-more-save save-menu",disabled:c,toggle:!1},N(i.SaveInDropdown)?(0,o.jsx)("div",{className:"d-inline-block toollist-dropdown-icon",style:{width:"16px",height:"16px"}},(0,o.jsx)(E,{theme:n})):(0,o.jsx)(I,{className:"toollist-item-icon d-inline-block toollist-dropdown-icon"}),t("save")),(0,o.jsx)(a.DropdownItem,{className:"save-menu",onClick:()=>{A(i.SaveAs),P()||(k.current=c,j(s.Saving),y(!0))},title:t("saveAs"),toggle:!1,disabled:!M},N(i.SaveAs)?(0,o.jsx)("div",{className:"d-inline-block toollist-dropdown-icon",style:{width:"16px",height:"16px"}},(0,o.jsx)(E,{theme:n})):(0,o.jsx)(z,{className:"toollist-item-icon d-inline-block toollist-dropdown-icon"}),t("saveAs"))):(0,o.jsx)(a.Button,{id:"tooltip_save",className:(0,o.classNames)("toollist-item",{"toollist-item-click":!c,"tool-hidden":h<138}),type:"tertiary",icon:!0,size:"sm",title:(()=>{switch(g){case s.Save:return t("save");case s.SaveError:return t("saveError");case s.SaveSuccess:return t("saveSuccess");case s.Saved:return t("saved");case s.Saving:return t("saving")}})(),disabled:c,onClick:()=>{A(i.Save),O()}},N(i.Save)?(0,o.jsx)("div",{style:{width:"16px",height:"16px"}},(0,o.jsx)(E,{theme:n})):(0,o.jsx)(I,{className:"toollist-item-icon"})),(0,o.jsx)(_,{handleTokenInvalid:f,originalAppInfo:r,isOpen:b,folderUrl:p,appConfig:d,templateHeaderText:t("saveAsTemplateTitle"),experienceHeaderText:t(C?"saveAsNewTemplate":"saveAsAppTitle"),toggle:()=>{y(!b)},changePublishStatus:T,onSaveSuccess:S,onSaveError:(e=!1)=>{j(k.current?s.Saved:s.Save),!e&&x()},togglePublishOptionList:w,checkAndShowReadOnlyRemind:P}))};function Y(e){if(!e)return null;o.semver.lt(o.version,null==e?void 0:e.exbVersion)&&(e=e.set("exbVersion",o.version));const t=e.widgets||{};return Object.keys(t).forEach((s=>{var i,a,n,l,r;o.semver.lt(null===(a=null===(i=t[s])||void 0===i?void 0:i.manifest)||void 0===a?void 0:a.version,null===(n=t[s])||void 0===n?void 0:n.version)&&(e=e.setIn(["widgets",s,"version"],null===(r=null===(l=t[s])||void 0===l?void 0:l.manifest)||void 0===r?void 0:r.version))})),e}var q=d(4795),G=d.n(q);const K=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:G()},i)):o.React.createElement("svg",Object.assign({className:a},i))},Q=e=>{const t=o.hooks.useTranslation(a.defaultMessages),{itemId:s,isOpen:i,itemProtected:n,detailUrl:l,itemTitle:r,deleteToggle:p,deleteApp:d}=e,c=o.css`
    .icon-con {
      margin-right: ${o.polished.rem(12)};
      svg {
        color: var(--danger-500);
      }
    }
    .modal-title {
      color: var(--dark-600);
    }
    .can-not-delete-con {
      margin-bottom: ${o.polished.rem(16)};
      font-size: ${o.polished.rem(16)};
      font-weight: 500;
      line-height: ${o.polished.rem(24)};
      svg {
        margin: 0 ${o.polished.rem(6)} 0 ${o.polished.rem(6)};
      }
      &>div, div a {
        line-height: ${o.polished.rem(24)};
        display: inline-block;
        color: var(--dark-600);
      }
      div a {
        font-size: ${o.polished.rem(14)};
        text-decoration: underline;
        font-weight: 400;
      }
    }
    .delete-remind {
      font-size: ${o.polished.rem(13)};
      color: var(--dark-800);
    }
    .cancel-button {
      background: var(--light-500);
      color: var(--white);
      border: none;
      color: #fff;
    }
  `;return(0,o.jsx)(a.Modal,{className:(0,o.classNames)("d-flex justify-content-center"),isOpen:i,centered:!0,returnFocusAfterClose:!0,autoFocus:!0,backdrop:"static",toggle:p,css:c},(0,o.jsx)(a.ModalHeader,{tag:"h4",toggle:p,className:"item-delete-header"},t("delete")),(0,o.jsx)(a.ModalBody,null,(()=>{const e=t(n?"cannotDeleteItemMessage":"itemDeleteRemind");return(0,o.jsx)("div",{className:"w-100 h-100 d-flex"},n&&(0,o.jsx)("div",{className:"icon-con"},(0,o.jsx)(U,{size:24})),(0,o.jsx)("div",{className:"flex-grow-1"},n&&(0,o.jsx)("div",{className:"can-not-delete-con"},t("cannotDeleteItem",{title:""}),(0,o.jsx)("div",null,(0,o.jsx)(K,{size:16}),(0,o.jsx)("a",{href:l,target:"view_window"},r))),(0,o.jsx)("div",{className:"delete-remind"},e)))})()),(0,o.jsx)(a.ModalFooter,null,!n&&(0,o.jsx)(a.Button,{type:"danger",onClick:e=>{d(s),p()}},t("delete")),(0,o.jsx)(a.Button,{className:"cancel-button",onClick:p},t("cancel"))))};var X,J=function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function n(e){try{r(i.next(e))}catch(e){a(e)}}function l(e){try{r(i.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,l)}r((i=i.apply(e,t||[])).next())}))};!function(e){e.NewApp="NewApp",e.SaveAsTemplate="SaveAsTemplate",e.Publish="Publish"}(X||(X={}));const Z=Object.assign({},r,a.defaultMessages,o.defaultMessages);class ee extends o.React.PureComponent{constructor(i){var d;super(i),this.fontSizeBase=14,this.panelWidth=210/this.fontSizeBase+"rem",this.save="save",this.saved="saved",this.saving="saving",this.saveError="saveError",this.saveSuccess="saveSuccess",this.publish="publish",this.published="published",this.publishing="publishing",this.publishError="publishError",this.publishSuccess="publishSuccess",this.translationMap={},this.hasUpdateAppconfigVersion=!1,this.getDiffKey=(e,t)=>{const s=[],i=(e,t,o)=>{for(const a in e){const n=e[a],l=null==t?void 0:t[a],r=o?`${o}.${a}`:a;"object"==typeof n&&"object"==typeof l?i(n,l,r):n!==l&&s.push(r)}};return i(e,t,""),s},this.updateToollistWidth=()=>{var e,t;const{toolListWidth:s}=this.state,i=(null===(t=null===(e=this.toolContainer)||void 0===e?void 0:e.current)||void 0===t?void 0:t.clientWidth)||0;s!==i&&this.setState({toolListWidth:i})},this.checkIsSaved=()=>this.state.saveState===s.Saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1,this.onUndo=()=>{this.props.stateHistory.past.length<=1||(0,o.getAppStore)().dispatch(n.appStateHistoryActions.InBuilderAppConfigUndo())},this.onRedo=()=>{this.props.stateHistory.future.length<=0||(0,o.getAppStore)().dispatch(n.appStateHistoryActions.InBuilderAppConfigRedo())},this._getTimeOffset=e=>{const t=e.getTimezoneOffset();return(t<0?1:-1)*(t<0?Math.abs(t)/60:t/60)*60*60*1e3},this.onSaveClick=e=>J(this,void 0,void 0,(function*(){if(this.props.checkAndShowReadOnlyRemind())return;const{titleText:t,appItem:i}=this.props;this.setState({saveState:s.Saving});let o=e||this.props.appConfig;return o=this.updateExbVersion(o),o=this.updateOriginExbVersion(o),i.title=t,yield this.saveRequest(i,o).then((e=>J(this,void 0,void 0,(function*(){return this.onSaveSuccess(o,i),this.updateTypeKeywordsRequest(),yield Promise.resolve(null)}))),(e=>J(this,void 0,void 0,(function*(){return console.error(e),this.onSaveError(),this.props.handleTokenInvalid(e),yield Promise.reject(e)}))))})),this.updateExbVersion=e=>{let t=e;return o.semver.lt(o.version,e.exbVersion)&&(t=Y(e),n.builderAppSync.publishAppConfigChangeToApp(t),this.hasUpdateAppconfigVersion=!0),t},this.updateOriginExbVersion=e=>{let t=e;return o.semver.eq(o.version,e.originExbVersion)||(t=e.set("originExbVersion",o.version),n.builderAppSync.publishAppConfigChangeToApp(t)),t},this.onSaveSuccess=(e,t)=>{var i,o;this.props.toastNote(this.translationMap[this.saveSuccess]),this.setState({savedAppConfig:e||(null===(i=this.props)||void 0===i?void 0:i.appConfig),savedAppItem:t||(null===(o=this.props)||void 0===o?void 0:o.appItem),saveState:s.Saved})},this.onSaveError=()=>{this.setState({saveState:s.SaveError}),this.props.toastNote(this.translationMap[this.saveError])},this.saveRequest=(e,t)=>{const s=(new Date).getTime();let i=Y(t);return o.semver.eq(o.version,i.originExbVersion)||(i=i.set("originExbVersion",o.version)),l.appServices.saveApp(e,i.set("timestamp",s))},this.duplicateAppItem=e=>{const t=this.getFolderId();return l.appServices.duplicateApp(e,t).then((e=>Promise.resolve(e)),(e=>{console.log(e)}))},this.updateTypeKeywordsRequest=()=>{const e=this.props.appItem;e.title=this.props.titleText;const t=this.getTypeKeywords(),s={id:e.id,typeKeywords:t.typeKeywords,owner:e.owner};l.appServices.updateAppInfo(s).then((()=>{this.props.changePublishStatus(t.status)}),(e=>{console.error(e)}))},this.getTypeKeywords=()=>{let e=!1,s=t.Draft;const{publishStatus:i}=this.props;let a=this.props.appItem.typeKeywords||[];if(a=a.map((a=>(a.includes("status:")&&(e=!0),a.includes("status:")&&i!==t.Draft?(s=t.Changed,`status: ${t.Changed}`):a.includes("version:")?`version:${o.version}`:a))),!e){const e=`status: ${t.Draft}`;s=t.Draft,a.push(e)}return{typeKeywords:a,status:s}},this.onPublishClick=()=>{this.props.checkAndShowReadOnlyRemind()||this.props.publishStatus!==t.Publishing&&(this.state.saveState===s.Saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1?this.tryToPublishApp():(this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=X.Publish))},this.tryToPublishApp=()=>J(this,void 0,void 0,(function*(){(yield p.proxySettingUtils.needToConfigProxy())?this.setState({isProxySettingPopupOpen:!0}):this.publishApp()})),this.onAppProxiesFinish=e=>J(this,void 0,void 0,(function*(){return this.onSaveClick(e).then((()=>{this.publishApp()}),(e=>{this.props.handleTokenInvalid(e)}))})),this.onAppProxiesCancel=()=>{this.setState({isProxySettingPopupOpen:!1})},this.onToggleProxySettingPopup=()=>{this.setState({isProxySettingPopupOpen:!this.state.isProxySettingPopupOpen})},this.publishApp=()=>{this.props.changePublishStatus(t.Publishing);const{appItem:e}=this.props;l.appServices.publishApp(e).then((()=>{this.setState({isPublished:!0}),this.props.changePublishStatus(t.Published),this.props.toastNote(this.translationMap[this.publishSuccess])}),(e=>{console.error(e),this.props.handleTokenInvalid(e),this.props.toastNote(this.translationMap[this.publishError]),this.props.changePublishStatus(t.Changed)})).catch((e=>{console.error(e),this.props.handleTokenInvalid(e),this.props.toastNote(this.translationMap[this.publishError]),this.props.changePublishStatus(t.Changed)}))},this.onToggleToolTipUndo=()=>{this.setState({toolTipUndoOpen:!this.state.toolTipUndoOpen,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipRedo=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!this.state.toolTipRedoOpen,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipSave=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!this.state.toolTipSaveOpen,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPreview=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!this.state.toolTipPreviewOpen,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPublish=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!this.state.toolTipPublishOpen,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPublishOptions=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!this.state.toolTipPublishOptionsOpen})},this.togglePublishOptionList=()=>{this.setState({publishOptionsListOpen:!this.state.publishOptionsListOpen,toolTipPublishOptionsOpen:!1})},this.toggleMoreToolList=()=>{this.setState({moreToolListOpen:!this.state.moreToolListOpen})},this.copyPublishUrlToClipBoard=()=>{const e=location.origin+window.jimuConfig.mountPath+(window.jimuConfig.useStructuralUrl?`experience/${this.props.queryObject.id}/`:`experience/?id=${this.props.queryObject.id}`),t=document.createElement("input");t.value=e,t.style.position="absolute",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.props.toastNote(this.copySuccess),this.setState({publishOptionsListOpen:!1})},this.isInOnLine=()=>o.portalUrlUtils.isAGOLDomain(this.props.portalUrl),this.saveForkeyBoard=()=>(this.state.saveState===s.Saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1||this.state.saveState===s.Saving||this.onSaveClick(),!1),this.isMac=()=>{var e,t;return"macOS"===(null===(t=null===(e=window.jimuUA)||void 0===e?void 0:e.os)||void 0===t?void 0:t.name)},this.newApp=()=>{if(!this.checkIsSaved())return this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=X.NewApp,!1;this.toNewApp()},this.toNewApp=()=>{const{locale:t}=this.props,s=t?{redirect:"back",locale:t}:{redirect:"back"},i=t?{page:"template",redirect:"back",locale:t}:{page:"template",redirect:"back"};this.props.itemType===e.Experience?(o.jimuHistory.changePage("template"),window.jimuConfig.useStructuralUrl?o.jimuHistory.changeQueryObject(s,!0):o.jimuHistory.changeQueryObject(i,!0)):this.createNewAppByTemplate(this.props.appItem)},this.createNewAppByTemplate=e=>{l.appServices.createAppByItemTemplate(e).then((e=>{e&&(o.jimuHistory.changeQueryObject({id:e},!0),this.props.changePublishStatus(t.Draft))}),(()=>{}))},this.isConfirmsaveAsTemplate=()=>{if(!this.props.checkAndShowReadOnlyRemind())return this.checkIsSaved()?void this.saveAsTemplate():(this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=X.SaveAsTemplate,!1)},this.saveAsTemplate=()=>{var e;this.toggleLoading(!0),l.appServices.createTemplateByApp(null===(e=this.props)||void 0===e?void 0:e.appItem).then((e=>{this.toggleLoading(!1),e&&(this.props.toastNote(this.generateTemplateSuccess),o.jimuHistory.changeQueryObject({id:e},!0),this.props.changePublishStatus(t.Draft))}),(()=>{this.props.toastNote(this.generateTemplateError),this.toggleLoading(!1)}))},this.toggleLoading=e=>{(0,o.getAppStore)().dispatch(o.appActions.setIsBusy(e,o.LoadingType.Primary))},this.deleteApp=(e,s)=>{l.appServices.deleteApp(e).then((()=>{s&&(o.jimuHistory.changeQueryObject({id:s},!0),this.props.changePublishStatus(t.Draft))}),(e=>{this.props.handleTokenInvalid(e)}))},this.handleToggleForLeaveAlertPopup=e=>{if(this.setState({isShowLeaveAlertPopup:!this.state.isShowLeaveAlertPopup}),e)switch(this.clickEventType){case X.NewApp:this.toNewApp();break;case X.SaveAsTemplate:this.saveAsTemplate();break;case X.Publish:this.tryToPublishApp()}},this.previewToggle=()=>{this.setState({isShowPreviewAlertPop:!this.state.isShowPreviewAlertPop})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:Z[e]}):e,this.getAlertPopTitle=()=>{switch(this.clickEventType){case X.NewApp:case X.SaveAsTemplate:return this.nls("headerLeaveSite");case X.Publish:return`${this.nls("publish")}`}},this.getAlertPopOkLabel=()=>{switch(this.clickEventType){case X.NewApp:case X.SaveAsTemplate:return this.nls("headerLeave");default:return""}},this.previewAlertPopStyle=()=>{var e,t,s,i,a,n;const l=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors;return o.css`
      .preview-alert-pop-content {
        font-size: 1rem;
        position: relative;
      }
      .modal-footer {
        padding: 0;
      }
      .modal-content {
        border: 1px solid ${null===(s=null==l?void 0:l.palette)||void 0===s?void 0:s.secondary[500]};
      }
      .perview-pop-button-con {
        right:0;
        bottom: -20px;
        text-align: right;
        margin-top: ${o.polished.rem(32)};
      }
      .preview-alert-pop-btn {
        min-width: ${o.polished.rem(80)};
        border: none;
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.375rem;
        border-radius: 2px;
        background: transparent;
      }
      .btn-primary {
        color: ${null==l?void 0:l.black};
        background: ${null===(i=null==l?void 0:l.palette)||void 0===i?void 0:i.primary[500]};
      }
      .btn-cancle {
        color: ${null===(a=null==l?void 0:l.palette)||void 0===a?void 0:a.dark[600]};
        border-color: ${null===(n=null==l?void 0:l.palette)||void 0===n?void 0:n.secondary[800]};
        margin-left: ${o.polished.rem(10)};
        border-width: 1px;
        border-style: solid;
      }
    `},this.getPublishText=()=>{const{publishStatus:e}=this.props;switch(e){case t.Published:return this.nls("published");case t.Publishing:return this.nls("publishing");case t.Changed:case t.Draft:return this.nls("publish")}},this.getFolderId=()=>{var e,t;const{appItem:s}=this.props;return(null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.user)||void 0===t?void 0:t.username)===(null==s?void 0:s.owner)?null:(null==s?void 0:s.ownerFolder)||null},this.onSaveStateChange=e=>{this.setState({saveState:e})},this.clickSaveButtonTypeChange=e=>{this.setState({clickSaveButtonType:e})},this.setIsOpenSaveAsPopper=e=>{this.setState({isOpenSaveAsPopper:e})},this.handleToggle=()=>{if(this.props.checkAndShowReadOnlyRemind())return;const{appItem:e}=this.props;if(null==e?void 0:e.protected)return void this.setState({isOpenDeletePopper:!0,alertPopupMessage:this.nls("unableDelete")});const{isOpenDeletePopper:t}=this.state;this.setState({isOpenDeletePopper:!t})},this.handleConfirm=e=>{window.onbeforeunload=null,this.setState({loading:!0,isOpenDeletePopper:!1}),l.appServices.deleteApp(e).then((()=>{this.setState({loading:!1});const e=`${window.jimuConfig.mountPath}`;window.location.assign(e)}),(e=>{this.props.handleTokenInvalid(e),"CONT_0048"===(null==e?void 0:e.code)?this.setState({loading:!1,itemProtected:!0,isOpenDeletePopper:!0,alertPopupMessage:this.nls("unableDelete")}):this.setState({isShowAlertPopup:!0,alertPopupMessage:this.nls("deleteError"),loading:!1})}))},this.toggleAlertPopup=()=>{const{isShowAlertPopup:e}=this.state;this.setState({isShowAlertPopup:!e,alertPopupMessage:""})},this.renderMore=()=>{var i,n;const l=window.jimuConfig.isDevEdition,{itemType:p,publishStatus:d,stateHistory:c,theme:h,queryObject:u,appItem:m,appConfig:g,saveAsPrivileges:b,handleTokenInvalid:f}=this.props,{saveState:S,toolListWidth:y,clickSaveButtonType:j,isOpenSaveAsPopper:T}=this.state,A=p===e.Template,P=o.SessionManager.getInstance().getMainSession(),k=null==P?void 0:P.token,N=S===s.Saved||(null===(i=null==c?void 0:c.past)||void 0===i?void 0:i.length)<=1&&(null===(n=null==c?void 0:c.future)||void 0===n?void 0:n.length)<1;let I=o.urlUtils.getAppUrl({appId:u.id,isTemplate:A,isArcGisOnlineTemplate:!1,isPortalRequest:!1,isDraft:!0}),C=o.urlUtils.getAppUrl({appId:this.props.queryObject.id,isTemplate:A});return u.locale&&(I=o.urlUtils.appendQueryParam(I,"locale",u.locale),C=o.urlUtils.appendQueryParam(C,"locale",u.locale)),u.__env__&&(I=o.urlUtils.appendQueryParam(I,"__env__",u.__env__),C=o.urlUtils.appendQueryParam(C,"__env__",u.__env__)),(0,o.jsx)("div",{className:"tool_more_con h-100"},(0,o.jsx)(a.Dropdown,{size:"sm",toggle:this.togglePublishOptionList,isOpen:this.state.publishOptionsListOpen||T},(0,o.jsx)(a.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"tertiary",className:"toollist-item-click",title:this.moreOptionsForTool},(0,o.jsx)(v,{className:"toollist-dropdown-icon"})),(0,o.jsx)(a.DropdownMenu,{css:this.getDropdownStyle(h)},(0,o.jsx)(a.DropdownItem,{onClick:this.onUndo,className:"dropdown-more-undo",disabled:c.past.length<=1||y>=46,toggle:!1},(0,o.jsx)("div",{title:this.undo},(0,o.jsx)(x,{className:"toollist-dropdown-icon",autoFlip:!0}),this.undo)),(0,o.jsx)(a.DropdownItem,{onClick:this.onRedo,className:"dropdown-more-redo",disabled:this.props.stateHistory.future.length<1||y>=92,toggle:!1},(0,o.jsx)("div",{title:this.redo},(0,o.jsx)(O,{className:"toollist-dropdown-icon",autoFlip:!0}),this.redo)),(0,o.jsx)(W,{handleTokenInvalid:f,originalAppInfo:(0,o.Immutable)(m),folderUrl:this.props.folderUrl,appConfig:g,isSave:N,toolListWidth:y,isInDropdown:!0,onSaveSuccess:this.onSaveSuccess,onSaveError:this.onSaveError,saveState:S,onSaveStateChange:this.onSaveStateChange,changePublishStatus:this.props.changePublishStatus,onSaveClick:this.onSaveClick,clickSaveButtonType:j,clickSaveButtonTypeChange:this.clickSaveButtonTypeChange,setIsOpenSaveAsPopper:this.setIsOpenSaveAsPopper,isOpenSaveAsPopper:T,togglePublishOptionList:this.togglePublishOptionList,checkAndShowReadOnlyRemind:this.props.checkAndShowReadOnlyRemind,saveAsPrivileges:b}),N?(0,o.jsx)(a.DropdownItem,{onClick:void 0,className:"dropdown-more-preview",disabled:y>=184,tag:"a",href:I,rel:"noreferrer",target:"_blank",title:this.preview},(0,o.jsx)("div",{id:"tooltip_preview",title:this.preview},(0,o.jsx)(w,{className:"toollist-dropdown-icon"}),this.preview)):(0,o.jsx)(a.DropdownItem,{onClick:this.previewToggle,className:"dropdown-more-preview",disabled:y>=184},(0,o.jsx)("div",{id:"tooltip_preview",title:this.preview},(0,o.jsx)(w,{className:"toollist-dropdown-icon"}),this.preview)),(0,o.jsx)(a.DropdownItem,{onClick:this.handleToggle,className:"dropdown-more-delete",disabled:!b},(0,o.jsx)("div",{id:"tooltip_delete",title:this.delete},(0,o.jsx)(M,{className:"toollist-dropdown-icon"}),this.delete)),(0,o.jsx)(a.DropdownItem,{divider:!0}),!l&&(0,o.jsx)(a.DropdownItem,{onClick:()=>{window.open(`${this.props.portalUrl}/home/item.html?id=${this.props.currentAppId}`)}},this.changeShareSettings),(0,o.jsx)(a.DropdownItem,{disabled:!this.state.isPublished,onClick:()=>{window.open(C,"_blank"),this.setState({publishOptionsListOpen:!1})}},this.viewPublishedItem),l&&d!==t.Draft&&(0,o.jsx)(a.DropdownItem,{href:`/download/${this.props.currentAppId}?locale=${this.props.intl.locale}&token=${k}`,target:"_blank"},this.props.intl.formatMessage({id:"download",defaultMessage:r.download})),(0,o.jsx)(a.DropdownItem,{disabled:!this.state.isPublished,onClick:()=>{this.copyPublishUrlToClipBoard()}},this.copyPublishedItemLink),d!==t.Draft&&A&&(0,o.jsx)(a.DropdownItem,{onClick:()=>{this.newApp()}},this.createNewExperience),(0,o.jsx)(a.DropdownItem,{divider:!0}),!A&&(0,o.jsx)(a.DropdownItem,{onClick:()=>{this.newApp()}},this.createNew),p===e.Experience&&(0,o.jsx)(a.DropdownItem,{disabled:!b,onClick:()=>{this.isConfirmsaveAsTemplate()}},this.generateTemplate))))},this.translationMap[this.save]=this.props.intl.formatMessage({id:"save",defaultMessage:r.save}),this.translationMap[this.saved]=this.props.intl.formatMessage({id:"saved",defaultMessage:r.saved}),this.translationMap[this.saving]=this.props.intl.formatMessage({id:"saving",defaultMessage:r.saving}),this.translationMap[this.saveError]=this.props.intl.formatMessage({id:"saveError",defaultMessage:r.saveError}),this.translationMap[this.saveSuccess]=this.props.intl.formatMessage({id:"saveSuccess",defaultMessage:r.saveSuccess}),this.translationMap[this.publish]=this.nls("publish"),this.translationMap[this.published]=this.props.intl.formatMessage({id:"published",defaultMessage:r.published}),this.translationMap[this.publishing]=this.props.intl.formatMessage({id:"publishing",defaultMessage:r.publishing}),this.translationMap[this.publishError]=this.props.intl.formatMessage({id:"publishError",defaultMessage:r.publishError}),this.translationMap[this.publishSuccess]=this.props.intl.formatMessage({id:"publishSuccess",defaultMessage:r.publishSuccess}),this.undo=this.props.intl.formatMessage({id:"undo",defaultMessage:r.undo}),this.redo=this.props.intl.formatMessage({id:"redo",defaultMessage:r.redo}),this.preview=this.props.intl.formatMessage({id:"preview",defaultMessage:a.defaultMessages.preview}),this.delete=this.props.intl.formatMessage({id:"deleteOption",defaultMessage:a.defaultMessages.deleteOption}),this.publishTo=this.props.intl.formatMessage({id:"publishTo",defaultMessage:r.publishTo}),this.publishOptions=this.props.intl.formatMessage({id:"publishOptions",defaultMessage:r.publishOptions}),this.copySuccess=this.props.intl.formatMessage({id:"copySuccess",defaultMessage:r.copySuccess}),this.changeShareSettings=this.props.intl.formatMessage({id:"changeShareSettings",defaultMessage:r.changeShareSettings}),this.viewPublishedItem=this.props.intl.formatMessage({id:"viewPublishedItem",defaultMessage:r.viewPublishedItem}),this.copyPublishedItemLink=this.props.intl.formatMessage({id:"copyPublishedItemLink",defaultMessage:r.copyPublishedItemLink}),this.createNew=this.props.intl.formatMessage({id:"createNew",defaultMessage:r.createNew}),this.createNewExperience=this.props.intl.formatMessage({id:"createNewExperience",defaultMessage:r.createNewExperience}),this.generateTemplate=this.props.intl.formatMessage({id:"generateTemplate",defaultMessage:r.generateTemplate}),this.moreOptionsForTool=this.props.intl.formatMessage({id:"moreOptionsForTool",defaultMessage:r.moreOptionsForTool}),this.moreTools=this.props.intl.formatMessage({id:"moreTools",defaultMessage:r.moreTools}),this.access=this.props.intl.formatMessage({id:"access",defaultMessage:r.access}),this.generateTemplateSuccess=this.props.intl.formatMessage({id:"generateTemplateSuccess",defaultMessage:r.generateTemplateSuccess}),this.generateTemplateError=this.props.intl.formatMessage({id:"generateTemplateError",defaultMessage:r.generateTemplateError}),this.clickEventType=X.NewApp,this.state={saveState:s.Save,savedAppConfig:null,savedAppItem:null,toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1,publishOptionsListOpen:!1,moreToolListOpen:!1,isPublished:!1,isShowLeaveAlertPopup:!1,isShowPreviewAlertPop:!1,isProxySettingPopupOpen:!1,toolListWidth:184,newAppId:null,isSaveStateSaved:!1,clickSaveButtonType:null,isOpenSaveAsPopper:!1,isOpenDeletePopper:!1,isShowAlertPopup:!1,alertPopupMessage:"",loading:!1,itemProtected:null===(d=i.appItem)||void 0===d?void 0:d.protected},this.toolContainer=o.React.createRef()}getStyle(e){var t;return o.css`
      button:disabled:hover,button:disabled, .tool_more_con:disabled:hover, .tool_more_con:disabled{
        color:${e.colors.palette.light[800]};
      }
      button, .tool_more_con button{
        color:${e.colors.palette.dark[400]}
      }
      .tool_more_con button:hover {
        color: ${e.colors.black};
      }
      button:disabled:hover {
        border:none;
      }
      .toollist {
        .toollist-length-screen {
          width: ${o.polished.rem(0)};
          overflow: hidden;
          .tool-hidden {
            display: none;
          }
        }

        @media only screen and (max-width: 1025px) {
          .toollist-length-screen {
            width: ${o.polished.rem(0)};
          }
        }
        @media only screen and (min-width: 1025px) {
          .toollist-length-screen {
            width: ${o.polished.rem(46)};
          }
        }
        @media only screen and (min-width: 1071px) {
          .toollist-length-screen {
            width: ${o.polished.rem(92)};
          }
        }
        @media only screen and (min-width: 1117px) {
          .toollist-length-screen {
            width: ${o.polished.rem(138)};
          }
        }
        @media only screen and (min-width: 1163px) {
          .toollist-length-screen {
            width: ${o.polished.rem(184)};
          }
        }

        .tool_more_content {
          width: ${o.polished.rem(46)};
          height: 26px;
          .toollist-dropdown-icon{
            margin: 0
          }
        }
        .toollist-item {
          margin: 4px;
          padding: 4px 11px;
          border: 0;
        }
        .toollist-item-click:focus {
          box-shadow: none !important;
        }
        .toollist-publish {
          border-radius: 2px;
          min-width: 4.25rem;
          height: ${o.polished.rem(26)};
          color: ${e.colors.black};
          background: ${e.colors.palette.light[800]};
          font-size: ${o.polished.rem(13)};
          padding-top: 0;
          padding-bottom: 0;
          border:none;
          &:hover {
            background: ${e.colors.primary};
            border:none;
          }
          &.btn.disabled {
            background-color: ${e.colors.palette.light[800]};
            color: ${e.colors.palette.dark[400]};
            border:none;
          }
        }
        .toollist-publish:focus {
          box-shadow: none !important;
        }

        .btn {
          &.disabled,
          &:disabled {
            background-color: transparent;
          }
        }
        .btn:not(:disabled):not(.disabled):active,
        .btn:not(:disabled):not(.disabled).active,
        .show > .btn.dropdown-toggle {
          color: ${(null===(t=null==e?void 0:e.colors)||void 0===t?void 0:t.black)||"black"};
        }
      }

      button:not(:disabled):not(.disabled):active, button:not(:disabled):not(.disabled).active{
        border:none;
      }

      .loading-con {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: ${o.polished.rgba(e.colors.white,.2)};
      }
    `}getDropdownStyle(e){return o.css`
      & {
        background: ${e.colors.palette.light[500]};
        border: 1px solid ${e.colors.palette.light[300]};;
        box-shadow: 0 0 10px 2px ${o.polished.rgba(e.colors.white,.2)};
        border-radius: 2px;
        border-radius: 2px;
        min-width:${o.polished.rem(220)};
        padding-top: ${o.polished.rem(8)};
        padding-bottom: 0;
      }
      button.save-menu {
        padding-left: ${o.polished.rem(16)};
        margin-bottom: ${o.polished.rem(8)};
      }
      .dropdown-menu--inner {
        .toollist-dropdown-icon {
          margin-right: ${o.polished.rem(8)};
          margin-bottom: ${o.polished.rem(2)};
        }
        &>button, &>a {
          padding-left: ${o.polished.rem(16)};
          margin-bottom: ${o.polished.rem(8)};
        }
        button, a {
          box-sizing:border-box;
        }
        .dropdown-more-preview-a {
          color: inherit;
          text-decoration: none;
        }

        @media only screen and (min-width: 1162px) {
          .dropdown-more-preview {
            display: none;
          }
        }
        @media only screen and (max-width: 1162px) {
          .dropdown-more-preview {
            display: flex;
          }
        }
        @media only screen and (min-width: 1116px) {
          .dropdown-more-save {
            display: none;
          }
        }
        @media only screen and (max-width: 1116px) {
          .dropdown-more-save {
            display: flex;
          }
        }
        @media only screen and (min-width: 1070px) {
          .dropdown-more-redo {
            display: none;
          }
        }
        @media only screen and (max-width: 1070px) {
          .dropdown-more-redo {
            display: flex;
          }
        }
        @media only screen and (min-width: 1024px) {
          .dropdown-more-undo {
            display: none;
          }
        }
        @media only screen and (max-width: 1024px) {
          .dropdown-more-undo {
            display: flex;
          }
        }
      }
    `}componentDidMount(){window.onbeforeunload=()=>{if(!this.checkIsSaved())return!1},window.addEventListener("resize",this.updateToollistWidth)}componentWillUnmount(){window.onbeforeunload=null}componentDidUpdate(e,i){var a,n;const{appConfig:l,publishStatus:r,appItem:p}=this.props,{savedAppConfig:d,savedAppItem:c}=this.state;if(this.updateToollistWidth(),this.props.onSaveStatusChanged&&this.props.onSaveStatusChanged(this.checkIsSaved()),(null==p?void 0:p.protected)===(null===(a=null==e?void 0:e.appItem)||void 0===a?void 0:a.protected)&&(null==p?void 0:p.id)===(null===(n=null==e?void 0:e.appItem)||void 0===n?void 0:n.id)||this.setState({itemProtected:null==p?void 0:p.protected}),r!==e.publishStatus&&(r===t.Draft?this.setState({isPublished:!1}):this.setState({isPublished:!0})),this.props!==e){if(this.hasUpdateAppconfigVersion)return void((null==l?void 0:l.exbVersion)===(null==d?void 0:d.exbVersion)&&(this.setState({savedAppConfig:l}),this.hasUpdateAppconfigVersion=!1));if(l)if(d||c){const e=!o.lodash.isDeepEqual(p,c),t=!o.lodash.isDeepEqual(null==l?void 0:l.asMutable({deep:!0}),null==d?void 0:d.asMutable({deep:!0}));e||t?this.setState({saveState:s.Save}):this.setState({saveState:s.Saved})}else this.state.saveState===this.saveError&&this.setState({saveState:s.Save})}}render(){var i,n,l,r;const{toolListWidth:d,saveState:c,clickSaveButtonType:u,isOpenDeletePopper:m,isShowAlertPopup:g,alertPopupMessage:v,loading:b,itemProtected:f}=this.state,S=window.jimuConfig.isDevEdition,{itemType:y,publishStatus:j,appItem:T,appConfig:A,queryObject:P,itemId:M}=this.props,k=S?"":`${this.publishTo} ${this.isInOnLine()?"ArcGIS Online":"Portal for ArcGIS"}`,N=this.state.saveState===s.Saved||(null===(n=null===(i=this.props.stateHistory)||void 0===i?void 0:i.past)||void 0===n?void 0:n.length)<=1&&(null===(r=null===(l=this.props.stateHistory)||void 0===l?void 0:l.future)||void 0===r?void 0:r.length)<1,I=y===e.Template,C=this.props.appConfig&&h.dataComponentsUtils.getWhetherDataSourceIsInited(this.props.dataSources,this.props.dataSourcesInfo);let $=o.urlUtils.getAppUrl({appId:this.props.queryObject.id,isTemplate:I,isArcGisOnlineTemplate:!1,isPortalRequest:!1,isDraft:!0});return P.locale&&($=o.urlUtils.appendQueryParam($,"locale",P.locale)),P.__env__&&($=o.urlUtils.appendQueryParam($,"__env__",P.__env__)),(0,o.jsx)("div",{className:"float-right d-flex flex-row align-items-center",css:this.getStyle(this.props.theme)},this.isMac()&&(0,o.jsx)(o.Keyboard,{bindings:{"command+keys":()=>{this.saveForkeyBoard()}}}),!this.isMac()&&(0,o.jsx)(o.Keyboard,{bindings:{"ctrl+keys":()=>{this.saveForkeyBoard()}}}),(0,o.jsx)("div",{className:"h-100 toollist d-flex flex-row align-items-center justify-content-end"},(0,o.jsx)("div",{className:"toollist-length-screen d-flex align-items-center justify-content-starth-100 justify-content-start",ref:this.toolContainer},(0,o.jsx)(a.Button,{id:"tooltip_undo",className:(0,o.classNames)("toollist-item",{"toollist-item-click":!(this.props.stateHistory.past.length<=1),"tool-hidden":d<46}),type:"tertiary",title:this.undo,icon:!0,size:"sm",disabled:this.props.stateHistory.past.length<=1,onClick:this.onUndo},(0,o.jsx)(x,{className:"toollist-item-icon",autoFlip:!0})),(0,o.jsx)(a.Button,{id:"tooltip_redo",className:(0,o.classNames)("toollist-item",{"toollist-item-click":!(this.props.stateHistory.future.length<1),"tool-hidden":d<92}),type:"tertiary",title:this.redo,icon:!0,size:"sm",disabled:this.props.stateHistory.future.length<1,onClick:this.onRedo},(0,o.jsx)(O,{className:"toollist-item-icon",autoFlip:!0})),d>=138&&(0,o.jsx)(W,{originalAppInfo:(0,o.Immutable)(T),folderUrl:this.props.folderUrl,appConfig:A,isSave:N,toolListWidth:d,isInDropdown:!1,onSaveSuccess:this.onSaveSuccess,onSaveError:()=>{},saveState:c,onSaveStateChange:this.onSaveStateChange,changePublishStatus:this.props.changePublishStatus,onSaveClick:this.onSaveClick,clickSaveButtonType:u,clickSaveButtonTypeChange:this.clickSaveButtonTypeChange}),N?(0,o.jsx)(a.Button,{icon:!0,size:"sm",tag:"a",href:$,rel:"noreferrer",target:"_blank",role:"button",title:this.preview,type:"tertiary",className:(0,o.classNames)("toollist-item toollist-item-click",{"tool-hidden":d<184})},(0,o.jsx)(w,{className:"toollist-item-icon"})):(0,o.jsx)(a.Button,{icon:!0,size:"sm",id:"tooltip_preview",title:this.preview,type:"tertiary",onClick:this.previewToggle,className:(0,o.classNames)("toollist-item toollist-item-click",{"tool-hidden":d<184})},(0,o.jsx)(w,{className:"toollist-item-icon"}))),(0,o.jsx)("div",{className:"tool_more_content"},this.renderMore()),(0,o.jsx)(a.Button,{className:"ml-2 toollist-publish",onClick:this.onPublishClick,disabled:j===t.Published||j===t.Publishing||!C,title:k},(0,o.jsx)("span",null,this.getPublishText()))),(0,o.jsx)(a.AlertPopup,{isOpen:this.state.isShowLeaveAlertPopup,okLabel:this.getAlertPopOkLabel(),title:this.getAlertPopTitle(),toggle:this.handleToggleForLeaveAlertPopup},(0,o.jsx)("div",{style:{fontSize:"1rem"}},this.nls("headerLeaveDescription"))),(0,o.jsx)(a.AlertPopup,{className:"preview-alert-pop",css:this.previewAlertPopStyle(),isOpen:this.state.isShowPreviewAlertPop,hideOK:!0,hideCancel:!0,title:this.nls("preview"),toggle:this.previewToggle},(0,o.jsx)("div",{className:"preview-alert-pop-content"},this.nls("headerLeaveDescription"),(0,o.jsx)("div",{className:"perview-pop-button-con"},(0,o.jsx)("a",{className:"m-0 p-0 toollist-item-click btn h-100 border-0",onClick:this.previewToggle,href:$,rel:"noreferrer",target:"_blank"},(0,o.jsx)("button",{className:"preview-alert-pop-btn btn-primary"},this.nls("commonModalOk"))),(0,o.jsx)("button",{onClick:this.previewToggle,className:"preview-alert-pop-btn btn-cancle"},this.nls("commonModalCancel"))))),(0,o.jsx)(p.ProxySettingPopup,{isOpen:this.state.isProxySettingPopupOpen,onToggle:this.onToggleProxySettingPopup,onCancel:this.onAppProxiesCancel,onFinish:this.onAppProxiesFinish}),b&&(0,o.jsx)("div",{className:"loading-con"},(0,o.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%"},className:"jimu-primary-loading"})),(0,o.jsx)(Q,{itemTitle:null==T?void 0:T.title,itemId:M,isOpen:m,itemProtected:f,deleteToggle:()=>{this.setState({isOpenDeletePopper:!1})},deleteApp:this.handleConfirm,detailUrl:`${this.props.portalUrl}/home/item.html?id=${this.props.currentAppId}`}),(0,o.jsx)(a.AlertPopup,{isOpen:g,title:this.nls("variableColorWarning"),hideCancel:!0,toggle:this.toggleAlertPopup},(0,o.jsx)("div",{style:{fontSize:"1rem"}},v)))}}const te=(0,u.withTheme)(ee),se=o.ReactRedux.connect((e=>({stateHistory:e.appStateHistory,queryObject:e.queryObject,appConfig:e.appStateInBuilder&&e.appStateInBuilder.appConfig,currentAppId:e.builder&&e.builder.currentAppId,portalUrl:e.portalUrl,dataSources:e.appStateInBuilder&&e.appStateInBuilder.appConfig&&e.appStateInBuilder.appConfig.dataSources,dataSourcesInfo:e.appStateInBuilder&&e.appStateInBuilder.dataSourcesInfo})))(te);class ie extends o.React.PureComponent{constructor(e){super(e),this.onAppModeChange=()=>{this.props&&(this.getAppDocument(),this.props.appMode===o.AppMode.Run?(this.appFrameDoc&&this.appFrameDoc.body.classList.add("design-mode"),n.builderAppSync.publishAppModeChangeToApp(o.AppMode.Design)):(this.appFrameDoc&&this.appFrameDoc.body.classList.remove("design-mode"),n.builderAppSync.publishAppModeChangeToApp(o.AppMode.Run)))},this.onLockLayoutChange=()=>{const e=(0,n.getAppConfigAction)();this.getAppDocument(),this.appFrameDoc&&(this.props.lockLayout?this.appFrameDoc.body.classList.remove("lock-layout"):this.appFrameDoc.body.classList.add("lock-layout")),e.setLockLayout(!this.props.lockLayout).exec()},this.nls=e=>this.props.intl.formatMessage({id:e,defaultMessage:r[e]}),this.appMode=this.props.intl.formatMessage({id:"appMode",defaultMessage:r.appMode}),this.lockLayout=this.props.intl.formatMessage({id:"headerLockLayout",defaultMessage:r.headerLockLayout})}getStyle(e){return o.css`
      .lock-layout-label {
        font-weight: 500;
        color: ${e.colors.palette.dark[600]};
        margin-right: ${o.polished.rem(10)};
      }

      .live-view-container {
        cursor: pointer;
        background-color: ${e.colors.primary};
        border-radius: 2px !important;
        color: ${e.colors.black};
        padding-right: ${o.polished.rem(8)};
        padding-left: ${o.polished.rem(8)};
        height: ${o.polished.rem(26)};
        border:1px solid ${e.colors.primary};
      }

      .edit-view-container {
        cursor: pointer;
        border:1px solid ${e.colors.palette.light[800]};
        border-radius: 2px !important;
        color: ${e.colors.palette.dark[600]};
        padding-right: ${o.polished.rem(8)};
        padding-left: ${o.polished.rem(8)};
        height: ${o.polished.rem(26)};

        &:hover {
          color: ${e.colors.black};

          .edit-view-icon {
            border: 1px solid ${e.colors.black};
          }
        }
      }

      .live-view-icon {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: ${e.colors.black};
      }

      .edit-view-icon {
        width: 7px;
        height: 7px;
        border: 1px solid ${e.colors.palette.dark[800]};
        border-radius: 50%;
      }
    `}getAppDocument(){const e=document.querySelector(`iframe[name="${o.APP_FRAME_NAME_IN_BUILDER}"]`);this.appFrameDoc=e.contentDocument||e.contentWindow.document}render(){const{appMode:e,lockLayout:t}=this.props,s=e===o.AppMode.Run,i=this.props.intl.formatMessage({id:"headerLockLayout",defaultMessage:r.headerLockLayout});return(0,o.jsx)("div",{className:"d-flex align-items-center",css:this.getStyle(this.props.theme),title:t?this.props.intl.formatMessage({id:"disableLayoutEditing",defaultMessage:r.disableLayoutEditing}):this.props.intl.formatMessage({id:"enableLayoutEditing",defaultMessage:r.enableLayoutEditing})},!s&&(0,o.jsx)("div",{className:"d-flex align-items-center",onClick:this.onLockLayoutChange,style:{cursor:"pointer"}},(0,o.jsx)("div",{className:"lock-layout-label"},i),(0,o.jsx)(a.Switch,{checked:t,"aria-label":i})),(0,o.jsx)("div",{className:"liveview-gap"}),(0,o.jsx)(a.Button,{type:"tertiary",size:"sm",style:{whiteSpace:"nowrap"},className:(0,o.classNames)("d-flex align-items-center",{"live-view-container":s,"edit-view-container":!s}),"aria-pressed":s,title:s?this.nls("turnOffLiveView"):this.nls("turnOnLiveView"),onClick:this.onAppModeChange},(0,o.jsx)("div",{className:(0,o.classNames)("mr-2",{"live-view-icon":s,"edit-view-icon":!s})}),(0,o.jsx)("div",{className:"d-flex align-items-center border-left-0 app-toolbar-mode"},(0,o.jsx)("span",null,this.appMode))))}}const oe=(0,u.withTheme)(ie),ae=o.ReactRedux.connect((e=>{var t,s,i,o,a;return{appMode:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.appMode,lockLayout:null!==(a=null===(o=null===(i=null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===i?void 0:i.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==a&&a}}))(oe);var ne=d(4065),le=d.n(ne);const re=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:le()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var pe=d(888),de=d.n(pe);const ce=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:de()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var he=d(4928),ue=d.n(he);const me=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:ue()},i)):o.React.createElement("svg",Object.assign({className:a},i))};class ge extends o.React.PureComponent{constructor(e){super(e),this.editPageForLargeScreen=this.props.intl.formatMessage({id:"editPageForLargeScreen",defaultMessage:r.editPageForLargeScreen}),this.editPageForMediumScreen=this.props.intl.formatMessage({id:"editPageForMediumScreen",defaultMessage:r.editPageForMediumScreen}),this.editPageForSmallScreen=this.props.intl.formatMessage({id:"editPageForSmallScreen",defaultMessage:r.editPageForSmallScreen})}getStyle(e){var t,s,i;return o.css`
      .device-switch-group {
        margin-right: ${o.polished.rem(10)};
      }

      .device-switch {
        width: ${o.polished.rem(26)};
        height: ${o.polished.rem(26)};
        border-radius: 2px !important;
        border: 0;
        margin-left: 1px;
        margin-right: 1px;

        &:focus {
          box-shadow: none !important;
        }
      }

      .device-switch-gap {
        margin-right: ${o.polished.rem(5)};
      }

      .device-switch-gap button {
        border: none;
      }
      .device-switch-container button {
        color: ${null===(s=null===(t=null==e?void 0:e.colors)||void 0===t?void 0:t.palette)||void 0===s?void 0:s.dark[400]};
      }
      .device-switch-container button:hover {
        color: ${null===(i=null==e?void 0:e.colors)||void 0===i?void 0:i.black};
      }

      .device-active {
        background-color: ${e.colors.primary} !important;
        color: ${e.colors.black} !important;
      }

      .no-animation {
        transition: none;
        -webkit-transition: none;
      }
    `}onBrowserSizeModeChange(e){n.builderAppSync.publishChangeBrowserSizeModeToApp(e),e!==this.props.browserSizeMode&&n.builderAppSync.publishChangeSelectionToApp(null),this.setState({isDeviceChooseShow:!1})}render(){return(0,o.jsx)("div",{css:this.getStyle(this.props.theme)},(0,o.jsx)(a.AdvancedButtonGroup,{className:"h-100 d-flex align-items-center device-switch-group"},(0,o.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container no-animation device-switch-gap"},(0,o.jsx)(a.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(o.BrowserSizeMode.Large)},active:!this.props.browserSizeMode||this.props.browserSizeMode===o.BrowserSizeMode.Large,className:(0,o.classNames)("device-switch d-flex align-items-center p-0",{"device-active":!this.props.browserSizeMode||this.props.browserSizeMode===o.BrowserSizeMode.Large,"device-disactive":this.props.browserSizeMode&&this.props.browserSizeMode!==o.BrowserSizeMode.Large}),title:this.editPageForLargeScreen},(0,o.jsx)(re,null))),(0,o.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container device-switch-gap"},(0,o.jsx)(a.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(o.BrowserSizeMode.Medium)},active:this.props.browserSizeMode===o.BrowserSizeMode.Medium,className:(0,o.classNames)("device-switch d-flex align-items-center p-0 no-animation",{"device-active":this.props.browserSizeMode===o.BrowserSizeMode.Medium,"device-disactive":!(this.props.browserSizeMode===o.BrowserSizeMode.Medium)}),title:this.editPageForMediumScreen},(0,o.jsx)(me,null))),(0,o.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container"},(0,o.jsx)(a.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(o.BrowserSizeMode.Small)},"aria-pressed":this.props.browserSizeMode===o.BrowserSizeMode.Small,className:(0,o.classNames)("device-switch d-flex align-items-center p-0 no-animation",{"device-active":this.props.browserSizeMode===o.BrowserSizeMode.Small,"device-disactive":!(this.props.browserSizeMode===o.BrowserSizeMode.Small)}),title:this.editPageForSmallScreen},(0,o.jsx)(ce,null)))))}}const ve=(0,u.withTheme)(ge),be=o.ReactRedux.connect((e=>({browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode})))(ve);var fe=d(119),we=d.n(fe);const Se=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:we()},i)):o.React.createElement("svg",Object.assign({className:a},i))};class ye extends o.React.PureComponent{constructor(e){super(e),this.onToggleResolutionChoose=()=>{this.setState({isResolutionChooseShow:!this.state.isResolutionChooseShow})},this.setViewportSize=e=>{(0,n.getAppConfigAction)().setViewportSize(this.props.browserSizeMode,e).exec(),this.setState({isResolutionChooseShow:!1})},this.state={isResolutionChooseShow:!1}}getStyle(e){return o.css`
      .switch-resolution-toggle {
        width: auto;
        font-weight: 500;
        color: ${this.props.theme.colors.palette.dark[600]};
        padding-top: 0;
        padding-bottom: 0;
        height: 26px;
        .switch-label {
          width: auto;
          display: inline-block;
        }
      }
      .dropdown-toggle-content svg {
        margin-right: 0;
        margin-top: ${o.polished.rem(-8)};
        vertical-align: center;
      }
      .no-user-select {
        -o-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select :none;
        user-select: none;
      }
    `}getDropdownStyle(e){return o.css`
      & {
        background: ${e.colors.palette.light[500]};
        border: 1px solid ${e.colors.palette.light[300]};;
        box-shadow: 0 0 10px 2px ${o.polished.rgba(e.colors.white,.2)};
        border-radius: 2px;
        border-radius: 2px;
        padding-top: ${o.polished.rem(8)};
        padding-bottom: ${o.polished.rem(8)};
      }
    `}render(){const{browserSizeMode:e,viewportSize:t,pageMode:s,appMode:i}=this.props,n=s===o.PageMode.FitWindow?"":this.props.nls("auto"),l=t?`${t.width} × ${s!==o.PageMode.FitWindow&&i===o.AppMode.Design?n:t.height}`:"";let r=o.CONSTANTS.SCREEN_RESOLUTIONS[e]||[];if(s!==o.PageMode.FitWindow){const e={},t=[];r.forEach((s=>{null==e[s.width]&&(t.push(s),e[s.width]=s)})),r=t}return(0,o.jsx)("div",{css:this.getStyle(this.props.theme)},(0,o.jsx)("div",{className:"sr-only",id:"app-resolution-select"},this.props.nls("changeScreenSize")),(0,o.jsx)(a.Dropdown,{size:"sm",toggle:this.onToggleResolutionChoose,isOpen:this.state.isResolutionChooseShow,className:"resolution-choose"},(0,o.jsx)(a.DropdownButton,{css:o.css`line-height: 1.5rem;`,"aria-label":`Resolution: ${l}`,"aria-describedby":"app-resolution-select",size:"sm",type:"tertiary",arrow:!1,className:"switch-resolution-toggle lin",title:this.props.nls("changeScreenSize")},(0,o.jsx)("span",{className:"switch-label"},l),(0,o.jsx)(Se,{size:"s"})),(0,o.jsx)(a.DropdownMenu,{css:this.getDropdownStyle(this.props.theme)},r.map(((e,t)=>(0,o.jsx)(a.DropdownItem,{key:t,className:"no-user-select",onClick:()=>{this.setViewportSize(e)}},`${e.width} × ${s!==o.PageMode.FitWindow&&i===o.AppMode.Design?n:e.height}`))))))}}const xe=(0,u.withTheme)(ye),je=o.ReactRedux.connect((e=>{var t,s,i,a,n,l;const r=e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode;let p;e.appStateInBuilder&&(p=o.utils.findViewportSize(e.appStateInBuilder.appConfig,r));const d=e.appStateInBuilder&&e.appStateInBuilder.appRuntimeInfo.currentPageId;let c;return d&&(c=null===(a=null===(i=null===(s=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.pages)||void 0===i?void 0:i[d])||void 0===a?void 0:a.mode),{viewportSize:p,pageMode:c,appMode:null===(l=null===(n=e.appStateInBuilder)||void 0===n?void 0:n.appRuntimeInfo)||void 0===l?void 0:l.appMode,browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode}}))(xe);var Te=d(4767),Oe=d.n(Te);const Ae=e=>{const t=window.SVG,{className:s}=e,i=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",s);return t?o.React.createElement(t,Object.assign({className:a,src:Oe()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var Pe;!function(e){e.OrgAdmin="org_admin",e.OrgPublisher="org_publisher",e.OrgUser="org_user",e.CustomRoles="custom_roles"}(Pe||(Pe={}));class Me extends o.React.PureComponent{constructor(s){super(s),this.titleTextInput=o.React.createRef(),this.spanTextInput=o.React.createRef(),this.originTitleMaxWidth=300,this.currentToolContainerWidth=0,this.currentPublishStateContainerWidth=0,this.focusTitleInput=!1,this.getHelpUrl=()=>{var e;null===(e=null===n.helpUtils||void 0===n.helpUtils?void 0:n.helpUtils.getHomeHelpLink())||void 0===e||e.then((e=>{e&&this.setState({helpUrl:e})}))},this.editTitle=e=>{if(this.checkAndShowReadOnlyRemind())return;let t=e;this.focusTitleInput=!1;const{appItem:s}=this.state;if(t=t.replace(/(^\s*)|(\s*$)/g,""),0===t.length||/^[ ]*$/.test(t)||t===s.title)return t=s.title,this.setState({titleText:t}),!1;l.appServices.updateAppInfo({id:this.props.queryObject.id,title:t,owner:s.owner}).then((()=>{this.props.dispatch(n.builderActions.refreshAppListAction(!0)),n.builderAppSync.publishAppInfoChangeToApp(Object.assign(Object.assign({},s),{title:t})),s.title=t,this.setState({appItem:s,titleText:t})}),(e=>{console.error(e),this.handleTokenInvalid(e)}))},this.checkAndShowReadOnlyRemind=()=>{const e=(0,o.getAppStore)().getState().portalSelf;return(null==e?void 0:e.isReadOnly)&&this.toastNote(this.nls("remindTextForReadonlyMode")),null==e?void 0:e.isReadOnly},this.handleTokenInvalid=e=>{498===Number(null==e?void 0:e.code)&&o.SessionManager.getInstance().gotoAuthErrorPage()},this.refreshTitleByAppId=e=>{o.portalUtils.getAppInfo(e).then((e=>{this.refreshTitle(e,!0)}),(e=>{console.error(e)}))},this.refreshTitle=(t,s=!1)=>{if(!t)return;const{titleText:i}=this.state,o=this.state.itemType,a=(null==t?void 0:t.type)===e.Template?e.Template:e.Experience,n=a===e.Template&&o!==a;this.getPublishStatusAndKewWorkd(t),i&&!s&&(t.title=i),this.setState({titleText:t.title,itemType:a,itemId:t.id,appItem:this.initAppInfo(t),isShowTemplateRemind:n})},this.resetTitle=e=>{this.setState({titleText:e})},this.initAppInfo=e=>(null==e?void 0:e.id)?(e.isLocalApp=window.jimuConfig.isDevEdition,e.portalUrl=this.props.portalUrl,e):null,this.getPublishStatusAndKewWorkd=e=>{const s=(null==e?void 0:e.typeKeywords)||[];let{publishStatus:i}=this.state;s.forEach((e=>{if(e.includes("status:"))switch(e.split(": ")[1]){case t.Published:i=t.Published;break;case t.Changed:i=t.Changed;break;case t.Draft:i=t.Draft}})),this.setState({publishStatus:i})},this.getPublishString=()=>{const{publishStatus:e}=this.state;switch(e){case t.Draft:return this.nls("itemStatusDraft");case t.Published:return this.nls("published");case t.Changed:return this.nls("unpublishedChanges")}},this.changePublishStatus=e=>{this.setState({publishStatus:e})},this.titleTextChange=e=>{let t=e.target.value;t.length>250&&(t=t.slice(0,250)),this.setState({titleText:t})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:r[e]}):e,this.handleKeydown=e=>{"Enter"===e.key&&this.titleTextInput.current.blur()},this.onToolContainerResize=e=>{this.currentToolContainerWidth=e,this.checkAndResizeTileMaxWidth()},this.onHeaderContainerResize=()=>{this.checkAndResizeTileMaxWidth()},this.onPublishStateContainerResized=e=>{this.currentPublishStateContainerWidth=e,this.checkAndResizeTileMaxWidth()},this.checkAndResizeTileMaxWidth=()=>{if(!this.currentToolContainerWidth||!this.currentPublishStateContainerWidth)return;const e=window.innerWidth-this.currentToolContainerWidth-52-this.currentPublishStateContainerWidth;e>=this.originTitleMaxWidth?this.setState({titleMaxWidth:this.originTitleMaxWidth}):e<=40?this.setState({titleMaxWidth:40}):this.setState({titleMaxWidth:e})},this.getItemPublishStatusTitle=()=>{const{publishStatus:e}=this.state;let s="";switch(e){case t.Draft:s=this.nls("draftStatusTitle");break;case t.Published:s=this.nls("publishedTitle");break;case t.Changed:s=this.nls("publishedUnsaveTitle")}return s},this.getTemplatePopperStyle=()=>{const{theme:e}=this.props;return o.css`
      &{
        background: ${e.colors.palette.light[600]};
        color: ${e.colors.black};
        border: 1px solid ${e.colors.palette.light[300]};
        box-sizing: border-box;
        padding: ${o.polished.rem(10)} ${o.polished.rem(12)};
        border-radius: 2px;
        box-shadow: 0 0 10px 2px ${o.polished.rgba(e.colors.white,.2)};
      }
      .template-remind-porper {
        div{
          white-space: nowrap;
          text-align: center;
          font-size: ${o.polished.rem(13)};
          line-height: ${o.polished.rem(13)};
          margin-bottom: ${o.polished.rem(14)};
        }
      }
      &[data-popper-placement^="right"] .jimu-popper--arrow::before{
        border-right-color: ${e.colors.palette.light[300]};
      }
      &[data-popper-placement^="right"] .jimu-popper--arrow::after {
        border-right-color: ${e.colors.palette.light[600]};
      }
    `},this.closeTemplateRemind=()=>{this.setState({isShowTemplateRemind:!1})},this.onSaveStatusChanged=e=>{this.setState({isAppSaved:e})},this.checkIsOwner=()=>{const{appInfo:e}=this.props,{user:t}=this.props;return(null==t?void 0:t.username)===(null==e?void 0:e.owner)},this.checkSaveAsPrivileges=()=>{const{appInfo:e}=this.props,{user:t}=this.props,s=null==e?void 0:e.isOrgItem,i=this.checkIsOwner()||(null==t?void 0:t.role)===Pe.OrgAdmin&&(s||window.jimuConfig.isDevEdition);this.setState({saveAsPrivileges:i})},this.handleFocusTitleInput=e=>{this.focusTitleInput=!0},this.toastNote=e=>{this.setState({showToast:!0,toastText:e},(()=>{setTimeout((()=>{this.setState({showToast:!1,toastText:""})}),2e3)}))},this.getTostStyle=()=>{var e,t,s,i,a,n,l,r,p,d,c;return o.css`
      & {
        height:  ${o.polished.rem(40)};
        top: ${o.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(i=null===(s=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===s?void 0:s.palette)||void 0===i?void 0:i.secondary[300]};
        line-height: ${o.polished.rem(40)};
        color: ${null===(r=null===(l=null===(n=null===(a=this.props)||void 0===a?void 0:a.theme)||void 0===n?void 0:n.colors)||void 0===l?void 0:l.palette)||void 0===r?void 0:r.dark[800]};
        font-weight: 300;
        padding: 0 ${o.polished.rem(16)};
        box-shadow: 0 0 ${o.polished.rem(10)} ${o.polished.rem(2)} ${o.polished.rgba(null===(c=null===(d=null===(p=this.props)||void 0===p?void 0:p.theme)||void 0===d?void 0:d.colors)||void 0===c?void 0:c.white,.2)};
      }
    `},this.state={titleText:"",accountPopoverOpen:!1,itemType:e.Experience,itemId:"",titleMaxWidth:this.originTitleMaxWidth,publishStatus:t.Draft,isShowTemplateRemind:!1,isAppSaved:!0,showTitle:!0,helpUrl:"#",saveAsPrivileges:!1,showToast:!1,toastText:null}}getStyle(){const e=this.props.theme,{colors:t}=e;return o.css`
      .widget-builder-header {
        background-color: ${t.palette.light[500]};
        border: 1px solid ${t.palette.light[800]};
        padding-left: ${o.polished.rem(12)};
        overflow: auto;

        .header-logo {
          a {
            margin-right:${o.polished.rem(6)};
          }
          .header-logo-item {
            height: ${o.polished.rem(32)};
            width: ${o.polished.rem(32)};
            background: url('./assets/exb-logo.png') no-repeat center;
            background-size: 100%;
            &:hover {
              background: url(${d(1262)}) no-repeat center;
              background-size: 100%;
            }
          }
        }

        .app-type {
          background: ${t.palette.secondary[400]};
          color: ${t.palette.info[700]};
          border-radius: 2px;
          font-size: ${o.polished.rem(10)};
          white-space: nowrap;
          width: ${o.polished.rem(24)};
          padding: ${o.polished.rem(2)} 0;
          text-align: center;
        }
        .publish-state {
          margin-left: ${o.polished.rem(9)};
          max-width: ${o.polished.rem(152)};
          height: ${o.polished.rem(18)};
        }
        .publish-state div {
          background: ${t.palette.success[800]};
          border-radius: 2px;
          font-size: ${o.polished.rem(10)};
          line-height: ${o.polished.rem(18)};
          position: relative;
          white-space: nowrap;
          padding: 0 ${o.polished.rem(6)};
          text-align: center;
          color: ${t.palette.success[100]};
          max-width: ${o.polished.rem(150)};
          font-weight: bold;
        }
        .publish-state .Draft{
          color: ${t.palette.warning[100]};
          background: ${t.palette.warning[800]};
        }
        .publish-state .Changed{
          color: ${t.palette.danger[100]};
          background: ${t.palette.danger[800]};
        }
        .header-title-maxwidth-screen {
        }

        .app-title-content {
          width: 100%;
          height: ${o.polished.rem(28)};
          min-width: ${o.polished.rem(40)};
          position: relative;
          .title-placeholder {
            width: auto;
            padding: 0 0.5rem;
            font-size: ${o.polished.rem(16)};
            visibility: hidden;
            pointer-events: none;
          }
        }
        .header-title-input {
          position: absolute;
          width: 100%;
          height: 100%;
          .input-wrapper {
            background-color: transparent;
            input {
              font-size: ${o.polished.rem(16)};
              color: var(--dark-800);
            }
          }
          min-width: ${o.polished.rem(40)};
        }
        .header-title-input {
          left: 0;
          top: 0;
          width: 100%;
        }
        .title-text-placeholder {
          display: block;
          opacity: 0;
          padding-left:${o.polished.rem(5)};
          padding-right:${o.polished.rem(7)};
          word-spacing: ${o.polished.rem(6)};
        }

        .header-account {
          float: left;
          color: ${e.colors.black};

          div {
            background-color: initial;
          }

          &:hover {
            // background-color: ${e.colors.white};
          }
        }

        .header-login {
          cursor: pointer;
          fill: ${e.colors.black};
        }

        .header-login-username {
          color: ${e.colors.black};
          margin-left: 5px;
          font-size: 14px;
        }

        .toollist-seperateline {
          margin-left: ${o.polished.rem(16)};
          height: 30px;
          border: 1px solid ${e.colors.palette.light[800]};
        }

        .liveview-gap {
          margin-right: ${o.polished.rem(20)};
        }

        .dropdown-toggle-content {
          margin-top: ${o.polished.rem(4)};
        }

        .user-container {
          margin: 10.5px 16px;
        }
      }

      .account-dropdown-toggle:focus {
        box-shadow: none !important;
      }`}componentDidMount(){this.props.queryObject.id&&this.refreshTitleByAppId(this.props.queryObject.id),this.getHelpUrl(),this.checkSaveAsPrivileges()}getSnapshotBeforeUpdate(e,t){return!(!this.props.queryObject.id||e.queryObject.id===this.props.queryObject.id)}componentDidUpdate(e,t,s){const{currentPageId:i,appInfo:o,queryObject:a}=this.props;if(s&&this.setState({titleText:""}),a.id!==e.queryObject.id&&e.queryObject.id?this.refreshTitleByAppId(this.props.queryObject.id):o===(null==e?void 0:e.appInfo)||this.focusTitleInput||this.refreshTitle(null==o?void 0:o.asMutable({deep:!0})),e.currentPageId!==i){let e=!0;"template"===i&&(e=!1),this.setState({showTitle:e})}this.checkSaveAsPrivileges(),this.getHelpUrl()}getQuery(e){return o.queryString.parse(window.location.search)[e]||""}render(){let t=window.jimuConfig.mountPath;this.getQuery("locale")&&(t=o.urlUtils.appendQueryParam(t,"locale",this.getQuery("locale"))),this.getQuery("__env__")&&(t=o.urlUtils.appendQueryParam(t,"__env__",this.getQuery("__env__")));const{itemType:s,publishStatus:i,titleText:n,titleMaxWidth:l,isShowTemplateRemind:r,showTitle:p,saveAsPrivileges:d}=this.state;return(0,o.jsx)("div",{css:this.getStyle(),className:"h-100"},(0,o.jsx)("div",{className:"widget-builder-header d-flex justify-content-between h-100 pr-0 border-left-0 border-right-0 border-top-0",style:{overflowX:"hidden"}},(0,o.jsx)("div",{className:"d-flex"},(0,o.jsx)("div",{className:"header-logo d-flex align-items-center"},(0,o.jsx)("a",{href:`${t}`,title:this.nls("headerHome")},(0,o.jsx)("div",{className:"header-logo-item d-block"})),p&&(0,o.jsx)("div",{className:"header-title d-flex align-items-center header-title-maxwidth-screen",style:{maxWidth:l}},(0,o.jsx)("div",{className:"app-title-content flex-grow-1"},(0,o.jsx)("span",{className:"title-placeholder text-truncate"},n),(0,o.jsx)(a.TextInput,{ref:this.titleTextInput,className:"header-title-input font-weight-normal",value:n,onAcceptValue:this.editTitle,onChange:this.titleTextChange,onKeyDown:this.handleKeydown,onFocus:this.handleFocusTitleInput,borderless:!0})))),(0,o.jsx)("div",{className:"d-flex align-items-center"},(0,o.jsx)("div",{ref:e=>{this.reference=e}},s===e.Template&&(0,o.jsx)("div",{title:this.nls("appTypeTemplate"),className:"app-type  position-relative"},(0,o.jsx)(Ae,{className:"toollist-item-icon",size:"l"}),(0,o.jsx)(a.Popper,{reference:this.reference,open:r,showArrow:!0,toggle:this.closeTemplateRemind,placement:"right-end",offset:[-8,0],css:this.getTemplatePopperStyle()},(0,o.jsx)("div",{className:"template-remind-porper"},(0,o.jsx)("div",null,this.nls("templateRemind")),(0,o.jsx)(a.Button,{type:"primary",className:"float-right",size:"sm",onClick:this.closeTemplateRemind},this.nls("gotIt")),(0,o.jsx)("span",{className:"position-absolute"}))))),(0,o.jsx)(a.Tooltip,{title:this.getItemPublishStatusTitle(),describeChild:!0,showArrow:!0},(0,o.jsx)(a.Button,{type:"tertiary",size:"sm",className:"publish-state position-relative p-0"},(0,o.jsx)("div",{className:(0,o.classNames)("text-truncate",i)},this.getPublishString()))),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onPublishStateContainerResized}))),(0,o.jsx)("div",{className:"d-flex align-items-center justify-content-end"},(0,o.jsx)(ae,{intl:this.props.intl}),(0,o.jsx)("div",{className:"liveview-gap"}),(0,o.jsx)(be,{intl:this.props.intl}),(0,o.jsx)(je,{nls:this.nls}),(0,o.jsx)("div",{className:"toollist-seperateline border-bottom-0 border-top-0 border-left-0 mt-1 mb-1 ml-1 mr-1"}),(0,o.jsx)(se,{handleTokenInvalid:this.handleTokenInvalid,theme:this.props.theme,itemId:this.state.itemId,itemType:this.state.itemType,intl:this.props.intl,appItem:this.state.appItem,publishStatus:this.state.publishStatus,changePublishStatus:this.changePublishStatus,titleText:n,locale:this.getQuery("locale")||"",onSaveStatusChanged:this.onSaveStatusChanged,folderUrl:this.props.context.folderUrl,resetTitle:this.resetTitle,saveAsPrivileges:d,toastNote:this.toastNote,checkAndShowReadOnlyRemind:this.checkAndShowReadOnlyRemind}),(0,o.jsx)("div",{className:"float-right d-flex user-container"},this.props.user&&(0,o.jsx)(a.UserProfile,{user:this.props.user,portalUrl:this.props.portalUrl,isAppSaved:this.state.isAppSaved,helpUrl:this.state.helpUrl})),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onToolContainerResize}))),(0,o.jsx)(a.Toast,{css:this.getTostStyle(),open:this.state.showToast,type:a.ToastType.Info,text:this.state.toastText}),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onHeaderContainerResize}))}}Me.mapExtraStateProps=e=>{var t;return{currentPageId:e.appRuntimeInfo&&e.appRuntimeInfo.currentPageId,queryObject:e.queryObject,appInfo:null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appInfo}};const ke=Me;function Ne(e){d.p=e}})(),c})())}}}));