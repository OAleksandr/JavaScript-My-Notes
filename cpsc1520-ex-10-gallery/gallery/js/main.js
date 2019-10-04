 //1) Create Array of Image Names
 //    array[value, value, value] -- DOM
 //    array[obj, obj, obj] -- DOM
 /*
  */

  window.addEventListener("DOMContentLoaded", function(e)
  {
        const imagesArray = ["img/css.png", "img/html.png","img/javascript.png"];
        let index = 0;


        const galleryImage = document.querySelector('.gallery-display img');

        const back = document.querySelector('.back-btn');
        const forward = document.querySelector('.forward-btn');


        back.addEventListener('click', function(e)
        {
            if(index > 0)
            {
                index--;

                galleryImage.src = imagesArray[index];
            }
            
        })

        forward.addEventListener('click', function(e)
        {
            if(index < imagesArray.length - 1)
            {
                index++;

                galleryImage.src = imagesArray[index];
            }
            
        })

  })

