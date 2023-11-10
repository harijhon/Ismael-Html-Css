$(document).ready(function() {
    // Détecte le changement dans l'élément <input type="file>
    $("#file-btn").change(function() {
        var fileLabel = $(".file-label");

        if ($(this).get(0).files.length > 0) {
            // Si un fichier a été sélectionné, ajoutez une classe CSS pour changer la couleur de la bordure
            fileLabel.addClass("file-selected");
            console.log("mety");
        } else {
            // Si aucun fichier n'est sélectionné, supprimez la classe CSS pour réinitialiser la couleur de la bordure
            fileLabel.removeClass("file-selected");
        }
    });
});
