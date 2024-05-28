// Função para escolher arquivo
function chooseFile() {
    document.getElementById('fileInput').click();
}

// Funções para cada opção
function toggleAimFOV() {
    console.log("𝐀𝐢𝐦 𝐅𝐎𝐕 ativado");
    // Adicione aqui a lógica para ativar/desativar a opção Aim FOV
}

function toggleAimLock() {
    console.log("Aim Lock ativado");
    // Adicione aqui a lógica para ativar/desativar a opção Aim Lock
}

function toggleFrameRate() {
    console.log("𝐓𝐚𝐱𝐚 𝟏𝟐𝟎𝐡𝐳 ativada");
    // Adicione aqui a lógica para ativar/desativar a opção Taxa de Frame
}

function chooseBackgroundImage() {
    document.getElementById('fileInput').click();
}

// Event listeners para os botões
document.getElementById('chooseFileButton').addEventListener('click', chooseFile);
document.getElementById('aimFovButton').addEventListener('click', toggleAimFOV);
document.getElementById('aimLockButton').addEventListener('click', toggleAimLock);
document.getElementById('frameRateButton').addEventListener('click', toggleFrameRate);
document.getElementById('allPaperButton').addEventListener('click', chooseBackgroundImage);

// Event listener para quando um arquivo é selecionado
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        console.log("Arquivo selecionado:", file.name);
        // Definir a imagem como fundo da tela do painel
        document.body.style.backgroundImage = `url('${URL.createObjectURL(file)}')`;
    }
});