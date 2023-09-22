import * as Cesium from "cesium";
import ImageryProviders from "./consts/ImageryProviders";

const cesium_init = async () => {
  window.CESIUM_BASE_URL = "/";
  //Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZGRlMmNmMy1lNzU1LTQ3MWYtOGJlOC1hZmNkZTZhMGMzNGEiLCJpZCI6ODAzMDgsImlhdCI6MTY0Mjc0ODUxMX0.142EOvCAqJiFuD077fqHPbA0o5YFWwO6sM2WjZmqkVI";
  const viewer = new Cesium.Viewer("cesiumContainer", {
    baseLayer: Cesium.ImageryLayer.fromProviderAsync(
      Cesium.TileMapServiceImageryProvider.fromUrl(
        Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII")
      )
    ),

    //requestRenderMode: true,
    //maximumRenderTimeChange: 5,
    scene3DOnly: true,
    shadows: Cesium.ShadowMode.DISABLED,

    infoBox: false,
    selectionIndicator: false,
    fullscreenButton: false,
    baseLayerPicker: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    contextOptions: {
      webgl: { preserveDrawingBuffer: true }
    },
    navigationInstructionsInitiallyVisible: false,
    clock: {
      clockRange: Cesium.ClockRange.LOOP_STOP,
      currentTime: Cesium.JulianDate.fromIso8601("2021-03-10T14:00:00Z")
    },
    geocoder: false,
    timeline: false,
    animation: false,
    toolbar: false,
  });

  viewer.scene.logarithmicDepthBuffer = false;
  viewer.scene.globe.depthTestAgainstTerrain = true;
  viewer.scene.globe.tileCacheSize = 1000;
  viewer.scene.backgroundColor = Cesium.Color.BLACK;
  viewer.scene.contextOptions = {
    allowTextureFilterAnisotropic: false,
    webgl: {
      antialias: false
    }
  };
  viewer.clock.shouldAnimate = false; //애니메이션 정지
  viewer.clock.multiplier = 1800;

  // 설정한 지도로 변경
  viewer.imageryLayers.addImageryProvider(ImageryProviders.satelite);

  // 세슘 로고 삭제
  viewer._cesiumWidget._creditContainer.parentNode.removeChild(viewer._cesiumWidget._creditContainer);

  return viewer;
};

export default cesium_init;