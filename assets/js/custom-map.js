// assets/js/custom-map.js
// Initializes a Google Map styled to match the WaveScopeAI site palette:
//   Background: #0f172a (deep navy)
//   Accent:     #38bdf8 (vibrant sky-blue)
//   Surface:    #1e293b (slate)
//   Roads:      #1e3a5f (deep blue-grey)
//   Water:      #0c2a45 (dark ocean)
//   Labels:     #94a3b8 (muted slate)

function initMap() {
  const location = { lat: 53.278235, lng: -6.2163456 };

  const styledMapType = [
    // Base geometry
    { elementType: "geometry",             stylers: [{ color: "#0f172a" }] },
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

  // ── Custom Wavescope marker ─────────────────────────────────────────────
  // Build a small branded pin as an inline SVG (no external image dependency).
  // The pin uses the site's accent blue (#38bdf8) with the favicon 'W' glyph.
  const svgMarker = {
    url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="60" viewBox="0 0 48 60">
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/>
          </filter>
        </defs>
        <!-- Pin body -->
        <path d="M24 0C13.51 0 5 8.51 5 19c0 14.25 19 39 19 39s19-24.75 19-39C43 8.51 34.49 0 24 0z"
              fill="#38bdf8" filter="url(#shadow)"/>
        <!-- Inner circle -->
        <circle cx="24" cy="19" r="11" fill="#0f172a"/>
        <!-- Wavescope 'W' letterform in accent blue -->
        <text x="24" y="24" text-anchor="middle"
              font-family="Outfit,Inter,sans-serif" font-weight="700" font-size="13"
              fill="#38bdf8" letter-spacing="-0.5">W</text>
      </svg>
    `),
    scaledSize: new google.maps.Size(48, 60),
    anchor: new google.maps.Point(24, 60)
  };

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Wavescope Ltd – D18CV48",
    icon: svgMarker,
    animation: google.maps.Animation.DROP
  });

  // ── Info window ─────────────────────────────────────────────────────────
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="
        background:#1e293b;
        color:#f8fafc;
        padding:12px 16px;
        border-radius:10px;
        font-family:Inter,sans-serif;
        font-size:13px;
        min-width:180px;
        border:1px solid rgba(56,189,248,0.25);
        box-shadow:0 4px 20px rgba(0,0,0,0.5);
      ">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <div style="
            width:28px;height:28px;border-radius:50%;
            background:#38bdf8;
            display:flex;align-items:center;justify-content:center;
            font-weight:700;font-size:14px;color:#0f172a;flex-shrink:0;
          ">W</div>
          <strong style="color:#38bdf8;font-size:14px;">Wavescope Ltd</strong>
        </div>
        <div style="color:#94a3b8;line-height:1.6;">
          51 Bracken Road<br>
          Sandyford Business Park<br>
          Dublin 18, D18CV48
        </div>
      </div>`
  });

  // Open info window by default so the location is immediately visible
  infoWindow.open(map, marker);

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

window.initMap = initMap;
