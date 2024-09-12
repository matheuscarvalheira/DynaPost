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

  constructor() {
    this.repository = appDataSource.getRepository(Authentication)
  }

  async authenticate(authentication: IAuthentication): Promise<object | null> {
    const { email, password } = authentication

    const user = await this.repository.findOne({
      where: { email },
    })

    const verifiedPassword = await this.comparePasswords(
      password,
      user!.password,
    )

    if (!user || !verifiedPassword) {
      throw new Error('e-mail ou senha inválidos')
    }

    const token = this.generateToken(authentication)

    return { error: false, token }
  }

  async register(authentication: IAuthentication): Promise<object | null> {
    const { email, password } = authentication

    const hashedPassword = await this.hashPassword(password)

    const newUser = {
      email,
      password: hashedPassword,
    }

    const existingUser = await this.repository.findOne({ where: { email } })

    if (existingUser) {
      return { error: true, message: 'email já está registrado' }
    }

    const savedUser = await this.repository.save(newUser)

    if (savedUser) {
      return { error: false, message: 'usuário criado com sucesso' }
    } else {
      return { error: true, message: 'usuário não foi criado' }
    }
  }
}
