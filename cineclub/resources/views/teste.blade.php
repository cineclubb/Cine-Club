<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CineClub</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="menu-icon">☰</div>
    <div class="logo">
        <img src="logo.png" alt="Logo CineClub">
    </div>      
    <nav>
      <ul>
        <li><a href="#">Filmes</a></li>
        <li><a href="#">Séries</a></li>
        <li><a href="#">Entrar</a></li>
        <li><a href="#">Criar uma conta</a></li>
      </ul>
    </nav>
    <div class="search-box">
      <input type="text" placeholder="Pesquisar...">
      <button>🔍</button>
    </div>
  </header>

  <main>
    <div class="banner" id="carrossel">
      <!-- Slides serão inseridos pelo JavaScript -->
      <div class="overlay"></div>
      <div class="content">
        <p><strong>Descubra, avalie e compartilhe<br> suas paixões pelo cinema e séries<br> com a nossa comunidade!</strong></p>
        <button class="start-btn">COMECE AGORA</button>
      </div>
      <!-- Controles do carrossel -->
      <button class="carrossel-controle prev">❮</button>
      <button class="carrossel-controle next">❯</button>
    </div>
  </main>

  <footer>
    <p>
      Sua crítica, seu cinema. Também disponível em
      <img src="android.png" alt="Android" class="icon">
      <img src="apple.png" alt="Apple" class="icon">
    </p>
  </footer>

  <script src="carrosel.js"></script>
</body>
</html>