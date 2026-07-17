"use client";

import { useState } from "react";
import { CTAButton, FormField } from "@/components";
import { lightLink } from "../_shared/blocks";
import { contact, projektartOptions } from "../_shared/site-data";

/* UI-Prototyp ohne Backend: Das Formular sendet bewusst NICHTS und behauptet
   keinen erfolgreichen Versand. Der Submit „bereitet die Anfrage vor" und
   verweist klar auf E-Mail/Telefon als aktuell funktionierenden Weg. */
export function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  return (
    <form
      className="lp-form"
      onSubmit={(event) => {
        event.preventDefault();
        setPrepared(true);
      }}
    >
      <div className="lp-form-grid">
        <FormField label="Name" name="name" required autoComplete="name" />
        <FormField label="Unternehmen" name="unternehmen" autoComplete="organization" />
        <FormField label="E-Mail" name="email" type="email" required autoComplete="email" />
        <FormField
          label="Telefonnummer (optional)"
          name="telefon"
          type="tel"
          autoComplete="tel"
        />
      </div>

      <div className="lp-field">
        <label htmlFor="projektart" className="ui-default">
          Projektart
        </label>
        <select id="projektart" name="projektart" className="body-default lp-control" defaultValue="">
          <option value="" disabled>
            Bitte wählen …
          </option>
          {projektartOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="lp-field">
        <label htmlFor="nachricht" className="ui-default">
          Projektvorhaben / Nachricht
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={5}
          className="body-default lp-control"
          placeholder="Worum geht es? Was möchten Sie erreichen?"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <CTAButton type="submit" variant="primary">
          Anfrage vorbereiten
        </CTAButton>
      </div>

      {prepared ? (
        <p className="body-default" role="status">
          Danke! Ihre Angaben wurden noch <strong>nicht</strong> automatisch versendet — die
          Formularanbindung folgt. Bitte schicken Sie uns Ihre Anfrage kurz per E-Mail oder
          rufen Sie an; wir melden uns zeitnah bei Ihnen.
        </p>
      ) : null}

      <p className="lp-form-note caption" role="note">
        Hinweis: Dieses Formular ist aktuell ein UI-Prototyp — die automatische Übermittlung ist
        noch nicht angebunden. Bitte senden Sie uns Ihre Anfrage vorerst direkt per{" "}
        <a href={contact.emailHref} className={lightLink}>
          {contact.email}
        </a>{" "}
        oder telefonisch unter{" "}
        <a href={contact.phoneHref} className={lightLink}>
          {contact.phone}
        </a>
        .
      </p>
    </form>
  );
}
