<template>
  <div class="timeline-background min-vh-100">
    <div class="col-md-8 offset-md-3 text-white">
      <p class="job-title">A estrada até aqui</p>
      <ul class="timeline">
        <li>
          <p class="timeline-experience-title">
            Desenvolvedor Fullstack - Freelancer (2015 - atual)
          </p>
          <p>
            Atuo com desenvolvimento front-end e mobile, desenvolvendo
            sistemas voltados para as mais diversas áreas do mercado,
            como entretenimento e e-commerce com tecnologia Vue e
            aplicativos mobile para clientes diversos utilizando
            Flutter.
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            Desenvolvedor Fullstack- Fornax (09/2022 - atual)
          </p>
          <p>-</p>
        </li>
        <li>
          <p class="timeline-experience-title">
            Desenvolvedor Frontend e Mobile - Keener.io Inovations
            (09/2021 - 09/2022)
          </p>
          <p>
            Atuo com desenvolvimento front-end e mobile, desenvolvendo
            sistemas voltados para as mais diversas áreas do mercado,
            como entretenimento e e-commerce com tecnologia Vue e
            aplicativos mobile para clientes diversos utilizando
            Flutter.
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            Desenvolvedor Fullstack e Mobile - React-it (01/2021 -
            09/2021)
          </p>
          <p>
            Atuei com desenvolvimento front-end e mobile,
            desenvolvendo sistemas voltados principalmente para o
            mercado financeiro com tecnologias Angular, React e Vue e
            aplicativos mobile para clientes diversos utilizando
            tecnologias como React Native e Flutter.
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            Desenvolvedor Júnior Fullstack - React-it (10/2020 -
            01/2021)
          </p>
          <p>
            Atuei com desenvolvimento Fullstack, desenvolvendo
            sistemas voltados principalmente para o mercado financeiro
            com tecnologias Angular, Vue e NodeJS.
          </p>
        </li>

        <li>
          <p class="timeline-experience-title">
            Desenvolvedor Estagiário Fullstack - Senado Federal
            (03/2019 - 10/2020)
          </p>
          <p>
            Atuei como desenvolvedor fullstack, desenvolvendo sistemas
            de uso interno utilizando as tecnologias NodeJs, EJS e
            ReactJS.
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            Sócio/Desenvolvedor Frontend e Mobile - NoQueue (08/2018 -
            09/2019)
          </p>
          <p>
            Atuei com o desenvolvimento da aplicação mobile de cliente
            utilizando a tecnologia Flutter e no desenvolvimento no
            software de gestão utilizando VueJS. Trabalhei com a parte
            de marketing e prospecção de clientes para a empresa.
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            Desenvolvedor Estagiário Ministério do Desenvolvimento,
            Planejamento e Gestão (03/2018 - 11/2018)
          </p>
          <p>
            Atuei com suporte técnico ao usuário e auxiliei no
            desenvolvimento de sistemas internos utilizando as
            tecnologias Drupal, HTML, CSS e PHP
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            Sócio/Designer Gráfico - Beyond (08/2016 - 09/2017)
          </p>
          <p>
            Atuei com a criação de Logos, identidades visuais e social
            media para pequenas e médias empresas brasileiras.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
'ExperienceSection';
</script>
<style scoped>
ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: ' ';
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  content: ' ';
  background: #c044ec;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #c044ec;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
</style>
