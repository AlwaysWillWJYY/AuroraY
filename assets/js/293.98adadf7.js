(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{750:function(v,_,t){"use strict";t.r(_);var r=t(1),a=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h3",{attrs:{id:"介绍基于mit6-830项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍基于mit6-830项目"}},[v._v("#")]),v._v(" 介绍基于MIT6.830项目")]),v._v(" "),_("p",[v._v("此项目实现了一个简易版数据库。")]),v._v(" "),_("p",[v._v("主要分为存储结构HeapFile，HeapPage，tuple，BufferPool。")]),v._v(" "),_("p",[v._v("实现了数据库简单的增删改查，基于左深连接树的优化和一些计算函数的实现。")]),v._v(" "),_("p",[v._v("基于直方图对表数据进行统计预估，简单的优化器实现。")]),v._v(" "),_("p",[v._v("基于两阶段提交实现了数据页级别力度的锁。\n实现了B+树的索引。")]),v._v(" "),_("p",[v._v("基于undolog、redolog日志实现了崩溃恢复和回滚功能。")]),v._v(" "),_("p",[v._v("问题：B+树插入的时候叶分裂，数据页大小为什么设置4kb？")]),v._v(" "),_("h3",{attrs:{id:"介绍人工智能游戏对抗平台"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍人工智能游戏对抗平台"}},[v._v("#")]),v._v(" 介绍人工智能游戏对抗平台")]),v._v(" "),_("p",[v._v("主服务，匹配微服务，Bot执行微服务")]),v._v(" "),_("p",[v._v("第一步玩家发送匹配请求")]),v._v(" "),_("p",[v._v("第二步发送玩家信息，返回匹配结果。")]),v._v(" "),_("p",[v._v("第三步匹配完成后生成地图")]),v._v(" "),_("p",[v._v("第四步返回匹配结果和地图给玩家")]),v._v(" "),_("p",[v._v("第五步开始游戏，发送比赛情况给前端玩家，等待玩家的下一步操作并发送下一步操作指令或者发送比赛情况给Bot系统，Bot系统实时运行代码，计算下一步操作，返回计算出的下一步操作")]),v._v(" "),_("p",[v._v("第六步判断双方下一步的操作，都是合法操作则游戏继续，并等待玩家或者Bot操作")]),v._v(" "),_("p",[v._v("最后如果不合法，则游戏结束，返回比赛结果给玩家，持久化游戏结果、CRUD")]),v._v(" "),_("p",[v._v("问题：数据库表的设计、服务之间的通信方式，为什么用http不用rpc，线程池怎么实现的？排行榜是在数据库中排的还是取出来后排的。  蛇、地图、走的路线的数据结构。")]),v._v(" "),_("p",[v._v("判断函数？")]),v._v(" "),_("h3",{attrs:{id:"介绍精准问答系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍精准问答系统"}},[v._v("#")]),v._v(" 介绍精准问答系统")]),v._v(" "),_("p",[v._v("项目描述: 本站基于 SpringBoot 为项目框架旨在为在校大学生提供一个学业讨论，就业创业等的开放性平台, 实现注册登录、发布帖子，添加评论，点赞以及关注，定期抢答活动，系统通知，统计网 站数据等核心功能。")]),v._v(" "),_("p",[v._v("基于 AOP 思想，使用拦截器拦截用户请求，实现了用户权限控制")]),v._v(" "),_("p",[v._v("构建 "),_("strong",[v._v("Trie")]),v._v(" 数据结构，实现对发表帖子评论的敏感词过滤。")]),v._v(" "),_("p",[v._v("使用 Redis 实现了点赞和关注功能，并进行了缓存方面的优化，优化热帖排行，缓存验证码，粉丝列 表等功能。")]),v._v(" "),_("p",[v._v("热帖排行，指定按照orderMode来排序，定时任务执行score的刷新，查询语句来排。")]),v._v(" "),_("p",[v._v("使用 "),_("strong",[v._v("Caffeine")]),v._v(" 缓存热门帖子优化热门帖子页面, 提高了 QPS（10-200）")]),v._v(" "),_("p",[v._v("系统消息通知使用 "),_("strong",[v._v("kafka")]),v._v(" 完成异步发送, 对系统进行解耦、削峰")]),v._v(" "),_("p",[v._v("使用定时任务处理帖子的分数计算模块定期更新。")]),v._v(" "),_("p",[v._v("利用 HyperLogLog，BitMap 分别实现了 UV，DAU 的统计功能。")]),v._v(" "),_("h3",{attrs:{id:"数据库安全运维平台"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库安全运维平台"}},[v._v("#")]),v._v(" 数据库安全运维平台")]),v._v(" "),_("p",[v._v("自定义注解使用@interface接口实现的日志操作，配置了@target和@rentention，本质是基于反射操作的")]),v._v(" "),_("p",[v._v("定时任务访问暴露的监测窗口。")])])}),[],!1,null,null,null);_.default=a.exports}}]);