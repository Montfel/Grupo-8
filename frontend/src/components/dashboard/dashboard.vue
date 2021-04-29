<template>
     <body id="body">
    <div class="container">
      <nav class="navbar">
        <div class="nav_icon" onclick="toggleSidebar()">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="navbar__left">
          <a href="#">Pacientes</a>
          <a href="#">Médicos</a>
          <a class="active_link" href="#">Admin</a>
        </div>
        <div class="navbar__right">
          <a href="#">
            <i class="fa fa-search" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </a>
          <a href="#">
            <img width="30" src="assets/avatar.png" alt="" />
           
          </a>
        </div>
      </nav>

      <main>
        <div class="main__container">
          

          <div class="main__title">
            <img src="assets/hello.png" alt="" />
            <div class="main__greeting">
              <h1>Bem-vindo Admin</h1>
              <p>Está é sua Dashboard</p>
            </div>
          </div>

          

          
          <div class="main__cards">
            <div class="card">
              <i
                class="fa fa-user-o fa-2x text-red"
                aria-hidden="true"
              ></i>
              <div class="card_inner">
                <p class="text-primary-p">Pacientes Cadastrados</p>
                <span class="font-bold text-title">67</span>
              </div>
            </div>

            <div class="card">
              <i class="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
              <div class="card_inner">
                <p class="text-primary-p">Consultas Marcadas</p>
                <span class="font-bold text-title">32</span>
              </div>
            </div>

            <div class="card">
              <i
                class="fa fa-user-md fa-2x text-red"
                aria-hidden="true"
              ></i>
              <div class="card_inner">
                <p class="text-primary-p">Médicos Cadastrados</p>
                <span class="font-bold text-title">25</span>
              </div>
            </div>

            <div class="card">
              <i
                class="fa fa-thumbs-up fa-2x text-red"
                aria-hidden="true"
              ></i>
              <div class="card_inner">
                <p class="text-primary-p">Laudos Aprovados</p>
                <span class="font-bold text-title">645</span>
              </div>
            </div>
          </div>
          

          
          <div class="charts">
            <div class="charts__left">
              <div class="charts__left__title">
                <div>
                  <h1>Dados Diários</h1>
                  <p>Aracaju, Sergipe, BR</p>
                </div>
                
              </div>
              <div id="apex1"></div>
            </div>

            <div class="charts__right">
              <div class="charts__right__title">
                <div>
                  <h1>Visão Geral</h1>
                  <p>Aracaju, Sergipe, BR</p>
                </div>
                
              </div>

              <div class="charts__right__cards">
                <div class="card1">
                  <h1>Pacientes</h1>
                  
                </div>

                <div class="card2">
                  <h1>Médicos </h1>
                  
                </div>

                <div class="card3">
                  <h1>Professores</h1>
                  
                </div>

                <div class="card4">
                  <h1>Residentes</h1>
                  
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </main>

      <div id="sidebar">
        <div class="sidebar__title">
          <div class="sidebar__img">
            <img src="assets/unicardio.svg" alt="logo" />
            <h1>Painel do Admin</h1>
          </div>
          <i
            onclick="closeSidebar()"
            class="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>

        <div class="sidebar__menu">
          <div class="sidebar__link active_menu_link">
            <i class="fa fa-home"></i>
            <a href="#">Dashboard</a>
          </div>
          <h2>Gerenciamento</h2>
          <div class="sidebar__link">
            <i class="fa fa-user-secret" aria-hidden="true"></i>
            <a href="#">Gerenciamento do Admin</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-building-o"></i>
            <a href="#">Gerenciamento da Clínica</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-wrench"></i>
            <a href="#">Gerenciamento de Funcionario</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-archive"></i>
            <a href="#">Exames/Laudos</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-handshake-o"></i>
            <a href="#">Pacientes</a>
          </div>
          
          <div class="sidebar__link">
            <i class="fa fa-question"></i>
            <a href="#">Dúvidas Pendentes</a>
          </div>
          
          <div class="sidebar__link">
            <i class="fa fa-calendar-check-o"></i>
            <a href="#">Datas dos Exames</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-files-o"></i>
            <a href="#">Avaliações do Usúario</a>
          </div>
          
          <div class="sidebar__logout">
            <i class="fa fa-power-off"></i>
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
    </div>
    <!-- <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script> -->
    <!-- <script src="script.js"></script> -->
  </body>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");

/*  styling scrollbars  */
::-webkit-scrollbar {
  width: 5px;
  height: 6px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #a5aaad;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #3ea175;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a5aaad;
}

* {
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}

.text-primary-p {
  color: #a5aaad;
  font-size: 14px;
  font-weight: 700;
}

.font-bold {
  font-weight: 700;
}

.text-title {
  color: #2e4a66;
}

.text-lightblue {
  color: #469cac;
}

.text-red {
  color: #cc3d38;
}

.text-yellow {
  color: #a98921;
}

.text-green {
  color: #3b9668;
}

.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 0.8fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    "sidebar nav nav nav"
    "sidebar main main main";
  /* grid-gap: 0.2rem; */
}

