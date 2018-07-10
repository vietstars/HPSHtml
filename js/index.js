;(function ($, window, undefined) {
    var dataSet = [
        [ "1","Tiger Nixon", "<a href='' class='sent-by'>System Architect</a>", "Edinburgh", "2011/04/25", "","" ],
        [ "2","Garrett Winters", "<a href='' class='sent-by'>Accountant</a>", "Tokyo", "2011/07/25", "","" ],
        [ "3","Ashton Cox", "<a href='' class='sent-by'>Junior Technical Author</a>", "San Francisco", "2009/01/12", "","" ],
        [ "4","Cedric Kelly", "<a href='' class='sent-by'>Senior Javascript Developer</a>", "Edinburgh", "2012/03/29", "","" ],
        [ "5","Airi Satou", "<a href='' class='sent-by'>Accountant</a>", "Tokyo", "2008/11/28", "","" ],
        [ "1","Brielle Williamson", "<a href='' class='sent-by'>Integration Specialist</a>", "New York", "2012/12/02", "","" ],
        [ "6","Herrod Chandler", "<a href='' class='sent-by'>Sales Assistant</a>", "San Francisco", "2012/08/06", "","" ],
        [ "7","Rhona Davidson", "<a href='' class='sent-by'>Integration Specialist</a>", "Tokyo", "2010/10/14", "","" ],
        [ "8","Colleen Hurst", "<a href='' class='sent-by'>Javascript Developer</a>", "San Francisco", "2009/09/15", "","" ],
        [ "9","Sonya Frost", "<a href='' class='sent-by'>Software Engineer</a>", "Edinburgh", "2008/12/13", "","" ]
    ];
    $(document).ready(function () {        
        $('#mome-list').DataTable( {
            data: dataSet,
            "paging": false,
            "searching": false,
            "ordering": false,
            "info": false,
            columns: [
                { title: "No." },
                { title: "Title" },
                { title: "Sent By" },
                { title: "Sent On" },
                { title: "Sent At" },
                { title: "Status" },
                { title: "Alarm" }
            ]
        } );
    });
})(jQuery, window);