$(function() {
    let score = 0;
    let miliSeconds = Math.random() * (2000 - 700) + 700;
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    const imageSrc = ["Images/alien.png", "Images/alien2.png", "Images/alien3.png"]
    
    function generateImage() {
        const index = Math.floor( Math.random() * imageSrc.length );
        const image = $('<img class= "image" src="' + imageSrc[index] + '">');
        const randomX = Math.random() * (windowWidth - 150);
        const randomY = Math.random() * (windowHeight - 150);
        image.css({ top: randomY, left: randomX});
        $('body').append(image);

        image.on("click", function() {
            $(this).remove();
            score++;
            $('#score').text(score);
            clearTimeout(timerTimeOut);
            if (score >= 10) {            
                alert('You caught 10 aliens!');
                clearInterval(timerInterval);
            }
        });

        const timerTimeOut = setTimeout(function () {image.remove();}, 700);
        miliSeconds = Math.random() * (2000 - 700) + 700;
        const timerInterval = setTimeout(generateImage, miliSeconds); 
    }

    setTimeout(generateImage, miliSeconds); 
});