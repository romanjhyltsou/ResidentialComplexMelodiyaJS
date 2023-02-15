const disableScroll = ()=> {
    document.body.dataset.scrollY = window.scrollY; /* зафиксировать на той позиции на которой открылся modal */
    
    const scrollWidth = window.innerWidth - document.body.offsetWidth

    document.body.style.cssText = `
    position:relative;
    top:-${window.scrollY}px;
    left:0;
    width:100%;
    overflow:hidden;
    height:100vh;
    padding-right:${scrollWidth}px;
    `
}

const enableScroll = ()=> {
    document.body.style.cssText = ''
    window.scroll({
        top:document.body.dataset.scrollY
    });
}