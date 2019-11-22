const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $pdfcheckbox = $('<label><input type="checkbox"> Allow PDF Downloads </label>');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
    //if check box is checked
    //if zero is checked prevent download
    if ($(':checked').length ===0){
        event.preventDefault();
        alert('Please check the check box to download this PDF.');
    }
    //alert user
});

$('#links').append($pdfcheckbox);

$('a').each(function(index, link){
    const url = $(link).attr('href');
    $(link).parent().append(` (${url})`);
});