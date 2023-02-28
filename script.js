window.onload = () => {
    const buttons = document.querySelectorAll('.close');

    buttons.forEach(button => button.addEventListener('click', () => {
        button.parentElement.parentElement.style.display = 'none'
    }))
}