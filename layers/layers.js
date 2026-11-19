var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Recortado_1 = new ol.format.GeoJSON();
var features_Recortado_1 = format_Recortado_1.readFeatures(json_Recortado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recortado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recortado_1.addFeatures(features_Recortado_1);
var lyr_Recortado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recortado_1, 
                style: style_Recortado_1,
                popuplayertitle: 'Recortado',
                interactive: true,
                title: '<img src="styles/legend/Recortado_1.png" /> Recortado'
            });
var format_Inund_Dissol_2 = new ol.format.GeoJSON();
var features_Inund_Dissol_2 = format_Inund_Dissol_2.readFeatures(json_Inund_Dissol_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inund_Dissol_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inund_Dissol_2.addFeatures(features_Inund_Dissol_2);
var lyr_Inund_Dissol_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inund_Dissol_2, 
                style: style_Inund_Dissol_2,
                popuplayertitle: 'Inund_Dissol',
                interactive: false,
    title: 'Inund_Dissol<br />\
    <img src="styles/legend/Inund_Dissol_2_0.png" /> Alta<br />\
    <img src="styles/legend/Inund_Dissol_2_1.png" /> Média<br />' });
var format_Mov_dissol_3 = new ol.format.GeoJSON();
var features_Mov_dissol_3 = format_Mov_dissol_3.readFeatures(json_Mov_dissol_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mov_dissol_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mov_dissol_3.addFeatures(features_Mov_dissol_3);
var lyr_Mov_dissol_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mov_dissol_3, 
                style: style_Mov_dissol_3,
                popuplayertitle: 'Mov_dissol',
                interactive: false,
    title: 'Mov_dissol<br />\
    <img src="styles/legend/Mov_dissol_3_0.png" /> Alta<br />\
    <img src="styles/legend/Mov_dissol_3_1.png" /> Média<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Recortado_1.setVisible(true);lyr_Inund_Dissol_2.setVisible(false);lyr_Mov_dissol_3.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_Recortado_1,lyr_Inund_Dissol_2,lyr_Mov_dissol_3];
lyr_Recortado_1.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'AREA_KM2': 'AREA_KM2', 'Mov_Alta': 'Mov_Alta', 'Mov_Media': 'Mov_Media', 'Inund_alta': 'Inund_alta', 'Inund_media': 'Inund_media', });
lyr_Inund_Dissol_2.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'CLASSE': 'CLASSE', 'sUS_iNUND_KM2': 'sUS_iNUND_KM2', });
lyr_Mov_dissol_3.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'CLASSE': 'CLASSE', 'Sus_Mov_Km2': 'Sus_Mov_Km2', });
lyr_Recortado_1.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Mov_Alta': 'TextEdit', 'Mov_Media': 'TextEdit', 'Inund_alta': 'TextEdit', 'Inund_media': 'TextEdit', });
lyr_Inund_Dissol_2.set('fieldImages', {'PROCESSO': 'TextEdit', 'CLASSE': 'TextEdit', 'sUS_iNUND_KM2': 'TextEdit', });
lyr_Mov_dissol_3.set('fieldImages', {'PROCESSO': 'TextEdit', 'CLASSE': 'TextEdit', 'Sus_Mov_Km2': 'TextEdit', });
lyr_Recortado_1.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', 'Mov_Alta': 'inline label - always visible', 'Mov_Media': 'inline label - always visible', 'Inund_alta': 'inline label - always visible', 'Inund_media': 'inline label - always visible', });
lyr_Inund_Dissol_2.set('fieldLabels', {'PROCESSO': 'no label', 'CLASSE': 'no label', 'sUS_iNUND_KM2': 'no label', });
lyr_Mov_dissol_3.set('fieldLabels', {'PROCESSO': 'no label', 'CLASSE': 'no label', 'Sus_Mov_Km2': 'no label', });
lyr_Mov_dissol_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});