$(document).ready(function () {
  function tableauJoueur(type, nombre) {
    $(`#joueurs-${type}`).html("");
    for (let i = 0; i < nombre; i++) {
      $(`#joueurs-${type}`).append(`
        <div>
          <div class="row border border-dark">
              <div class="col-6 col-lg-3 p-1 order-0 order-lg-0 d-flex border border-dark num-joueur" >
                  <div class="row">
                    <div class="col-5 col-sm-6 col-md-4 col-lg-6">
                      <div class="row">
                        <div class="col-5 text-muted">
                          ${i + 1}&nbsp;•
                        </div>
                        <div class="col-7">
                          <input class="ms-2 form-check-input me-2" type="radio" name="captitaine-${type}" id="captitaine-${type}" value=${i + 1}></div>
                        </div>
                      </div>
                    <div class="col-7 col-sm-6 col-md-8 col-lg-6"><input type="number" class="w-100 text-center" placeholder="N°..." name="num-j-eq-${type}-${i + 1}" id="num-j-eq-${type}-${i + 1}"/></div>
                  </div>
              </div>
              <div class="col-12 col-lg-6 p-1 order-2 order-lg-1 d-flex border border-dark flex-column nom-joueur" >
                  <input type="text" class="w-100 text-center" placeholder="Nom et prénom..." name="nom-prenom-j-eq-${type}-${i + 1}" id="nom-prenom-j-eq-${type}-${i + 1}"/>
              </div>
              <div class="col-6 col-lg-3 p-1 order-1 order-lg-2 d-flex num-licence">
                  <input type="text" class="w-100 text-center" placeholder="Licence..." name="licence-j-eq-${type}-${i + 1}" id="licence-j-eq-${type}-${i + 1}"/>
              </div>
          </div>
      </div>`);
      if (i == 10) {
        $(`#joueurs-${type}`).append('<hr class="my-2"/>');
      }
    }
  }
  function tableauAccompagnateurs(type, nombre) {
    $(`#accompagnanteurs-${type}`).html("");
    for (let i = 0; i < nombre; i++) {
      $(`#accompagnanteurs-${type}`).append(`
        <div ${i == 10 ? "class=mb-2" : ""}>
            <div class="row border border-dark">
                <div class="col-4 col-lg-3 p-1 order-0 order-lg-0 d-flex border border-dark num-joueur" >
                <div class="row">
                  <div class="col-3">
                    <div class="row">
                      <div class="col-12 text-muted">
                        ${i + 1}&nbsp;•
                      </div>
                    </div>
                  </div>
                  <div class="col-9"><input type="number" class="w-100 text-center" placeholder="Fonction ..." name="fonction-acc-eq-${type}-${i + 1}" id="fonction-acc-eq-${type}-${i + 1}"/></div>
                </div>
                </div>
                <div class="col-12 col-lg-6 p-1 order-2 order-lg-1 d-flex border border-dark flex-column nom-joueur" >
                    <input type="text" class="w-100 text-center" placeholder="Nom et prénom..." name="nom-prenom-acc-eq-${type}-${i + 1}" id="nom-prenom-acc-eq-${type}-${i + 1}"/>
                </div>
                <div class="col-8 col-lg-3 p-1 order-1 order-lg-2 d-flex num-licence">
                    <input type="text" class="w-100 text-center" placeholder="Licence..." name="licence-acc-eq-${type}-${i + 1}" id="licence-acc-eq-${type}-${i + 1}"/>
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
      $(`#${name}`).html(
        `<textarea class="w-100 h-100 p-2" name="${name.split('-')[0]}-qualification-${name.split('-')[1]}" rows="10" id="${name.split('-')[0]}-qualification-${name.split('-')[1]}"></textarea>`
      );
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
          <span class="display-1 m-auto">RAS</span>
        </div>
      </div>
    `);
  } else if ($(this).val() == "reserve") {
    $("#reserve-technique").html(`
      <div class="row">
        <div class="col-12 border border-dark p-2 d-flex">
          <textarea class="w-100" name="reserve-technique" rows="10" id="reserve-technique-input"></textarea>
        </div>
      </div>
    `);
  }
  rtlIfArabic("#reserve-technique-input");
});

function nombreJoueurAvertiOuExplu(type, equipe) {
  for (let i = 0; i < 15; i++) {
    $(`#joueurs-${type}-${equipe}`).append(`
      <div class="row border border-dark avertisement mb-1 mx-1 d-none">
        <div class="col-4 col-lg-3 p-1 order-0 order-lg-0 border border-dark num-joueur">
          <div class="row">
            <div class="col-3 text-center text-muted">${i + 1}•</div>
            <div class="col-9">
              <input type="number" class="w-100 text-center" placeholder="N°..." />
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 p-1 order-2 order-lg-1 border border-dark nom-joueur">
          <input type="text" class="w-100 text-center" placeholder="Nom et prénom..."/>
        </div>
        <div class="col-8 col-lg-3 p-1 order-1 order-lg-2 num-licence">
          <input type="text" class="w-100 text-center" placeholder="Licence..."/>
        </div>
      </div>
    `);
  }
  $(`#ajouter-joueur-${type}-${equipe}`).click(function () {
    let childrenDiv = $(`#joueurs-${type}-${equipe}`).children();
    for (let i = 0; i < childrenDiv.length; i++) {
      const element = childrenDiv[i];
      if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
        if (!i) {
          childrenDiv[1].classList.remove("d-none");
        }
        break;
      }
    }
  });
  $(`#supprimer-joueur-${type}-${equipe}`).click(function () {
    let lastDiv = true;
    let childrenDiv = $(`#joueurs-${type}-${equipe}`).children();
    for (let i = 0; i < childrenDiv.length; i++) {
      if (i > 2) {
        const element = childrenDiv[i];
        if (element.classList.contains("d-none")) {
          childrenDiv[i - 1].classList.add("d-none");
          let allInput = childrenDiv[i - 1].querySelectorAll("input");
          for (let i = 0; i < allInput.length; i++) {
            const input = allInput[i];
            input.value = "";
          }
          lastDiv = false;
          break;
        }
      }
      if (childrenDiv[2].classList.contains("d-none")) {
        childrenDiv[0].classList.add("d-none");
        let allInput = childrenDiv[1].querySelectorAll("input");
        for (let i = 0; i < allInput.length; i++) {
          const input = allInput[i];
          input.value = "";
        }
        childrenDiv[1].classList.add("d-none");
        break;
      }
    }
    if (lastDiv) {
      childrenDiv[childrenDiv.length - 1].classList.add("d-none");
      let allInput = childrenDiv[childrenDiv.length - 1].querySelectorAll("input");
      for (let i = 0; i < allInput.length; i++) {
        const input = allInput[i];
        input.value = "";
      }
    }
  });
}
nombreJoueurAvertiOuExplu("averti", "recevante");
nombreJoueurAvertiOuExplu("averti", "visiteuse");
nombreJoueurAvertiOuExplu("explu", "recevante");
nombreJoueurAvertiOuExplu("explu", "visiteuse");
nombreJoueurAvertiOuExplu("blesses", "recevante");
nombreJoueurAvertiOuExplu("blesses", "visiteuse");


