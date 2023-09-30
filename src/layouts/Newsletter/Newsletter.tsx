import * as Ariakit from '@ariakit/react';

import styles from './Newsletter.module.css';

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, 'gm');

function Newsletter() {
  const form = Ariakit.useFormStore({ defaultValues: { email: '' } });

  form.useSubmit(async (state) => {
    alert(JSON.stringify(state.values));
  });
  form.useValidate(() => {
    const email = form.names.email;
    const value = form.getValue(email);
    if (!emailRegex.test(value)) {
      form.setError(email, "Format d'email invalide");
    }
  });

  return (
    <Ariakit.Form store={form} aria-labelledby="get-notified" className={styles.wrapper} validateOnBlur={false}>
      <h2 id="get-notified">Get notified when we launch</h2>

      <div className={styles.container}>
        <div className={styles.field}>
          <Ariakit.FormLabel name={form.names.email} className="sr-only">
            Email address
          </Ariakit.FormLabel>
          <Ariakit.FormInput name={form.names.email} placeholder="Email address" className={styles.input} required />
          <Ariakit.FormError name={form.names.email} className={styles.error} />
        </div>
        <Ariakit.FormSubmit className={styles.submit}>Get notified</Ariakit.FormSubmit>
      </div>
    </Ariakit.Form>
  );
}

export default Newsletter;
