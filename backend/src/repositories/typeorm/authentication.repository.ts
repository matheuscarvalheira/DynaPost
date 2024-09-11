import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { IAuthentication } from '@/entities/models/authentication.interface'
import { IAuthenticationRepository } from '../authentication.interface'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Authentication } from '@/entities/authentication.entity'
import { env } from '@/env'
import { Repository } from 'typeorm'

export class AuthenticationRepository implements IAuthenticationRepository {
  private repository: Repository<Authentication>

  generateToken(user: IAuthentication) {
    return jwt.sign(user, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN })
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, env.JWT_SECRET)
    } catch (error) {
      throw new Error('Invalid token')
    }
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10)
  }

  async comparePasswords(password: string, hash: string) {
    return await bcrypt.compare(password, hash)
  }

  constructor() {
    this.repository = appDataSource.getRepository(Authentication)
  }

  async authenticate(authentication: IAuthentication): Promise<string | null> {
    const { username, password } = authentication

    const user = await this.repository.findOne({
      where: { username },
    })

    const verifiedPassword = await this.comparePasswords(
      password,
      user!.password,
    )

    if (!user || !verifiedPassword) {
      throw new Error('Invalid username or password')
    }

    const token = this.generateToken(authentication)

    return token
  }

  async register(authentication: IAuthentication): Promise<IAuthentication> {
    const { username, password } = authentication

    const hashedPassword = await this.hashPassword(password)

    const newUser: IAuthentication = {
      username,
      password: hashedPassword,
    }

    return this.repository.save(newUser)
  }
}
