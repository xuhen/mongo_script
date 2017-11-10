# 这是一些关于在mongodb shell 下操作的脚本片段


### 1 给数组对象添加新的propery

运行之前的数据

```
{ "_id" : ObjectId("5a0559bd93ea236909bf343c"), "movieId" : 1, "name" : "功夫熊猫", "stores" : [ { "address" : "上地五街", "type" : "good" }, { "address" : "清河店", "type" : "good" } ] }
{ "_id" : ObjectId("5a055ad893ea236909bf343d"), "movieId" : 2, "name" : "变形金刚", "stores" : [ { "address" : "三里屯店", "type" : "good" }, { "address" : "望京店", "type" : "good" } ] }
{ "_id" : ObjectId("5a05636893ea236909bf343e"), "movieId" : 3, "name" : "湄公河行动", "stores" : [ { "address" : "四惠店" } ] }
{ "_id" : ObjectId("5a05638c93ea236909bf343f"), "movieId" : 4, "name" : "星球大战" }
```

这是运行的脚本

```
db.movie.find().snapshot().forEach(function(e) {
	if (e.stores) {
		e.stores.forEach(function(item) {
			if (item.type === "good") {
				item.stars = 4;
			}
		})
	}
	db.movie.save(e);
})

```

运行后的数据

```
{ "_id" : ObjectId("5a0559bd93ea236909bf343c"), "movieId" : 1, "name" : "功夫熊猫", "stores" : [ { "address" : "上地五街", "type" : "good", "stars" : 4 }, { "address" : "清河店", "type" : "good", "stars" : 4 } ] }
{ "_id" : ObjectId("5a055ad893ea236909bf343d"), "movieId" : 2, "name" : "变形金刚", "stores" : [ { "address" : "三里屯店", "type" : "good", "stars" : 4 }, { "address" : "望京店", "type" : "good", "stars" : 4 } ] }
{ "_id" : ObjectId("5a05636893ea236909bf343e"), "movieId" : 3, "name" : "湄公河行动", "stores" : [ { "address" : "四惠店" } ] }
{ "_id" : ObjectId("5a05638c93ea236909bf343f"), "movieId" : 4, "name" : "星球大战" }
```