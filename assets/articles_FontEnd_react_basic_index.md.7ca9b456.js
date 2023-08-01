import{_ as s,o as a,c as n,U as l}from"./chunks/framework.c6ee4a63.js";const o="/assets/image.38316f27.png",d=JSON.parse('{"title":"React 速通","description":"","frontmatter":{},"headers":[],"relativePath":"articles/FontEnd/react/basic/index.md","lastUpdated":null}'),p={name:"articles/FontEnd/react/basic/index.md"},t=l('<h1 id="react-速通" tabindex="-1">React 速通 <a class="header-anchor" href="#react-速通" aria-label="Permalink to &quot;React 速通&quot;">​</a></h1><h2 id="hooks" tabindex="-1">Hooks <a class="header-anchor" href="#hooks" aria-label="Permalink to &quot;Hooks&quot;">​</a></h2><p>Hooks</p><h2 id="api分类" tabindex="-1">API分类 <a class="header-anchor" href="#api分类" aria-label="Permalink to &quot;API分类&quot;">​</a></h2><blockquote><p>关键词： concurrent</p></blockquote><table><tr><th>功能</th><th>具体Hooks</th><th>具体功能</th></tr><tr><td rowspan="5">数据更新驱动</td><td>useState</td><td>数据驱动更新</td></tr><tr><td>useReducer</td><td>订阅状态，创建reducer，更新试图</td></tr><tr><td>useSyncExternalStore</td><td>concurrent模式下，订阅外部数据源触发更新</td></tr><tr><td>usetransition</td><td>concurrent模式下，过渡更新任务</td></tr><tr><td>useDeferredValue</td><td>concurrent模式下更新状态滞后</td></tr><tr><td rowspan="2">执行副作用</td><td>b1</td><td>这是分类B下的项目B1</td></tr><tr><td>项目B2</td><td>这是分类B下的项目B2</td></tr></table><p><img src="'+o+`" alt="Alt text"></p><h2 id="数据更新驱动类" tabindex="-1">数据更新驱动类 <a class="header-anchor" href="#数据更新驱动类" aria-label="Permalink to &quot;数据更新驱动类&quot;">​</a></h2><h3 id="usestate" tabindex="-1">useState <a class="header-anchor" href="#usestate" aria-label="Permalink to &quot;useState&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> setState</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#A6ACCD;">(initialState)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">参数接收一个初始值，返回一个数组，数组的第一个元素是当前的state，第二个元素是更新state的函数</span></span>
<span class="line"></span></code></pre></div><p><strong>注意事项</strong></p><ol><li>案例 此时点击按钮 log打印出来的值并不是更改过后的number 而是更改前的值，这意味着log时更改未发生 原因：setNumber是异步的，触发handleClick时，任务线程会先执行同步再执行异步。所以log打印的是更改前的值 外部log可以获取到最新的值的原因是，在执行完同步的log后执行异步setNumber,异步setNumber触发重新渲染，重新执行Index函数，useState获取到最新的number，所以打印的值是最新的number</li></ol><p>点击按钮后执行过程</p><ul><li>线程1：handleClick -&gt; 宏任务log -&gt; 微任务setNumber(触发线程2)</li><li>线程2：宏任务log - &gt; 微任务setNumber触发重新渲染 这就是为什么handleClick函数内打印不到最新的值 而handleClick函数外可以大打印到最新的值的原因</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Index</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setNumber</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">重新渲染</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">handleClick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setNumber</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">number</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">number</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">number</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">点击 </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> Index</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="usereducer" tabindex="-1">useReducer <a class="header-anchor" href="#usereducer" aria-label="Permalink to &quot;useReducer&quot;">​</a></h3><p>const [state, dispatch] = useReducer(reducer, initState);</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> reducer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">action</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">increment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">decrement</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ReducerTest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">dispatchNumber</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useReducer</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">reducer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">initialState</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    &lt;</span><span style="color:#FFCB6B;">div</span><span style="color:#F07178;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;font-style:italic;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">button</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#F07178;">()=&gt;dispatchNumber</span><span style="color:#89DDFF;">({</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">add</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">})}&gt;</span><span style="color:#F07178;">&lt;/</span><span style="color:#FFCB6B;">button</span><span style="color:#F07178;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h1 id="项目列表" tabindex="-1">项目列表 <a class="header-anchor" href="#项目列表" aria-label="Permalink to &quot;项目列表&quot;">​</a></h1>`,19),e=[t];function c(r,F,y,D,i,C){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
