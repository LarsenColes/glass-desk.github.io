function grab_number() {
	date = document.getElementById("date")
	console.log("started")
	$.ajax({
		type: "GET",
		url: "./services/date.py",
		data: { param: "return1" }
	}).done(function (o) {
		date.value = o
	});
}
grab_number()