document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {dropdownOptions: {coverTrigger: false}});
    showVal(document.getElementById('passwordlength').value);
});

$(document).ready(function(){
    $('.tooltipped').tooltip({
        'margin' : -2,
        'position' : 'right',
    });
});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    M.toast({html: 'Password copied to clipboard!'})
}

function showVal(value) {
    $('#length').text(value);
}

var rot = 180;

$(".rotate").click(function(){
    $(this).find('.fa-refresh').css({
        'transition' : 'all .3s linear',
        'transform' : 'rotate(' + rot + 'deg)',
    });
    rot += 180;
})