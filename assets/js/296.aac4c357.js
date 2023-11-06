(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{754:function(v,_,s){"use strict";s.r(_);var e=s(1),a=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"redis缓存和mq消息队列-完"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis缓存和mq消息队列-完"}},[v._v("#")]),v._v(" Redis缓存和MQ消息队列(完)")]),v._v(" "),_("p",[v._v("常考的有：")]),v._v(" "),_("p",[_("strong",[v._v("1、Redis为什么要作为缓存？ 高性能和高并发")])]),v._v(" "),_("p",[_("strong",[v._v("2、redis和memcached的区别")])]),v._v(" "),_("p",[_("strong",[v._v("区别总结如下")])]),v._v(" "),_("p",[v._v("1、Redis和Memcache都是将数据存放在内存中，都是内存数据库。不过memcache还可用于缓存其他东西，例如图片、视频等等；")]),v._v(" "),_("p",[v._v("2、Redis不仅仅支持简单的k/v类型的数据，同时还提供list，set，hash等数据结构的存储；")]),v._v(" "),_("p",[v._v("3、虚拟内存--Redis当物理内存用完时，可以将一些很久没用到的value 交换到磁盘；")]),v._v(" "),_("p",[v._v("4、过期策略--memcache在set时就指定，例如set key1 0 0 8,即永不过期。Redis可以通过例如expire 设定，例如expire name 10；")]),v._v(" "),_("p",[v._v("5、分布式--设定memcache集群，利用magent做一主多从;redis可以做一主多从。都可以一主一从；")]),v._v(" "),_("p",[v._v("6、存储数据安全--memcache挂掉后，数据没了；redis可以定期保存到磁盘（持久化）；")]),v._v(" "),_("p",[v._v("7、灾难恢复--memcache挂掉后，数据不可恢复; redis数据丢失后可以通过aof恢复；")]),v._v(" "),_("p",[v._v("8、Redis支持数据的备份，即master-slave模式的数据备份；")]),v._v(" "),_("p",[v._v("9、应用场景不一样：Redis出来作为NoSQL数据库使用外，还能用做消息队列、数据堆栈和数据缓存等；Memcached适合于缓存SQL语句、数据集、用户临时性数据、延迟查询数据和session等。")]),v._v(" "),_("p",[_("strong",[v._v("3、redis常用数据结构、以及数据结构底层，常考到跳表的结构")])]),v._v(" "),_("p",[v._v("String,List,hash,set,zset,BitMap,HyperLoglog,GEO")]),v._v(" "),_("p",[_("strong",[v._v("4、定期删除、惰性删除")])]),v._v(" "),_("p",[v._v("redis使用定期删除加惰性删除策略")]),v._v(" "),_("p",[_("strong",[v._v("5、内存淘汰机制")])]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("不进行数据淘汰的策略")])])]),v._v(" "),_("p",[_("strong",[v._v("noeviction")]),v._v("（Redis3.0之后，默认的内存淘汰策略） ：它表示当运行内存超过最大设置内存时，不淘汰任何数据，这时如果有新的数据写入，则会触发 OOM，但是如果没用数据写入的话，只是单纯的查询或者删除操作的话，还是可以正常工作。")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("进行数据淘汰的策略")])])]),v._v(" "),_("p",[v._v("针对「进行数据淘汰」这一类策略，又可以细分为「在设置了过期时间的数据中进行淘汰」和「在所有数据范围内进行淘汰」这两类策略。")]),v._v(" "),_("p",[v._v("在设置了过期时间的数据中进行淘汰：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("volatile-random")]),v._v("：随机淘汰设置了过期时间的任意键值；")]),v._v(" "),_("li",[_("strong",[v._v("volatile-ttl")]),v._v("：优先淘汰更早过期的键值。")]),v._v(" "),_("li",[_("strong",[v._v("volatile-lru")]),v._v("（Redis3.0 之前，默认的内存淘汰策略）：淘汰所有设置了过期时间的键值中，最久未使用的键值；")]),v._v(" "),_("li",[_("strong",[v._v("volatile-lfu")]),v._v("（Redis 4.0 后新增的内存淘汰策略）：淘汰所有设置了过期时间的键值中，最少使用的键值；")])]),v._v(" "),_("p",[v._v("所有数据范围内进行淘汰：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("allkeys-random")]),v._v("：随机淘汰任意键值;")]),v._v(" "),_("li",[_("strong",[v._v("allkeys-lru")]),v._v("：淘汰整个键值中最久未使用的键值；")]),v._v(" "),_("li",[_("strong",[v._v("allkeys-lfu")]),v._v("（Redis 4.0 后新增的内存淘汰策略）：淘汰整个键值中最少使用的键值。")])]),v._v(" "),_("p",[_("strong",[v._v("6、持久化机制")])]),v._v(" "),_("p",[v._v("AOF持久化加RDB快照")]),v._v(" "),_("p",[_("strong",[v._v("7、缓存雪崩、缓存穿透、缓存击穿以及各自如何解决？")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.xiaolincoding.com//mysql/other/061e2c04e0ebca3425dd75dd035b6b7b.png",alt:"图片"}})]),v._v(" "),_("p",[_("strong",[v._v("8、并发竞争key问题")])]),v._v(" "),_("p",[_("strong",[v._v("9、缓存和数据库双写时的数据一致性")])]),v._v(" "),_("p",[v._v("更新数据库，更新缓存（数据不一致）和更新数据库，删除缓存")]),v._v(" "),_("p",[_("strong",[v._v("10、为什么单线程还那么快？（非阻塞多路IO复用）")])]),v._v(" "),_("p",[_("strong",[v._v("11、select、poll、epoll区别")])]),v._v(" "),_("p",[_("strong",[v._v("12、五种IO模型")])]),v._v(" "),_("p",[v._v("阻塞i/o，非阻塞io、多路复用io、"),_("strong",[v._v("信号驱动io、异步io")]),v._v("(不太会)")]),v._v(" "),_("p",[_("strong",[v._v("13、redis集群、哨兵机制、键过期策略")])]),v._v(" "),_("p",[v._v("Redis集群是Redis数据库的一种分布式部署方式，它将数据分散到多个节点上，提高了系统的性能和可用性。在Redis集群中，每个节点负责管理一部分数据，并且每个节点都有自己的键过期策略。")]),v._v(" "),_("p",[v._v("Redis中的键过期策略是通过设置键的生存时间或过期时间来实现的。当一个键的生存时间或过期时间到期时，Redis会自动将该键删除。在Redis集群中，每个节点都会独立地执行键过期策略，即使多个节点存储了相同的键，它们也可能在不同的时间删除这些键。")]),v._v(" "),_("p",[v._v("Redis集群中的键过期策略对于系统的性能和稳定性非常重要。如果过期键不及时地被删除，会占用系统的内存资源，导致系统变慢或崩溃。因此，应该合理设置键的过期时间，并定期清理过期键，以确保系统的正常运行。")]),v._v(" "),_("p",[_("strong",[v._v("14、分布式锁")])]),v._v(" "),_("p",[_("strong",[v._v("15、 Redis数据结构类型，各自介绍以及使用场景？")])]),v._v(" "),_("p",[v._v("Redis是一款高性能的键值存储系统，支持多种数据结构类型。以下是Redis支持的数据结构类型及其介绍和使用场景：")]),v._v(" "),_("ol",[_("li",[v._v("字符串（string）：字符串是Redis最基本的数据结构类型，可以存储任何类型的数据，如数字、文本、二进制数据等。字符串最常用的操作是获取、设置、增加、减少值等。使用场景：缓存、计数器、分布式锁等。")]),v._v(" "),_("li",[v._v("列表（list）：列表是一个有序的字符串数组，可以从头或尾部添加或删除元素。列表最常用的操作是添加、删除、获取元素、获取列表长度等。使用场景：消息队列、最近的操作列表等。")]),v._v(" "),_("li",[v._v("集合（set）：集合是一组无序、唯一的字符串，可以进行交集、并集、差集等集合操作。集合最常用的操作是添加、删除、获取元素、获取集合大小等。使用场景：标签、好友列表、唯一的访客统计等。")]),v._v(" "),_("li",[v._v("有序集合（sorted set）：有序集合是一个有序的字符串数组，每个元素都有一个对应的分数，可以根据分数排序。有序集合最常用的操作是添加、删除、获取元素、获取排名、获取分数等。使用场景：排行榜、最新的时间线、热门文章列表等。")]),v._v(" "),_("li",[v._v("哈希表（hash）：哈希表是一个键值对的集合，可以嵌套存储。哈希表最常用的操作是添加、删除、获取元素、获取哈希表大小等。使用场景：存储对象、存储关系型数据等。")])]),v._v(" "),_("p",[v._v("除了以上五种数据结构类型外，Redis还支持位图（bitmap）、地理位置（geospatial）等其他数据结构类型。不同的数据结构类型可以根据实际需求组合使用，灵活地存储和操作数据。")]),v._v(" "),_("p",[_("strong",[v._v("16、Redis的set和hashset的底层实现原理？")]),v._v("（有疑问）")]),v._v(" "),_("p",[v._v("Redis 中的 Set 和 HashSet 是两种不同的数据结构，它们的底层实现原理也不同。")]),v._v(" "),_("h3",{attrs:{id:"set"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[v._v("#")]),v._v(" Set")]),v._v(" "),_("p",[v._v("Redis 中的 Set 是一个无序的、不重复的集合。Set 内部使用哈希表（hash table）实现，哈希表的每个键值对（key-value pair）对应一个元素。在哈希表中，键值对的 key 存储元素，value 则被设置为 NULL。哈希表的大小会根据实际存储元素的数量进行动态调整，从而保证哈希表的负载因子（load factor）在一个合理的范围内。")]),v._v(" "),_("p",[v._v("Set 支持的操作包括：")]),v._v(" "),_("ul",[_("li",[v._v("添加元素：SADD")]),v._v(" "),_("li",[v._v("删除元素：SREM")]),v._v(" "),_("li",[v._v("判断元素是否存在：SISMEMBER")]),v._v(" "),_("li",[v._v("获取元素个数：SCARD")]),v._v(" "),_("li",[v._v("获取所有元素：SMEMBERS")]),v._v(" "),_("li",[v._v("求交集：SINTER")]),v._v(" "),_("li",[v._v("求并集：SUNION")]),v._v(" "),_("li",[v._v("求差集：SDIFF")])]),v._v(" "),_("h3",{attrs:{id:"hashset"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashset"}},[v._v("#")]),v._v(" HashSet")]),v._v(" "),_("p",[v._v("Redis 中的 HashSet 是一个无序的、不重复的字典，它的内部实现和 Set 很相似，都是使用哈希表实现。不同的是，在 HashSet 中，哈希表的每个键值对的 key 和 value 都分别存储了一个元素的字段和值。")]),v._v(" "),_("p",[v._v("HashSet 支持的操作包括：")]),v._v(" "),_("ul",[_("li",[v._v("添加元素：HSET")]),v._v(" "),_("li",[v._v("删除元素：HDEL")]),v._v(" "),_("li",[v._v("判断元素是否存在：HEXISTS")]),v._v(" "),_("li",[v._v("获取元素个数：HLEN")]),v._v(" "),_("li",[v._v("获取所有键值对：HGETALL")]),v._v(" "),_("li",[v._v("获取所有 key：HKEYS")]),v._v(" "),_("li",[v._v("获取所有 value：HVALS")])]),v._v(" "),_("p",[v._v("总的来说，Redis 中的 Set 和 HashSet 底层都使用了哈希表，它们的区别在于哈希表存储的内容不同，因此支持的操作也不同。使用 Set 和 HashSet 应该根据实际需求来选择。")]),v._v(" "),_("p",[_("strong",[v._v("17、BitMap实现原理？")])]),v._v(" "),_("p",[v._v("BitMap是一种数据结构，用于处理大量的布尔值（只有true和false两种状态）或者小范围的整数值。它能够高效地进行插入、删除和查找等操作，特别适用于需要快速处理大量数据的应用场景。BitMap最常用的场景是在计算机存储中的位图处理。")]),v._v(" "),_("p",[v._v("BitMap的实现原理非常简单，它实际上就是一个由0和1组成的数组。每个数组元素都被称为一个“位”，每个位只能存储0或1。因为每个位只能存储两种状态，所以BitMap的空间复杂度非常低。")]),v._v(" "),_("p",[v._v("BitMap的主要优势在于它的查询速度非常快。因为每个位只有两种状态，所以我们可以使用位运算（比如AND、OR、XOR等）来快速查询某个位的状态，而不需要像传统的数组一样需要遍历整个数组。因此，BitMap非常适用于需要高效地判断某个元素是否存在的场景。")]),v._v(" "),_("p",[v._v("例如，假设我们有一组数据，每个数据都是一个不大于1000的正整数，我们想要统计每个数字出现的次数。我们可以使用一个长度为1000的BitMap，每个数字对应BitMap数组的一个元素。我们遍历数据，对于每个数据，我们将对应的BitMap位从0变成1，表示这个数字出现了一次。这样，我们就可以快速地统计每个数字出现的次数，而不需要使用复杂的数据结构。")]),v._v(" "),_("p",[v._v("当然，BitMap也有一些局限性。由于BitMap中每个位只能存储0或1，因此它不能存储任意大小的整数，只适用于小范围的整数值。此外，由于BitMap的实现是基于数组，因此它需要一定的连续内存空间。如果要存储的数据过于庞大，BitMap可能会因为内存不足而无法使用。")]),v._v(" "),_("p",[_("strong",[v._v("18、 Redis跳表介绍")])]),v._v(" "),_("p",[v._v("Redis跳表（Skip List）是一种基于随机化的数据结构，它在Redis中被广泛应用于有序集合（Sorted Set）的实现中。跳表的设计灵感来自于平衡树，但是跳表的实现相对简单且具有很好的可扩展性。")]),v._v(" "),_("p",[v._v("跳表的核心思想是通过在链表中增加跨度较大的指针来提高查找元素的效率。跳表由多层组成，每一层都是一个有序的链表，且每一层中的元素都是前一层的子集。最底层是原始链表，而最高层只有一个元素，即跳表的头节点。")]),v._v(" "),_("p",[v._v("在跳表中，每个节点都有多个指针，其中一个指针指向下一层的相同节点，而另一个指针则跳跃到下一层的节点，这就是跳表的核心优势。通过这种方式，跳表可以实现基于比较的排序，并且其平均时间复杂度为O(log n)。")]),v._v(" "),_("p",[v._v("在Redis中，跳表被广泛应用于有序集合的实现。有序集合中的元素可以通过分数来排序，而跳表可以通过使用分层结构和分数来提高元素的查找效率。跳表还可以支持高效的范围查找和插入操作，这使得它成为一个非常有效的数据结构。")]),v._v(" "),_("p",[_("strong",[v._v("19、压缩列表讲一下")])]),v._v(" "),_("p",[v._v("压缩列表（Compressed List）是 Redis 中一种用于存储有序整数序列的数据结构。与普通的数组或链表不同，压缩列表使用了一些特殊的技巧，使得它可以更加紧凑地存储整数序列，从而节省内存空间。")]),v._v(" "),_("p",[v._v("压缩列表的数据结构由一个或多个节点组成，每个节点可以存储一个或多个整数值。每个节点由一个字节数组和一个指向下一个节点的指针组成。字节数组存储了一个或多个整数值，以及每个整数值的编码方式和长度。指针用于将多个节点串联起来，形成一个整体的序列。")]),v._v(" "),_("p",[v._v("压缩列表的整数值可以使用不同的编码方式来存储，包括 1 字节、2 字节、4 字节和 8 字节等多种编码方式。当一个整数值可以用较小的编码方式存储时，压缩列表会选择较小的编码方式来存储该值，从而节省空间。另外，压缩列表还可以使用连续的整数值来表示一个区间，从而进一步压缩数据。")]),v._v(" "),_("p",[v._v("压缩列表可以用于实现 Redis 中的有序集合（Sorted Set）和列表（List）等数据类型，它的优点是占用内存空间较小，缺点是访问某个具体位置的操作比较耗时，因为需要遍历整个序列。因此，对于需要频繁访问某个具体位置的应用场景，可能不适合使用压缩列表。")]),v._v(" "),_("p",[_("strong",[v._v("20、redis的hash底层讲一下")])]),v._v(" "),_("p",[v._v("Redis中的Hash是一种键值对数据结构，类似于Python中的字典或Java中的Map。在Redis中，Hash底层是通过哈希表实现的，因此Redis的Hash具有快速的查找、插入和删除操作的优势。")]),v._v(" "),_("p",[v._v("哈希表是一种数组与链表相结合的数据结构。它通过将键映射到数组的索引来快速查找值。具体地说，哈希表将键通过哈希函数转换为一个索引值，然后将值存储在该索引处。如果多个键映射到同一个索引，则使用链表将这些键值对存储在一起，这就是所谓的哈希冲突。")]),v._v(" "),_("p",[v._v("在Redis中，哈希表是一个由哈希桶数组和哈希节点组成的结构。哈希桶数组是一个指针数组，其中每个指针指向一个哈希节点链表的头部。哈希节点是一个包含键值对的结构体，其中键和值都是Redis对象。")]),v._v(" "),_("p",[v._v("当我们向Hash中插入一个键值对时，Redis首先计算出该键的哈希值，并根据哈希值确定该键值对在哈希桶数组中的位置。如果该位置没有其他键值对，则直接在该位置插入新的键值对。如果该位置已经有其他键值对，则需要遍历该位置对应的链表，找到键值对中键和当前键相同的节点，并将其值更新为当前值。如果链表中没有相同的键，则在链表的末尾插入新的键值对。")]),v._v(" "),_("p",[v._v("当我们从Hash中获取一个键值对时，Redis首先计算出该键的哈希值，并根据哈希值确定该键值对在哈希桶数组中的位置。然后遍历该位置对应的链表，找到键值对中键和当前键相同的节点，并返回该节点的值。如果链表中没有相同的键，则返回空值。")]),v._v(" "),_("p",[v._v("当我们从Hash中删除一个键值对时，Redis首先计算出该键的哈希值，并根据哈希值确定该键值对在哈希桶数组中的位置。然后遍历该位置对应的链表，找到键值对中键和当前键相同的节点，并将该节点从链表中删除。如果链表中没有相同的键，则什么也不做。如果删除节点后，该链表为空，则将哈希桶数组中对应的指针设置为NULL。")]),v._v(" "),_("p",[v._v("总之，Redis的Hash底层实现使用了哈希表来实现键值对的快速查找、插入和删除操作。这使得Redis的Hash非常适合存储需要快速访问和修改的键值对。")]),v._v(" "),_("p",[_("strong",[v._v("21、Redis排行榜")])]),v._v(" "),_("p",[v._v("Redis排行榜可以通过使用Redis有序集合（sorted set）实现。有序集合是Redis的一种数据结构，它可以存储一个有序的元素集合，并且每个元素都会关联一个分数（score）。在排行榜中，元素可以是参与排行的对象，分数可以是对象的得分或评分。")]),v._v(" "),_("p",[v._v("以下是创建一个排行榜的基本步骤：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("将参与排行的对象作为有序集合中的元素，分数为对象的得分或评分。使用Redis命令"),_("code",[v._v("ZADD")]),v._v("将元素添加到有序集合中，例如：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('arduinoCopy codeZADD score_ranking 80 "Tom"\nZADD score_ranking 90 "Jerry"\nZADD score_ranking 70 "Mickey"\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])])]),v._v(" "),_("li",[_("p",[v._v("使用Redis命令"),_("code",[v._v("ZREVRANGE")]),v._v("从有序集合中取出排名前N的元素，例如：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("Copy codeZREVRANGE score_ranking 0 2\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("这个命令会返回有序集合"),_("code",[v._v("score_ranking")]),v._v("中排名前3的元素和它们的分数，按照分数从高到低排序。")])]),v._v(" "),_("li",[_("p",[v._v("可以通过Redis命令"),_("code",[v._v("ZINCRBY")]),v._v("来更新某个对象的得分或评分，例如：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('arduinoCopy codeZINCRBY score_ranking 10 "Tom"\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("这个命令将有序集合"),_("code",[v._v("score_ranking")]),v._v("中元素"),_("code",[v._v("Tom")]),v._v("的分数加10。")])]),v._v(" "),_("li",[_("p",[v._v("可以使用Redis命令"),_("code",[v._v("ZREVRANK")]),v._v("获取某个对象在有序集合中的排名，例如：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('arduinoCopy codeZREVRANK score_ranking "Tom"\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("这个命令会返回有序集合"),_("code",[v._v("score_ranking")]),v._v("中元素"),_("code",[v._v("Tom")]),v._v("的排名，排名从0开始。")])])]),v._v(" "),_("p",[v._v("通过上述命令的组合使用，就可以实现一个简单的排行榜功能。同时，可以根据实际需求，使用其他Redis命令和数据结构来实现更加复杂和灵活的排行榜功能。")]),v._v(" "),_("h3",{attrs:{id:"复习"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#复习"}},[v._v("#")]),v._v(" 复习")]),v._v(" "),_("p",[_("strong",[v._v("一、持久化")])]),v._v(" "),_("p",[_("strong",[v._v("AOF日志")]),v._v("，Redis是先执行写操作命令再记录到AOF日志当中。这样做有两个好处，"),_("strong",[v._v("第一个是避免额外的开销")]),v._v("，写入命令如果先记录日志再执行命令记入redis时有可能本身语法错误，在恢复时就会出错，如果正确的顺序，保证记录在AOF的日志中的命令是正确的，减少额外的开销；  第二个不会阻塞当前的写操作命令的执行，因为是先进行的写入命令，再记录日志")]),v._v(" "),_("p",[_("strong",[v._v("三种写回策略")]),v._v("：redis执行完写操作命令后，会把命令追加到server.aof_buf文件缓冲区中；然后通过系统调用write（）函数，此时数据并没有写入到磁盘，而是写入了pagecache内核缓冲区，由操作系统决定什么时候写回磁盘")]),v._v(" "),_("p",[v._v("在 "),_("code",[v._v("redis.conf")]),v._v(" 配置文件中的 "),_("code",[v._v("appendfsync")])]),v._v(" "),_("p",[v._v("always，\teverysec， no")]),v._v(" "),_("p",[_("strong",[v._v("AOF重写机制：")])]),v._v(" "),_("p",[v._v("使用重写机制时就会读取最新的key，value对，将最新的命令记录到aof文件中。那为什么要用新的aof文件不直接复用现在的呢？如果aof重写失败，那么会污染现在的aof文件，可能无法用于恢复使用。")]),v._v(" "),_("p",[_("strong",[v._v("AOF后台重写")])]),v._v(" "),_("p",[v._v("Redis的AOF重写机制时放在后台进行的，通过命令的bgrewritaof来完成，子进程重写aof期间，主进程还可以继续处理命令请求，从而避免阻塞主进程。"),_("strong",[v._v("为什么不用子线程要用子进程")]),v._v("，子线程共享进程的内存空间，当多线程出现时需要枷锁机制来保证数据安全，这样会降低性能。")]),v._v(" "),_("p",[v._v("主进程在fork系统调用子进程时会复制一份父进程的页表，这也页表记录着虚拟地址和物理地址的关系，不会复制物理内存，页表对应的页表项的属性会标记为只读，当进程发起写操作时，CPU发出写保护中断，os会在中断处理函数中进行内存的物理复制，并重新设置其映射关系，将父子进程的内存读写权限改为可读写，最后会对内存进行写操作。这个过程成为COW。")]),v._v(" "),_("p",[_("strong",[v._v("两个阶段会阻塞父进程")]),v._v("。其中一个是页表的复制，另一个是写时复制的物理内存的复制。")]),v._v(" "),_("p",[v._v("那么这时主进程进行大key的写操作命令时，复制物理内存的过程就会比较耗时，有阻塞的风险；还有数据不一致的问题，主进程修改了子进程重写的相同的key，设置一个aof重写缓冲区，主进程这时需要执行三种命令：执行客户端发来的命令，写命令追加到aof缓冲区，追到aof重写缓冲区，信号机制的子进程通知主进程写完的一种通信方式，主进程收到该信号函数会将aof重写缓冲区的所有内容追加到新的aof文件中，使得数据库状态一致。新的aof文件改名替换原来的aof文件。")]),v._v(" "),_("p",[_("strong",[v._v("RDB快照是怎么实现的？")])]),v._v(" "),_("p",[v._v("快照怎么用？")]),v._v(" "),_("p",[v._v("save，主线程里，通过创建子进程bgsave命令来生成RDB快照文件。")]),v._v(" "),_("p",[v._v("save 900 1")]),v._v(" "),_("p",[v._v("RDB的缺点，快照是全量快照，要把所有内存的数据记录到磁盘中，如果宕机要丢失的数据更多，执行频率比较少。")]),v._v(" "),_("p",[_("strong",[v._v("执行快照时，数据能被修改吗？")])]),v._v(" "),_("p",[v._v("如果主线程要修改共享数据的一块数据，就会发生COW，物理内存就会复制一份键值对A，主线程对这个数据进行修改后，子进程可以继续把原来的数据进行rdb复制。如果系统正好在RDB快照完毕后崩溃了，那么redis将会丢失主线程在快照之间修改的数据。")]),v._v(" "),_("p",[_("strong",[v._v("RDB和AOF的合体？")])]),v._v(" "),_("div",{staticClass:"language-redis line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("aof-use-rdb-preamble yes\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("如果频率太低，容易造成数据丢失，频率太高容易造成资源消耗")]),v._v(" "),_("p",[v._v("开启混合持久化，fork出来的子进程会先将内存的数据以rdb的方式写入到aof文件，然后主线程处理写入命令道aof重写缓冲区，完成后通知主进程将新的rdb和aof的格式aof文件替换旧的aof文件。")]),v._v(" "),_("p",[_("strong",[v._v("大key对持久化的影响？")])]),v._v(" "),_("p",[v._v("大key对aof文件的影响，使用always策略时，同步函数落到磁盘时会造成主线程的阻塞")]),v._v(" "),_("p",[v._v("大key对aof和rdb文件的影响")]),v._v(" "),_("ul",[_("li",[v._v("在主从架构中，要适当调大 repl-backlog-size，避免因为 repl_backlog_buffer 不够大，导致主节点频繁地使用全量同步的方式，全量同步的时候，是会创建 RDB 文件的，也就是会调用 fork 函数。")])]),v._v(" "),_("p",[_("strong",[v._v("二、Redis的过期删除和淘汰策略：")])]),v._v(" "),_("p",[v._v("过期删除策略:")]),v._v(" "),_("p",[_("strong",[v._v("如何设置过期时间？")])]),v._v(" "),_("p",[_("strong",[v._v("如何判定key已经过期了？")]),v._v(" 每当我们对一个 key 设置了过期时间时，Redis 会把该 key 带上过期时间存储到一个"),_("strong",[v._v("过期字典")]),v._v("（expires dict）中，也就是说「过期字典」保存了数据库中所有 key 的过期时间。")]),v._v(" "),_("div",{staticClass:"language-c++ line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("typedef struct redisDb {\n    dict *dict;    /* 数据库键空间，存放着所有的键值对 */\n    dict *expires; /* 键的过期时间 */\n    ....\n} redisDb;\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])]),_("p",[_("strong",[v._v("过期删除策略有哪些？")])]),v._v(" "),_("p",[_("strong",[v._v("Redis过期删除策略时什么？")])]),v._v(" "),_("p",[_("strong",[v._v("内存淘汰策略：")])]),v._v(" "),_("p",[v._v("首先从32位操作系统和64位操作系统去说，32位可用内存为3g，64位的设置为0，则说明没有最大内存的设置。redis3.0以后则设置最大内存限制为0")]),v._v(" "),_("p",[_("strong",[v._v("内存淘汰策略有哪些？")]),v._v(" 8种，无。alllkeys，所有过期keys")]),v._v(" "),_("p",[_("strong",[v._v("LRU算法和LFU算法的区别？")]),v._v(" "),_("img",{attrs:{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/redis/%E8%BF%87%E6%9C%9F%E7%AD%96%E7%95%A5/%E5%86%85%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5.jpg",alt:"img"}})]),v._v(" "),_("p",[_("strong",[v._v("三、缓存篇")])]),v._v(" "),_("p",[v._v("缓存雪崩：可以用redis的双key策略，随机key过期时间，加锁，或者后台更新缓存 Redis故障宕机")])])}),[],!1,null,null,null);_.default=a.exports}}]);