.navbar {
  background: #ffffff;
  grid-area: nav;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  border-bottom: 1px solid lightgray;
}

.nav_icon {
  display: none;
}

.nav_icon > i {
  font-size: 26px;
  color: #a5aaad;
}

.navbar__left > a {
  margin-right: 30px;
  text-decoration: none;
  color: #a5aaad;
  font-size: 15px;
  font-weight: 700;
}

.navbar__left .active_link {
  color: #F2465D;
  border-bottom: 3px solid #F2465D;
  padding-bottom: 12px;
}

.navbar__right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar__right > a {
  margin-left: 20px;
  text-decoration: none;
}

.navbar__right > a > i {
  color: #a5aaad;
  font-size: 16px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff;
  padding: 7px;
}

main {
  background: #f3f4f6;
  grid-area: main;
  overflow-y: auto;
}

.main__container {
  padding: 20px 35px;
}

.main__title {
  display: flex;
  align-items: center;
}

.main__title > img {
  max-height: 100px;
  object-fit: contain;
  margin-right: 20px;
}

.main__greeting > h1 {
  font-size: 24px;
  color: #F2465D;
  margin-bottom: 5px;
}

.main__greeting > p {
  font-size: 14px;
  font-weight: 700;
  color: #a5aaad;
}

.main__cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70px;
  padding: 25px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
}

.card_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card_inner > span {
  font-size: 25px;
}

.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 50px;
}

.charts__left {
  padding: 25px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
}

.charts__left__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.charts__left__title > div > h1 {
  font-size: 24px;
  color: #2e4a66;
  margin-bottom: 5px;
}

.charts__left__title > div > p {
  font-size: 14px;
  font-weight: 700;
  color: #a5aaad;
}

.charts__left__title > i {
  color: #ffffff;
  font-size: 20px;
  background: #ff1e00;
  border-radius: 200px 0px 200px 200px;
  -moz-border-radius: 200px 0px 200px 200px;
  -webkit-border-radius: 200px 0px 200px 200px;
  border: 0px solid #000000;
  padding: 15px;
}

.charts__right {
  padding: 25px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
}

.charts__right__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.charts__right__title > div > h1 {
  font-size: 24px;
  color: #2e4a66;
  margin-bottom: 5px;
}

.charts__right__title > div > p {
  font-size: 14px;
  font-weight: 700;
  color: #a5aaad;
}

.charts__right__title > i {
  color: #ffffff;
  font-size: 20px;
  background: #00ff62;
  border-radius: 200px 0px 200px 200px;
  -moz-border-radius: 200px 0px 200px 200px;
  -webkit-border-radius: 200px 0px 200px 200px;
  border: 0px solid #000000;
  padding: 15px;
}

.charts__right__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
}

.card1 {
  background: #F2465D;
  color: white;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}

.card2 {
  background: #F2465D;
  color: white;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}

.card3 {
  background: #F2465D;
  color: white;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}

.card4 {
  background: #F2465D;
  color: white;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}

/*  SIDEBAR STARTS HERE  */

#sidebar {
  background: #8BBBD0;
  grid-area: sidebar;
  overflow-y: auto;
  padding: 20px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.sidebar__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f3f4f6;
  margin-bottom: 30px;
  /* color: #E85B6B; */
}

.sidebar__img {
  display: flex;
  align-items: center;
}

.sidebar__title > div > img {
  width: 75px;
  object-fit: contain;
}

.sidebar__title > div > h1 {
  font-size: 18px;
  display: inline;
}

.sidebar__title > i {
  font-size: 18px;
  display: none;
}

.sidebar__menu > h2 {
  color: #F2465D;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-weight: 700;
}

.sidebar__link {
  color: white;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 5px;
}

.active_menu_link {
  background: #F2465D;
  color: white;
}

.active_menu_link a {
  color: white !important;
}

.sidebar__link > a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 700;
}

.sidebar__link > i {
  margin-right: 10px;
  font-size: 18px;
}

.sidebar__logout {
  margin-top: 20px;
  padding: 10px;
  color: #e65061;
}

.sidebar__logout > a {
  text-decoration: none;
  color: #e65061;
  font-weight: 700;
  text-transform: uppercase;
}

.sidebar__logout > i {
  margin-right: 10px;
  font-size: 18px;
}

.sidebar_responsive {
  display: inline !important;
  z-index: 9999 !important;
  left: 0 !important;
  position: absolute;
}

@media only screen and (max-width: 978px) {
  .container {
    grid-template-columns: 1fr;
    /* grid-template-rows: 0.2fr 2.2fr; */
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
      "nav"
      "main";
  }

  #sidebar {
    display: none;
  }

  .sidebar__title > i {
    display: inline;
  }

  .nav_icon {
    display: inline;
  }
}

@media only screen and (max-width: 855px) {
  .main__cards {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 0;
  }

  .charts {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
}

@media only screen and (max-width: 480px) {
  .navbar__left {
    display: none;
  }
}

</style>