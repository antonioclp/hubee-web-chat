export default function Register(): JSX.Element {
  return (
    <main>
      <form>
        <section>
          <label htmlFor="username-input">Username</label>
          <input type="text" name="username" id="username-input" />
        </section>
        <section>
          <label htmlFor="nickname-input">Nickname</label>
          <input type="text" name="nickname" id="nickname-input" />
        </section>
        <section>
          <label htmlFor="email-input">Email</label>
          <input type="text" name="email" id="email-input" />
        </section>
        <section>
          <label htmlFor="password-input">Password</label>
          <input type="text" name="password" id="password-input" />
        </section>
        <section>
          <label htmlFor="confirm-input">Confirm password</label>
          <input type="text" name="verifyPassword" id="confirm-input" />
        </section>
        <section>
          <label htmlFor="birthday-input">Birthday</label>
          <input type="date" name="birthday" id="birthday-input" />
        </section>
        <section>
          <button type="submit">Sing up</button>
        </section>
      </form>
    </main>
  )
}
