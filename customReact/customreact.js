function customRender(reactElement, container){
    const domElement = document.createElement(reactElement)
}


const reactElement = {
    type: 'a',
    props:{
        href: 'https//google.com'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
