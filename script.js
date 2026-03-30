console.log(`Página desenvolvida por IA! \n Hospedagem realizada por Vitor Cecato. \n Github educacional: https://github.com/vitorcecato-sesi \n Github pessoal: https://github.com/dash-yz \n Linkedin: https://www.linkedin.com/in/vitorgcecato/ \n Grupo do trabalho: Bernardo Renó, Lucas Gabriel, Pedro Conceição e Vinicius Cecato.`)

function showPage(page){
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.getElementById(page).classList.add('active');
}

function corrigir(){
  let pontos = 0;
  let explicacoes = "";

  if(document.querySelector('input[name="q1"]:checked')?.value==='d'){
    pontos++;
    explicacoes += "Q1: Correto! Prompt completo e bem estruturado.<br>";
  } else {
    explicacoes += "Q1: Errado. Faltou detalhamento e estrutura.<br>";
  }

  if(document.querySelector('input[name="q2"]:checked')?.value==='d'){
    pontos++;
    explicacoes += "Q2: Correto! Tem contexto, formato e exemplos.<br>";
  } else {
    explicacoes += "Q2: Errado. Prompt pouco específico.<br>";
  }

  if(document.querySelector('input[name="q3"]:checked')?.value==='c'){
    pontos++;
    explicacoes += "Q3: Correto! Linguagem adequada ao público.<br>";
  } else {
    explicacoes += "Q3: Errado. Muito vago ou complexo demais.<br>";
  }

  if(document.querySelector('input[name="q4"]:checked')?.value==='c'){
    pontos++;
    explicacoes += "Q4: Correto! Define público, formato e estilo.<br>";
  } else {
    explicacoes += "Q4: Errado. Esse é um bom exemplo de prompt.<br>";
  }

  if(document.querySelector('input[name="q5"]:checked')?.value==='c'){
    pontos++;
    explicacoes += "Q5: Correto! É bom, mas pode melhorar.<br>";
  } else {
    explicacoes += "Q5: Errado. Ainda pode ser mais específico.<br>";
  }

  if(document.querySelector('input[name="q6"]:checked')?.value==='d'){
    pontos++;
    explicacoes += "Q6: Correto! Prompt completo e bem estruturado.<br>";
  } else {
    explicacoes += "Q6: Errado. Esse é um ótimo prompt.<br>";
  }

  document.getElementById('resultado').innerText = "Você acertou " + pontos + " de 6";
  document.getElementById('explicacao').innerHTML = explicacoes;
}

function gerarPrompt(){
  let papel = document.getElementById('papel').value;
  let tarefa = document.getElementById('tarefa').value;
  let contexto = document.getElementById('contexto').value;
  let formato = document.getElementById('formato').value;
  let limite = document.getElementById('limite').value;

  if (!papel || !tarefa || !contexto || !formato || !limite) {
    return alert('Antes de gerar seu prompt, preencha todos os campos do formulário.')
  }

  let prompt = "";

  if(papel){
    prompt += `Aja como um ${papel}. `;
  }

  if(tarefa){
    prompt += `Sua tarefa é ${tarefa}. `;
  }

  if(contexto){
    prompt += `Considere o seguinte contexto: ${contexto}. `;
  }

  if(formato){
    prompt += `Responda no formato: ${formato}. `;
  }

  if(limite){
    prompt += `Siga estas restrições: ${limite}. `;
  }

  prompt += `Seja claro, objetivo e didático.`;

  document.getElementById('promptFinal').innerText = prompt;
}