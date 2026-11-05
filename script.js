
/* SIMULAÇÃO DE GUARDRAILS */

function testarGuardrails() {

    const pergunta = document
        .getElementById("pergunta")
        .value.trim();

    const resposta = document.getElementById("resposta");

    if (pergunta === "") {
        resposta.innerHTML = "Digite uma pergunta primeiro.";
        return;
    }

    const termosProibidos = [
        "senha",
        "cpf",
        "roubar",
        "hackear"
    ];

    const perguntaMinuscula = pergunta.toLowerCase();

    const encontrouRestricao = termosProibidos.some(
        termo => perguntaMinuscula.includes(termo)
    );

    if (encontrouRestricao) {

        resposta.innerHTML =
            "⚠️ Essa solicitação foi bloqueada pela simulação " +
            "de GuardRails. Proteja seus dados e utilize a IA " +
            "de maneira responsável.";

    } else {

        resposta.innerHTML =
            "✅ Pergunta aceita pela simulação! " +
            "Um mentor de carreiras poderia ajudar com essa questão.";
    }
}


/* CALCULADORA DE TOKENS E CUSTOS */

function calcularTokens() {

    const input = Number(
        document.getElementById("inputTokens").value
    );

    const output = Number(
        document.getElementById("outputTokens").value
    );

    const precoInput = Number(
        document.getElementById("precoInput").value
    );

    const precoOutput = Number(
        document.getElementById("precoOutput").value
    );

    if (
        ![input, output, precoInput, precoOutput].every(Number.isFinite) ||
        input < 0 ||
        output < 0 ||
        precoInput < 0 ||
        precoOutput < 0
    ) {
        alert("Informe valores numéricos válidos e não negativos.");
        return;
    }

    // SOMA DOS TOKENS

    const total = input + output;

    // CÁLCULO DOS CUSTOS

    const custoEntrada =
        (input / 1000000) * precoInput;

    const custoSaida =
        (output / 1000000) * precoOutput;

    const custoTotal =
        custoEntrada + custoSaida;

    // FORMATAÇÃO DOS RESULTADOS

    const moeda = valor =>
        "US$ " + valor.toFixed(6);

    // EXIBIÇÃO NA TELA

    document.getElementById("totalInput").textContent =
        input.toLocaleString("pt-BR");

    document.getElementById("totalOutput").textContent =
        output.toLocaleString("pt-BR");

    document.getElementById("totalTokens").textContent =
        total.toLocaleString("pt-BR");

    document.getElementById("custoInput").textContent =
        moeda(custoEntrada);

    document.getElementById("custoOutput").textContent =
        moeda(custoSaida);

    document.getElementById("custoTotal").textContent =
        moeda(custoTotal);
}


/* CALCULA AUTOMATICAMENTE AO ABRIR A PÁGINA */

document.addEventListener("DOMContentLoaded", function() {
    calcularTokens();
});
