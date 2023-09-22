import cesium_init from "/js/cesium_init";

import "/css/font.css";
import "/css/reset.css";
import "/css/common.css";
import "cesium/Build/Cesium/Widgets/widgets.css";

let viewer = null;
cesium_init().then((r)=>{
  viewer = r;
});