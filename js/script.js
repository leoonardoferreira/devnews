const form = document.querySelector('form')

form.onsubmit = event => {
    event.preventDefault()
    
    recomposeMain()
}

function recomposeMain() {
    let main = document.querySelector('main')
    let container = document.querySelector('.container')

    main.classList.add('loading')
    
    setTimeout(function () {
        container.innerHTML = 
        `
        <svg height="48" viewBox="0 -960 960 960" width="48" fill="white">
        <path d="M378-258q-6 0-11-2t-10-7L176-448q-9-9-9-22t9-22q9-9 21-9t21 9l160 160 363-363q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L399-267q-5 5-10 7t-11 2Z"/>
        </svg>
        <p class="ty">
            Obrigado<span style="color: #C35257;">!</span>
        </p>
        `
        
        main.classList.remove('loading')
    }, 300)
}