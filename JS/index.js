function verificarMes() {
    ///Variaveis horas
    resultadoHora = document.getElementById("hora");
    resultadoMinuto = document.getElementById("minuto");
    resultadoSegundo = document.getElementById("segundo");
    ///Fim

    ///Variaveis ano
    resultadoDia = document.getElementById("dia");
    resultadoMes = document.getElementById("mes");
    resultadoAno = document.getElementById("anoNum");
    ///Fim

    horario = new Date();
    hor = horario.getHours();
    min = horario.getMinutes();
    seg = horario.getSeconds();
    dia = horario.getDate();
    mesAgora = horario.getMonth();
    mesAgora += 1;
    anoAgora = horario.getFullYear();

    switch (mesAgora) {
        case 1:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 2:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 3:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 4:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 5:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 6:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 7:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 8:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 9:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 10:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 11:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        case 12:
            ///Mostrar hora
            resultadoHora.innerHTML = `${hor}`;
            resultadoMinuto.innerHTML = `${min}`;
            resultadoSegundo.innerHTML = `${seg}`;

            ///Mostrar ano
            resultadoDia.innerHTML = `${dia}`;
            resultadoMes.innerHTML = `${mesAgora}`;
            resultadoAno.innerHTML = `${anoAgora}`;

            break;
        default:
            resultado.innerHTML = `[ERRO] Seu horário está com ERRO!`;
    }
}