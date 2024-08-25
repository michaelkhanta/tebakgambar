$(document).ready(function() {
    var animals = [
        { name: "ayam", image: "ayam.jpg" },
        { name: "kucing", image: "kucing.jpg" },
        { name: "kuda", image: "kuda.jpg" },
        { name: "kura-kura", image: "kura-kura.jpg" },
        { name: "beruang", image: "beruang.jpg" },
        { name: "ikan", image: "ikan.jpg" },
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateQuestion() {
        shuffleArray(animals);


        var animalImagesHTML = '';
        animals.forEach(function(animal) {
            animalImagesHTML += '<div class="col-4 mb-3"><img src="' + animal.image + '" class="img-fluid animal" alt="' + animal.name + '"></div>';
        });
        $('.row').html(animalImagesHTML);

        var randomIndex = Math.floor(Math.random() * animals.length);
        var selectedAnimal = animals[randomIndex];

        $(".question").text("Cari " + selectedAnimal.name);

        $(".animal").off('click').on('click', function() {
            var clickedAnimal = $(this).attr("alt");
            if (clickedAnimal === selectedAnimal.name) {
                alert("Benar! Ini adalah " + selectedAnimal.name + ".");
            } else {
                alert("Salah! Coba lagi.");
            }
            generateQuestion(); 
        });
    }

    generateQuestion(); 
});
