$(document).ready(function () {
  function tableauJoueur(type, nombre) {
    $(`#joueurs-${type}`).html("");
    for (let i = 0; i < nombre; i++) {
      $(`#joueurs-${type}`).append(`
                <div ${i == 10 ? "class=mb-2" : ""} >
                    <div class="row border border-dark">
                        <div
                            class="col-4 col-lg-3 p-1 order-0 order-lg-0 d-flex border border-dark num-joueur"
                        >
                            
                            <div class="row">
                              <div class="col-4"><input class="ms-2 form-check-input me-2" type="radio" name="captitaine-${type}"></div>
                              <div class="col-8"><input type="number" class="w-100 text-center" /></div>
                            </div>
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
    }
  }
  function tableauAccompagnateurs(type, nombre) {
    $(`#accompagnanteurs-${type}`).html("");
    for (let i = 0; i < nombre; i++) {
      $(`#accompagnanteurs-${type}`).append(`
                <div ${i == 10 ? "class=mb-2" : ""}>
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
    }
  }

  tableauJoueur("recevante", 20);
  tableauJoueur("visiteuse", 20);

  tableauAccompagnateurs("recevante", 7);
  tableauAccompagnateurs("visiteuse", 7);

  $("input").keyup(function () {
    this.value = this.value.toLocaleUpperCase();
  });
});

function rasOrReserve(name) {
  $(`input[name="${name}"]`).click(function () {
    if ($(this).val() == "ras") {
      $(`#${name}`).html(`<div class="ras-${name} d-flex">
        <span class="display-1 m-auto">RAS</span>
      </div>`);
    } else if ($(this).val() == "reserve") {
      $(`#${name}`).html(`<textarea
        class="w-100 h-100 p-2"
        name=""
        rows="10"
        id="reserve-qualification-visiteuse"
      ></textarea>`);
    }

    //

    rtlIfArabic("#reserve-qualification-recevante");
    rtlIfArabic("#reserve-qualification-visiteuse");
  });
}
rasOrReserve("reserve-recevante");
rasOrReserve("reserve-visiteuse");

function rtlIfArabic(e) {
  $(e).keyup(function () {
    const arabic_regex = /[\u0600-\u06FF]/;
    if (arabic_regex.test($(this).val())) {
      $(this).attr("dir", "rtl");
    } else {
      $(this).attr("dir", "ltr");
    }
  });
}

$('input[name="reserve-technique"]').click(function () {
  console.log($(this).val());
  if ($(this).val() == "ras") {
    $("#reserve-technique").html(`
      <div class="row">
        <div class="col-12 border border-dark reserve-technique-default d-flex">
          <span class="display-1 m-auto">Ras</span>
        </div>
      </div>
    `);
  } else if ($(this).val() == "reserve") {
    $("#reserve-technique").html(`
      <div class="row">
        <div class="col-12 border border-dark p-2 d-flex">
          <textarea class="w-100" name="" rows="10" id="reserve-technique-input"></textarea>
        </div>
      </div>
    `);
  }
  rtlIfArabic("#reserve-technique-input");
});
