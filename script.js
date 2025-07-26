let colors = []
const getSchemeBtn = document.getElementById('get-scheme-btn')
getSchemeBtn.addEventListener('click' , function(){
    const seedColor = document.getElementById('color-picker').value.slice(1)
    const colorScheme = document.getElementById('scheme-select').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorScheme}&count=5`)
    .then(response => response.json())
    .then(data => {
        let arr = data.colors
        for(let i = 0; i < arr.length; i++) {
            colors.push(arr[i].hex.value)
        }
        renderColors()
    })
})
function renderColors() {
    let textHtml = ``
    for (let i = 0; i < colors.length; i++) {
        textHtml += `<div class = "color${i}">${colors[i]}</div>`
    }
    
    document.getElementById("color-display").innerHTML = textHtml
    const colorDivs = document.querySelectorAll("#color-display div")
for (let i = 0; i < colorDivs.length; i++) {
    colorDivs[i].style.backgroundColor = colors[i]
}
    colors = []
    
}