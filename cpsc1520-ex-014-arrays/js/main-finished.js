 /* 
      Application Scope

      // push()
      // pull()
 */
 
 window.addEventListener('load', function(e){
   // application scope
   const dataArray = [];
   const saveButton = document.querySelector('button');
   const removeIconUrl = 'img/icons/remove.svg'
   const itemsList = document.querySelector('.array-items')
   
 
   saveButton.addEventListener('click', function(e){
     // here load in the value of the input
     const fieldData = document.querySelector('input').value.trim();
    if (fieldData !== ""){
      // add data to the array...
      dataArray.push(fieldData)
      setDisplay(fieldData);
    }
    function setDisplay(data){
        // create list item
        const newListItem = document.createElement('li')
        // add the data text to the list item
        newListItem.textContent = data;
      
        // add the .array-item class
        newListItem.classList.add('array-item')
       
        // add data atribute
        newListItem.dataset.index = dataArray.length -1
     

        // create an image
           const newImage = document.createElement('img')
           newImage.addEventListener('click', onRemoveItem)
        // add the image src
        newImage.src = removeIconUrl;
        // add the remove-icon class
        newImage.classList.add('remove-icon');
        newListItem.appendChild(newImage)
        itemsList.appendChild(newListItem)
      
    }

     function onRemoveItem (e){
        console.log(e.target.parentNode.dataset.index)
        console.log(itemsList.children)
     }
   })

   
 })//DO NOT ADD CODE AFTER THIS 