## Homework

Implements a React app that provides simple authentication. Users can view the public page, click Sign In button to enter username/password (guest/guest), and sign out to leave from protected page.

### Qualification/Requirement

#### Public/Protected Pages

- [x] Use react‑router to implement routes: /public , /protected
- [x] See an example at https://reacttraining.com/react‑router/web/example/auth‑workflow

#### Sign In Flow

- [x] Use redux‑saga to implement the sign in flow.
- [x] Write login flow using saga pattern with redux‑saga. Check out a tutorial at
      https://denny.qollie.com/2016/05/14/redux‑saga/

#### Form Validation

- [x] Both username and password are required fields.
- [x] The default username/password is guest/guest.
- [x] Use Material-ui[https://material-ui.com/zh/components/dialogs/] to implement the form.

#### Other

- [x] Cancel tasks in login flow https://denny.qollie.com/2016/05/14/redux‑saga/#Abortable‑flow‑compensatingtransaction
- [ ] Tests

### run demo locally

```sh
$ git clone https://github.com/marukohua/hw.git
$ cd hw
```

### npm

```
$ npm install
$ npm run start
```

open http://localhost:1234/
