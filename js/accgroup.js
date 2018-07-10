;(function ($, window, undefined) {
    var dataSet = [
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","110000", "113999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","110000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","110000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "113999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","110000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","110000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","110000", "113999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","110000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","110000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "113999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","110000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","110000", "199999"],
        [ "<a href='javascript:;' class='acgroup-title' data-toggle='popover'>AST</a>","CURRENT ASSETS","100000", "199999"],
    ];
    $(document).ready(function () {        
        var monitor=$('#accgroup-list').DataTable( {
            data: dataSet,
            "paging": false,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            "info": false,
            columns: [
                { title: "Ledger" },
                { title: "Ledger Description" },
                { title: "Start Range" },
                { title: "End Range" }
            ],
            "fnDrawCallback": function( oSettings ) {
                $('[data-toggle="popover"]').popover({
                    trigger: 'click',
                    placement: 'bottom',
                    html:true,
                    title:'Edit',
                    template:'<div class="popover edit-accgroup" role="tooltip"><div class="arrow"></div><h3 class="popover-header pop-edit-header"></h3><div class="popover-body pop-edit-body"></div></div>',
                    'content': function (e) {
                        return'<div class="row">'+
                            '<div class="col-6">'+
                                '<div class="form-group">'+
                                    '<label for="Company-name">Ledger Code</label>'+
                                    '<select class="form-control choose-type" id="type">'+
                                        '<option selected>A-COST-COMM</option>'+
                                        '<option>2</option>'+
                                        '<option>3</option>'+
                                        '<option>4</option>'+
                                        '<option>5</option>'+
                                    '</select>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-6">'+
                                '<div class="form-group">'+
                                    '<label for="Company-name">Ref Title</label>'+
                                    '<input type="text" class="form-control search-sender" id="to" placeholder="Ref Title" value="A-COST-COMM">'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col-6">'+
                                '<div class="form-group">'+
                                    '<label for="Company-name">Opening Balance </label>'+
                                    '<input type="text" class="form-control search-sender" id="from" placeholder="Opening Balance" value="0">'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-6">'+
                                '<div class="form-group">'+
                                    '<label for="Company-name">Ref Description</label>'+
                                    '<input type="text" class="form-control search-sender" id="to" placeholder="Ref Description" value="">'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<button type="button" class="btn btn-save">Save</button>'+
                        '<button type="button" class="btn btn-cancel">Cancel</button>';
                    }
                });
            }
        });
        /**************************/
        $(document).on('click','.btn-save',function(){
            $('[data-toggle="popover"]').popover('hide');
        })
        $(document).on('click','.btn-cancel',function(){
            $('[data-toggle="popover"]').popover('hide');
        })
        $(document).on('show.bs.popover','[data-toggle="popover"]',function () {
          $('[data-toggle="popover"]').not(this).popover('hide');
        })
    });
})(jQuery, window);