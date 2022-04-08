function tableauJoueur(type, nombre) {
  document.getElementById(`joueurs-${type}`).innerHTML = "";
  for (let i = 0; i < nombre; i++) {
    document.getElementById(`joueurs-${type}`).innerHTML += `
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
        </div>`;
    if (i == 10) {
      document.getElementById(`joueurs-${type}`).innerHTML += `<hr class="my-2"/>`;
    }
  }
}

tableauJoueur("visiteuse", 20)
tableauJoueur("recevante", 20)