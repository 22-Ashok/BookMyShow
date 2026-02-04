## user route  (auth using otp based)
  - POST /auth/otp-generate   (send otp to gmail) starts timmer for 2 min
  - POST /auth/otp-validate   (if success send jwt and add user to db) 