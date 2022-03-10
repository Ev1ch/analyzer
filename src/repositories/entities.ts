import Api from 'api';
import { ApiRoutes } from 'common/enums';
import IEntity from 'domain/entity';

export const getEntity = (id: string): Promise<IEntity> =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ id }), 2000);
  });
