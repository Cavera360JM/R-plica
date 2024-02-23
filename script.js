document.addEventListener("DOMContentLoaded", function() {
    // Adicionar eventos de hover para mudar a cor do cursor
    var hoverElements = document.querySelectorAll('.hover-change');
    hoverElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            document.body.style.cursor = 'url(custom-cursor-hover.png), auto';
        });
        element.addEventListener('mouseleave', function() {
            document.body.style.cursor = 'url(custom-cursor.png), auto';
        });
    });
});


