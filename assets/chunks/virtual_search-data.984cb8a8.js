const e={map:'[{"resume":["0.0"],"nestjs":["1.0"],"js":["2.0"],"react":["3.0","4.0"],"常见的状态管理模式":["4.1"],"jotai":["5.0"],"原子式解决了什么问题":["5.1"],"vue":["6.0"],"前置":["8.0"],"时间复杂度":["9.0"],"nest主要设计模式":["10.0"],"dependency":["10.1"],"inversion":["10.2"],"好处":["10.3"],"如何控制反转":["10.4"],"案例":["10.5"],"设计模式":["11.0"],"myindex":["12.0"],"记录和楠楠的日常生活":["13.0"],"我们的故事":["14.0"]},{"1":["4.1","10.3"],"全局存储":["4.0"],"global":["4.1"],"全局式":["4.1"],"原子状态管理":["5.0"],"reacthook":["5.1"],"使state的拆分和逻辑共享变得更容易":["5.1"],"但usestate":["5.1"],"injection":["10.1"],"依赖注入":["10.1"],"typescript":["10.1","10.5"],"class":["10.1","10.5"],"userservice":["10.1"],"getlist":["10.1","10.5"],"id":["10.1"],"获取用户的逻辑":["10.1"],"controller":["10.1"],"constructor":["10.1"],"this":["10.1"],"of":["10.2"],"控制反转需要的条件如下":["10.4"],"abstract":["10.5"],"service":["10.5"],"void":["10.5"],"putlist":["10.5"],"layout":["15.0"]},{"1":["10.4"],"状态管理":["4.0"],"也被称作单一数据源":["4.1"],"将所有的数据放到一个大对象中":["4.1"],"关键词":["4.1"],"和":["5.1"],"usecontext对于多个store仍需要维护多个context":["5.1"],"provider":["5.1"],"因为当context改变":["5.1"],"service":["10.1"],"new":["10.1"],"read":["10.1"],"处理用户数据的逻辑":["10.1"],"const":["10.1"],"result":["10.1"],"control":["10.2"],"解耦和模块化":["10.3"],"container":["10.5"],"创建一个变量存贮依赖项":["10.5"],"private":["10.5"],"dependencies":["10.5"],"key":["10.5"],"string":["10.5"],"false":["15.0"]},{"2":["4.1","10.3"],"combinereducers":["4.1"],"multiple":["4.1"],"所有消费该context的组件都会重新渲染即使是组件仅用到了context的一部分":["5.1"],"容易导致不必要的无用渲染":["5.1"],"造成性能损失":["5.1"],"js":["10.1"],"export":["10.1"],"default":["10.1"],"data":["10.1"],"return":["10.1"],"msg":["10.1"],"focused":["10.1"],"code":["10.1"],"focus":["10.1"],"此时controller":["10.1"],"和":["10.1"],"存在了强耦合的关联":["10.1"],"控制反转":["10.2"],"需要一个管理容器":["10.4"],"container":["10.4"],"any":["10.5"],"注册方法":["10.5"],"register":["10.5"],"dependency":["10.5"],"this":["10.5"]},{"2":["10.4"],"stores":["4.1"],"多数据源模式":["4.1"],"将状态存放到多个数据源中":["4.1"],"比如react":["5.1"],"redux":["5.1"],"v6完全基于context":["5.1"],"api而导致性能大幅下降":["5.1"],"无法复用":["10.1"],"若我们想用authservice时必须新注册一个类来实现":["10.1"],"并且需要改动getuser里面的代码":["10.1"],"那我们此时就需要解决这个问题":["10.1"],"使用di":["10.1"],"依赖是service":["10.1"],"依赖的标准需要拥有一个getlist方法":["10.1"],"并且接收一个id":["10.1"],"控制反转的本质就是降低耦合度":["10.2"],"更方便的依赖注入":["10.3"],"解析方法":["10.5"],"resolve":["10.5"],"if":["10.5"],"page":["15.0"]},{"3":["4.1","10.3","10.4"],"可在多个地方使用消费":["4.1"],"usestore":["4.1"],"v7又回退到之前的内部订阅方案":["5.1"],"context更适合放类似主题这种变化不大的全局数据":["5.1"],"而并不适合存放频繁更新的复杂状态集合":["5.1"],"原子化":["5.1"],"不再强依赖一些属性和方法":["10.2"],"具体的实现方式是di依赖注入":["10.2"],"容器需要拥有register方法用来管理容器的注册":["10.4"],"return":["10.5"],"throw":["10.5"],"team":["15.0"]},{"atomic":["4.1"],"state":["4.1"],"原子状态":["4.1"],"组件内状态":["5.1"],"但是api较多":["5.1"],"它通过将原子状态进行派生":["5.1"],"实际使用":["10.1"],"abstract":["10.1"],"get":["10.1"],"authservice":["10.1"],"xxx":["10.1"],"控制反转需要一个容器":["10.2"],"配置集中管理":["10.3"],"容器需要有一个解析的方法":["10.4"],"new":["10.5"],"error":["10.5"],"依赖":["10.5"],"未被注册到容器":["10.5"],"请先注册到容器再去使用":["10.5"],"const":["10.5"]},{"与创建对象形式的存储不同":["4.1"],"针对每一个变量可以是响应式的":["4.1"],"通过原子派生的方式来适应复杂的开发场景":["4.1"],"组合成新的状态":["5.1"],"类似vue的computed":["5.1"],"所谓组件内状态":["5.1"],"其实就是内部使用了usestate":["5.1"],"instance":["10.1"],"constroller":["10.1"],"这个容器接手类的控制权":["10.2"],"从容器中解析已注册的依赖项并注入":["10.4"],"让所有的依赖项统一管理注册解耦了对象之间的强依赖关系":["10.4"],"authservice":["10.5"]},{"atom":["4.1"],"state变化":["5.1"],"触发更新渲染罢了":["5.1"],"有兴趣可以阅读手动实现recoil原理":["5.1"],"此时我们的constroller与service解耦":["10.1"],"具体调用的方法完全取决于外部依赖注入进来的方法":["10.1"],"可扩展性":["10.1"],"解耦":["10.1"],"可测试性":["10.1"],"controller":["10.5"]}]'},t={"0.0":{t:"<resume/>",p:"",l:"Resume/index.html",a:"resume"},"1.0":{t:"# NestJs",p:"",l:"articles/BackEnd/nestjs/index.html",a:"nestjs"},"2.0":{t:"js",p:"",l:"articles/FontEnd/js/index.html",a:"js"},"3.0":{t:"react",p:"",l:"articles/FontEnd/react/index.html",a:"react"},"4.0":{t:"# React 全局存储/状态管理",p:"",l:"articles/FontEnd/react/storage/index.html",a:"react-全局存储-状态管理"},"4.1":{t:"常见的状态管理模式",p:`
global：  全局式，也被称作单一数据源，将所有的数据放到一个大对象中，关键词：combineReducers();
multiple stores：  多数据源模式，将状态存放到多个数据源中， ...`,l:"articles/FontEnd/react/storage/index.html#常见的状态管理模式",a:"常见的状态管理模式"},"5.0":{t:"Jotai  原子状态管理",p:"",l:"articles/FontEnd/react/storage/jotai/index.html",a:"jotai-原子状态管理"},"5.1":{t:"原子式解决了什么问题",p:"reactHook 使State的拆分和逻辑共享变得更容易，但useState 和 useContext对于多个store仍需要维护多个Context Provider 因为当Context改变，所有 ...",l:"articles/FontEnd/react/storage/jotai/index.html#原子式解决了什么问题",a:"原子式解决了什么问题"},"6.0":{t:"# vue",p:"",l:"articles/FontEnd/vue/index.html",a:"vue"},"8.0":{t:"前置",p:"",l:"articles/algorithm/base/index.html",a:"前置"},"9.0":{t:"时间复杂度",p:"",l:"articles/algorithm/base/time.html",a:"时间复杂度"},"10.0":{t:"# Nest主要设计模式",p:"",l:"articles/designModel/IOCDI/index.html",a:"nest主要设计模式"},"10.1":{t:"Dependency Injection 依赖注入",p:`class UserService {
  getList(id) {
    // 获取用户的逻辑 
  }
}

class Controller {
  constructor() {
     ...`,l:"articles/designModel/IOCDI/index.html#dependency-injection-依赖注入",a:"dependency-injection-依赖注入"},"10.2":{t:"Inversion of Control  控制反转",p:`控制反转的本质就是降低耦合度，不再强依赖一些属性和方法。具体的实现方式是DI依赖注入
控制反转需要一个容器，这个容器接手类的控制权
`,l:"articles/designModel/IOCDI/index.html#inversion-of-control-控制反转",a:"inversion-of-control-控制反转"},"10.3":{t:"好处",p:`
解耦和模块化
更方便的依赖注入
配置集中管理

`,l:"articles/designModel/IOCDI/index.html#好处",a:"好处"},"10.4":{t:"如何控制反转",p:`控制反转需要的条件如下

需要一个管理容器  Container
容器需要拥有register方法用来管理容器的注册
容器需要有一个解析的方法 （从容器中解析已注册的依赖项并注入)
让所有的依赖项统一 ...`,l:"articles/designModel/IOCDI/index.html#如何控制反转",a:"如何控制反转"},"10.5":{t:"案例",p:`  abstract class Service {
    getList: () =&gt; void;
    putList: () =&gt; void;
  }

  class Cont ...`,l:"articles/designModel/IOCDI/index.html#案例",a:"案例"},"11.0":{t:"设计模式",p:"",l:"articles/designModel/index.html",a:"设计模式"},"12.0":{t:"<myIndex/>",p:"",l:"index.html",a:"myindex"},"13.0":{t:"# 记录和楠楠的日常生活",p:"",l:"nannan/index.html",a:"记录和楠楠的日常生活"},"14.0":{t:"# 我们的故事",p:"",l:"nannan/story/index.html",a:"我们的故事"},"15.0":{t:"<!-- ---",p:`layout :  false
layout: page
&lt;team/&gt; --&gt;
`,l:"team/index.html",a:""}},n={previewLength:100,buttonLabel:"搜索",placeholder:"情输入关键词",allow:[],ignore:[]},s={INDEX_DATA:e,PREVIEW_LOOKUP:t,Options:n};export{s as default};
