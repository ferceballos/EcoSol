$(document).ready(() => {
    var elem = document.querySelector('.dropdown-trigger');
    var instance = M.Dropdown.init(elem, { alignment: 'left', constrainWidth: false, coverTrigger: false, hover: true, autoTrigger: false });

    let duration = 180;
    let radius = ['0em', '10em'];

    /* Animations */
    var panel = anime({
        targets: '.panelimg',
        opacity: .8,
        borderRadius: radius,
        easing: 'easeInOutQuad',
        scale: 0.6,
        duration: duration,
    });

    var calentador = anime({
        targets: '.calentadorimg',
        opacity: .8,
        borderRadius: radius,
        easing: 'easeInOutQuad',
        scale: 0.6,
        duration: duration,
    });

    var inversor = anime({
        targets: '.inversorimg',
        opacity: .8,
        borderRadius: radius,
        easing: 'easeInOutQuad',
        scale: 0.6,
        duration: duration,
    });

    /*
    panel.pause();
    panel.reverse(); 
    calentador.pause();
    calentador.reverse(); 
    inversor.pause();
    inversor.reverse(); 
    */

    $("#panel").mouseenter(() => {
        panel.play();
        panel.reverse();
    });

    $("#panel").mouseleave(() => {
        panel.play();
        panel.reverse();
    });

    $("#calentador").mouseenter(() => {
        calentador.play();
        calentador.reverse();
    });

    $("#calentador").mouseleave(() => {
        calentador.play();
        calentador.reverse();
    });

    $("#inversor").mouseenter(() => {
        inversor.play();
        inversor.reverse();
    });

    $("#inversor").mouseleave(() => {
        inversor.play();
        inversor.reverse();
    });
});
