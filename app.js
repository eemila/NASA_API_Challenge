$(function() {

    const galleryUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=s617iVCa1ev5QopBCjnbzjlTynAO8IsS9Q7Qnwon";
    const picOfTheDay = " https://api.nasa.gov/planetary/apod?api_key=s617iVCa1ev5QopBCjnbzjlTynAO8IsS9Q7Qnwon";
    const photoImg = $(".photo-img");
    const photoInfo = $(".photo-info");
    const galleryCtn = $(".gallery-ctn");
    
    // picture of the day
    function apod(){
    $.ajax(picOfTheDay)
    .done(res => {
        console.log(res)
        $(photoImg).append("<img class=photo-img>").attr("src", `${res.url}`);
        photoInfo.append("<p class=photo-info></p>").text(res.explanation);
    })
    .fail(function(){});
}

    // initial uploading gallery photos
    function loadImages(){
    $.ajax (galleryUrl)
    .done(pics => {
        console.log(pics);
        pics.forEach(pic => {

        const newPic = $(`<img src = ${pic.img_src}, class = gallery-img>`);

        //     $(galleryCtn).append("<img class = gallery-img>")
        //     .attr("src", `${pic.img_src}`)
        galleryCtn.append(newPic);
        })
        
    })
}
    // .fail(function(){})
    
    // res.forEach(el => {

    
    // //fcja load more z klikiem na btn
    // $(".load-btn).on("click", function(){
    // const $btn = $(this);
    
    // //dodajemy klasę .loading do buttona, która doda mu ikonkę ładowania
    //     //i wyłączamy go by użytkownik nie był nadgorliwy
    //     $btn.addClass('loading');
    //     $btn.prop('disabled', true);
    
    
    //     })
    //     .done((res) => {
    //         //czyścimy listę przed dodaniem użytkowników
    //         //inaczej ponowne kliknięcie duplikowało by użytkowników na liście
    //         $galleryCtn.empty();
    
    //         //robimy pętlę po zwróconej tablicy
    //         //dołączając do listy kolejne LI z imieniem i emailem użytkownika
    //         res.forEach(el => {
    //             $galleryCtn.append(`<img class="gallery-img" sa fot
    //         })
    //     })
    //     .always(() => {
    //         //po zakończeniu wczytywania wyłączamy loading
    //         //i włączamy przycisk
    //         $btn.removeClass('loading');
    //         $btn.prop('disabled', false);
    //     });
    // });
    
    apod();
    loadImages();

//end
}); 