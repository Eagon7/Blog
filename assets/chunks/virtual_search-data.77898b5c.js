const e={map:'[{"resume":["0.0"],"nestjs":["1.0"],"js":["2.0"],"react":["3.0"],"jotai":["4.0"],"vue":["5.0"],"前置":["7.0"],"时间复杂度":["8.0"],"nest主要设计模式":["9.0"],"dependency":["9.1"],"inversion":["9.2"],"好处":["9.3"],"如何控制反转":["9.4"],"案例":["9.5"],"设计模式":["10.0"],"myindex":["11.0"],"记录和楠楠的日常生活":["12.0"],"我们的故事":["13.0"]},{"1":["9.3"],"injection":["9.1"],"依赖注入":["9.1"],"typescript":["9.1","9.5"],"class":["9.1","9.5"],"userservice":["9.1"],"getlist":["9.1","9.5"],"id":["9.1"],"获取用户的逻辑":["9.1"],"controller":["9.1"],"constructor":["9.1"],"this":["9.1"],"of":["9.2"],"控制反转需要的条件如下":["9.4"],"abstract":["9.5"],"service":["9.5"],"void":["9.5"],"putlist":["9.5"],"layout":["14.0"]},{"1":["9.4"],"service":["9.1"],"new":["9.1"],"read":["9.1"],"处理用户数据的逻辑":["9.1"],"const":["9.1"],"result":["9.1"],"control":["9.2"],"解耦和模块化":["9.3"],"container":["9.5"],"创建一个变量存贮依赖项":["9.5"],"private":["9.5"],"dependencies":["9.5"],"key":["9.5"],"string":["9.5"],"false":["14.0"]},{"2":["9.3"],"js":["9.1"],"export":["9.1"],"default":["9.1"],"data":["9.1"],"return":["9.1"],"msg":["9.1"],"focused":["9.1"],"code":["9.1"],"focus":["9.1"],"此时controller":["9.1"],"和":["9.1"],"存在了强耦合的关联":["9.1"],"控制反转":["9.2"],"需要一个管理容器":["9.4"],"container":["9.4"],"any":["9.5"],"注册方法":["9.5"],"register":["9.5"],"dependency":["9.5"],"this":["9.5"]},{"2":["9.4"],"无法复用":["9.1"],"若我们想用authservice时必须新注册一个类来实现":["9.1"],"并且需要改动getuser里面的代码":["9.1"],"那我们此时就需要解决这个问题":["9.1"],"使用di":["9.1"],"依赖是service":["9.1"],"依赖的标准需要拥有一个getlist方法":["9.1"],"并且接收一个id":["9.1"],"控制反转的本质就是降低耦合度":["9.2"],"更方便的依赖注入":["9.3"],"解析方法":["9.5"],"resolve":["9.5"],"if":["9.5"],"page":["14.0"]},{"3":["9.3","9.4"],"不再强依赖一些属性和方法":["9.2"],"具体的实现方式是di依赖注入":["9.2"],"容器需要拥有register方法用来管理容器的注册":["9.4"],"return":["9.5"],"throw":["9.5"],"team":["14.0"]},{"实际使用":["9.1"],"abstract":["9.1"],"get":["9.1"],"authservice":["9.1"],"xxx":["9.1"],"控制反转需要一个容器":["9.2"],"配置集中管理":["9.3"],"容器需要有一个解析的方法":["9.4"],"new":["9.5"],"error":["9.5"],"依赖":["9.5"],"未被注册到容器":["9.5"],"请先注册到容器再去使用":["9.5"],"const":["9.5"]},{"instance":["9.1"],"constroller":["9.1"],"这个容器接手类的控制权":["9.2"],"从容器中解析已注册的依赖项并注入":["9.4"],"让所有的依赖项统一管理注册解耦了对象之间的强依赖关系":["9.4"],"authservice":["9.5"]},{"此时我们的constroller与service解耦":["9.1"],"具体调用的方法完全取决于外部依赖注入进来的方法":["9.1"],"可扩展性":["9.1"],"解耦":["9.1"],"可测试性":["9.1"],"controller":["9.5"]}]'},t={"0.0":{t:"<resume/>",p:"",l:"Resume/index.html",a:"resume"},"1.0":{t:"# NestJs",p:"",l:"articles/BackEnd/nestjs/index.html",a:"nestjs"},"2.0":{t:"js",p:"",l:"articles/FontEnd/js/index.html",a:"js"},"3.0":{t:"react",p:"",l:"articles/FontEnd/react/index.html",a:"react"},"4.0":{t:"jotai",p:"",l:"articles/FontEnd/react/storage/jotai/index.html",a:"jotai"},"5.0":{t:"# vue",p:"",l:"articles/FontEnd/vue/index.html",a:"vue"},"7.0":{t:"前置",p:"",l:"articles/algorithm/base/index.html",a:"前置"},"8.0":{t:"时间复杂度",p:"",l:"articles/algorithm/base/time.html",a:"时间复杂度"},"9.0":{t:"# Nest主要设计模式",p:"",l:"articles/designModel/IOCDI/index.html",a:"nest主要设计模式"},"9.1":{t:"Dependency Injection 依赖注入",p:`class UserService {
  getList(id) {
    // 获取用户的逻辑 
  }
}

class Controller {
  constructor() {
     ...`,l:"articles/designModel/IOCDI/index.html#dependency-injection-依赖注入",a:"dependency-injection-依赖注入"},"9.2":{t:"Inversion of Control  控制反转",p:`控制反转的本质就是降低耦合度，不再强依赖一些属性和方法。具体的实现方式是DI依赖注入
控制反转需要一个容器，这个容器接手类的控制权
`,l:"articles/designModel/IOCDI/index.html#inversion-of-control-控制反转",a:"inversion-of-control-控制反转"},"9.3":{t:"好处",p:`
解耦和模块化
更方便的依赖注入
配置集中管理

`,l:"articles/designModel/IOCDI/index.html#好处",a:"好处"},"9.4":{t:"如何控制反转",p:`控制反转需要的条件如下

需要一个管理容器  Container
容器需要拥有register方法用来管理容器的注册
容器需要有一个解析的方法 （从容器中解析已注册的依赖项并注入)
让所有的依赖项统一 ...`,l:"articles/designModel/IOCDI/index.html#如何控制反转",a:"如何控制反转"},"9.5":{t:"案例",p:`  abstract class Service {
    getList: () =&gt; void;
    putList: () =&gt; void;
  }

  class Cont ...`,l:"articles/designModel/IOCDI/index.html#案例",a:"案例"},"10.0":{t:"设计模式",p:"",l:"articles/designModel/index.html",a:"设计模式"},"11.0":{t:"<myIndex/>",p:"",l:"index.html",a:"myindex"},"12.0":{t:"# 记录和楠楠的日常生活",p:"",l:"nannan/index.html",a:"记录和楠楠的日常生活"},"13.0":{t:"# 我们的故事",p:"",l:"nannan/story/index.html",a:"我们的故事"},"14.0":{t:"<!-- ---",p:`layout :  false
layout: page
&lt;team/&gt; --&gt;
`,l:"team/index.html",a:""}},n={previewLength:100,buttonLabel:"搜索",placeholder:"情输入关键词",allow:[],ignore:[]},s={INDEX_DATA:e,PREVIEW_LOOKUP:t,Options:n};export{s as default};
