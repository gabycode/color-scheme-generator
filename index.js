const inputColor = document.getElementById('color')
const selectOptions = document.getElementById('options')
const colorBtn = document.getElementById('btn')
const schemeDisplay = document.getElementById('scheme-display')

colorBtn.addEventListener('click', e => {
    e.preventDefault() 

    // Store hex values in variables
    let currentColor = inputColor.value.substring(1)
    let currentColorScheme = selectOptions.value
    
    let colorSchArray = []
    let colorSchHtml = ""

    fetch(`https://www.thecolorapi.com/scheme?hex=${currentColor}&mode=${currentColorScheme}`)
        .then(resp => resp.json())
        .then(data => {

            // Loops through colors array
            for(let i = 0; i < data.colors.length; i++){
                    colorSchArray.push(data.colors[i].hex.value)
                }
                console.log(colorSchArray)
            
            // Displays color scheme
            for(let color of colorSchArray){
                colorSchHtml += `
                <div class="color-scheme">
                    <div class="color-item" style="background-color: ${color}"><p>${color}</p></div>
                </div>
                `
            }
            schemeDisplay.innerHTML = colorSchHtml
        })
})