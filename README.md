## Extensions List
Aplicação front-end que lista extensões, permite ativar/desativar cada uma, remover itens e filtrar entre todas, ativas e inativas, mantendo o estado no localStorage e com layout responsivo.

## Funcionalidades
Listagem de extensões a partir de um arquivo data.json.

Ativar/desativar extensões via toggle.

Remover extensões da lista.

Filtros:

Todas

Ativas

Inativas

Filtro selecionado e estado das extensões persistidos em localStorage.

Reaplicação automática do filtro atual ao:

ativar/desativar uma extensão;

remover uma extensão;

recarregar a página.

Layout responsivo com uso de grid e flexbox.

Suporte a tema (via changeTheme).

## Tecnologias utilizadas
HTML

CSS (grid, flexbox, media queries)

JavaScript (ES modules)

localStorage para persistência de estado

Fetch API para carregar data.json

## Como rodar o projeto
Clone o repositório:

bash
```
git clone <url-do-repositorio>
cd <pasta-do-projeto>
```
Abra os arquivos com um servidor HTTP simples (por exemplo, com a extensão Live Server do VS Code ou outro servidor estático).

ou

Abra o projeto no navegador: https://isabela2903.github.io/browser-extention-manager-ui/

## Interaja com:

toggles para ativar/desativar extensões;

botão de remover;

botões de filtro (Todas / Ativas / Inativas).

## Fluxo de funcionamento
Na primeira carga:

loadData lê o data.json e salva no localStorage se ainda não houver dados.

applyFilter aplica o filtro salvo (ou all por padrão) e renderiza a lista.

Ao clicar em um botão de filtro:

o filtro é salvo em selectedFilter;

applyFilter é chamado, re-renderizando a lista de acordo com o filtro.

Ao clicar em um toggle:

updateExtension(name) atualiza isActive;

applyFilter é chamado novamente, refezendo a lista com o filtro atual.

Ao remover uma extensão:

os dados são atualizados no localStorage;

a renderização é refeita com o filtro atual.
