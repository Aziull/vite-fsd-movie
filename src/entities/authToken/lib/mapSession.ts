import { AuthTokenDto } from "../api/types";
import { AuthToken } from "../model/types";

export function mapAuthToken(authTokenDto: AuthTokenDto): AuthToken {
  return {
      token: authTokenDto.token,
  };
}