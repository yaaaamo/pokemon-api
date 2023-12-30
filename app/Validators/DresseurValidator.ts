import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules } from '@adonisjs/validator/build/src/Rules'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    username: schema.string({}, [rules.unique({ table: 'dresseurs', column: 'username' })]),
    email: schema.string({}, [rules.unique({ table: 'dresseurs', column: 'email' })]),
  })

  public messages: CustomMessages = {}
}

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional(),
    username: schema.string.optional({}, [rules.unique({ table: 'dresseurs', column: 'username' })]),
    email: schema.string.optional({}, [rules.unique({ table: 'dresseurs', column: 'email' })]),
  })

  public messages: CustomMessages = {}
}

