$(document).ready(function () {
    var groupColumn = 2;
    var ordenColun = [[1, 'asc'], [0, 'asc'], [3, 'asc']];
    var table = $('#tabmovimento').DataTable({
            "language": {
                "decimal": ',',
                "thousands": '.',
                "searchPlaceholder": 'Pesquisar...',
                "sSearch": '',
                "lengthMenu": '_MENU_ Items/Página',
            },
            "responsive": false,
            "searching": true,
            "paging": false,
            "info": true,
            "order": ordenColun,
            "columnDefs": [
                {"visible": false, "targets": [2]}
            ],
            "scrollY": '40vh',
            "scrollCollapse": true,
            "lengthChange": false,
            "dom": 'B<"clear">frtlip',
            "buttons": ['excel'],
            "footerCallback":
                function (row, data, start, end, display) {
                    var api = this.api(), data;
                    // Remove the formatting to get integer data for summation
                    var intVal = function (i) {
                        return typeof i === 'string' ?
                            i.replace(/[\$.]/g, '').replace(/[\$,]/g, '.') * 1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
                    var totalNotasP = api
                        .column(4, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

                    var totalissP = api
                        .column(5, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

                    var totalNotasR = api
                        .column(6, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

                    var totalissR = api
                        .column(7, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

                    var totalNotasC = api
                        .column(8, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

                    var totalissC = api
                        .column(9, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                    var totalNotas = api
                        .column(10, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

                    var totaliss = api
                        .column(11, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                    var totalPago = api
                        .column(12, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                    var totalNot = api
                        .column(13, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                    var totalDif = api
                        .column(14, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                    var totalPend = api
                        .column(15, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

                    $(api.column(4).footer()).html(
                        totalNotasP.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(5).footer()).html(
                        totalissP.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(6).footer()).html(
                        totalNotasR.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(7).footer()).html(
                        totalissR.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(8).footer()).html(
                        totalNotasC.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(9).footer()).html(
                        totalissC.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(10).footer()).html(
                        totalNotas.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(11).footer()).html(
                        totaliss.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(12).footer()).html(
                        totalPago.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(13).footer()).html(
                        totalNot.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(14).footer()).html(
                        totalDif.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );
                    $(api.column(15).footer()).html(
                        totalPend.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    );

                },

        }
    );
    // Order by the grouping
    $('#tabmovimento tbody').on('click', 'tr.group', function () {
        var currentOrder = table.order()[0];
        if (currentOrder[0] === groupColumn && currentOrder[1] === 'asc') {
            table.order([groupColumn, 'desc']).draw();
        } else {
            table.order([groupColumn, 'asc']).draw();
        }
    }).on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });
});
