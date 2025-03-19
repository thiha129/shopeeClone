import { User } from 'src/types/user.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

interface BodyUpdateProfile extends Omit<User, '_id' | 'roles' | 'createdAt' | 'updatedAt' | 'email'> {
  password?: string
  newPassword?: string
}

const userApi = {
  getProfile() {
    return http.get<SuccessResponse<User>>('me')
  },
  updateProfile(body: BodyUpdateProfile) {
    return http.put<SuccessResponse<User>>('me', body)
  },
  uploadAvatar(body: FormData) {
    return http.post<SuccessResponse<string>>('me/upload-avatar', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default userApi
