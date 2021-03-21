ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32638").setExtent([-3177.207962, 4454475.348053, 816270.412000, 4909492.641475]);
var wms_layers = [];

var format_testregionebi_0 = new ol.format.GeoJSON();
var features_testregionebi_0 = format_testregionebi_0.readFeatures(json_testregionebi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32638'});
var jsonSource_testregionebi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_testregionebi_0.addFeatures(features_testregionebi_0);
var lyr_testregionebi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_testregionebi_0, 
                style: style_testregionebi_0,
                interactive: true,
    title: 'test regionebi<br />\
    <img src="styles/legend/testregionebi_0_0.png" /> <br />\
    <img src="styles/legend/testregionebi_0_1.png" /> Achara<br />\
    <img src="styles/legend/testregionebi_0_2.png" /> Apkhazeti<br />\
    <img src="styles/legend/testregionebi_0_3.png" /> Guria<br />\
    <img src="styles/legend/testregionebi_0_4.png" /> Imereti<br />\
    <img src="styles/legend/testregionebi_0_5.png" /> Kakheti<br />\
    <img src="styles/legend/testregionebi_0_6.png" /> Kvemo_kartli<br />\
    <img src="styles/legend/testregionebi_0_7.png" /> Mtskheta_mtianeti<br />\
    <img src="styles/legend/testregionebi_0_8.png" /> Racha_lechkhumi<br />\
    <img src="styles/legend/testregionebi_0_9.png" /> Samegrelo_zemosvaneti<br />\
    <img src="styles/legend/testregionebi_0_10.png" /> Samtskhe_zhavakheti<br />\
    <img src="styles/legend/testregionebi_0_11.png" /> Shida_kartli<br />\
    <img src="styles/legend/testregionebi_0_12.png" /> Tbilisi<br />'
        });

lyr_testregionebi_0.setVisible(true);
var layersList = [lyr_testregionebi_0];
lyr_testregionebi_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'saxeli': 'saxeli', 'saxeli_en': 'saxeli_en', 'Area_kv_km': 'Area_kv_km', 'Area_ha': 'Area_ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_testregionebi_0.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'saxeli': 'TextEdit', 'saxeli_en': 'TextEdit', 'Area_kv_km': 'TextEdit', 'Area_ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_testregionebi_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'saxeli': 'no label', 'saxeli_en': 'no label', 'Area_kv_km': 'no label', 'Area_ha': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_testregionebi_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});