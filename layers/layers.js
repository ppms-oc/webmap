ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:31982").setExtent([395504.356292, 6447582.918125, 396331.240297, 6448085.390411]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_20230825_BungeTIN_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "20230825_Bunge TIN",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20230825_BungeTIN_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5800112.676255, -3776763.384994, -5799979.882958, -3776350.164539]
                            })
                        });
var lyr_20230710_BungeTIN_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "20230710_Bunge TIN",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20230710_BungeTIN_2.png",
    attributions: ' ',
                                projection: 'EPSG:31982',
                                alwaysInRange: true,
                                imageExtent: [395928.880000, 6447787.500000, 396000.180000, 6448016.600000]
                            })
                        });
var format_Isbatas10072023_3 = new ol.format.GeoJSON();
var features_Isbatas10072023_3 = format_Isbatas10072023_3.readFeatures(json_Isbatas10072023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Isbatas10072023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isbatas10072023_3.addFeatures(features_Isbatas10072023_3);
var lyr_Isbatas10072023_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isbatas10072023_3, 
                style: style_Isbatas10072023_3,
                interactive: false,
                title: '<img src="styles/legend/Isbatas10072023_3.png" /> Isóbatas 10/07/2023'
            });
var format_Isbatas25082023_4 = new ol.format.GeoJSON();
var features_Isbatas25082023_4 = format_Isbatas25082023_4.readFeatures(json_Isbatas25082023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Isbatas25082023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isbatas25082023_4.addFeatures(features_Isbatas25082023_4);
var lyr_Isbatas25082023_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isbatas25082023_4, 
                style: style_Isbatas25082023_4,
                interactive: false,
                title: '<img src="styles/legend/Isbatas25082023_4.png" /> Isóbatas 25/08/2023'
            });
var format_area_20230825_5 = new ol.format.GeoJSON();
var features_area_20230825_5 = format_area_20230825_5.readFeatures(json_area_20230825_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_area_20230825_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_20230825_5.addFeatures(features_area_20230825_5);
var lyr_area_20230825_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_area_20230825_5, 
                style: style_area_20230825_5,
                interactive: false,
                title: '<img src="styles/legend/area_20230825_5.png" /> area_20230825'
            });
var format_area_20230710_6 = new ol.format.GeoJSON();
var features_area_20230710_6 = format_area_20230710_6.readFeatures(json_area_20230710_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_area_20230710_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_20230710_6.addFeatures(features_area_20230710_6);
var lyr_area_20230710_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_area_20230710_6, 
                style: style_area_20230710_6,
                interactive: false,
                title: '<img src="styles/legend/area_20230710_6.png" /> area_20230710'
            });
var format_Profundidadesem10072023_7 = new ol.format.GeoJSON();
var features_Profundidadesem10072023_7 = format_Profundidadesem10072023_7.readFeatures(json_Profundidadesem10072023_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Profundidadesem10072023_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profundidadesem10072023_7.addFeatures(features_Profundidadesem10072023_7);
var lyr_Profundidadesem10072023_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Profundidadesem10072023_7, 
                style: style_Profundidadesem10072023_7,
                interactive: true,
                title: '<img src="styles/legend/Profundidadesem10072023_7.png" /> Profundidades em 10/07/2023'
            });
var format_Profundidadesem25082023_8 = new ol.format.GeoJSON();
var features_Profundidadesem25082023_8 = format_Profundidadesem25082023_8.readFeatures(json_Profundidadesem25082023_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Profundidadesem25082023_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profundidadesem25082023_8.addFeatures(features_Profundidadesem25082023_8);
var lyr_Profundidadesem25082023_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Profundidadesem25082023_8, 
                style: style_Profundidadesem25082023_8,
                interactive: true,
                title: '<img src="styles/legend/Profundidadesem25082023_8.png" /> Profundidades em 25/08/2023'
            });
