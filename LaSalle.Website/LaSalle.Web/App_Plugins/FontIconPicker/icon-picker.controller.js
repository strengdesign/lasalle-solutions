angular.module("umbraco").controller("FontIconPicker",
	function($scope, assetsService) {
		var PLUGIN_PATH = "/App_Plugins/FontIconPicker";

		assetsService.load([
				PLUGIN_PATH + '/vendor/select2/select2.min.js',
			])
			.then(function() {
				var format = function(value) {
						return '<i class="icon ' + value.text + '"></i> ';
					},
					options = {
						formatSelection: format,
						formatResult: format,
						escapeMarkup: function(m) { return m; },
						width: 'element',
						allowClear: true,
						placeholder: "None"
					};

				$('select.font-icon-picker').select2(options);
				
				var checkElementID = window.setInterval(checkElement, 250);
				
				function checkElement() {
					if($('#' + $scope.model.alias).length) {
						$('#' + $scope.model.alias).select2("val", $scope.model.value);
						clearInterval(checkElementID);
					}
				}
			});

		assetsService.loadCss(PLUGIN_PATH + '/vendor/select2/select2.css');
		assetsService.loadCss(PLUGIN_PATH + '/icon-picker.css');
	});
