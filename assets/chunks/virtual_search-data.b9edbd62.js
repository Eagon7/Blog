const e={map:'[{"resume":["0.0"],"nestjs":["1.0"],"js":["2.0"],"react":["3.0"],"vue":["4.0"],"前置":["6.0"],"时间复杂度":["7.0"],"nest主要设计模式":["8.0"],"dependency":["8.1"],"inversion":["8.2"],"好处":["8.3"],"如何控制反转":["8.4"],"案例":["8.5"],"设计模式":["9.0"],"myindex":["10.0"],"记录和楠楠的日常生活":["11.0"],"我们的故事":["12.0"]},{"1":["8.3"],"injection":["8.1"],"依赖注入":["8.1"],"typescript":["8.1","8.5"],"class":["8.1","8.5"],"userservice":["8.1"],"getlist":["8.1","8.5"],"id":["8.1"],"获取用户的逻辑":["8.1"],"controller":["8.1"],"constructor":["8.1"],"this":["8.1"],"of":["8.2"],"控制反转需要的条件如下":["8.4"],"abstract":["8.5"],"service":["8.5"],"void":["8.5"],"putlist":["8.5"],"layout":["13.0"]},{"1":["8.4"],"service":["8.1"],"new":["8.1"],"read":["8.1"],"处理用户数据的逻辑":["8.1"],"const":["8.1"],"result":["8.1"],"control":["8.2"],"解耦和模块化":["8.3"],"container":["8.5"],"创建一个变量存贮依赖项":["8.5"],"private":["8.5"],"dependencies":["8.5"],"key":["8.5"],"string":["8.5"],"false":["13.0"]},{"2":["8.3"],"js":["8.1"],"export":["8.1"],"default":["8.1"],"data":["8.1"],"return":["8.1"],"msg":["8.1"],"focused":["8.1"],"code":["8.1"],"focus":["8.1"],"此时controller":["8.1"],"和":["8.1"],"存在了强耦合的关联":["8.1"],"控制反转":["8.2"],"需要一个管理容器":["8.4"],"container":["8.4"],"any":["8.5"],"注册方法":["8.5"],"register":["8.5"],"dependency":["8.5"],"this":["8.5"]},{"2":["8.4"],"无法复用":["8.1"],"若我们想用authservice时必须新注册一个类来实现":["8.1"],"并且需要改动getuser里面的代码":["8.1"],"那我们此时就需要解决这个问题":["8.1"],"使用di":["8.1"],"依赖是service":["8.1"],"依赖的标准需要拥有一个getlist方法":["8.1"],"并且接收一个id":["8.1"],"控制反转的本质就是降低耦合度":["8.2"],"更方便的依赖注入":["8.3"],"解析方法":["8.5"],"resolve":["8.5"],"if":["8.5"],"page":["13.0"]},{"3":["8.3","8.4"],"不再强依赖一些属性和方法":["8.2"],"具体的实现方式是di依赖注入":["8.2"],"容器需要拥有register方法用来管理容器的注册":["8.4"],"return":["8.5"],"throw":["8.5"],"team":["13.0"]},{"实际使用":["8.1"],"abstract":["8.1"],"get":["8.1"],"authservice":["8.1"],"xxx":["8.1"],"控制反转需要一个容器":["8.2"],"配置集中管理":["8.3"],"容器需要有一个解析的方法":["8.4"],"new":["8.5"],"error":["8.5"],"依赖":["8.5"],"未被注册到容器":["8.5"],"请先注册到容器再去使用":["8.5"],"const":["8.5"]},{"instance":["8.1"],"constroller":["8.1"],"这个容器接手类的控制权":["8.2"],"从容器中解析已注册的依赖项并注入":["8.4"],"让所有的依赖项统一管理注册解耦了对象之间的强依赖关系":["8.4"],"authservice":["8.5"]},{"此时我们的constroller与service解耦":["8.1"],"具体调用的方法完全取决于外部依赖注入进来的方法":["8.1"],"可扩展性":["8.1"],"解耦":["8.1"],"可测试性":["8.1"],"controller":["8.5"]}]'},t={"0.0":{t:"<resume/>",p:"",l:"Resume/index.html",a:"resume"},"1.0":{t:"# NestJs",p:"",l:"articles/BackEnd/nestjs/index.html",a:"nestjs"},"2.0":{t:"js",p:"",l:"articles/FontEnd/js/index.html",a:"js"},"3.0":{t:"react",p:"",l:"articles/FontEnd/react/index.html",a:"react"},"4.0":{t:"# vue",p:"",l:"articles/FontEnd/vue/index.html",a:"vue"},"6.0":{t:"前置",p:"",l:"articles/algorithm/base/index.html",a:"前置"},"7.0":{t:"时间复杂度",p:"",l:"articles/algorithm/base/time.html",a:"时间复杂度"},"8.0":{t:"# Nest主要设计模式",p:"",l:"articles/designModel/IOCDI/index.html",a:"nest主要设计模式"},"8.1":{t:"Dependency Injection 依赖注入",p:`class UserService {
  getList(id) {
    // 获取用户的逻辑 
  }
}

class Controller {
  constructor() {
     ...`,l:"articles/designModel/IOCDI/index.html#dependency-injection-依赖注入",a:"dependency-injection-依赖注入"},"8.2":{t:"Inversion of Control  控制反转",p:`控制反转的本质就是降低耦合度，不再强依赖一些属性和方法。具体的实现方式是DI依赖注入
控制反转需要一个容器，这个容器接手类的控制权
`,l:"articles/designModel/IOCDI/index.html#inversion-of-control-控制反转",a:"inversion-of-control-控制反转"},"8.3":{t:"好处",p:`
解耦和模块化
更方便的依赖注入
配置集中管理

`,l:"articles/designModel/IOCDI/index.html#好处",a:"好处"},"8.4":{t:"如何控制反转",p:`控制反转需要的条件如下

需要一个管理容器  Container
容器需要拥有register方法用来管理容器的注册
容器需要有一个解析的方法 （从容器中解析已注册的依赖项并注入)
让所有的依赖项统一 ...`,l:"articles/designModel/IOCDI/index.html#如何控制反转",a:"如何控制反转"},"8.5":{t:"案例",p:`  abstract class Service {
    getList: () =&gt; void;
    putList: () =&gt; void;
  }

  class Cont ...`,l:"articles/designModel/IOCDI/index.html#案例",a:"案例"},"9.0":{t:"设计模式",p:"",l:"articles/designModel/index.html",a:"设计模式"},"10.0":{t:"<myIndex/>",p:"",l:"index.html",a:"myindex"},"11.0":{t:"# 记录和楠楠的日常生活",p:"",l:"nannan/index.html",a:"记录和楠楠的日常生活"},"12.0":{t:"# 我们的故事",p:"",l:"nannan/story/index.html",a:"我们的故事"},"13.0":{t:"<!-- ---",p:`layout :  false
layout: page
&lt;team/&gt; --&gt;
`,l:"team/index.html",a:""}},n={previewLength:100,buttonLabel:"搜索",placeholder:"情输入关键词",allow:[],ignore:[]},s={INDEX_DATA:e,PREVIEW_LOOKUP:t,Options:n};export{s as default};