var format_PierBianchini_9 = new ol.format.GeoJSON();
var features_PierBianchini_9 = format_PierBianchini_9.readFeatures(json_PierBianchini_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_PierBianchini_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PierBianchini_9.addFeatures(features_PierBianchini_9);
var lyr_PierBianchini_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PierBianchini_9, 
                style: style_PierBianchini_9,
                interactive: false,
                title: '<img src="styles/legend/PierBianchini_9.png" /> Pier Bianchini'
            });
var format_PierBunge_10 = new ol.format.GeoJSON();
var features_PierBunge_10 = format_PierBunge_10.readFeatures(json_PierBunge_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_PierBunge_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PierBunge_10.addFeatures(features_PierBunge_10);
var lyr_PierBunge_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PierBunge_10, 
                style: style_PierBunge_10,
                interactive: false,
                title: '<img src="styles/legend/PierBunge_10.png" /> Pier Bunge'
            });

lyr_GoogleHybrid_0.setVisible(false);lyr_20230825_BungeTIN_1.setVisible(true);lyr_20230710_BungeTIN_2.setVisible(true);lyr_Isbatas10072023_3.setVisible(true);lyr_Isbatas25082023_4.setVisible(true);lyr_area_20230825_5.setVisible(true);lyr_area_20230710_6.setVisible(true);lyr_Profundidadesem10072023_7.setVisible(false);lyr_Profundidadesem25082023_8.setVisible(false);lyr_PierBianchini_9.setVisible(false);lyr_PierBunge_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_20230825_BungeTIN_1,lyr_20230710_BungeTIN_2,lyr_Isbatas10072023_3,lyr_Isbatas25082023_4,lyr_area_20230825_5,lyr_area_20230710_6,lyr_Profundidadesem10072023_7,lyr_Profundidadesem25082023_8,lyr_PierBianchini_9,lyr_PierBunge_10];
lyr_Isbatas10072023_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PROF': 'PROF', });
lyr_Isbatas25082023_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PROF': 'PROF', });
lyr_area_20230825_5.set('fieldAliases', {'fid': 'fid', });
lyr_area_20230710_6.set('fieldAliases', {'fid': 'fid', });
lyr_Profundidadesem10072023_7.set('fieldAliases', {'fid': 'fid', 'VALUE': 'VALUE', });
lyr_Profundidadesem25082023_8.set('fieldAliases', {'fid': 'fid', 'VALUE': 'VALUE', });
lyr_PierBianchini_9.set('fieldAliases', {'fid': 'fid', });
lyr_PierBunge_10.set('fieldAliases', {'fid': 'fid', });
lyr_Isbatas10072023_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'PROF': '', });
lyr_Isbatas25082023_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'PROF': '', });
lyr_area_20230825_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_area_20230710_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_Profundidadesem10072023_7.set('fieldImages', {'fid': 'TextEdit', 'VALUE': 'TextEdit', });
lyr_Profundidadesem25082023_8.set('fieldImages', {'fid': 'TextEdit', 'VALUE': 'TextEdit', });
lyr_PierBianchini_9.set('fieldImages', {'fid': 'TextEdit', });
lyr_PierBunge_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_Isbatas10072023_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'PROF': 'no label', });
lyr_Isbatas25082023_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'PROF': 'no label', });
lyr_area_20230825_5.set('fieldLabels', {'fid': 'no label', });
lyr_area_20230710_6.set('fieldLabels', {'fid': 'no label', });
lyr_Profundidadesem10072023_7.set('fieldLabels', {'fid': 'no label', 'VALUE': 'inline label', });
lyr_Profundidadesem25082023_8.set('fieldLabels', {'fid': 'no label', 'VALUE': 'inline label', });
lyr_PierBianchini_9.set('fieldLabels', {'fid': 'no label', });
lyr_PierBunge_10.set('fieldLabels', {'fid': 'no label', });
lyr_PierBunge_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});