var e=(e,t,n)=>new Promise((i,r)=>{var a=e=>{try{o(n.next(e))}catch(t){r(t)}},s=e=>{try{o(n.throw(e))}catch(t){r(t)}},o=e=>e.done?i(e.value):Promise.resolve(e.value).then(a,s);o((n=n.apply(e,t)).next())});import{o as t}from"./vendor-i4fd_86K.js";var n={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],a=r+1<e.length,s=a?e[r+1]:0,o=r+2<e.length,c=o?e[r+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;o||(h=64,a||(d=64)),i.push(n[l],n[u],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const a=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&a)}else if(r>239&&r<365){const a=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(a>>10)),t[i++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&a)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length?n[e.charAt(r)]:0;++r;const o=r<e.length?n[e.charAt(r)]:64;++r;const c=r<e.length?n[e.charAt(r)]:64;if(++r,null==t||null==s||null==o||null==c)throw new a;const l=t<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==c){const e=o<<6&192|c;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(e){return function(e){const t=i(e);return r.encodeByteArray(t,!0)}(e).replace(/\./g,"")},o=()=>{try{
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process)return;const e=n.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&function(e){try{return r.decodeString(e,!0)}catch(n){}return null}(e[1]);return t&&JSON.parse(t)})()}catch(e){return}},c=()=>{var e;return null===(e=o())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function u(){try{return"object"==typeof indexedDB}catch(e){return!1}}function d(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}class h extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?function(e,t){return e.replace(p,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}(r,n):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new h(i,s,n)}}const p=/\{\$([^}]+)}/g;function g(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],a=t[r];if(m(n)&&m(a)){if(!g(n,a))return!1}else if(n!==a)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function m(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){return e&&e._delegate?e._delegate:e}class v{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new l;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:w})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=w){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return e(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])})}isComponentSet(){return null!=this.component}isInitialized(e=w){return this.instances.has(e)}getOptions(e=w){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,a]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(r)&&a.resolve(i);return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===w?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}var i;return n||null}normalizeInstanceIdentifier(e=w){return this.component?this.component.multipleInstances?e:w:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class S{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new I(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _,E;(E=_||(_={}))[E.DEBUG=0]="DEBUG",E[E.VERBOSE=1]="VERBOSE",E[E.INFO=2]="INFO",E[E.WARN=3]="WARN",E[E.ERROR=4]="ERROR",E[E.SILENT=5]="SILENT";const C={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},D=_.INFO,T={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},A=(e,t,...n)=>{if(!(t<e.logLevel||((new Date).toISOString(),T[t])))throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class O{constructor(e){this.name=e,this._logLevel=D,this._logHandler=A,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?C[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...e),this._logHandler(this,_.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...e),this._logHandler(this,_.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_.INFO,...e),this._logHandler(this,_.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_.WARN,...e),this._logHandler(this,_.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...e),this._logHandler(this,_.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const M="@firebase/app",$="0.13.2",P=new O("@firebase/app"),N="@firebase/app-compat",j="@firebase/analytics-compat",L="@firebase/analytics",B="@firebase/app-check-compat",F="@firebase/app-check",R="@firebase/auth",H="@firebase/auth-compat",x="@firebase/database",z="@firebase/data-connect",V="@firebase/database-compat",U="@firebase/functions",q="@firebase/functions-compat",W="@firebase/installations",G="@firebase/installations-compat",K="@firebase/messaging",J="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",Z="@firebase/remote-config",Q="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",ie="@firebase/ai",re="@firebase/firestore-compat",ae="firebase",se="[DEFAULT]",oe={[M]:"fire-core",[N]:"fire-core-compat",[L]:"fire-analytics",[j]:"fire-analytics-compat",[F]:"fire-app-check",[B]:"fire-app-check-compat",[R]:"fire-auth",[H]:"fire-auth-compat",[x]:"fire-rtdb",[z]:"fire-data-connect",[V]:"fire-rtdb-compat",[U]:"fire-fn",[q]:"fire-fn-compat",[W]:"fire-iid",[G]:"fire-iid-compat",[K]:"fire-fcm",[J]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[Z]:"fire-rc",[Q]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[re]:"fire-fst-compat",[ie]:"fire-vertex","fire-js":"fire-js",[ae]:"fire-js-all"},ce=new Map,le=new Map,ue=new Map;function de(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function he(e){const t=e.name;if(ue.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;ue.set(t,e);for(const n of ce.values())de(n,e);for(const n of le.values())de(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new f("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new v("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}function me(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const i=Object.assign({name:se,automaticDataCollectionEnabled:!0},t),r=i.name;if("string"!=typeof r||!r)throw pe.create("bad-app-name",{appName:String(r)});if(n||(n=c()),!n)throw pe.create("no-options");const a=ce.get(r);if(a){if(g(n,a.options)&&g(i,a.config))return a;throw pe.create("duplicate-app",{appName:r})}const s=new S(r);for(const c of ue.values())s.addComponent(c);const o=new ge(n,i,s);return ce.set(r,o),o}function be(e,t,n){var i;let r=null!==(i=oe[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const a=r.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${r}" with version "${t}":`];return a&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}he(new v(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="firebase-heartbeat-store";let ve=null;function we(){return ve||(ve=t("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(ye)}catch(n){}}}).catch(e=>{throw pe.create("idb-open",{originalErrorMessage:e.message})})),ve}function Ie(t,n){return e(this,null,function*(){try{const e=(yield we()).transaction(ye,"readwrite"),i=e.objectStore(ye);yield i.put(n,Se(t)),yield e.done}catch(e){if(e instanceof h)P.warn(e.message);else{const t=pe.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});P.warn(t.message)}}})}function Se(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ce(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}triggerHeartbeat(){return e(this,null,function*(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ee();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){P.warn(n)}})}getHeartbeatsHeader(){return e(this,null,function*(){var e;try{if(null===this._heartbeatsCache&&(yield this._heartbeatsCachePromise),null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ee(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),De(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=s(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return P.warn(t),""}})}}function Ee(){return(new Date).toISOString().substring(0,10)}class Ce{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return e(this,null,function*(){return!!u()&&d().then(()=>!0).catch(()=>!1)})}read(){return e(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield function(t){return e(this,null,function*(){try{const e=(yield we()).transaction(ye),n=yield e.objectStore(ye).get(Se(t));return yield e.done,n}catch(e){if(e instanceof h)P.warn(e.message);else{const t=pe.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});P.warn(t.message)}}})}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}})}overwrite(t){return e(this,null,function*(){var e;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}})}add(t){return e(this,null,function*(){var e;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}})}}function De(e){return s(JSON.stringify({version:2,heartbeats:e})).length}he(new v("platform-logger",e=>new k(e),"PRIVATE")),he(new v("heartbeat",e=>new _e(e),"PRIVATE")),be(M,$,""),be(M,$,"esm2017"),be("fire-js",""),
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
be("firebase","11.10.0","app");const Te="@firebase/installations",Ae="0.6.18",Oe=`w:${Ae}`,ke="FIS_v2",Me=new f("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function $e(e){return e instanceof h&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Ne(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function je(t,n){return e(this,null,function*(){const e=(yield n.json()).error;return Me.create("request-failed",{requestName:t,serverCode:e.code,serverMessage:e.message,serverStatus:e.status})})}function Le({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Be(t){return e(this,null,function*(){const e=yield t();return e.status>=500&&e.status<600?t():e})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fe(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Re=/^[cdef][\w-]{21}$/;function He(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){var t;return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return Re.test(t)?t:""}catch(e){return""}}function xe(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new Map;function Ve(e,t){const n=xe(e);Ue(n,t),function(e,t){const n=(!qe&&"BroadcastChannel"in self&&(qe=new BroadcastChannel("[Firebase] FID Change"),qe.onmessage=e=>{Ue(e.data.key,e.data.fid)}),qe);n&&n.postMessage({key:e,fid:t}),0===ze.size&&qe&&(qe.close(),qe=null)}(n,t)}function Ue(e,t){const n=ze.get(e);if(n)for(const i of n)i(t)}let qe=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const We="firebase-installations-store";let Ge=null;function Ke(){return Ge||(Ge=t("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(We)}})),Ge}function Je(t,n){return e(this,null,function*(){const e=xe(t),i=(yield Ke()).transaction(We,"readwrite"),r=i.objectStore(We),a=yield r.get(e);return yield r.put(n,e),yield i.done,a&&a.fid===n.fid||Ve(t,n.fid),n})}function Xe(t){return e(this,null,function*(){const e=xe(t),n=(yield Ke()).transaction(We,"readwrite");yield n.objectStore(We).delete(e),yield n.done})}function Ye(t,n){return e(this,null,function*(){const e=xe(t),i=(yield Ke()).transaction(We,"readwrite"),r=i.objectStore(We),a=yield r.get(e),s=n(a);return void 0===s?yield r.delete(e):yield r.put(s,e),yield i.done,!s||a&&a.fid===s.fid||Ve(t,s.fid),s})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return e(this,null,function*(){let n;const i=yield Ye(t.appConfig,i=>{const r=function(e){return tt(e||{fid:He(),registrationStatus:0})}(i),a=function(t,n){if(0===n.registrationStatus){if(!navigator.onLine)return{installationEntry:n,registrationPromise:Promise.reject(Me.create("app-offline"))};const i={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},r=function(t,n){return e(this,null,function*(){try{const i=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yield function(t,n){return e(this,arguments,function*({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=Pe(e),r=Le(e),a=t.getImmediate({optional:!0});if(a){const e=yield a.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={fid:n,authVersion:ke,appId:e.appId,sdkVersion:Oe},o={method:"POST",headers:r,body:JSON.stringify(s)},c=yield Be(()=>fetch(i,o));if(c.ok){const e=yield c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ne(e.authToken)}}throw yield je("Create Installation",c)})}(t,n);return Je(t.appConfig,i)}catch(i){throw $e(i)&&409===i.customData.serverCode?yield Xe(t.appConfig):yield Je(t.appConfig,{fid:n.fid,registrationStatus:0}),i}})}(t,i);return{installationEntry:i,registrationPromise:r}}return 1===n.registrationStatus?{installationEntry:n,registrationPromise:Qe(t)}:{installationEntry:n}}(t,r);return n=a.registrationPromise,a.installationEntry});return""===i.fid?{installationEntry:yield n}:{installationEntry:i,registrationPromise:n}})}function Qe(t){return e(this,null,function*(){let e=yield et(t.appConfig);for(;1===e.registrationStatus;)yield Fe(100),e=yield et(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=yield Ze(t);return n||e}return e})}function et(e){return Ye(e,e=>{if(!e)throw Me.create("installation-not-found");return tt(e)})}function tt(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function nt(t,n){return e(this,arguments,function*({appConfig:e,heartbeatServiceProvider:t},n){const i=function(e,{fid:t}){return`${Pe(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),r=function(e,{refreshToken:t}){const n=Le(e);return n.append("Authorization",function(e){return`${ke} ${e}`}(t)),n}(e,n),a=t.getImmediate({optional:!0});if(a){const e=yield a.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={installation:{sdkVersion:Oe,appId:e.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=yield Be(()=>fetch(i,o));if(c.ok)return Ne(yield c.json());throw yield je("Generate Auth Token",c)})}function it(t,n=!1){return e(this,null,function*(){let i;const r=yield Ye(t.appConfig,r=>{if(!at(r))throw Me.create("not-registered");const a=r.authToken;if(!n&&(2===(s=a).requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(s)))return r;var s;if(1===a.requestStatus)return i=function(t,n){return e(this,null,function*(){let e=yield rt(t.appConfig);for(;1===e.authToken.requestStatus;)yield Fe(100),e=yield rt(t.appConfig);const i=e.authToken;return 0===i.requestStatus?it(t,n):i})}(t,n),r;{if(!navigator.onLine)throw Me.create("app-offline");const n=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return i=function(t,n){return e(this,null,function*(){try{const e=yield nt(t,n),i=Object.assign(Object.assign({},n),{authToken:e});return yield Je(t.appConfig,i),e}catch(e){if(!$e(e)||401!==e.customData.serverCode&&404!==e.customData.serverCode){const e=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}});yield Je(t.appConfig,e)}else yield Xe(t.appConfig);throw e}})}(t,n),n}});return i?yield i:r.authToken})}function rt(e){return Ye(e,e=>{if(!at(e))throw Me.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})}function at(e){return void 0!==e&&2===e.registrationStatus}function st(e){return Me.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="installations";he(new v(ot,e=>{const t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw st("App Configuration");if(!e.name)throw st("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw st(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:fe(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),he(new v("installations-internal",t=>{const n=fe(t.getProvider("app").getImmediate(),ot).getImmediate();return{getId:()=>function(t){return e(this,null,function*(){const e=t,{installationEntry:n,registrationPromise:i}=yield Ze(e);return i?i.catch(console.error):it(e).catch(console.error),n.fid})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n),getToken:t=>function(t,n=!1){return e(this,null,function*(){const i=t;return yield function(t){return e(this,null,function*(){const{registrationPromise:e}=yield Ze(t);e&&(yield e)})}(i),(yield it(i,n)).token})}(n,t)}},"PRIVATE")),be(Te,Ae),be(Te,Ae,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ct="analytics",lt="https://www.googletagmanager.com/gtag/js",ut=new O("@firebase/analytics"),dt=new f("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e){if(!e.startsWith(lt)){const t=dt.create("invalid-gtag-resource",{gtagURL:e});return ut.warn(t.message),""}return e}function ft(e){return Promise.all(e.map(e=>e.catch(e=>e)))}const pt=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function gt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function mt(t){return e(this,arguments,function*(t,n=pt,i){const{appId:r,apiKey:a,measurementId:s}=t.options;if(!r)throw dt.create("no-app-id");if(!a){if(s)return{measurementId:s,appId:r};throw dt.create("no-api-key")}const o=n.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new yt;return setTimeout(()=>e(null,null,function*(){c.abort()}),6e4),bt({appId:r,apiKey:a,measurementId:s},o,c,n)})}function bt(t,n,i){return e(this,arguments,function*(t,{throttleEndTimeMillis:n,backoffCount:i},r,a=pt){var s;const{appId:o,measurementId:c}=t;try{yield function(e,t){return new Promise((n,i)=>{const r=Math.max(t-Date.now(),0),a=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(a),i(dt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(r,n)}catch(l){if(c)return ut.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const n=yield function(t){return e(this,null,function*(){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:gt(i)},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=yield fetch(a,r);if(200!==s.status&&304!==s.status){let t="";try{const n=yield s.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(o){}throw dt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()})}(t);return a.deleteThrottleMetadata(o),n}catch(l){const e=l;if(!function(e){if(!(e instanceof h&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(e)){if(a.deleteThrottleMetadata(o),c)return ut.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:c};throw l}const n=503===Number(null===(s=null==e?void 0:e.customData)||void 0===s?void 0:s.httpStatus)?b(i,a.intervalMillis,30):b(i,a.intervalMillis),u={throttleEndTimeMillis:Date.now()+n,backoffCount:i+1};return a.setThrottleMetadata(o,u),ut.debug(`Calling attemptFetch again in ${n} millis`),bt(t,u,r,a)}})}class yt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}function vt(t,n,i,r,a,s,o){return e(this,null,function*(){var c;const l=mt(t);l.then(e=>{i[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&ut.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>ut.error(e)),n.push(l);const h=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return e(this,null,function*(){if(!u())return ut.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{yield d()}catch(e){return ut.warn(dt.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0})}().then(e=>e?r.getId():void 0),[f,p]=yield Promise.all([l,h]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(lt)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(s)||function(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy("firebase-js-sdk-policy",t)),n}(0,{createScriptURL:ht}),i=document.createElement("script"),r=`${lt}?l=${e}&id=${t}`;i.src=n?null==n?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}(s,f.measurementId),a("js",new Date);const g=null!==(c=null==o?void 0:o.config)&&void 0!==c?c:{};return g.origin="firebase",g.update=!0,null!=p&&(g.firebase_id=p),a("config",f.measurementId,g),f.measurementId})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.app=e}_delete(){return delete It[this.app.options.appId],Promise.resolve()}}let It={},St=[];const _t={};let Et,Ct,Dt="dataLayer",Tt=!1;function At(t,n,i){!function(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=dt.create("invalid-analytics-context",{errorInfo:t});ut.warn(n.message)}}();const r=t.options.appId;if(!r)throw dt.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw dt.create("no-api-key");ut.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=It[r])throw dt.create("already-exists",{id:r});if(!Tt){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Dt);const{wrappedGtag:t,gtagCore:n}=function(t,n,i,r,a){let s=function(...e){window[r].push(arguments)};return window[a]&&"function"==typeof window[a]&&(s=window[a]),window[a]=function(t,n,i,r){return function(a,...s){return e(this,null,function*(){try{if("event"===a){const[r,a]=s;yield function(t,n,i,r,a){return e(this,null,function*(){try{let e=[];if(a&&a.send_to){let t=a.send_to;Array.isArray(t)||(t=[t]);const r=yield ft(i);for(const i of t){const t=r.find(e=>e.measurementId===i),a=t&&n[t.appId];if(!a){e=[];break}e.push(a)}}0===e.length&&(e=Object.values(n)),yield Promise.all(e),t("event",r,a||{})}catch(e){ut.error(e)}})}(t,n,i,r,a)}else if("config"===a){const[a,o]=s;yield function(t,n,i,r,a,s){return e(this,null,function*(){const e=r[a];try{if(e)yield n[e];else{const e=(yield ft(i)).find(e=>e.measurementId===a);e&&(yield n[e.appId])}}catch(o){ut.error(o)}t("config",a,s)})}(t,n,i,r,a,o)}else if("consent"===a){const[e,n]=s;t("consent",e,n)}else if("get"===a){const[e,n,i]=s;t("get",e,n,i)}else if("set"===a){const[e]=s;t("set",e)}else t(a,...s)}catch(o){ut.error(o)}})}}(s,t,n,i),{gtagCore:s,wrappedGtag:window[a]}}(It,St,_t,Dt,"gtag");Ct=t,Et=n,Tt=!0}return It[r]=vt(t,St,_t,n,Et,Dt,i),new wt(t)}function Ot(e=function(e=se){const t=ce.get(e);if(!t&&e===se&&c())return me();if(!t)throw pe.create("no-app",{appName:e});return t}()){const t=fe(e=y(e),ct);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=fe(e,ct);if(n.isInitialized()){const e=n.getImmediate();if(g(t,n.getOptions()))return e;throw dt.create("already-initialized")}return n.initialize({options:t})}(e)}function kt(t,n,i,r){t=y(t),function(t,n,i,r,a){return e(this,null,function*(){if(a&&a.global)t("event",i,r);else{const e=yield n,a=Object.assign(Object.assign({},r),{send_to:e});t("event",i,a)}})}(Ct,It[t.app.options.appId],n,i,r).catch(e=>ut.error(e))}const Mt="@firebase/analytics",$t="0.10.17";he(new v(ct,(e,{options:t})=>At(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),he(new v("analytics-internal",function(e){try{const t=e.getProvider(ct).getImmediate();return{logEvent:(e,n,i)=>kt(t,e,n,i)}}catch(t){throw dt.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),be(Mt,$t),be(Mt,$t,"esm2017");export{Ot as g,me as i,kt as l};
