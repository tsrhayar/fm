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
