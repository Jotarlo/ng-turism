
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
    });});

    
    function InitSelects(){
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
    }