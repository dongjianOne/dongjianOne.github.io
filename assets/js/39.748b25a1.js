(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{528:function(s,t,a){"use strict";a.r(t);var e=a(31),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sql语句性能优化策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql语句性能优化策略"}},[s._v("#")]),s._v(" SQL语句性能优化策略")]),s._v(" "),a("p",[s._v("1.对于查询的优化，应尽量避免全表扫描，首先应该考虑在where及order by涉及的列上建立索引。")]),s._v(" "),a("p",[s._v("2.尽量避免在where子句中对字段进行null值判断，创建表时NULL是默认值，但是大多数时候应该使用NOT NULL，或者使用一个特殊值进行替代，例如0，-1作为默认值。")]),s._v(" "),a("p",[s._v("3.尽量避免在where子句中使用!= 或 <>操作符，这会使索引失效。MySql只对以下操作符生效：<,<=,=,>,>=,BETWEEN,以及某些时候的LIKE(abc%)。")]),s._v(" "),a("p",[s._v("4.尽量避免在where子句中使用or作为连接条件，否则将会导致引擎放弃使用索引而进行全表扫描，可以使用UNION(去重)/UNION ALL 合并查询。")]),s._v(" "),a("p",[s._v("5.慎用IN 和 NOT IN,否则会导致全表扫描，对于连续的数值可以使用BETWEEN代替IN。")]),s._v(" "),a("p",[s._v("6.where子句中使用了参数也会导致全表扫描。")]),s._v(" "),a("p",[s._v("7.尽量避免在where子句中使用表达式和函数操作。")]),s._v(" "),a("p",[s._v("8.很多时候exists代替IN是一个好的选择：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("可以替换为：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("9.并不是在任何情况下都要为了提高查询效率而去建立索引，因为虽然索引提高了查询的效率但同时也降低了insert 和 update的效率，因为插入和更新操作会重新建立索引，所以说是否需要创建索引和创建怎样的索引都需要慎重考虑，视情况而定。一般一个表的索引最好不要超过6个。")]),s._v(" "),a("p",[s._v("10.尽可能的避免频繁的更新索引数据列，因为索引列的顺序就是表记录的物理存储顺序，一旦该列的值改变将导致整个表记录的顺序发生调整，这将耗费很大的资源来维护索引顺序，此时的索引将成为累赘。")]),s._v(" "),a("p",[s._v("11.尽量使用数字型字段，若只包含数值信息的字段尽量不要设计为字符型，这会降低查询和连接的性能，并增加存储的开销。")]),s._v(" "),a("p",[s._v("12.使用varchar和nvarchar代替char/nchar，因为首先变长字段存储的空间小，可以节省存储空间，其次对于查询来说，在一个相对较小的字段内搜索效率显然要高一些。")]),s._v(" "),a("p",[s._v("13.最好不要使用“"),a("em",[s._v("”返回所有字段：select * from t，用具体的字段代替“")]),s._v("”，不要返回用不到的字段。")]),s._v(" "),a("p",[s._v("14.尽量避免向客户端返回大量的数据，如果数据过多就要考虑需求或者实现方式是否合理。")]),s._v(" "),a("p",[s._v("15.当sql语句中连接多个表时，记得使用表的别名并且把别名前缀于每一个列上，这样可以减少解析的时间和那些由于Colunm歧义而导致的语法错误。")]),s._v(" "),a("p",[s._v("16.不要超过5个以上的表连接（Join）,可以考虑使用临时表或表变量来存储“中间结果”。尽量少的使用子查询，视图嵌套不要过深，一般视图嵌套不要超过两个。")]),s._v(" "),a("p",[s._v("17.将查询的结果预先算好放在表中，查询的时候直接select,例如根据其他列信息算出住院费。")]),s._v(" "),a("p",[s._v("18.在使用IN的时候，尽量将使用最频繁的值放在前面，出现次数小的数据放在后面，这样可以减少判断次数。")]),s._v(" "),a("p",[s._v("19.尽量使用exists代替select count(1)，count函数只有在统计所有行数时使用，而且count(1)比count(*)效率高。")]),s._v(" "),a("p",[s._v("20.提高group by 效率，可以将不需要的记录在group by之前就过滤掉。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HAVING")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),s._v("\n")])])]),a("p",[s._v("可以优化为：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" name\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);