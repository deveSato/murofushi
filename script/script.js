function initMap() {
	var latlng = new google.maps.LatLng( 34.808502, 135.639683 );
	var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 14,
				center: latlng
	});

	//マーカーの設定
	var marker = new google.maps.Marker({
	position: latlng,
	map: map,
	icon: new google.maps.MarkerImage(
	'マーカー画像のURL',//マーカー画像URL
	new google.maps.Size(60, 80),//マーカー画像のサイズ
	new google.maps.Point(0, 0),//マーカー画像表示の起点（変更しない）
	new google.maps.Point(30, 80)//マーカー位置の調整
	),
	});
    
	var mapStyle = [ {
		"stylers": [ {
		"saturation": -100
		} ]
	} ];
	var mapType = new google.maps.StyledMapType(mapStyle);
		map.mapTypes.set( 'GrayScaleMap', mapType);
		map.setMapTypeId( 'GrayScaleMap' );
}


//遅延読み込みの実装
const observer = lozad();
observer.observe();