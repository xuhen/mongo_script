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
