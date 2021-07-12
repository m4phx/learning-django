
function process_response(funcionarios){
    func_select = document.getElementById('funcionarios');
    func_select.innerHTML = "";

    funcionarios.forEach(function(funcionario){
        var option = document.createElement("option");
        option.text = funcionario.fields.nome;
        func_select.add(option);
    });
}


function filtraTributos(){
    tributo_id = document.getElementById('tributos').value;
    $.ajax({
        type: 'GET',
        url: '/filtra-funcionarios/',
        data: {
            outro_param: depart_id
        },
        success: function(result){
            process_response(result);
            $("#mensagem").text('Funcionarios carregados');
        }
    });
}

function get_supervisores(){
    $.ajax({
        type: 'GET',
        url: '/supervisor_json/',
        data: {
            outro_param: 'depart_id'
        },
        success: function(result){
            process_response(result);
            $("#mensagem").text('Supervisores carregados');
        }
    });
}
