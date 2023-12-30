import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dresseur from 'App/Models/Dresseur'
import { StoreValidator, UpdateValidator } from 'App/Validators/DresseurValidator'

export default class DresseursController {
  public async index({ response }: HttpContextContract) {
    const dresseurs = await Dresseur.all()

    return response.send(dresseurs)
  }

  public async store({ response, request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    console.log(data)
    const dresseur = await Dresseur.create(data)

    return response.send(dresseur)
  }

  public async update({ response, params, request }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const dresseur = await Dresseur.findOrFail(params.id)

    await dresseur.merge(data).save()
    return response.send(dresseur)
  }

  public async delete({ params, response }: HttpContextContract) {
    const dresseur = await Dresseur.findOrFail(params.id)

    await dresseur.delete()

    return response.send({
      message: 'Dresseur has been deleted',
      dresseur,
    })
  }
}
