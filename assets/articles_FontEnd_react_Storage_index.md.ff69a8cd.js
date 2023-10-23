import{_ as e,o as a,c as t,U as l}from"./chunks/framework.c6ee4a63.js";const m=JSON.parse('{"title":"React 全局存储/状态管理","description":"","frontmatter":{},"headers":[],"relativePath":"articles/FontEnd/react/Storage/index.md","lastUpdated":null}'),o={name:"articles/FontEnd/react/Storage/index.md"},r=l('<h1 id="react-全局存储-状态管理" tabindex="-1">React 全局存储/状态管理 <a class="header-anchor" href="#react-全局存储-状态管理" aria-label="Permalink to &quot;React 全局存储/状态管理&quot;">​</a></h1><h2 id="常见的状态管理模式" tabindex="-1">常见的状态管理模式 <a class="header-anchor" href="#常见的状态管理模式" aria-label="Permalink to &quot;常见的状态管理模式&quot;">​</a></h2><ol><li><strong>global：</strong>  全局式，也被称作单一数据源，将所有的数据放到一个大对象中，关键词：<code>combineReducers();</code></li><li><strong>multiple stores：</strong>  多数据源模式，将状态存放到多个数据源中，可在多个地方使用消费，关键词：<code>useStore()；</code></li><li><strong>atomic state：</strong>  原子状态，与创建对象形式的存储不同，针对每一个变量可以是响应式的，通过原子派生的方式来适应复杂的开发场景，关键词：<code>atom()</code>；</li></ol><h2 id="flex-架构" tabindex="-1">Flex 架构 <a class="header-anchor" href="#flex-架构" aria-label="Permalink to &quot;Flex 架构&quot;">​</a></h2><h2 id="出现背景-解决痛点" tabindex="-1">出现背景 &amp; 解决痛点 <a class="header-anchor" href="#出现背景-解决痛点" aria-label="Permalink to &quot;出现背景 &amp; 解决痛点&quot;">​</a></h2><p>Flux架构解决前端应用程序中状态管理和数据流动的复杂性问题。在传统的MVC（Model-View-Controller）模式中，应用程序的状态分散在多个视图和控制器之间，导致数据流动难以追踪和管理。这样的架构往往会导致以下问题：</p><ol><li><p>数据流动不可控：在MVC模式中，视图可以直接修改模型的状态，模型可以直接更新视图，这种双向的数据流动会导致数据的不一致和混乱。</p></li><li><p>难以调试和维护：由于数据流动不可控，当应用程序发生错误或状态异常时，很难定位问题的根源并进行调试和修复。</p></li><li><p>嵌套回调和依赖关系：在复杂的应用程序中，数据流动可能涉及多个嵌套的回调函数和依赖关系，这会导致代码的可读性和可维护性下降。</p></li><li><p>组件通信困难：当应用程序中的组件需要共享和同步状态时，传统的MVC模式无法提供一个清晰的机制来处理组件之间的通信和状态共享</p></li></ol><h2 id="架构特点-详细介绍" tabindex="-1">架构特点 &amp; 详细介绍 <a class="header-anchor" href="#架构特点-详细介绍" aria-label="Permalink to &quot;架构特点 &amp; 详细介绍&quot;">​</a></h2><p>Flux架构通过引入单向数据流的概念，将数据的流动变得可控和可预测。它明确了数据流动的路径，并将状态的修改限制在特定的流程中。这样做的好处包括：</p><ol><li><p>易于追踪和调试：由于数据流是单向的，数据的变化路径清晰可见，可以更轻松地追踪数据的流动和变化过程。</p></li><li><p>更好的组件通信：Flux架构提供了明确的机制来处理组件之间的通信和状态共享，使得组件间的交互更加可控和灵活。</p></li><li><p>状态的集中管理：Flux将应用程序的状态集中存储在存储器（Store）中，使得状态的修改和管理更加一致和可控。</p></li><li><p>提升应用程序的可维护性和可扩展性：Flux架构的职责分离和分层结构使得应用程序的各个模块解耦，提高了代码的可复用性和可测试性，便于应用程序的扩展和维护。</p></li></ol><p>人话：1. 数据单向易于追踪更改来源 2. 统一状态管理 3. 数据可预测性 新状态 = 旧状态 + 事件</p>',11),i=[r];function n(c,s,d,p,h,_){return a(),t("div",null,i)}const x=e(o,[["render",n]]);export{m as __pageData,x as default};