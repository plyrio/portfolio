# Portfólio - Plyrio Dev

Este é o repositório do portfólio de **Pedro Lyrio (Plyrio Dev)**, desenvolvido utilizando ferramentas modernas para um layout otimizado e responsivo. O projeto é construído com HTML, SCSS, JavaScript e automatizado com Gulp.

## 🛠️ Tecnologias Utilizadas

- **Bootstrap 5**: Framework para design responsivo e estilização.
- **Lucide**: Ícones modernos e customizáveis.
- **Swiper.js**: Carrossel e sliders dinâmicos.
- **Typewriter Effect**: Animação de texto com efeito de máquina de escrever.
- **Gulp**: Automação de tarefas como compilação, minificação e deploy.
- **PostCSS com PurgeCSS**: Para otimizar o CSS, removendo estilos não utilizados.
- **BrowserSync**: Para servidor local e recarregamento automático.
- **Imagemin**: Otimização de imagens.
- **GitHub Pages**: Hospedagem do portfólio.

## 🌐 Demonstração

Acesse o portfólio online: [plyrio.github.io/portfolio](https://plyrio.github.io/portfolio/)

## 📂 Estrutura do Projeto
```
portfolio/ ├── src/ │   ├── assets/ │   │   ├── sass/         # Arquivos SCSS │   │   ├── js/           # Scripts JavaScript │   ├── index.html        # HTML principal ├── public/ │   ├── css/              # CSS gerado │   ├── js/               # Scripts minificados │   ├── index.html        # Arquivos prontos para produção ├── gulpfile.js           # Configuração do Gulp └── package.json          # Configurações do projeto
```

## 🚀 Funcionalidades

- Design moderno e responsivo com **Bootstrap 5**.
- Efeito de máquina de escrever no cabeçalho.
- Slider interativo com **Swiper.js**.
- Modo claro e escuro com alternância dinâmica.
- Otimização de desempenho com imagens compactadas e estilos minificados.
- Deploy automatizado para o **GitHub Pages**.

## ⚙️ Comandos Disponíveis

### Instalar dependências
```bash
npm install
```
### Servidor de desenvolvimento
```bash
npm start
```
### Build para produção
```bash
npm run build
```
### Deploy para o GitHub Pages
```bash
npm run deploy
```
## 🚧 Fluxo de Trabalho

### 1. Compilação de SCSS: 
O Gulp transforma os arquivos SCSS em CSS, aplicando autoprefixer e removendo estilos desnecessários com PurgeCSS.


### 2. Minificação:
Arquivos CSS e JavaScript são reduzidos para melhorar o desempenho.

Imagens são otimizadas com Imagemin.

### 3. Servidor local:
O BrowserSync recarrega automaticamente o navegador ao salvar alterações.

### 4. Deploy:
Todo o conteúdo otimizado da pasta public é enviado para o GitHub Pages.

## 🌟 Autor

**Pedro Lyrio (Plyrio Dev)**
Desenvolvedor Front-end apaixonado por tecnologias modernas e design funcional.

LinkedIn

Portfólio



---
```
Este projeto é aberto para contribuições e melhorias. Sinta-se à vontade para enviar pull requests ou reportar problemas!
```


