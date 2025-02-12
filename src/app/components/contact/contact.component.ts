import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    nomComplet: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.pattern('^[0-9]{8,15}$')]),
    sujet: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  async onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const emailParams = {
        nomComplet: formData.nomComplet,
        email: formData.email,
        tel: formData.tel,
        sujet: formData.sujet,
        message: formData.message,
      };

      try {
        const response = await emailjs.send(
          'service_frxxyg9',    // Remplace par ton Service ID EmailJS
          'template_ksf27il',   // Remplace par ton Template ID EmailJS
          emailParams,
          'BjXGHG7-K8eFYsEMJ'   // Remplace par ta Public Key EmailJS
        );

        console.log('Email envoyé avec succès!', response.status, response.text);
        alert('Votre message a été envoyé avec succès!');
        this.contactForm.reset();
      } catch (error) {
        console.error('Erreur lors de l’envoi de l’email:', error);
        alert('Une erreur est survenue lors de l’envoi du message.');
      }
    } else {
      alert('Veuillez remplir correctement tous les champs.');
    }
  }

}
