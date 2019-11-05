/* 
      Application Scope

      // push()
      // pull()
 */

window.addEventListener('load', function(e)
{
    const saveButton = document.querySelector('button');
    const dataArray = [];
    const imageURL = 'img/icons/remove.svg';
    const itemDisplay = document.querySelector('.array-items'); // or 'ul'

    saveButton.addEventListener('click', function(e)
    {
       
        const dataInput = document.querySelector('input').value.trim();
        
        if(dataInput !== "")
        {
            dataArray.push(dataInput);
            updateDisplay(dataInput);
        }
        else
        {
            console.error("Input Field Can't be Empty")
            confirm("Input Field Can't be Empty")
        }
        
       
    });//END SAVE BUTTON
    
    function updateDisplay(dataInput)
    {
        //Create a Node (element, markup)
        //Create li
        const newListItem = document.createElement('li');

        //ADD index to each item
        newListItem.dataset.index = dataArray.length -1; // (-1) -- because index must start at 0 not at 1
        //console.log(newListItem)

        //ADD the submitted text to the li
        newListItem.textContent = dataInput;

        //ADD the class .array-item
        newListItem.classList.add('array-item'); // array-item is in css file
        //document.querySelector('.array-items').appendChild(newListItem);

        //Create img
        const newImage = document.createElement('img');
        newImage.addEventListener('click', onRemoveItem) // onRemoveItem is our function

        //ADD the src for the image img/icons/remove.svg
        newImage.src = imageURL;

        //ADD Class .remove-icon
        newImage.classList.add('remove-icon');

        //ADD the img to li
        newListItem.appendChild(newImage);

        //ADD li to the ul
        itemDisplay.appendChild(newListItem);

    }//END UPDATE DISPLAY

    function onRemoveItem (e)
    {
       confirm("Would you like to delete this Item???")

        //which element in a group is being clicked
       const removeItem = e.target.parentNode;
       itemDisplay.removeChild(removeItem);

       itemDisplay.querySelectorAll('li').forEach((item, index) =>
       {
           item.dataset.index = index; // this will update current index
       });

        dataArray.splice(removeItem.dataset.index, 1);

        console.log("Item Deleted with index of: " + removeItem.dataset.index)
    }


});//NO CODE OUTSIDE OF THIS BRACKET!!!