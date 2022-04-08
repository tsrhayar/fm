$(document).ready(function () {
  function tableauJoueur(type, nombre) {
    $(`#joueurs-${type}`).html("");
    for (let i = 0; i < nombre; i++) {
      $(`#joueurs-${type}`).append(`
                <div>
                    <div class="row border border-dark">
                    <div
                        class="col-4 col-lg-3 p-1 order-0 order-lg-0 d-flex border border-dark num-joueur"
                    >
                        <input type="text" class="w-100 text-center" />
                    </div>
                    <div
                        class="col-12 col-lg-6 p-1 order-2 order-lg-1 d-flex border border-dark flex-column nom-joueur"
                    >
                        <input type="text" class="w-100" />
                    </div>
                    <div class="col-8 col-lg-3 p-1 order-1 order-lg-2 d-flex num-licence">
                        <input type="text" class="w-100 text-center" />
                    </div>
                    </div>
                </div>`);
      if (i == 10) {
        $(`#joueurs-${type}`).append(`<hr class="my-2"/> <hr class="d-none">`);
      }
    }
  }

  tableauJoueur("visiteuse", 20);
  tableauJoueur("recevante", 20);

  $("input").keyup(function () {
    this.value = this.value.toLocaleUpperCase();
  });
});

////

let data = {
  type: "FeatureCollection",
  version: "draft",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [2.290084, 49.897443] },
      properties: {
        label: "8 Boulevard du Port 80000 Amiens",
        score: 0.49245200956937796,
        housenumber: "8",
        id: "80021_6590_00008",
        name: "8 Boulevard du Port",
        postcode: "80000",
        citycode: "80021",
        x: 648952.58,
        y: 6977867.25,
        city: "Amiens",
        context: "80, Somme, Hauts-de-France",
        type: "housenumber",
        importance: 0.68013,
        street: "Boulevard du Port",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [2.062794, 49.0317] },
      properties: {
        label: "8 Boulevard du Port 95000 Cergy",
        score: 0.49167382775119606,
        housenumber: "8",
        id: "95127_1448_00008",
        name: "8 Boulevard du Port",
        postcode: "95000",
        citycode: "95127",
        x: 631466.41,
        y: 6881718.82,
        city: "Cergy",
        context: "95, Val-d'Oise, \u00cele-de-France",
        type: "housenumber",
        importance: 0.67157,
        street: "Boulevard du Port",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [3.605884, 43.425225] },
      properties: {
        label: "8 Boulevard du Port 34140 M\u00e8ze",
        score: 0.48639837320574153,
        housenumber: "8",
        id: "34157_0770_00008",
        name: "8 Boulevard du Port",
        postcode: "34140",
        citycode: "34157",
        x: 749085.29,
        y: 6258645.39,
        city: "M\u00e8ze",
        context: "34, H\u00e9rault, Occitanie",
        type: "housenumber",
        importance: 0.61354,
        street: "Boulevard du Port",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [3.036731, 42.79091] },
      properties: {
        label: "8 Boulevard du Port 66420 Le Barcar\u00e8s",
        score: 0.4810256459330143,
        housenumber: "8",
        id: "66017_0249_00008",
        name: "8 Boulevard du Port",
        postcode: "66420",
        citycode: "66017",
        x: 703008.57,
        y: 6187933.13,
        city: "Le Barcar\u00e8s",
        context: "66, Pyr\u00e9n\u00e9es-Orientales, Occitanie",
        type: "housenumber",
        importance: 0.55444,
        street: "Boulevard du Port",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-2.340983, 47.258811] },
      properties: {
        label: "8 Boulevard du Port 44380 Pornichet",
        score: 0.47743746411483245,
        housenumber: "8",
        id: "44132_0141_00008",
        name: "8 Boulevard du Port",
        postcode: "44380",
        citycode: "44132",
        x: 296409.78,
        y: 6697932.63,
        city: "Pornichet",
        context: "44, Loire-Atlantique, Pays de la Loire",
        type: "housenumber",
        importance: 0.51497,
        street: "Boulevard du Port",
      },
    },
  ],
  attribution: "BAN",
  licence: "ETALAB-2.0",
  query: "8 bd du port",
  limit: 5,
};
