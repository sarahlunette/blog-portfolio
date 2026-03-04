# Configuration du Formulaire de Contact

## ✅ Ce qui a été créé

1. **Page Contact** - `/contact`
2. **Route API** - `/api/contact/route.ts`
3. **Lien Navigation** - Ajouté dans le menu

## 🔧 Configuration Requise (Web3Forms - GRATUIT)

### Étape 1: Créer un Compte Web3Forms

1. Aller sur **https://web3forms.com**
2. Cliquer sur "Create Access Key" (gratuit, pas de carte de crédit requise)
3. Entrer votre email: **sarah@thelabaidata.com**
4. Copier votre Access Key (ressemble à: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### Étape 2: Configurer les Variables d'Environnement

1. Créer un fichier `.env.local` à la racine du projet:

```bash
cd /c/Users/sarah/Desktop/blog-portfolio
touch .env.local
```

2. Ajouter votre Access Key dans `.env.local`:

```env
WEB3FORMS_ACCESS_KEY=your-access-key-here
```

**Exemple:**
```env
WEB3FORMS_ACCESS_KEY=12345678-1234-1234-1234-123456789abc
```

### Étape 3: Vérifier que .env.local est dans .gitignore

Le fichier `.env.local` ne doit PAS être committé dans git. Vérifier que `.gitignore` contient:

```
.env*.local
```

### Étape 4: Tester le Formulaire

```bash
npm run dev
```

Puis aller sur: http://localhost:3000/contact

## 🎨 Fonctionnalités du Formulaire

- ✅ Design moderne et responsive
- ✅ Validation des champs
- ✅ Messages de succès/erreur
- ✅ Animation de chargement pendant l'envoi
- ✅ Envoi d'email à sarah@thelabaidata.com
- ✅ Email de confirmation automatique à l'expéditeur
- ✅ Protection anti-spam intégrée (Web3Forms)

## 📧 Configuration Email (Web3Forms Dashboard)

Une fois votre compte créé sur Web3Forms, vous pouvez:

1. **Personnaliser l'email de réception:**
   - Subject line
   - From name
   - Reply-to automatique

2. **Activer les notifications:**
   - Email instantané
   - Slack webhook
   - Discord webhook

3. **Voir l'historique:**
   - Tous les messages reçus
   - Statistiques de soumission

## 🔒 Sécurité

Web3Forms inclut automatiquement:
- ✅ Protection anti-spam (honeypot)
- ✅ Rate limiting
- ✅ CAPTCHA optionnel (si nécessaire)
- ✅ Validation des emails

## 🚀 Alternative: Resend (si préféré)

Si vous préférez utiliser Resend au lieu de Web3Forms:

### Installation
```bash
npm install resend
```

### Configuration
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

### Modifier `/api/contact/route.ts`
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, subject, message } = body

  try {
    const data = await resend.emails.send({
      from: 'TheLab Contact Form <onboarding@resend.dev>',
      to: ['sarah@thelabaidata.com'],
      replyTo: email,
      subject: subject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

## 📱 Test du Formulaire

### Test Local
1. Démarrer le serveur: `npm run dev`
2. Aller sur: http://localhost:3000/contact
3. Remplir le formulaire
4. Vérifier l'email à sarah@thelabaidata.com

### Test de Validation
- Essayer de soumettre sans remplir les champs ➡️ Erreur
- Essayer un email invalide ➡️ Erreur
- Remplir correctement ➡️ Message de succès

## 🎯 Prochaines Étapes

1. **Configurer Web3Forms** (5 minutes)
2. **Tester le formulaire** (2 minutes)
3. **Déployer sur Vercel** (configuration automatique des env vars)

## 💡 Notes Importantes

- **Web3Forms est GRATUIT** jusqu'à 250 soumissions/mois
- Au-delà, c'est $5/mois pour 1000 soumissions
- Les emails sont envoyés instantanément
- Historique conservé 30 jours (gratuit) ou illimité (payant)

## 🔗 Liens Utiles

- Web3Forms: https://web3forms.com
- Documentation: https://docs.web3forms.com
- Resend (alternative): https://resend.com

## ✅ Checklist de Déploiement

Avant de déployer en production:
- [ ] Access Key Web3Forms créé
- [ ] Variable d'environnement configurée localement
- [ ] Formulaire testé localement
- [ ] .env.local dans .gitignore
- [ ] Variable d'environnement ajoutée sur Vercel
- [ ] Test en production après déploiement
