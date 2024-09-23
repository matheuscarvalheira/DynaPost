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

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10)
  }

  async comparePasswords(password: string, hash: string) {
    return await bcrypt.compare(password, hash)
  }

  static verifyToken(token: string) {
    try {
      return jwt.verify(token, env.JWT_SECRET)
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error('Token expired')
      } else if (error instanceof jwt.JsonWebTokenError) {
        throw new Error('Invalid token')
      } else {
        throw new Error('Token verification failed')
      }
    }
  }

  constructor() {
    this.repository = appDataSource.getRepository(Authentication)
  }

  async authenticate(authentication: IAuthentication): Promise<object | null> {
    const { email, password } = authentication

    const user = await this.repository.findOne({
      where: { email },
    })

    if (!user) {
      throw new Error('usuário não registrado')
    }

    const verifiedPassword = await this.comparePasswords(
      password,
      user!.password,
    )

    if (!verifiedPassword) {
      throw new Error('e-mail ou senha inválidos')
    }

    const token = this.generateToken(user)

    return { error: false, token }
  }

  async register(authentication: IAuthentication): Promise<object | null> {
    const { email, password } = authentication

    const existingUser = await this.repository.findOne({ where: { email } })

    if (existingUser) {
      return { error: true, message: 'email já está registrado' }
    }

    const hashedPassword = await this.hashPassword(password)

    const newUser = {
      email,
      password: hashedPassword,
    }

    const savedUser = await this.repository.save(newUser)

    if (savedUser) {
      return { error: false, message: 'usuário criado com sucesso' }
    } else {
      return { error: true, message: 'usuário não foi criado' }
    }
  }
}
