(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{525:function(e,t,a){"use strict";a.r(t);var p=a(1),l=Object(p.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("SpringMVC分离了控制器、模型对象、分派器以及处理程序对象的角色，这种分离让他们更容易进行定制。")]),e._v(" "),t("ul",[t("li",[e._v("Spring的MVC框架主要由DispatchServlet、处理器映射、处理器（控制器）、视图解析器、视图组成。")])]),e._v(" "),t("p",[e._v("SpringMVC原理图")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/95ad64658f4f4a0a91af5a1938364e01.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_14,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),e._v(" "),t("p",[e._v("SpringMVC工作流程概述：")]),e._v(" "),t("p",[e._v("1、客户端向web服务器（如tomcat）发送一个HTTP请求，web服务器对HTTP请求进行解析，解析后的URL地址如果匹配了DispatchServlet的映射路径（通过web.xml中的servlet-mapping配置），web容器就将请求交给DispatchServlet处理。")]),e._v(" "),t("p",[e._v("2、DispatchServlet接收到这个请求后，再对URL进行解析，得到请求资源标识符（URI）。然后调用相应方法得到HandlerMapping对象，再根据URI，调用这个对象的相应方法获得handler对象以及他对应的拦截器（在这里只是获得了handler对象，并不会操作他，在SpringMVC中，是通过handlerAdapter对handler进行调用、控制的）；")]),e._v(" "),t("p",[e._v("3、DispatchServlet根据得到的handler对象，选择一个合适的handlerAdapter，创建其实例对象，执行拦截器中的preHandler()方法；")]),e._v(" "),t("p",[e._v("4、在拦截器方法中，提取请求的数据模型，填充Handler入参，所以所有准备工作都以做好，开始执行handler（我们写的controller代码并不能被直接执行，需要上述的操作，才能转变为handler被执行）；")]),e._v(" "),t("p",[e._v("5、handler执行完毕后返回一个ModelAndView对象给DispatchServlet")]),e._v(" "),t("p",[e._v("6、这个ModelAndView只是一个逻辑视图，并不是真正的视图，DispatchServlet通过ViewResolver视图解析器将逻辑视图解析为真正的视图。（通俗理解为将视图名称补全，如加上路径前缀，加上.jsp后缀，能指向实际的视图）")]),e._v(" "),t("p",[e._v("7、DispatchServlet通过Model将ModelAndView中得到的数据解析后用于渲染视图。将得到的最终视图通过HTTP响应给客户端。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/4d920436bda84c96862777c3b5033258.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_17,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),e._v(" "),t("ul",[t("li",[e._v("DispatchServlet是整个SpringMVC的核心。他负责接收HTTP请求组织协调SpringMVC的各个部分。其主要工作有以下三个：")])]),e._v(" "),t("p",[e._v("1、截获符合特定格式的URL请求；")]),e._v(" "),t("p",[e._v("2、初始化DispatchServlet上下文对应的WebApplicationContext，并将其与业务层，持久化层的WebApplicationContext建立关联；")]),e._v(" "),t("p",[e._v("3、初始化SpringMVC的各个组成组件，并装配到DispatchServlet中。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/e644c9963c584a54bae252e48806131b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_16,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/93f2323c740540a091d83d9f9c9d2002.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);t.default=l.exports}}]);