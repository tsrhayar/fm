// signature cap eq recevante
var signatureCapEquipeRecevantePad = new SignaturePad(
  $("#signatureCapEquipeRecevanteCanvas").get(0)
);
$("#signatureCapEquipeRecevanteClear").click(function () {
  signatureCapEquipeRecevantePad.clear();
});
$(`#signatureCapEquipeRecevanteBtn`).click(function () {
  var signatureCapEquipeRecevanteDataUrl = signatureCapEquipeRecevantePad.toDataURL("image/png");
  $("#signatureCapEquipeRecevanteImg").attr("src", signatureCapEquipeRecevanteDataUrl);
});
document.getElementById("signatureCapEquipeRecevanteImg").addEventListener("dblclick", function () {
  var signatureCapEquipeRecevanteModal = new bootstrap.Modal(
    document.getElementById("signatureCapEquipeRecevante"),
    {
      keyboard: false,
    }
  );
  signatureCapEquipeRecevanteModal.show();
});

// signature cap eq visiteuse
var signatureCapEquipeVisiteusePad = new SignaturePad(
  $("#signatureCapEquipeVisiteuseCanvas").get(0)
);
$("#signatureCapEquipeVisiteuseClear").click(function () {
  signatureCapEquipeVisiteusePad.clear();
});
$(`#signatureCapEquipeVisiteuseBtn`).click(function () {
  var signatureCapEquipeVisiteuseDataUrl = signatureCapEquipeVisiteusePad.toDataURL("image/png");
  $("#signatureCapEquipeVisiteuseImg").attr("src", signatureCapEquipeVisiteuseDataUrl);
});
document.getElementById("signatureCapEquipeVisiteuseImg").addEventListener("dblclick", function () {
  var signatureCapEquipeVisiteuseModal = new bootstrap.Modal(
    document.getElementById("signatureCapEquipeVisiteuse"),
    {
      keyboard: false,
    }
  );
  signatureCapEquipeVisiteuseModal.show();
});

// signature arbitre
var signatureArbitrePad = new SignaturePad($("#signatureArbitreCanvas").get(0));
$("#signatureArbitreClear").click(function () {
  signatureArbitrePad.clear();
});
$(`#signatureArbitreBtn`).click(function () {
  var signatureArbitreDataUrl = signatureArbitrePad.toDataURL("image/png");
  $("#signatureArbitreImg").attr("src", signatureArbitreDataUrl);
  $("#signatureArbitreImg1").attr("src", signatureArbitreDataUrl);
});
document.getElementById("signatureArbitreImg").addEventListener("dblclick", function () {
  var signatureArbitreModal = new bootstrap.Modal(document.getElementById("signatureArbitre"), {
    keyboard: false,
  });
  signatureArbitreModal.show();
});
document.getElementById("signatureArbitreImg1").addEventListener("dblclick", function () {
  var signatureArbitreModal = new bootstrap.Modal(document.getElementById("signatureArbitre"), {
    keyboard: false,
  });
  signatureArbitreModal.show();
});

// signature comissaire
var signatureComissairePad = new SignaturePad($("#signatureComissaireCanvas").get(0));
$("#signatureComissaireClear").click(function () {
  signatureComissairePad.clear();
});
$(`#signatureComissaireBtn`).click(function () {
  var signatureComissaireDataUrl = signatureComissairePad.toDataURL("image/png");
  $("#signatureComissaireImg").attr("src", signatureComissaireDataUrl);
  $("#signatureComissaireImg1").attr("src", signatureComissaireDataUrl);
});
document.getElementById("signatureComissaireImg").addEventListener("dblclick", function () {
  var signatureComissaireModal = new bootstrap.Modal(
    document.getElementById("signatureComissaire"),
    {
      keyboard: false,
    }
  );
  signatureComissaireModal.show();
});
document.getElementById("signatureComissaireImg1").addEventListener("dblclick", function () {
  var signatureComissaireModal = new bootstrap.Modal(
    document.getElementById("signatureComissaire"),
    {
      keyboard: false,
    }
  );
  signatureComissaireModal.show();
});

// signature 1 assistant
var signature1AssistantPad = new SignaturePad($("#signature1AssistantCanvas").get(0));
$("#signature1AssistantClear").click(function () {
  signature1AssistantPad.clear();
});
$(`#signature1AssistantBtn`).click(function () {
  var signature1AssistantDataUrl = signature1AssistantPad.toDataURL("image/png");
  $("#signature1AssistantImg").attr("src", signature1AssistantDataUrl);
});
document.getElementById("signature1AssistantImg").addEventListener("dblclick", function () {
  var signature1AssistantModal = new bootstrap.Modal(
    document.getElementById("signature1Assistant"),
    {
      keyboard: false,
    }
  );
  signature1AssistantModal.show();
});

// signature 2 assistant
var signature2AssistantPad = new SignaturePad($("#signature2AssistantCanvas").get(0));
$("#signature2AssistantClear").click(function () {
  signature2AssistantPad.clear();
});
$(`#signature2AssistantBtn`).click(function () {
  var signature2AssistantDataUrl = signature2AssistantPad.toDataURL("image/png");
  $("#signature2AssistantImg").attr("src", signature2AssistantDataUrl);
});
document.getElementById("signature2AssistantImg").addEventListener("dblclick", function () {
  var signature2AssistantModal = new bootstrap.Modal(
    document.getElementById("signature2Assistant"),
    {
      keyboard: false,
    }
  );
  signature2AssistantModal.show();
});

// signature 4 officiel
var signature4OfficielPad = new SignaturePad($("#signature4OfficielCanvas").get(0));
$("#signature4OfficielClear").click(function () {
  signature4OfficielPad.clear();
});
$(`#signature4OfficielBtn`).click(function () {
  var signature4OfficielDataUrl = signature4OfficielPad.toDataURL("image/png");
  $("#signature4OfficielImg").attr("src", signature4OfficielDataUrl);
});
document.getElementById("signature4OfficielImg").addEventListener("dblclick", function () {
  var signature4OfficielModal = new bootstrap.Modal(
    document.getElementById("signature4Officiel"),
    {
      keyboard: false,
    }
  );
  signature4OfficielModal.show();
});


///
