function signature(type) {
  var signaturePad = new SignaturePad($(`#${type}Canvas`).get(0));
  $(`#${type}Clear`).click(function () {
    signaturePad.clear();
  });
  $(`#${type}Btn`).click(function () {
    var dataUrl = signaturePad.toDataURL(`image/png`);
    $(`#${type}Img`).attr(`src`, dataUrl);
    if (type == "signatureArbitre" || type == "signatureComissaire") {
      $(`#${type}Img1`).attr(`src`, dataUrl);
    }
  });
  document.getElementById(`${type}Img`).addEventListener(`dblclick`, function () {
    var modal = new bootstrap.Modal(document.getElementById(`${type}`), {
      keyboard: false,
    });
    modal.show();
  });

  if (type == "signatureArbitre" || type == "signatureComissaire") {
    document.getElementById(`${type}Img1`).addEventListener(`dblclick`, function () {
      var modal = new bootstrap.Modal(document.getElementById(`${type}`), {
        keyboard: false,
      });
      modal.show();
    });
  }
}

signature("signatureCapEquipeRecevante");
signature("signatureCapEquipeVisiteuse");
signature("signatureArbitre");
signature("signatureComissaire");
signature("signature1Assistant");
signature("signature2Assistant");
signature("signature4Officiel");
