$(document).ready(() => {
    var elem = document.querySelector('.dropdown-trigger');
    M.Dropdown.init(elem, { alignment: 'left', constrainWidth: false, coverTrigger: false, hover: true, autoTrigger: false });
});
