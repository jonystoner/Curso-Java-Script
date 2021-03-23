   
const { openBrowser, goto, below, textBox, write, above, click, toLeftOf, checkBox, $, toRightOf, near, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('https://qa.elaw.com.br/');
         await write("Jonathan.Elaw",textBox(below("Acesse a sua conta")));
        await write("@Drena007",textBox(above("Acessar")));
        await click('Acessar ');
        await click($("a:nth-child(1) > .fa-files-o"));
        await click('Novo');
        await click('Selecione');
        await click('Contratos Gerais');
        await click('Selecione');
        await click('Acordo de Confidencialidade (NDA)');
        await click('Continuar');
        await write("12345",textBox(toRightOf("ID Ariba:")));
        await write("09876",textBox(toRightOf("ID Jurídico:")));
        await click('Empresas do Grupo Via Varejo');
        await click('Selecione');
        await click('Parte 1');
        await click('CPF/CNPJ');
        await write("A",textBox(above("Nome")));
            } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
