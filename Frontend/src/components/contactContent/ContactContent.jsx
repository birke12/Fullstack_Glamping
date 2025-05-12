import styles from "./ContactContent.module.css";

const ContactContent = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.textContainer}>
        <h2>Vil du booke et ophold? Eller har du blot et spørgsmål?</h2>
        <p>
          Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på at
          svare på henvendelser indenfor 24 timer, men op til ferier kan der
          være travlt, og svartiden kan derfor være op til 48 timer.
        </p>
      </div>
      <form action="" method="post" className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Navn</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Hvad drejer henvendelsen sig om?</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">
            Besked (Skriv dato'er, hvis det drejer sig om en booking)
          </label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Indsend
        </button>
      </form>
    </section>
  );
};

export default ContactContent;
