document.addEventListener("DOMContentLoaded", function() {
    // Adicionar eventos de hover para mudar a cor do cursor
    var hoverElements = document.querySelectorAll('.hover-change');
    hoverElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            document.body.style.cursor = 'url(), auto';
        });
        element.addEventListener('mouseleave', function() {
            document.body.style.cursor = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kjmBt61exlti_bEGYC_5uW_SYm7_wGu2HQ&usqp=CAU), auto';
        });
    });
});


