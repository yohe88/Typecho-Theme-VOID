/* eslint-disable no-undef */
$(function() {
    if($('#wmd-button-row').length>0){
        $('#wmd-button-row').append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-photoset-button" style="" title="插入图集">图集</li>');
        $('#wmd-button-row').append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-owo-button" style="" title="插入表情"><span style="width:unset" class="OwO"></span></li>');
        new OwO({
            logo: 'OωO',
            container: document.getElementsByClassName('OwO')[0],
            target: document.getElementById('text'),
            api: '/usr/themes/VOID/assets/libs/owo/OwO.json',
            position: 'down',
            width: '400px',
            maxHeight: '250px'
        });
    }
    $(document).on('click','#wmd-photoset-button',function() {
        myField = document.getElementById('text');
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = '[photos des=""]\n\n'+sel.text+'[/photos]';
            myField.focus();
        }
        else if (myField.selectionStart || myField.selectionStart == '0') {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            myField.value = myField.value.substring(0, startPos)
            + '[photos des=""]\n\n[/photos]'
            + myField.value.substring(endPos, myField.value.length);
            myField.focus();
            myField.selectionStart=startPos+'[photos des=""]'.length+1;
            myField.selectionEnd=startPos+'[photos des=""]'.length+1;
        }
        else{
            myField.value +='[photos des=""]\n\n[/photos]';
            myField.focus();
        }
    });
});
