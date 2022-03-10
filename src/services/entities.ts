import IEntity from 'domain/entity';
import { EntitiesRepository } from 'repositories';

export async function getEntity(id: string): Promise<IEntity> {
  const entity = await EntitiesRepository.getEntity(id);
  return entity;
}
