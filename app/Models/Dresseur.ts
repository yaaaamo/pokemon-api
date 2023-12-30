import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { randomUUID } from 'node:crypto'

export default class Dresseur extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async generateUuid(model: Dresseur) {
    model.id = randomUUID()
  }
}
