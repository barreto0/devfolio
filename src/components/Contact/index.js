import Navbar from '../common/Navbar.vue';
import emailjs from '@emailjs/browser';
import { useToast } from 'vue-toastification';
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    isFormValid() {
      if (
        this.name === '' ||
        this.email === '' ||
        this.message === ''
      ) {
        return false;
      }
      return true;
    },
    async sendEmail() {
      this.loading = true;
      if (!this.isFormValid()) {
        this.toast.error('Preencha os campos corretamente.', {
          timeout: 2000,
        });
        this.loading = false;
        return;
      }
      await emailjs
        .send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          {
            name: this.name,
            email: this.email,
            message: this.message,
          },
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
        .then(
          (result) => {
            this.toast.success('Email enviado com sucesso!', {
              timeout: 2000,
            });
          },
          (error) => {
            this.toast.error('Erro ao enviar email.', {
              timeout: 2000,
            });
          }
        );
      this.loading = false;
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
