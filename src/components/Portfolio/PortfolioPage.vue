<template>
  <div class="background px-5">
    <Navbar></Navbar>
    <p class="job-title text-center mt-5">Projetos</p>
    <div class="row h-100 mt-5 p-0">
      <ProjectCard>
        <template v-slot:title-skill> NoQueue </template>
        <template v-slot:card-text>
          Produto de gerenciamento de mesas e comandas em bares,
          restaurantes e food-trucks através de QR Codes. Painel Admin
          em Vue2, App em Flutter e backend em NodeJS.
        </template>
        <template v-slot:under-development>Descontinuado</template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Meu HIIT </template>
        <template v-slot:card-text>
          Aplicativo para rastrear treinos de alta intensidade
          intervalada. Desenvolvido em flutter utilizando arquitetura
          modular e gerenciador de estado Mobx.
        </template>
        <template v-slot:repo
          ><a
            href="https://play.google.com/store/apps/details?id=com.barreto.meu_hiit"
            class="project-card-link"
            target="_blank"
            >Google Play</a
          ></template
        >
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Dinoday </template>
        <template v-slot:card-text>
          Serviço de gerenciamento de "dinodays", em termos simples,
          eventos de aferição de potência de veículos automotores.
          Desenvolvimento em Vue3 e NodeJS.
        </template>
        <template v-slot:under-development
          >Em desenvolvimento</template
        >
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          Gerador de senha forte
        </template>
        <template v-slot:card-text>
          Simples gerador de senha forte desenvolvido com Nuxt3 com
          intuito de ajudar na criação de senhas temporárias.
        </template>
        <template v-slot:repo
          ><a
            href="https://gerador-de-senha-forte.netlify.app/"
            class="project-card-link"
            target="_blank"
            >Site</a
          ></template
        >
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Rede CAN Renault </template>
        <template v-slot:card-text>
          Projeto de engenharia reversa da rede CAN da linha nacional
          renault para desenvolvimento de soluções automotivas para
          esta linha.
        </template>
        <template v-slot:repo
          ><a
            href="https://www.linkedin.com/posts/gabriel-ant%C3%B4nio-de-vasconcellos-barreto-547957190_engenhariadacomputacao-estudos-can-activity-6761087506030092288-7Icc?utm_source=share&utm_medium=member_desktop"
            class="project-card-link"
            target="_blank"
            >Post</a
          ></template
        >
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Quizter </template>
        <template v-slot:card-text>
          Produto de apostas entre usuários, os quais competem para
          ver quem acerta mais perguntas do tipo trivia, apostando
          dinheiro real ou fictício. Painel Admin em Vue2 e app em
          Flutter.
        </template>
        <template v-slot:repo
          ><a
            href="https://play.google.com/store/apps/details?id=com.quizter&hl=pt_BR&gl=US"
            class="project-card-link"
            target="_blank"
            >Google Play</a
          ></template
        >
        <template v-slot:company>
          <span class="end-point">* </span>Participação no projeto
          enquanto na Keener.io.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Plugg.to </template>
        <template v-slot:card-text
          >Aplicativo para gerenciamento de estoque através da API
          agregadora da Plugg.to. App em Flutter.</template
        >
        <template v-slot:repo
          ><a
            href="https://play.google.com/store/apps/details?id=com.pluggto&hl=pt_BR&gl=US"
            class="project-card-link"
            target="_blank"
            >Google Play</a
          ></template
        >
        <template v-slot:company>
          <span class="end-point">* </span>Participação no projeto
          enquanto na Keener.io.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Cerberus </template>
        <template v-slot:card-text>
          Produto de OCR com features de administração de senhas e
          documentos de maneira encriptada. App em Flutter, backend em
          Java.
        </template>
        <template v-slot:no-status>-</template>
        <template v-slot:company>
          <span class="end-point">* </span>Participação no projeto
          enquanto na React-it.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          Software de Astrologia
        </template>
        <template v-slot:card-text>
          Rede social voltada para usuários entusiastas em astrologia.
          App em Vue2, backend em dotnet.
        </template>
        <template v-slot:no-status>-</template>
        <template v-slot:company>
          <span class="end-point">* </span>Participação no projeto
          enquanto na Keener.io.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Quiz ao vivo </template>
        <template v-slot:card-text
          >Produto de quiz trivia, com apresentador ao vivo que
          disponibiliza as questões para os usuários durante o jogo,
          os usuários que acertarem as perguntas dividem o prêmio
          disponível. Painel admin em Vue2, app em Flutter, backend em
          dotnet.</template
        >
        <template v-slot:company>
          <span class="end-point">* </span>Participação no projeto
          enquanto na Keener.io.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Totem de vendas </template>
        <template v-slot:card-text>
          Aplicativo para uso em totem (Tablet) na entrada da loja. O
          usuário efetua o pedido pelo totem e retira o pedido no
          balcão. App em flutter, backend em dotnet.
        </template>
        <template v-slot:company>
          <span class="end-point">* </span>Participação no projeto
          enquanto na Keener.io.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Empresa de saúde </template>
        <template v-slot:card-text>
          <li>
            Manutençao e implementação de novas features em sistema de
            agendamento de profissionais. App em Angular 11, backend
            em dotnet.
          </li>
          <li>
            App de agendamento de profissionais. App em Flutter,
            backend em dotnet.
          </li>
        </template>
        <template v-slot:company>
          <span class="end-point">* </span>Participação no projeto
          enquanto na Keener.io.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Horas trabalhadas </template>
        <template v-slot:card-text
          >Produto de gerenciamento de coloboradores e rastreio de
          suas horas trabalhadas, por competência e por projeto. App
          em Flutter, backend em dotnet.</template
        >
        <template v-slot:company>
          <span class="end-point">* </span>Participação no projeto
          enquanto na Keener.io.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Backoffice banco BS2 </template>
        <template v-slot:card-text
          >Sistema de backoffice altamente customizável em padrão CMS.
          App em Vue2.</template
        >
        <template v-slot:company>
          <span class="end-point">* </span>Participação no projeto
          enquanto na React-it.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Rede social </template>
        <template v-slot:card-text>
          Rede social com foco em timelines da vida humana. App em
          Flutter, backend em dotnet.
        </template>
        <template v-slot:company>
          <span class="end-point">* </span>Participação no projeto
          enquanto na React-it.
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Leitor de OBD2 </template>
        <template v-slot:card-text>
          Aplicativo de leitura de dados em padrão OBD2, através de
          comunicação com dispositivo de leitura no veículo.
        </template>
        <template v-slot:under-development
          >Em desenvolvimento</template
        >
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Ponto eletrônico </template>
        <template v-slot:card-text
          >Sistema de ponto eletrônico com recurso de gerenciamento de
          banco de horas.</template
        >
        <template v-slot:under-development
          >Em desenvolvimento</template
        >
      </ProjectCard>
    </div>
    <Footer></Footer>
  </div>
</template>
<style src="./styles.css"></style>
<script src="./index.js"></script>
