import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "lexpressiondelame@gmail.com";

// Tant que le domaine lexpressiondelame.fr n'est pas vérifié dans Resend,
// utiliser l'adresse par défaut. Une fois vérifié, remplacer par :
// const FROM_EMAIL = "L'Expression de l'Âme <contact@lexpressiondelame.fr>";
const FROM_EMAIL = "L'Expression de l'Âme <onboarding@resend.dev>";

const TYPE_LABELS: Record<string, string> = {
  "soin-energetique": "Soin Énergétique",
  naturopathie: "Naturopathie",
  enfant: "Soin Enfant (- de 12 ans)",
  "forfait-adulte": "Forfait 5 Soins Adultes",
  "forfait-enfant": "Forfait 5 Soins Enfants",
  question: "Simple question",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, type, message } = body;

    if (!nom || !email || !telephone || !type || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    const typeLabel = TYPE_LABELS[type] || type;

    // Email de notification pour Dorothée
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `Nouveau message de ${nom} — ${typeLabel}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #fdfcfa; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #b77458 0%, #9a5f47 100%); padding: 32px; text-align: center;">
            <h1 style="color: white; font-size: 24px; margin: 0; font-weight: 400;">Nouveau message</h1>
            <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 8px 0 0;">via lexpressiondelame.fr</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6dc; color: #9a8a7a; font-size: 13px; width: 140px;">Nom</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6dc; color: #4a3f35; font-weight: 500;">${nom}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6dc; color: #9a8a7a; font-size: 13px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6dc;"><a href="mailto:${email}" style="color: #b77458;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6dc; color: #9a8a7a; font-size: 13px;">Téléphone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6dc;"><a href="tel:${telephone}" style="color: #b77458;">${telephone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6dc; color: #9a8a7a; font-size: 13px;">Prestation</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6dc; color: #4a3f35; font-weight: 500;">${typeLabel}</td>
              </tr>
            </table>
            <div style="background: #f7f2ed; border-radius: 12px; padding: 20px; margin-top: 8px;">
              <p style="color: #9a8a7a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Message</p>
              <p style="color: #4a3f35; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #f7f2ed; text-align: center;">
            <p style="color: #9a8a7a; font-size: 12px; margin: 0;">Répondre directement à cet email contactera ${nom}</p>
          </div>
        </div>
      `,
    });

    // Email de confirmation pour le visiteur
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Votre message a bien été reçu — L'Expression de l'Âme",
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #fdfcfa; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #b77458 0%, #9a5f47 100%); padding: 32px; text-align: center;">
            <h1 style="color: white; font-size: 24px; margin: 0; font-weight: 400;">L'Expression de l'Âme</h1>
            <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 8px 0 0;">Soins Énergétiques & Naturopathie</p>
          </div>
          <div style="padding: 32px;">
            <p style="color: #4a3f35; font-size: 16px; line-height: 1.6;">Bonjour ${nom},</p>
            <p style="color: #4a3f35; font-size: 16px; line-height: 1.6;">
              Merci pour votre message. Je l'ai bien reçu et je vous répondrai dans les plus brefs délais.
            </p>
            <p style="color: #4a3f35; font-size: 16px; line-height: 1.6;">
              Si vous souhaitez réserver un créneau dès maintenant, vous pouvez le faire directement en ligne :
            </p>
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://cal.com/dorothee-sakgbk" style="display: inline-block; background: linear-gradient(135deg, #b77458 0%, #9a5f47 100%); color: white; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-size: 15px;">
                Réserver en ligne
              </a>
            </div>
            <p style="color: #4a3f35; font-size: 16px; line-height: 1.6;">
              À très bientôt,<br />
              <strong>Dorothée</strong><br />
              <span style="color: #9a8a7a; font-size: 14px;">Énergéticienne & Naturopathe</span>
            </p>
          </div>
          <div style="padding: 16px 32px; background: #f7f2ed; text-align: center;">
            <p style="color: #9a8a7a; font-size: 12px; margin: 0 0 4px;">
              L'Expression de l'Âme — Soins Énergétiques & Naturopathie
            </p>
            <p style="color: #b5a89a; font-size: 11px; margin: 0;">
              2B rue de la Mare, 27150 Martagny · 06 72 27 45 89 · lexpressiondelame@gmail.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
