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
        textHtml += `
                        <div class="color-col">
                            <div class="color-swatch" style="background:${colors[i]}"></div>
                            <div class="color-hex" data-hex="${colors[i]}">${colors[i]}</div>
                        </div>
                    `
    }    
    document.getElementById("color-display").innerHTML = textHtml

    colors = []
}

document.addEventListener('click', (e) => {
  if (e.target.matches('.color-hex')) {
    const hex = e.target.dataset.hex;
    navigator.clipboard?.writeText(hex);
    const old = e.target.textContent;
    e.target.textContent = 'Copied!';
    setTimeout(() => (e.target.textContent = old), 1500);
  }
})