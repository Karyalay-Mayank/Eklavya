$(document).ready(function() {
    var divs = $('.syllabus-info>div');
    var now = 0; // currently shown div
    divs.hide().first().show(); // hide all divs except first
    $("button[name=next]").click(function() {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $("button[name=prev]").click(function() {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // show previous
    });
});