import * as Cesium from "cesium";

const ImageryProviders = {
  satelite: new Cesium.WebMapTileServiceImageryProvider({
		url : "http://api.vworld.kr/req/wmts/1.0.0/16622B6D-35E5-3CCC-B165-1B0C64359776/Satellite/{TileMatrix}/{TileRow}/{TileCol}.jpeg",
		layer : "Satellite",
		style : "default",
		format : "image/jpeg",
		tileMatrixSetID : "default028mm",
		maximumLevel: 19
	}),
  vworld: new Cesium.WebMapTileServiceImageryProvider({
    url : "http://api.vworld.kr/req/wmts/1.0.0/16622B6D-35E5-3CCC-B165-1B0C64359776/Satellite/{TileMatrix}/{TileRow}/{TileCol}.jpeg",
    layer : "Satellite",
    style : "default",
    format : "image/jpeg",
    tileMatrixSetID : "default028mm",
    maximumLevel: 19
  }),
  wms_vworld: new Cesium.WebMapTileServiceImageryProvider({
    url : "http://api.vworld.kr/req/wmts/1.0.0/16622B6D-35E5-3CCC-B165-1B0C64359776/Satellite/{TileMatrix}/{TileRow}/{TileCol}.jpeg",
    layer : "Satellite",
    style : "default",
    format : "image/jpeg",
    tileMatrixSetID : "default028mm",
    maximumLevel: 19
  }),

  sumjin_lands: new Cesium.WebMapServiceImageryProvider({
    url : "http://192.168.0.103:8082/geoserver/wms",
    layers: "sjdu:kdrum_lands",
    parameters : {
        format : 'image/png',
        transparent :'true'
    }
  })
};

export default ImageryProviders;