// assets/js/custom-map.js
// Initializes a Google Map styled to match the WaveScopeAI site palette:
//   Background: #0f172a (deep navy)
//   Accent:     #38bdf8 (vibrant sky-blue)
//   Surface:    #1e293b (slate)
//   Roads:      #1e3a5f (deep blue-grey)
//   Water:      #0284c7 (brand deep-blue)
//   Labels:     #94a3b8 (muted slate)

function initMap() {
  const location = { lat: 53.278235, lng: -6.2163456 };

  const styledMapType = [
    // Base geometry
    { elementType: "geometry",              stylers: [{ color: "#0f172a" }] },
    { elementType: "labels.text.stroke",   stylers: [{ color: "#0f172a" }] },
    { elementType: "labels.text.fill",     stylers: [{ color: "#64748b" }] },

    // Administrative
    { featureType: "administrative",
      elementType: "geometry",             stylers: [{ color: "#1e293b" }] },
    { featureType: "administrative.locality",
      elementType: "labels.text.fill",     stylers: [{ color: "#94a3b8" }] },
    { featureType: "administrative.country",
      elementType: "labels.text.fill",     stylers: [{ color: "#64748b" }] },
    { featureType: "administrative.land_parcel",
                                           stylers: [{ visibility: "off" }] },

    // POI
    { featureType: "poi",
      elementType: "labels.text.fill",     stylers: [{ color: "#64748b" }] },
    { featureType: "poi",
      elementType: "geometry",             stylers: [{ color: "#162032" }] },
    { featureType: "poi.park",
      elementType: "geometry",             stylers: [{ color: "#0d2137" }] },
    { featureType: "poi.park",
      elementType: "labels.text.fill",     stylers: [{ color: "#476783" }] },
    { featureType: "poi.park",
      elementType: "labels.text.stroke",   stylers: [{ color: "#0d2137" }] },
    { featureType: "poi.business",
                                           stylers: [{ visibility: "off" }] },

    // Roads
    { featureType: "road",
      elementType: "geometry.fill",        stylers: [{ color: "#1e3a5f" }] },
    { featureType: "road",
      elementType: "geometry.stroke",      stylers: [{ color: "#0f172a" }] },
    { featureType: "road",
      elementType: "labels.text.fill",     stylers: [{ color: "#94a3b8" }] },
    { featureType: "road.arterial",
      elementType: "geometry",             stylers: [{ color: "#1e3a5f" }] },
    { featureType: "road.arterial",
      elementType: "geometry.stroke",      stylers: [{ color: "#0f172a" }] },
    { featureType: "road.highway",
      elementType: "geometry",             stylers: [{ color: "#1d4ed8" }] },
    { featureType: "road.highway",
      elementType: "geometry.stroke",      stylers: [{ color: "#0284c7" }] },
    { featureType: "road.highway",
      elementType: "labels.text.fill",     stylers: [{ color: "#38bdf8" }] },
    { featureType: "road.highway.controlled_access",
      elementType: "geometry",             stylers: [{ color: "#2563eb" }] },
    { featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",      stylers: [{ color: "#0284c7" }] },
    { featureType: "road.local",
      elementType: "labels.text.fill",     stylers: [{ color: "#475569" }] },

    // Transit
    { featureType: "transit",
      elementType: "geometry",             stylers: [{ color: "#1e293b" }] },
    { featureType: "transit.station",
      elementType: "labels.text.fill",     stylers: [{ color: "#38bdf8" }] },

    // Water — brand blue
    { featureType: "water",
      elementType: "geometry",             stylers: [{ color: "#0c2a45" }] },
    { featureType: "water",
      elementType: "labels.text.fill",     stylers: [{ color: "#38bdf8" }] },
    { featureType: "water",
      elementType: "labels.text.stroke",   stylers: [{ color: "#0c2a45" }] }
  ];

  const map = new google.maps.Map(document.getElementById("custom-map"), {
    center: location,
    zoom: 15,
    styles: styledMapType,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    gestureHandling: "cooperative"
  });

  // Custom marker using the brand accent colour
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Wavescope Ltd",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: "#38bdf8",
      fillOpacity: 1,
      strokeColor: "#0f172a",
      strokeWeight: 2
    }
  });

  // Info window
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="background:#1e293b;color:#f8fafc;padding:10px 14px;border-radius:8px;font-family:Inter,sans-serif;font-size:13px;min-width:160px;">
        <strong style="color:#38bdf8;display:block;margin-bottom:4px;">Wavescope Ltd</strong>
        51 Bracken Road<br>Sandyford, Dublin 18
      </div>`
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

window.initMap = initMap;
