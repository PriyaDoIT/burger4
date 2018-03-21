
	$(".devoured").click(function (event) {
		event.preventDefault();
		var devoured = {
			devoured: true
		};
		var id = $(this).attr("id");
		console.log(id);
		$.ajax("/burgers/update/" + id, {
			type: "PUT",
			data: devoured
		}).then(
			function () {
				location.reload();
			}
		);
	}); 

