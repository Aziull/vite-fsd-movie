export type SessionUserId = 1

export type Session = {
  accessToken: string
  userId: SessionUserId
}

// TODO: FSD: Move user to entities/user/model/types.ts
export type User = {
  id: Id
  email: Email
}
