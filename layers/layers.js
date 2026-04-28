var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WebmapGuzergahguzergah_1 = new ol.format.GeoJSON();
var features_WebmapGuzergahguzergah_1 = format_WebmapGuzergahguzergah_1.readFeatures(json_WebmapGuzergahguzergah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WebmapGuzergahguzergah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebmapGuzergahguzergah_1.addFeatures(features_WebmapGuzergahguzergah_1);
var lyr_WebmapGuzergahguzergah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WebmapGuzergahguzergah_1, 
                style: style_WebmapGuzergahguzergah_1,
                popuplayertitle: 'WebmapGuzergah — guzergah',
                interactive: true,
                title: '<img src="styles/legend/WebmapGuzergahguzergah_1.png" /> WebmapGuzergah — guzergah'
            });
var format_WebmapNoktasalnoktasal_2 = new ol.format.GeoJSON();
var features_WebmapNoktasalnoktasal_2 = format_WebmapNoktasalnoktasal_2.readFeatures(json_WebmapNoktasalnoktasal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WebmapNoktasalnoktasal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebmapNoktasalnoktasal_2.addFeatures(features_WebmapNoktasalnoktasal_2);
var lyr_WebmapNoktasalnoktasal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WebmapNoktasalnoktasal_2, 
                style: style_WebmapNoktasalnoktasal_2,
                popuplayertitle: 'WebmapNoktasal — noktasal',
                interactive: true,
                title: '<img src="styles/legend/WebmapNoktasalnoktasal_2.png" /> WebmapNoktasal — noktasal'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_WebmapGuzergahguzergah_1.setVisible(true);lyr_WebmapNoktasalnoktasal_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WebmapGuzergahguzergah_1,lyr_WebmapNoktasalnoktasal_2];
lyr_WebmapGuzergahguzergah_1.set('fieldAliases', {'fid': 'fid', 'ILCE': 'ILCE', 'PROJEADI': 'PROJEADI', 'YIL': 'YIL', 'ProjeNo': 'ProjeNo', 'TIP': 'TIP', });
lyr_WebmapNoktasalnoktasal_2.set('fieldAliases', {'fid': 'fid', 'ILCE': 'ILCE', 'PROJEADI': 'PROJEADI', 'YIL': 'YIL', 'PROJENO': 'PROJENO', 'TIP': 'TIP', });
lyr_WebmapGuzergahguzergah_1.set('fieldImages', {'fid': 'TextEdit', 'ILCE': 'TextEdit', 'PROJEADI': 'TextEdit', 'YIL': 'Range', 'ProjeNo': 'TextEdit', 'TIP': 'TextEdit', });
lyr_WebmapNoktasalnoktasal_2.set('fieldImages', {'fid': 'TextEdit', 'ILCE': 'TextEdit', 'PROJEADI': 'TextEdit', 'YIL': 'Range', 'PROJENO': 'TextEdit', 'TIP': 'TextEdit', });
lyr_WebmapGuzergahguzergah_1.set('fieldLabels', {'fid': 'no label', 'ILCE': 'inline label - always visible', 'PROJEADI': 'header label - always visible', 'YIL': 'inline label - always visible', 'ProjeNo': 'inline label - always visible', 'TIP': 'inline label - always visible', });
lyr_WebmapNoktasalnoktasal_2.set('fieldLabels', {'fid': 'hidden field', 'ILCE': 'inline label - always visible', 'PROJEADI': 'header label - always visible', 'YIL': 'inline label - always visible', 'PROJENO': 'inline label - always visible', 'TIP': 'inline label - always visible', });
lyr_WebmapNoktasalnoktasal_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});