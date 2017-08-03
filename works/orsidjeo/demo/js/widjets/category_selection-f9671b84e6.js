var j = jQuery.noConflict();

j(function() {
	let itemsCount = 0;
	j('.posts .post-item').each(function() {
		itemsCount += 1;
		if (itemsCount > 3) {
			j(this).hide();
		}
	});

    j('.posts-nav a').click(function(event) {
    	var event = event || window.event;
    	event.preventDefault();

		j('.posts-nav a').each(function() {
			if (j(this).hasClass('active')) {
				j(this).removeClass('active');
			}
		})

    	function showClass(className) {
    		j('.posts .post-item').each(function() {
				if (j(this).hasClass(className)) {
					
					j(this).show();
				} else {
					j(this).hide();
				}
			});
    	}

    	switch (j(this).attr('id')) {
			case 'category1':
				showClass('Category1');
				j(this).addClass('active');
				break;
			case 'category5':
				showClass('Category5');
				j(this).addClass('active');
				break;
			case 'category3':
				showClass('Category3');
				j(this).addClass('active');
				break;
			case 'category4':
				showClass('Category4');
				j(this).addClass('active');
				break;
			default:
				j('.posts .post-item').each(function() {
					j(this).show();
				});
				j('.view-more a').hide();
				j(this).addClass('active');
		}

		return false;
    });

    j('.view-more a').click(function(event) {
    	var event = event || window.event;
    	event.preventDefault();

    	j('.posts .post-item').each(function() {
			j(this).show();
		});

    	j(this).hide();

    	return false;
    });
});
