scrollTo = function(element_id) {
    $(document.body).animate({'scrollTop':   $(element_id).offset().top},700,'easeOutQuart');
}