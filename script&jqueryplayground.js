<script src="jquery-3.6.0.js"></script>

    $(function() {
    $('.seasonsNavbar .navbar li').on('click', function() {

        $('.seasonsNavbar .navbar li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.season.active').slideUp(300, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
                
            });
        }  
    });
});
