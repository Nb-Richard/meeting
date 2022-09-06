frappe.listview_settings['meeting'] = {
	add_fields: ["status"],
	get_indicator: function(doc) {
		return [__(doc.status), {
			"planned": "blue",
			"invitation sent": "orange",
			"in progress": "red",
			"completed": "green",
			"cancelled": "darkgrey"
		}[doc.status], "status,=," + doc.status];
	}
};