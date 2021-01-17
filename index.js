
'use strict';

  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);
var count=0;

var offsets=[3.5,
             6.0,//corridoio primo piano
             5.1,
             3.5,//aula conferenze
             3.5,
             3.55,
             3.9, //locurcio aula 2p
             2.0,//biblioteca
             4.8,//cancello ingresso
             4.5, //corridoio elettronica
             5.8, //corridoio chimica
             5.8, //corridoi informatica
             5.8, //corridoio aula conferenze
             5.8,//corridoio lab info3
             5.8,//corridoio lab multimediale
             3.5,//lab info 3
             3.5,//lab chimica
             3.3,//lab fisica
             2.0,//lab info musicale
             3.5,//lab net
             2.03,//lab pcto
             3.5,//lab sistemi
             3.5,//lab elettronica
             1.5,//lab automazione
             4.0,//lab automazione pc
             3.5,//mutimediale
             2.7,//palestra
             3.0,//campetti
             4.5,//piloty elettronica
             3.5,//piloty ingresso
             3.2//piazzale
             ];

var vertical=[-0.102,
              -0.102,//corridoio primo piano
              -0.102,
              -0.09,//aula conferenze
              -0.102,
              0.078,
              -0.062, //locurcio aua 2p
              -0.102, //biblioteca
              -0.075, //cancello ingresso
              -0.102, //corridoio elettronica
              -0.065,  //corridoio chimica
              -0.102, //corridoi informatica
              -0.072, //corridoio aula conferenze
              -0.060,//corridoio lab info3
              -0.060,//corridoio lab multimediale
              -0.060,//lab info 3
              -0.080,//lab chimica
              -0.040,//ab fisica
              -0.020,//lab info musicale
              -0.050,//lab net
               0.050,//lab pcto
              -0.01,//lab sistemi
              -0.102,//lab elettronica
              -0.102,//lab automazione
              -0.102,//lab automazione pc
               0.0,//lab multimediale
              -0.102,//palestra
              -0.102,//campetti
              -0.102,//piloty elettronica
              -0.102,
              -0.05];


  // Create scenes.
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

        // Get the hotspot container for scene.
var container = scene.hotspotContainer();

// Create hotspot with different sources.//pitch: -0.102
      
container.createHotspot(document.getElementById('iframespot'+count), { yaw: offsets[count], pitch: vertical[count] },
  { perspective: { radius: 1640, extraTransforms: "rotateX(5deg)" }});
      
container.createHotspot(document.getElementById('iframeselect'+count), { yaw: -0.35, pitch: -0.239 });
count++;
// HTML sources.
var hotspotHtml=Array(31);
 hotspotHtml[0]={
    youtube: '<iframe width="2360" height="960" src="https://www.youtube.com/embed/n0fgiOyr3w4?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[1]={//corridoio primo piano
    youtube: '<iframe width="1280" height="960" src="https://www.youtube.com/embed/pSGTeXYDUOI?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
          
hotspotHtml[2]={
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/q_2ueXdmVv4?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
      
hotspotHtml[3]={//aula conferenze
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/X8CF_ZcGn0Q?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};

hotspotHtml[4]={
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/UqZh78QEM5E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[5]={
    youtube: '<iframe width="640" height="480" src="https://www.youtube.com/embed/cmKY3ck1Zyg?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[6]={
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/nZ6FctOHgHg?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[7]={ //biblioteca
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/rhie8CaHU3E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[8]={//cancello ingresso
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/RjTfGIz9UQk?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[9]={//corridio elettronica
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/8VwS-EBRZVk?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[10]={ //corridoio chimica
    youtube: '<iframe width="800" height="960" src="https://www.youtube.com/embed/UqZh78QEM5E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[11]={//corridoi informatica
    youtube: '<iframe width="1280" height="960" src="https://www.youtube.com/embed/UqZh78QEM5E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[12]={ //corridoio aula conferenze
    youtube: '<iframe width="800" height="960" src="https://www.youtube.com/embed/UqZh78QEM5E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[13]={//corridoio lab info3
    youtube: '<iframe width="1280" height="960" src="https://www.youtube.com/embed/UqZh78QEM5E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[14]={//corridoio lab multimediale
    youtube: '<iframe width="1280" height="960" src="https://www.youtube.com/embed/K8zt9wfCc8c?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[15]={//lab info 3
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/x1-pRGldWbM?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[16]={//lab chimica
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/WoOAtcwexfQ?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[17]={//lab fisica
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/UqZh78QEM5E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[18]={//lab info musicale
    youtube: '<iframe width="2360" height="960" src="https://www.youtube.com/embed/kneaG7jM-I8?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[19]={//lab net
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/66Pb_myI-V8?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[20]={//lab pcto
    youtube: '<iframe width="640" height="480" src="https://www.youtube.com/embed/UqZh78QEM5E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[21]={//lab sistemi
    youtube: '<iframe width="640" height="480" src="https://www.youtube.com/embed/1DziJxUnSQA?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[22]={//lab elettronica
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/UqZh78QEM5E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[23]={//lab automazione
    youtube: '<iframe width="1280" height="960" src="https://www.youtube.com/embed/y5K3qDl4Oe0?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[24]={//lab automazione pc
    youtube: '<iframe width="1280" height="960" src="https://www.youtube.com/embed/Op_BYYbo5bE?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[25]={//lab multimediale
    youtube: '<iframe width="1280" height="640" src="https://www.youtube.com/embed/XzZoBmaeJ3o?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[26]={//palestra
    youtube: '<iframe width="1280" height="960" src="https://www.youtube.com/embed/wcgZycSN2T4?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[27]={//campetti
    youtube: '<iframe width="1280" height="480" src="https://www.youtube.com/embed/UqZh78QEM5E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[28]={//piloty elettronica
    youtube: '<iframe width="1280" height="960" src="https://www.youtube.com/embed/C_KYmjUF8no?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};
hotspotHtml[29]={
    youtube: '<iframe width="1280" height="960" src="https://www.youtube.com/embed/UqZh78QEM5E?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};

hotspotHtml[30]={
    youtube: '<iframe width="1280" height="960" src="https://www.youtube.com/embed/WiSyGodJ3OM?rel=0&amp;controls=0&amp;showinfo=0&amp;" frameborder="0" allowfullscreen></iframe>'
};

      
// Switch sources when clicked.
function switchHotspot(id) {
  for(var i=0;i<31;i++)
      {
  var wrapper = document.getElementById('iframespot'+i);
  wrapper.innerHTML = hotspotHtml[i][id];
      }
      }

switchHotspot('youtube');
      
var switchElements = document.querySelectorAll('[data-source]');
for (var i = 0; i < switchElements.length; i++) {
  var element = switchElements[i];
  addClickEvent(element);
}

function addClickEvent(element) {
  element.addEventListener('click', function() {
    switchHotspot(element.getAttribute('data-source'));
  });
} 
      
      
    // Create link hotspots.
    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function() {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      if (document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggle = function() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    };

    // Show content when hotspot is clicked.
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  // Display the initial scene.
  switchScene(scenes[0]);


